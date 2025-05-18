module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    "http": require.resolve("stream-http"),
                    "https": require.resolve("https-browserify"),
                    "crypto": require.resolve("crypto-browserify"),
                    "stream": require.resolve("stream-browserify"),
                    "url": require.resolve("url/"),
                    "assert": require.resolve("assert/"),
                    "buffer": require.resolve("buffer/"),
                }
            }
        }
    }
}; 