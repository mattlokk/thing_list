const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

//GET api/items
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => res.json(item));
});

//GET api/items
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

//POST api/items
router.post('/', (req, res) => {
    const newItem = new Item({ 
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//PATCH api/items
router.patch('/:id', (req, res) => {
    Item.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true}, 
        (err, todo) => {    
            if (err) return res.status(500).send(err);
            return res.send(todo);
        })
        
});

//PATCH api/items
// router.patch('/:id', (req, res) => {
//     Item.findById(req.params.id)
//         .then(item => {
//             item.name = req.body.name;
//             item.save()
//                 .then(() => res.json({success: true}));
//         })
//         .catch(err => res.status(404).json({success: false}));
// });


//2 ways to delete: 

//DELETE api/items
// router.delete('/:id', (req, res) => {
//     Item.findByIdAndRemove(req.params.id)
//         .then(() => res.json({success: true}))
//         .catch(err => res.status(404).json({success: false}));
// });

//DELETE api/items
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;