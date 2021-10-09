const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 3000,
        historyApiFallback: true,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react", "@babel/preset-typescript"],
                },
            },
            {
                test: /\.(ts|tsx)$/,
                options: { allowTsInNodeModules: true },
                loader: "ts-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg|json)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            filename: './index.html',
            favicon: './public/favicon.ico',
            manifest: "./public/manifest.json",
        }),
    ],
};