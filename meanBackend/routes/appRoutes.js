var express = require('express');
var router = express.Router();
var Country = require('../models/dataSchema'); //we're importing dataschema file here

router.post('/create', (req,res,next) => {
    var newCountry = new Country({
        name: req.body.name,
        capital: req.body.capital
    });
    newCountry.save((err,country)=>{
        if(err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: country });
    })
    // res.status(200).json({ msg: 'Post request is working' });
});

router.get('/read', (req,res,next) => {
    Country.find({}, (err,countries) =>{
        if(err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: countries });
    })
    // res.status(200).json({ msg: 'get request is working' });
});

router.put('/update', (req,res,next) => {
    Country.findById(req.body._id, (err, country) =>{
        if(err)
            res.status(500).json({ errmsg: err });
        country.name = req.body.name;
        country.capital = req.body.capital;
        country.save((err, country) => {
            if(err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: country });
        })
    })
    // res.status(200).json({ msg: 'Put request is working' });
});

router.delete('/delete/:id', (req,res,next) => {
    Country.findOneAndRemove({ _id: req.params.id }, (err, country) => {
        if(err)
                res.status(500).json({ errmsg: err });
            res.status(200).json({ msg: country });
    })
    // res.status(200).json({ msg: 'Delete request is working' });
});

module.exports = router;