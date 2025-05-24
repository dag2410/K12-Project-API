require("module-alias/register");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const router = require("@/routes/api");

const adminRouter = require("@/routes/admin");
const notFoundHandler = require("@/middleware/notFoundHandler");
const handleErrors = require("@/middleware/handleErrors");
const handleSidebar = require("@/middleware/admin/handleSidebar");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// View engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.set("layout", "./admin/layout/default");

app.use("/admin", handleSidebar, adminRouter);
app.use("/api/v1", router);

app.use(notFoundHandler);
app.use(handleErrors);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
