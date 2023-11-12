const express = require("express");
const router = express.Router();
const db = require("../db/db");
const Sequelize = require('sequelize');

router.get("/showProducts", (req, res) => {
    db.product
        .findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}, 
            order: [
                ["id", "DESC"]
            ],
        })
    .then((products) => {
            res.status(200).json({ products: products });
        })
        .catch((err) => {
            res.status(502).json("bad req" + err);
        });
});

router.get("/showProduct/:id", (req, res) => {
    db.product.findOne({
            where: {
                id: req.params.id,
            },
        attributes: {exclude: ['createdAt', 'updatedAt']}, 
    }).then((product) => {
        res.status(200).json({ product: product });
    })
    .catch((err) => {
        res.json(err);
    });
})

router.put("/buyProduct/:id/:inventory", (req, res) => {
    const productId = req.params.id;
    const purchasedQuantity = req.params.inventory;

    db.product.update(
        { inventory: Sequelize.literal(`inventory - ${purchasedQuantity}`) },
        { where: { id: productId }, },
        
    )
    .then((result) => {
        if (result[0] === 1) {
            res.json({ message: "Inventory updated successfully" });
        } else {
            res.json({ message: "Product not found" });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });
});
module.exports = router;