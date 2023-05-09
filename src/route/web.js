import expess from "express";

let router = expess.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send('Hello world dothanhtruc')
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;