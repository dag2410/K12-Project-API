const express = require("express");
const { readDb, writeDb } = require("../utils/file");
const router = express.Router();

const RESOURCE = "comments";

const comments = [];

writeDb("comments", [{ id: 1, content: "binh luan bai blog" }]);

//Get ALL
router.get("/", async (req, res) => {
  const comments = await readDb(RESOURCE);
  res.json({
    status: "success",
    data: comments,
  });
});

//GET /comments/:id
router.get("/:id", async (req, res) => {
  const comments = await readDb(RESOURCE);
  const comment = comments.find((item) => item.id === +req.params.id);

  if (!comment) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  res.json({
    status: "success",
    data: comment,
  });
});

let uniId = 0;
// POST /comments
router.post("/", async (req, res) => {
  const comments = await readDb(RESOURCE);
  const newComment = {
    id: (comments[comments.length - 1].id ?? 0) + 1,
    content: req.body.content,
  };

  comments.push(newComment);
  await writeDb(RESOURCE, comments);

  res.json({
    status: "success",
    data: newComment,
  });
});

// PUT/comments
router.put("/:id", async (req, res) => {
  const comments = await readDb(RESOURCE);
  const comment = comments.find((comment) => comment.id === +req.params.id);

  if (!comment) {
    res.json({
      status: "error",
      message: "Resource not found",
    });
    return;
  }
  console.log(comment);
  comment.content = req.body.content;

  await writeDb(RESOURCE, comments);

  res.json({
    status: "success",
    data: comment,
  });
});

// DELETE /comments

router.delete("/:id", async (req, res) => {
  const comments = await readDb(RESOURCE);
  const index = comments.findIndex((comment) => comment.id === +req.params.id);

  if (index === -1) {
    res.json({
      status: "error",
      message: "Resource not found",
    });

    return;
  }
  comments.splice(index, 1);
  await writeDb(RESOURCE, comments);

  res.status(204).send();
});

module.exports = router;
