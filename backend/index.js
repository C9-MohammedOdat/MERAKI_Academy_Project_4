const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const app = express();
const PORT = process.env.PORT || 5000;
const usersRouter =require("./routes/users")
const rolesrouter =require("./routes/roles")
const categoriesRouter=require("./routes/categories")
app.use(cors());
app.use(express.json());
app.use("/users",usersRouter)
app.use("/roles",rolesrouter)
app.use("/categories",categoriesRouter)
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
