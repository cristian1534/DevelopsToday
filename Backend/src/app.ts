import express from "express";
import cors from "cors";
import countryRoutes from "./routes/country.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/countries", countryRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
