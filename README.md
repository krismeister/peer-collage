Peer to Peer Collage
=====================

Description
-----------

This app build a collage of many users photos through a Peer to Peer connection.

The machine which will display the collage will goto this url:

localhost:9001/master.html

The many machines which will be sending photos to the Master machine will goto this url:

localhost:9001/

A peer to peer connection will be setup between the 2 and the users will start streaming photos to the master.

Install Node Packages
--------------------

``
npm install //Install npm packages
``


Starting the Servers
--------------------


``
node main startPeerJs //Start the Peer.js server by running this command from the terminal:
``


``
node main start //Then open another terminal and start the http server by running this command.
``


license
-------
This code is given freely without license.
Do what you want with it.
