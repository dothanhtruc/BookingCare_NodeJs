import expess from "express";
import homeController from "../controllers/homeController";

let router = expess.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);



    return app.use("/", router);
}

module.exports = initWebRoutes;