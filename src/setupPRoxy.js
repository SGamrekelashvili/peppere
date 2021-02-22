const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        proxy("/time/2",{
            target:"http://gis.ge",
            secure:false,
            changeOrigin : true
        })
    )
}