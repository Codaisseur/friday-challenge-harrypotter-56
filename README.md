## Harry potter Image board

We are going to use a Harry Potter API to create a server that serves images. Our objective is to make a server that sends back html including the pictures and names of the characters.

It will have 2 routes
  => **/characters** (returns the images and names of all characters)
  => **/characters/:house** (returns the images of characters that belong to a specific house)

![page1](https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/04uL2ObK/15f9a313-c1fc-4f45-9d2e-0b28450b906a.png?v=4d5ef04f6396676e11574bc0ba999fd3?v=4d5ef04f6396676e11574bc0ba999fd3)

![page2](https://s3.eu-west-1.amazonaws.com/cd.sseu.re/items/2NuvqjJk/4257150c-afe2-48b7-a96f-706e485ab4d7.png?v=581450c2694e630d575b268e98f5005f?v=581450c2694e630d575b268e98f5005f)


For this we'll need to combine all we've learned in this first week. We will need:
1. Express to build the server.
1. Axios to call the HP API and get all the characters.
1. Map to convert all the characters into `<img>` tags.
1. Filter to get the characters for the correct house.
1. Probably some extra array and string methods (array.join, string.toLowerCase)


**1. All characters route**
When attempting new challenges we should always try to break it down into small steps. Remember, our end goal is to get all the character objects and convert them into `<img>` tags to send back to the client.

How can we break this down?
1. Set up a route that returns `hello world`
2. Now let's do the axios call from inside the route and see if we can log all the characters. Great! Now we have the character in the route. Take a look at the character object and identify where the image is.
3. Let's first send back only **1** image. Pick the first element of the character array => it's image => send it back and check in the browser if you can see it. Remember to send HTML and not only the JS value!

Once you have this first step it is now time to attempt to send **all** the images. Hint: You'll need .map for this (converting all the character objects into `<img>` tags with the correct attributes).


**2. Characters filtered by house**
Set up another route `/characters/:house` that will return all the images + names of the characters in the specific house as well as the house name in the title. For this one you are more on your own, you can always ask for help :). Remember to break it down into small steps! 

