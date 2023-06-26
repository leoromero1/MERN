import app from "./src/app.js";
import connectDB from "./src/config/db.js";
const PORT = 4000;


app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
connectDB()
