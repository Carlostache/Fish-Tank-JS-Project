JavaScript Project Proposal "Fish Tank"


Background

Fish Tank is a simple interactive demo created with JavaScript that allows a user to interact with a simulated fish tank in their web browser. Users will be able to interact with the fish directly, by dragging and dropping them both inside and outside the fish tank, and indirectly by accessing an overlay menu with objects to add to the fishtank. 

The fish tank will contain several distinct fish objects each with their own behavior and pathing around the fish tank. The fish will respond dynamically to food and other changes the user makes to their environment. For example, if larger fish are added to the tank they will eat the smaller fish, and if food or anchors are added they will swim over to those newly introduced objects for a few seconds.


Functionality & MVPs


In Fish Tank, users will be able to:

    Mouse over a specific fish object, grab it, and drag it around the rendered demo window.

    Access an overlay menu where users can select additional fish objects and other items that can be added to the tank.

    Users will be able to manipulate the environment of the fish tank by adding chemicals and plugging, unplugging the pump.

    Users will be able to turn background music on or off by pressing a radio object in the window.

In addition, this project will include:

    The page will have an introduction that invites users to interact and experiment with the fishtank and give them ideas of what they can do with the demo.

    Each fish will have logiv that governs its movement and how it moves around other fish and reacts to objects introduced by the user.

    Larger fish will be able to eat smaller fish, removing the smaller fish from the tank.

    The tank will have it's own logic that keeps track of how healthy the environment is, if the pump is unplugged too long or the wrong chemicals are added to the tank, the fish will die and float up to the top of the tank and the tank's color will change.

    It will include a README


WireFrame

https://wireframe.cc/XjxOgu

(Also in Repo)


Technologies, Libraries, APIs


Fish Tank will be built primarily using the Canvas API for JS.

If time premits I may experiemnt with three.js library to improve some of the water rendering for the tank and objects but that would be a bonus feature.


Implementation Timeline

    Friday Afternoon & Weekend
        -Getting the wireframe skeleton of the view page rednering on a webpage with canvas. Potentially begin experimenting with water effects or overlays for the fishtank using canvas features.

    Monday
        -Begin contructing the Fish parent class and child class. See if I can get some basic movement and rendering of those objects within the fishtank (need to make sure they are bound to the fish tank!)
        -Ensure that each fish child class has distinct size properties that also governs a radius that won't overlap with other fish.

    Tuesday
        -Implement a mouse element for users to interact with the elements on the page (radio, pump power, items button) as well as the fish themselves.
        -Once that is working, moving on to extending the fish behavior to react to objects as I'm making them.
        -Begin work on getting assests for the fish and other objects that already have working logic

    Wednesday
        -Rendering day!
        -Applying these assets to the created objects and making sure they render properly on the page.
        -Potentially adding some simple animations for the fish
        -Ensuring objects drop down the page properly but do not clip thorugh objects they should not
        -If any time is left working on improving water seeing how dynamic I can make it with Canvas alone

    Thursday Morning
        -Last minute troubleshooting
        -Any remaining time will be spent trying to improve the visual presentation as much as possible

