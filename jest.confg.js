module.exports = {
    testRegex: "./*.test.js$",
    setupFilesAfterEnv: [
        "./jest.setup.js"
    ],
    // transformIgnorePatterns: ["./node-modules/mstrweb-search"],
    // transformIgnorePatterns: [
    //     '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
    //     '^.+\\.module\\.{css,sass,scss}$',
    // ],
    moduleNameMapper: {
        // '^.+\\.module\\.{css,sass,scss}$': 'identity-obj-proxy',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
}