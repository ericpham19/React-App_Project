const {createProxyMiddleWare} = require ('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        '/users',
        createProxyMiddleWare({
            target: 'http://localhost:3000/users',
            changeOrigin: true,
            pathRewrite: {
                '^/users': '/',
            },
        })
    )
    app.use(
        '/coingecko',
        createProxyMiddleWare({
            target: 'http://api.coingecko.com/api/v3',
            changeOrigin:true,
            pathRewrite: {
                '^/coingecko': '/',
            },
        })
    );
    };


