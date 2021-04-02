const express = require("express");
const asyncHandler = require("express-async-handler");
const { Review, User, Business } = require("../../db/models");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const reviews = await Review.findAll({
      include: [User, Business],
    });
    res.json(reviews);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { content, rating, userId, businessId } = req.body;
    const review = await Review.create({
      content,
      rating,
      userId,
      businessId,
    });
    res.json(review);
  })
);

module.exports = router;
