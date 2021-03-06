const { Router } = require("express");
const Museum = require("./model");
const router = new Router();

router.get("/museums", (_req, res, next) => {
  console.log("we have get request");
  Museum.findAll()
    .then(museums => res.send(museums))
    .catch(err => next(err));
});

// router.post("/products", (req, res, next) => {
//   Product.create(req.body)
//     .then(console.log(req.body))
//     .then(product => res.json(product))
//     .catch(err => next(err));
// });

router.get("/museums/:museumId", (req, res, next) => {
  Museum.findByPk(req.params.museumId)
    .then(museum => {
      if (!museum) {
        res.status(404).end();
      } else {
        res.json(museum);
      }
    })
    .catch(err => next(err));
});

// router.put("/products/:productId", (req, res, next) => {
//   Product.findByPk(req.params.productId)
//     .then(product => {
//       if (product) {
//         product.update(req.body).then(product => res.json(product));
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => next(err));
// });

module.exports = router;
