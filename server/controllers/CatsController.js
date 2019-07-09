import express from 'express'
import CatsService from '../services/CatsService';

let _catsService = new CatsService()

export default class CatsController {
  constructor() {
    this.router = express.Router()
      //NOTE  the name is a request method, the first argument is the url on the first get it is blank as it has already been filled in from main.js (so it is /api/cats to this point), second will be the function to use.
      .get('', this.getAllCats)
      .get('/:catId', this.getCatById)
      .post('', this.addCat)
      .delete('/:catId', this.adoptCat)
      .put('/:catId', this.editCat)
  }

  getAllCats(req, res, next) {
    let cats = _catsService.getAllCats()
    return res.send(cats)
  }

  getCatById(req, res, next) {
    let cat = _catsService.getCatById(req.params.catId)
    if (!cat) {
      res.status(400).send("No cat by that id here")
    }
    res.send(cat)
  }

  addCat(req, res, next) {
    let newCat = _catsService.addCat(req.body)
    res.send(newCat)
  }

  adoptCat(req, res, next) {
    _catsService.adoptCat(req.params.catId)
    res.send("Adopted Cat")
  }

  editCat(req, res, next) {
    _catsService.editCat(req.params.catId, req.body)
    res.send("updated cat!")
  }

}