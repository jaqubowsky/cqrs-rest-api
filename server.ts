import dotenv from "dotenv";
import { app } from "./src/index";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
