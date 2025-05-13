
// Basic Express server with placeholder routes
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("J GROUPS Backend Running"));

const endpoints = [
    "apply-pan",
    "update-aadhaar",
    "apply-voter",
    "get-passport-form",
    "apply-certificate",
    "get-result",
    "download-admit-card"
];

endpoints.forEach((route) => {
    app.post(`/${route}`, (req, res) => {
        res.json({
            success: true,
            route: route,
            message: `Simulated automation for ${route}`,
            data: req.body || {}
        });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
