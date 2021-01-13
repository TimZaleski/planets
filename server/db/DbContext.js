import mongoose from "mongoose";
import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import PlanetSchema from "../models/Planet";
import MoonSchema from "../models/Moon";
import SpeciesSchema from "../models/Species";

class DbContext {
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
  Stars = mongoose.model("Star", StarSchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Moons = mongoose.model("Moon", MoonSchema);
  Species = mongoose.model("Species", SpeciesSchema);
}

export const dbContext = new DbContext();
