import { Router } from "express";
import {
  countryAvailableController,
  countryInfoController,
  countryPopulationController,
  countryBorderController,
  countryFlagsController,
} from "../controllers/countryControllers.js";

const router = Router();

router.get("/countries", countryAvailableController);
router.get("/countries/:countryCode", countryInfoController);
router.get("/countries/population/:countryCode", countryPopulationController);
router.get("/countries/borders/:countryCode", countryBorderController);
router.get("/countries/flags/images", countryFlagsController);


export default router;
