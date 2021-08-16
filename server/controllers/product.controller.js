const {Product} = require("../models/product.model");

module.exports.createProject = (request, response) => {
  const { project, progress, due } = request.body;
  Product.create({
      project,
      progress,
      due
  })
      .then(person => response.json(person))
      .catch(err => response.status(400).json(err))
}
module.exports.getAllProjects = (request, response) => {
  Product.find({})
      .then(Products => response.json(Products))
      .catch(err => response.json(err))
}
module.exports.getProject = (request, response) => {
  Product.findOne({_id:request.params.id})
      .then(User => response.json(User))
      .catch(err => response.json(err))
}

module.exports.deleteProject = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
      .then(deleteData => response.json(deleteData))
      .catch(err => response.json(err))
}

module.exports.findByProgress = (request, response) => {
  Product.find({progress: request.params.p}).sort({due: -1})
    .then(project => response.json(project))
    .catch(err => response.json(err))
}
//changeComponent
module.exports.change =(request, response) => {
  Product.findOneAndUpdate({_id: request.params.id}, {progress:request.body.progress}, { runValidators: true })
    .then(updatedProject => response.json(updatedProject))
    .catch(err => response.status(400).json(err))
}
//last edit
module.exports.move =(request, response) => {
  Product.findOneAndUpdate({_id: request.params.id}, {progress:request.body.progress}, { runValidators: true })
    .then(updatedProject => response.json(updatedProject))
    .catch(err => response.status(400).json(err))
}

