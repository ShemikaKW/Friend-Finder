var friends = require("../data/friends");

// ROUTES
function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var jsonDomPost = req.body;
        console.log(jsonDomPost);
        friends.push(jsonDomPost);
        res.json(jsonDomPost);
    });
}

module.exports = apiRoutes;