import { Router } from 'express';
import { CountryController } from '../controllers/country.ctrl';

const router = Router();
const countryController = new CountryController();

router.get("/", countryController.getAllCountries);
router.get("/:code", countryController.getCountryById);

export default router;