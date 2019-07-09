

let _cats = [{ name: "Felix", id: 0 }, { name: "Garfield", id: 1 }]

export default class CatsService {
  editCat(catId, body) {
    let index = _cats.findIndex(c => c.id == catId)
    _cats.splice(index, 1, body)
  }

  adoptCat(catId) {
    let index = _cats.findIndex(c => c.id == catId)
    _cats.splice(index, 1)
  }

  addCat(body) {
    let newCat = {
      id: _cats.length,
      name: body.name
    }
    _cats.push(newCat)
    return newCat
  }

  getAllCats() {
    return _cats
  }

  getCatById(id) {
    return _cats.find(c => c.id == id)
  }

}