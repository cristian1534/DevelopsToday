import { Router } from "express";
import { countryController } from "../controllers/countryControllers.js";

const router = Router();

router.get("/countries", countryController);

export default router;
