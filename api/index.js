import express from "express";

const app = express();

app.listen(2000, () => {
    console.log(`server is running on port 2000`);
});