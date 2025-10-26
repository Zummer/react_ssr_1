export const fileLoader = () => {
    return {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    outputPath: "images",
                },
            },
            {
                loader: "image-webpack-loader",
                options: {
                    webp: {
                        quality: 75,
                    },
                },
            },
        ],
    };
};
