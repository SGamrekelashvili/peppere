const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        proxy("/time/2",{
            target:"https://gis.ge",
            changeOrigin : true
        })
    )
}