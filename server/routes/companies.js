const companiesRoute = require('express').Router()
const companiesController = require('../controllers/companiesController')

companiesRoute.get('/',companiesController.show)
companiesRoute.get('/byMember',companiesController.showByMember)
companiesRoute.get('/byUpdate',companiesController.showByUpdate)
companiesRoute.post('/create',companiesController.add)
companiesRoute.put('/:id/update',companiesController.update)
companiesRoute.delete('/:id/delete',companiesController.delete)


module.exports = companiesRoute