import express from 'express'
import DogsService from "../services/DogsService";

let _dogsService = new DogsService()

export default class DogsController {
    constructor() {
        this.router = express.Router()
        .get('', this.getAllDogs)
        .get ('/:dogId', this.getDogById)
        .post('', this.addDog)
        .delete('/:dogId', this.adoptDog)
        .put('/dogId', this.editDog)
    }

    getAllDogs(req, res, next) {
        let dogs = _dogsService.getAllDogs()
        return res.send(dogs)
    }

    getDogById(req, res, next) {
        let dog = _dogsService.getDogById(req.params.getDogById)
        if(!dog) {
            res.status(400).send("This dog ID doesn't exist!")
        }
        res.send(dog)
    }

    addDog(req, res, next) {
        let newDog = _dogsService.addDog(req.body)
        res.send(newDog)
    }

    adoptDog(req, res, next) {
    _dogsService.adoptDog(req.params.dogId)
    res.send("Dog was adopted!")
    }

    editDog(req,res, next) {
        _dogsService.editDog(reqw.params.dogId, req.body)
        res.send("Dog successfully changed!")
    }

}