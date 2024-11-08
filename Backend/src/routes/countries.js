import { Router } from "express";
import { countryAvailableController, countryInfoController } from "../controllers/countryControllers.js";

const router = Router();

router.get("/countries", countryAvailableController);
router.get("/countries/:countryCode", countryInfoController)

export default router;
