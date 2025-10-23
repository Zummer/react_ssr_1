export const tsLoader = () => {
    return {
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                // options: {
                //     transpileOnly: true,
                // }
            }
        ],
        exclude: /node_modules/,
    };
}
