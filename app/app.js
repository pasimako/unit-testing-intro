import express from "express";

const DEFAULT_COLORS = ["RED", "GREEN", "BLUE"];

const app = express();

app.use(express.json());

/**
 * Array holding color values
 */
const colors = [...DEFAULT_COLORS];

/**
 * Returns a list of colors
 * Response body (JSON): {results: [....]}
 */
app.get("/colors", (req, res, next) => {
  res.json({
    results: colors
  });
});

/**
 * Inserts new color in the "colors" array
 * Request body (JSON): {color: ...}
 */
app.post("/colors", (req, res, next) => {
  if (req.is("application/json") && typeof req.body.color === "string") {
    const color = req.body.color.trim().toUpperCase();

    if (color && !colors.includes(color)) {
      colors.push(color);

      // 201 Created
      res.status(201).send({
        results: colors
      });

      return;
    }
  }

  res.status(400).send(); // 400 Bad Request
});

/**
 * Export our Express app
 */
export default app;
