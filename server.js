// Express to build the server.
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 4001;

// Set up a route that returns hello world
app.get("/characters", async (req, res) => {
  // Now let's do the axios call from inside the route and 
  const response = await axios.get("https://hp-assessment-api.herokuapp.com/hp/characters");
  
  const characters = response.data;
  // see if we can log all the characters. Great!
  //Now we have the character in the route.
  // Take a look at the character object and identify where the image is.
  console.log(characters[0])

  const allCharactersHTML = characters.map(c => `
  <h3>${c.name}</h3>
   <img src="${c.imgUrl}" width="300"/>
  `)
  console.log('what is coming out of my map', allCharactersHTML)

  const hugeHTMLString = allCharactersHTML.join(" ")

  res.send("<h1 style='color:orange'>Welcome to harry potter gallery</h1>" + " " + hugeHTMLString)
})



app.get("/characters/:house", async (req, res) => {
  const house = req.params.house;
  // Now let's do the axios call from inside the route and 
  const response = await axios.get("https://hp-assessment-api.herokuapp.com/hp/characters");
  
  const characters = response.data;
  // see if we can log all the characters. Great!
  //Now we have the character in the route.
  // Take a look at the character object and identify where the image is.

  const filteredByHouse = characters.filter(c => house.toLowerCase() === c.house.name.toLowerCase())


  const allCharactersHTML = filteredByHouse.map(c => `
  <h3>${c.name}</h3>
   <img src="${c.imgUrl}" width="300"/>
  `)
  console.log('what is coming out of my map', allCharactersHTML)
  
  const hugeHTMLString = allCharactersHTML.join(" ")

  res.send("<h1 style='color:orange'>Welcome to harry potter gallery</h1>" + " " + hugeHTMLString)
})

app.listen(PORT, () => console.log("listening..."))

// How can we break this down?

// Let's first send back only 1 image. Pick the first element of the character array => it's image => send it back and check in the browser if you can see it. Remember to send HTML and not only the JS value!