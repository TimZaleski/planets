import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";


export class MoonsController extends BaseController {
  constructor() {
    super("api/moons")
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById) // any parameters identified with a ':' are added to req.params
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      // req.query gets added by BP 
      // We wrote moon service, so its our method
      let data = await moonsService.find(req.query)
      // get alls / routes that are pointing to a collection should return an array of that type
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      // ID comes from the name in the route after the ':'
      let data = await moonsService.findById(req.params.id)
      // get by id returns a single object
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await moonsService.create(req.body)
      res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      // first ignore the id from the body if there is one, or add the id from parameters
      req.body.id = req.params.id
      let data = await moonsService.edit(req.body)

      // PUT should return a single object after it was edited
      res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await moonsService.delete(req.params.id)
      res.send("deleted");
    } catch (error) {
      next(error)
    }
  }

}