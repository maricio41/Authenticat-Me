const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review, BizPhoto, Category, Business } = require("../../db/models/");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const businesses = await Business.findAll({
      include: [Review, BizPhoto, Category],
    });
    return res.json(businesses);
  })
);

module.exports = router;
