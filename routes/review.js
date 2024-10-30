const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const reviewController = require("../controllers/reviews.js");

const {
  validateReview,
  isLoggedIn,
  isReveiwAuthor,
} = require("../middleware.js");

//postroutes
router.post("/", isLoggedIn, validateReview, reviewController.createReview);

//Delete Review Route

router.delete("/:reviewId", isReveiwAuthor);

module.exports = router;
