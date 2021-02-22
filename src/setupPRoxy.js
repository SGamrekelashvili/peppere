const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        proxy("/time/2",{
            target:"http://46.101.137.243",
            secure:false,
            changeOrigin : true
        })
    )
}