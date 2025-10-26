import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const styleLoader = () => {
    return {
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
    }
}