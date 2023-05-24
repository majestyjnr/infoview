
const express = require('express')
const router = new express()

router.get('/', (req, res)=>{
    res.render('../views/index.ejs')
})

module.exports = router