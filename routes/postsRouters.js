const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController");
//index
router.get("/", postsController.index);

//show
router.get("/:id", postsController.show);

//destroy
router.delete("/:id", postsController.destroy);

//store
router.post("/", postsController.store);

//update
router.put("/:id", postsController.update);
module.exports = router;
