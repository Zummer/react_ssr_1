import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import AppSSR from "./src/Components/AppSSR";
import express from "express";
import fs from "fs";

const app = express();
const port = 3009;

const bootstrapScripts = [];
const bootstrapCSS = [];
const staticPathRoot = "static";

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

app.get('/', (req, res) => {
  res.socket.on("error", (error) => console.log("Fatal error occured", error));

  let didError = false;

  const stream = ReactDOMServer.renderToPipeableStream(
    <AppSSR bootstrapCSS={bootstrapCSS} />,
    {
      bootstrapScripts,
      onAllReady: () => {
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        stream.pipe(res);
      },
      onError: (error) => {
        didError = true;
        console.log("Error", error);
      },
    }
  );
});

app.use(
  "/static",
  express.static(__dirname + "/static")
);

app.listen(port, () => {
    console.log(`Application started on port ${port}`);
})
