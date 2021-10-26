const router = require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json('Home')
})

const companiesRoute = require('./companies')

router.use('/companies',companiesRoute)

module.exports = router