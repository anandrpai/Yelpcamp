var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "https://farm5.staticflickr.com/4133/5029462010_d9b14aec86.jpg",
            description: "Peace amidst the peaks of the Andes"
        },
        {
            name: "Rustboro Caves",
            image: "https://farm6.staticflickr.com/5214/5419362156_3569690a68.jpg",
            description: "Trek through the hot desert and camp inside the ancient caves."
        },
        {
            name: "Castle Black",
            image: "https://farm3.staticflickr.com/2159/2310340579_a616f97dfa.jpg",
            description: "Only for the bravehearts. This place will chill you to the bones!"
        }
    ];


function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("Added a campground");
                //create a comment
                Comment.create(
                    {
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
            }
            });
        });
    });
}

module.exports = seedDB;