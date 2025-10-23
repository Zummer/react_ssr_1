import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import { svgLoader } from "./config/loaders/svgLoader";
import { tsLoader } from "./config/loaders/tsLoader";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
        mode,
        target: "web",
        entry: {
            main: path.resolve(__dirname, "src", "index.tsx"),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash].css",
                chunkFilename: "css/[name].[contenthash].css",
            }),
            new ForkTsCheckerWebpackPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images'
                            }
                        },
                    ],
                },
                {
                    test: /\.(less|css)$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: "[name]__[local]___[hash:base64:5]",
                                namedExport: false,
                                },	
                            }
                        },
                        "less-loader",
                    ],
                },
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
            // publicPath: '/',
        },
        devtool: isDev ? 'inline-source-map' : 'source-map',
        devServer: {
            port: env.port ?? 3000,
            open: true
        },
    };

    const serverConfig: webpack.Configuration = {
        mode,
        target: "node",
        entry: {
            server: path.resolve(__dirname, "bootstrap.ts"),
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css",
                chunkFilename: "[name].[contenthash].css",
            }),
            new ForkTsCheckerWebpackPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'images'
                            }
                        },
                    ],
                },
                {
                    test: /\.(less|css)$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: "[name]__[local]___[hash:base64:5]",
                                namedExport: false,
                                },	
                            }
                        },
                        "less-loader",
                    ],
                },
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
            // clean: true,
            // publicPath: '/'
        },
        devtool: isDev ? 'inline-source-map' : 'source-map',
    };

    return [clientConfig, serverConfig];
};
