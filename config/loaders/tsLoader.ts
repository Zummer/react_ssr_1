export const tsLoader = () => {
    return {
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
            }
        ],
        exclude: /node_modules/,
    };
}
