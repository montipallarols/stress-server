const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Reflection = require("../models").reflection;
const Emotion = require("../models").userEmotion;

const router = new Router();

// So you can find all user emotions and all the users
router.get("/", async (req, res, next) => {
  try {
    const userEmotions = await Emotion.findAll({
      include: [User],
      order: [[User, "createdAt", "ASC"]],
    });
    res.status(200).send({ message: "ok", userEmotions });
  } catch (error) {
    next(error);
  }
});

// So you can search for a user by id
//with the reflections of that user
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (isNaN(parseInt(id))) {
    return res.status(400).send({ message: "user id is not a number" });
  }

  const user = await User.findByPk(id, {
    include: [Reflection],
    order: [[Reflection, "createdAt", "DESC"]],
  });

  if (user === null) {
    return res.status(404).send({ message: "User not found" });
  }

  res.status(200).send({ message: "ok", user });
});

// So you can create a user emotion
router.post("/:id", async (req, res, next) => {
  try {
    const userEmotions = await User.findByPk(req.params.id);
    console.log(userEmotions);

    const { level, description, needHelp, date } = req.body;
    if (!level || !needHelp || !date || !description) {
      return res
        .status(400)
        .send("Please make sure everything is filled in right.");
    }

    const newEmotion = await Emotion.create({
      level,
      description,
      needHelp,
      date,
      userId: userEmotions.id,
    });

    res
      .status(201)
      .send({ message: "Emotion created", ...newEmotion.dataValues });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
