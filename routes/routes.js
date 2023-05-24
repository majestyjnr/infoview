
const express = require('express')
const router = new express()

// Index route
router.get('/', (req, res)=>{
    res.render('../views/index.ejs')
})

module.exports = router