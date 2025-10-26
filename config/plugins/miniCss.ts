import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const miniCss = () => {
    return new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[contenthash].css",
    });
}