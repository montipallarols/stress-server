const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Quote = require("../models").quote;
const Emotion = require("../models").emotion;
const userEmotion = require("../models").userEmotion;
const User = require("../models").user;
const Comments = require("../models").comment;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const userEmos = await userEmotion.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Comments,
        },
      ],
      // order: [[User, "createdAt", "DESC"]],
    });
    res.status(200).send({ message: "ok", userEmos });
  } catch (error) {
    next(error);
  }
});

// So you can find specific emotion
// with specific quote
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "user id is not a number" });
  }

  const emotion = await Emotion.findByPk(id, {
    include: [Quote],
    order: [[Quote, "createdAt", "DESC"]],
  });

  if (emotion === null) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send({ message: "ok", emotion });
});

  // To get all quotes by id
  router.get("/:emotionId/quotes", async (req, res, next) => {
    try {
      const emotionId = parseInt(req.params.emotionId)
      const quotes = await Quote.findAll({ where: { emotionId: emotionId } });
      res.status(200).send({ message: "ok", quotes });
    } catch (error) {
      next(error);
    }
  });



module.exports = router;
