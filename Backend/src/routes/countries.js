import { Router } from "express";
import {
  countryAvailableController,
  countryInfoController,
  countryPopulationController,
  countryBorderController,
} from "../controllers/countryControllers.js";

const router = Router();

router.get("/countries", countryAvailableController);
router.get("/countries/:countryCode", countryInfoController);
router.get("/countries/population/:countryCode", countryPopulationController);
router.get("/countries/borders/:countryCode", countryBorderController);

export default router;
