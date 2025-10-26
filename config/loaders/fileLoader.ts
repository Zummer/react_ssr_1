export const fileLoader = () => {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                }
            },
        ],
    }
}
