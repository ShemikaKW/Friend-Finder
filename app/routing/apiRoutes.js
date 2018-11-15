var friends = require("../data/friends");




// ROUTES
function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var jsonDomPost = req.body;
        var bestFriendindex = " ";
        var bestFriendNum = 100;
        var userScores = jsonDomPost.scores;
        var difference = 0;

        //Logic to find match
        for (var i = 0; i < friends.length; i++){
            
            var currentFriendScores = friends[i].scores;
            difference = 0;

            for ( var j = 0; j < currentFriendScores.length; j++){
                var friendCurrentScore = currentFriendScores[j];
                var userCurrentScore = userScores[j];

                difference += Math.abs(parseInt(friendCurrentScore) - parseInt(userCurrentScore));
            }
            if (difference < bestFriendNum){
                bestFriendNum = difference;
                bestFriendIndex = i;
            }
        }

        friends.push(jsonDomPost);
        res.json(friends[bestFriendIndex]);
    });
}

module.exports = apiRoutes;