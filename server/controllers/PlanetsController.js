import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById) // any parameters identified with a ':' are added to req.params
      .get("/:id/moons", this.getMoons)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      // req.query gets added by BP 
      // We wrote planet service, so its our method
      let data = await planetsService.find(req.query)
      // get alls / routes that are pointing to a collection should return an array of that type
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      // ID comes from the name in the route after the ':'
      let data = await planetsService.findById(req.params.id)
      // get by id returns a single object
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getMoons(req, res, next) {
    try {
      // what collection is being returned..... moons
      // find me all the moons where the 'planet' property has a value of 'id'
      let data = await moonsService.find({ planet: req.params.id })
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await planetsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      // first ignore the id from the body if there is one, or add the id from parameters
      req.body.id = req.params.id
      let data = await planetsService.edit(req.body)

      // PUT should return a single object after it was edited
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await planetsService.delete(req.params.id)
      res.send("deleted");
    } catch (error) {
      next(error)
    }
  }

}