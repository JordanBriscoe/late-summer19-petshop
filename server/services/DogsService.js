
let _dogs = [
    { name: 'Riley', id: 0, type: 'Australian  Shephard', color: 'blue merle'}, 
    { name: 'Sam', id: 1, type: 'Yorkie', color: 'black and brown'}, 
    { name: 'Pongo', id: 2, type: 'Dalmation', color: 'white with black spots'}]

export default class DogsService {
    editDog(catId, body) {
        let index = _dogs.findIndex(d => d.id == dogId)
        _dogs.splice(index, 1, body)
    }

    adoptDog(dogId) {
        let index = _dogs.findIndex(d => d.id == dogId)
        _dogs.splice(index, 1)
    }

    addDog(body) {
        let newDog = {
            name: body.name,
            id: _dogs.length,
            type: body.type,
            color: body.color
        }
        _dogs.push(newDog)
        return newDog
    }

    getAllDogs() {
        return _dogs
    }

    getDogById(id) {
        return _dogs.find(d => d.id == id)
    }
}