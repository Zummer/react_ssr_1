import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { svgLoader, tsLoader, styleLoader, fileLoader } from "./config/loaders";
import { miniCss } from "./config/plugins/miniCss";
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

type TMode = 'production' | 'development';

interface IEnvVariables {
    mode: TMode;
    port: number;
}

export default (env: IEnvVariables) => {
    const mode = env.mode ?? "development";
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    console.log('env', env);

    const clientConfig: webpack.Configuration = {
        stats: 'verbose',
        mode,
        target: "web",
        entry: {
            main: path.resolve(__dirname, "src", "index.tsx"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
            miniCss(),
            new ForkTsCheckerWebpackPlugin(),
        ],
        module: {
            rules: [
                fileLoader(),
                styleLoader(),
                tsLoader(),
                svgLoader(),
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                '@': path.resolve(__dirname, "src"),
            },
        },
        output: {
            filename: "js/[name].[contenthash].js",
            path: path.resolve(__dirname, "build/static"),
            clean: true,
            publicPath: '/',
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: {
            port: env.port ?? 3000,
            open: true
        },
    };

    const serverConfig: webpack.Configuration = {
        stats: 'verbose',
        mode,
        target: "node",
        entry: {
            server: path.resolve(__dirname, "bootstrap.ts"),
        },
        plugins: [
            miniCss(),
            new ForkTsCheckerWebpackPlugin(),
        ],
        module: {
            rules: [
                fileLoader(),
                styleLoader(),
                tsLoader(),
                svgLoader(),
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                '@': path.resolve(__dirname, "src"),
            },
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "build"),
            clean: false,
            publicPath: '/'
        },
        devtool: isDev ? 'inline-source-map' : undefined,
    };

    return [clientConfig, serverConfig];
};
