import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import path from 'path';

import ReactDOMServer from 'react-dom/server';
import AppSSR from "./client/src/Components/AppSSR";
import fs from "fs";

const ABORT_DELAY = 10000;

const app = new Koa();

const bootstrapScripts = [];
const bootstrapCSS = [];
const staticPathRoot = "client/build/static";

const ReadDirectoryContentToArray = (folderPath, array) => {
  fs.readdir(path.join(__dirname, folderPath), (err, files) => {
    if (err) {
      return console.log(`Unable to scan this folder: ${folderPath}`);
    }

    files.forEach((fileName) => {
      if (
        (fileName.startsWith("main.") && fileName.endsWith(".js")) ||
        fileName.endsWith(".css")
      ) {
        array.push(`${folderPath}/${fileName}`);
      }
    });
  });
};

ReadDirectoryContentToArray(`${staticPathRoot}/js`, bootstrapScripts);
ReadDirectoryContentToArray(`${staticPathRoot}/css`, bootstrapCSS);

app.use(serve(__dirname, '/client/build/static'));

const router = new Router();

async function render(ctx: Koa.Context) {
  let didError = false;

  /**
   * NOTE: use promise to force koa waiting for streaming.
   */
  return new Promise((_resolve, reject) => {
    const stream = ReactDOMServer.renderToPipeableStream(
          <AppSSR bootstrapCSS={[]}/>,
      {
        bootstrapScripts,
        onShellReady() {
          ctx.respond = false;
          ctx.res.statusCode = didError ? 500 : 200;
          ctx.response.set('content-type', 'text/html');

          stream.pipe(ctx.res);
        },
        onError() {
          didError = true;
          reject();
        },
      },
    );
    setTimeout(() => {
      stream.abort();
      reject();
    }, ABORT_DELAY);
  });
}

router.get(/(.*)/, async (ctx) => {
  await render(ctx);
});

app.use(router.routes());

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`🚀 Koa server is running at http://localhost:${port}`);
});
