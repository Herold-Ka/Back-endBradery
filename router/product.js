const express = require("express");
const router = express.Router();
const db = require("../db/db");

router.get("/showProducts", (req, res) => {
    db.product
        .findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}, 
            order: [
                ["id", "DESC"]
            ],
        })
    .then((product) => {
            res.status(200).json({ product: product });
        })
        .catch((err) => {
            res.status(502).json("bad req" + err);
        });
});

router.get("/showProduct/:id", (req, res) => {
    db.product.findOne({
        where: { 
            where: {
                id: req.params.id,
            },
        },
        attributes: {exclude: ['createdAt', 'updatedAt']}, 
    }).then((product) => {
        res.status(200).json({ product: product });
    })
    .catch((err) => {
        res.json(err);
    });
})
module.exports = router;