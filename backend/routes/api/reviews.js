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
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const reviews = await Review.findAll({
      where: {
        userId,
      },
      include: Business,
    });
    res.json(reviews);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { content, rating, userId, businessId } = req.body;
    await Review.create({
      content,
      rating,
      userId,
      businessId,
    });
    const userReviews = await Review.findAll({
      where: {
        userId,
      },
      include: Business,
    });
    res.json(userReviews);
  })
);
router.delete(
  "/",
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.body.reviewId, 10);
    const review = await Review.findByPk(reviewId);

    await review.destroy();
    res.json({ message: "Success" });
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id, {
      include: [User, Business],
    });
    return res.json(review);
  })
);

module.exports = router;
