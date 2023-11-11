const express = require("express");
const router = express.Router();
const db = require("../db/db");
const Sequelize = require('sequelize');

router.post("/buyProduct/:nameProduct/:purchasedQuantity/:price/:totalPurchase", (req, res) => {
    const nameProduct = req.params.nameProduct;
    const purchasedQuantity = req.params.purchasedQuantity;
    const price = req.params.price;
    const totalPurchase = req.params.totalPurchase;

    db.productBuy.create(
        {
            name: nameProduct,
            quantity: purchasedQuantity,
            price: price,
            totalPrice: totalPurchase,
        }
    ).then((result) => {
        if (result[0] === 1) {
            res.json({ message: "ticket create succefully" });
        } else {
            res.json({ message: "no ticket done" });
        }
    })
    .catch(err => {
        res.status(500).json({ error: err.message });
    });

});
module.exports = router;