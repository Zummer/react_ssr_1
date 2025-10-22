import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

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

    const config: webpack.Configuration = {
        mode,
        target: "web",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "build/static/js"),
            clean: true,
            // publicPath: '/',
        },
        devtool: isDev ? 'inline-source-map' : 'source-map',
        devServer: isDev ? {
            port: env.port ?? 3000,
            open: true
        } : undefined,
    };

    return config;
};
