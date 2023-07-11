const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv")
const connectDB = require('./config/db')
const event = require('./models/eventModel')
const aerialArchives = require('./models/aerialArchivesModel')
const User = require('./models/userModel')
const competition = require('./models/competitionModel')
const aerowhizz = require('./models/aerowhizzModel')

dotenv.config();
connectDB();

const app = express();



// Enable CORS for all routes
app.use(cors());
console.log('CORS middleware applied');

app.use(express.json())
app.use(express.static('public'));


  

  

app.post('/event/addEvent', express.json(), async(req, res) => {
    // Handle the POST request
    // Handle the received data
    try {

        const {eventName, eventDescription,imageLink,email,password} = req.body;
    
        const user = await User.findOne({email}) ;
        if(user && (await user.matchPassword(password))){
            
            if(!eventName){
                // res.status(400);
                throw new Error("Please enter event name");
            }
        
        
            const newEvent = await event.create({
                eventName,
                eventDescription,
                imageLink,
            });
        
            if(event){
                console.log("event added");
               
            }else{
                // res.status(400);
                throw new Error("Failed to create event");
            }
        }else{
            // res.status(401);
            throw new Error("Invalid Email or Password");
        }
        res.status(200).json({ message: 'Event created successfully' });
      } catch (error) {
        // If event creation fails
        res.status(200).json({ message: 'Failed to create event' });
      }


});

app.get("/event/accessEvents", async (req, res) => {
    try {
      const allEvents = await event.find(); // Retrieve all events from the "event" collection
      res.json(allEvents); // Send the events as a JSON response
    } catch (error) {
      res.status(500).json({ error: "Failed to access events" });
    }
  });

  app.post('/event/addCompetition', express.json(), async(req, res) => {
    // Handle the POST request
    // Handle the received data
    try {

        const {competitionName, competitionDescription,imageLink,email,password} = req.body;
    
        const user = await User.findOne({email}) ;
        if(user && (await user.matchPassword(password))){
            
            if(!competitionName){
                // res.status(400);
                throw new Error("Please enter event name");
            }
        
        
            const newCompetition = await competition.create({
                competitionName,
                competitionDescription,
                imageLink,
            });
        
            if(newCompetition){
                console.log("event added");
               
            }else{
                // res.status(400);
                throw new Error("Failed to create event");
            }
        }else{
            // res.status(401);
            throw new Error("Invalid Email or Password");
        }
        res.status(200).json({ message: 'Event created successfully' });
      } catch (error) {
        // If event creation fails
        res.status(200).json({ message: 'Failed to create event' });
      }


});

app.get("/event/accessCompetition", async (req, res) => {
    try {
      const allCompetitions = await competition.find(); // Retrieve all events from the "event" collection
      res.json(allCompetitions); // Send the events as a JSON response
    } catch (error) {
      res.status(500).json({ error: "Failed to access events" });
    }
  });

app.post('/initiatives/addAerialArchivesPost', express.json(), async(req, res) => {
    // Handle the POST request
    // Handle the received data

    try {

        const {imageLinks,email,password} = req.body;
    
        const user = await User.findOne({email}) ;
        if(user && (await user.matchPassword(password))){
        
            if(!imageLinks){
                throw new Error("Please enter post");
            }
        
        
            const newPost = await aerialArchives.create({
                postImagesLinks:imageLinks
            });
        
            if(!newPost){
                throw new Error("Failed to create post");
            }
            
            
        }else{
            // res.status(401);
            throw new Error("Invalid Email or Password");
        }
        res.status(200).json({ message: 'Post created successfully' });
      } catch (error) {
        // If event creation fails
        res.status(200).json({ message:"Failed to create post"});
      }

    // console.log(req.body);

});

app.get("/initiatives/accessAerialArchivesPost", async (req, res) => {
    try {
      const allPosts = await aerialArchives.find(); // Retrieve all events from the "event" collection
      res.json(allPosts); // Send the events as a JSON response
    } catch (error) {
      res.status(500).json({ error: "Failed to access posts" });
    }
  });
app.post('/initiatives/addAerowhizz', express.json(), async(req, res) => {
    // Handle the POST request
    // Handle the received data

    try {

        const {imageLinks,email,password} = req.body;
    
        const user = await User.findOne({email}) ;
        if(user && (await user.matchPassword(password))){
        
            if(!imageLinks){
                throw new Error("Please enter post");
            }
        
        
            const newPost = await aerowhizz.create({
                postImagesLinks:imageLinks
            });
        
            if(!newPost){
                throw new Error("Failed to create post");
            }
            
            
        }else{
            // res.status(401);
            throw new Error("Invalid Email or Password");
        }
        res.status(200).json({ message: 'Post created successfully' });
      } catch (error) {
        // If event creation fails
        res.status(200).json({ message:"Failed to create post"});
      }

    // console.log(req.body);

});

app.get("/initiatives/accessaerowhizz", async (req, res) => {
    try {
      const allPosts = await aerowhizz.find(); // Retrieve all events from the "event" collection
      res.json(allPosts); // Send the events as a JSON response
    } catch (error) {
      res.status(500).json({ error: "Failed to access posts" });
    }
  });

  app.options('/event/addEvent', cors());
  app.options('/initiatives/addAerialArchivesPost', cors());



const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,console.log(`server started on port : ${PORT}`));
