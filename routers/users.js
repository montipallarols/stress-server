const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Reflection = require("../models").reflection;
const userEmotion = require("../models").userEmotion;

const router = new Router();

// So you can find all user emotions and all the users
router.get("/", async (req, res, next) => {
  try {
    const userEmos = await userEmotion.findAll({
      include: [User],
      order: [[User, "createdAt", "ASC"]],
    });
    res.status(200).send({ message: "ok", userEmos });
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
    const userId = parseInt(req.params.userId);


    const { level, description, needHelp, date } = req.body;
    if (!level || !needHelp || !date || !description) {
      return res
        .status(400)
        .send("Please make sure everything is filled in right.");
    }

    const newEmotion = await userEmotion.create({
      level,
      description,
      needHelp,
      date,
      userId,
    });

    res
      .status(201)
      .send({ message: "Emotion created", ...newEmotion.dataValues });
  } catch (error) {
    next(error);
  }
});

// To create a new reflection
router.post("/reflections/:userId", authMiddleware, async (req, res, next) => {
  const userId = parseInt(req.params.userId);
  const { date, problem, solution, score } = req.body;
  if (!date || !problem || !solution || !score ) {
    return res.status(400).send("There is some missing info!");
  }
  try {
    const newReflection = await Reflection.create({
      date,
      problem,
      solution,
      score,
      userId
    })
    res.json(newReflection)
  } catch(e) {
    console.log("What is the ERROR?", e)
    next(e);
  }
}) 

module.exports = router;
