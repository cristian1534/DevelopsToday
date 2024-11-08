import express from "express";
import cors from "cors";
import countryRoutes from "./src/routes/countries.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use("/api", countryRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
