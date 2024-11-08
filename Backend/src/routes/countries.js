import { Router } from "express";
import {
  countryAvailableController,
  countryInfoController,
  countryPopulationController,
} from "../controllers/countryControllers.js";

const router = Router();

router.get("/countries", countryAvailableController);
router.get("/countries/:countryCode", countryInfoController);
router.get("/countries/population/:countryCode", countryPopulationController);

export default router;
