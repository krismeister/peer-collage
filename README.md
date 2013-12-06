Peer to Peer Collage
=====================

Description
-----------

This app build a collage of many users photos through a Peer to Peer connection.

The machine which will display the collage will goto this url:
localhost:9000/master.html

The many machines which will be sending photos to the Master machine will goto this url:
localhost:9000/

A peer to peer connection will be setup between the 2 and the users will start streaming photos to the master.

Install Node Package
--------------------

Install npm:
``sh
npm install
``

Starting the Servers
--------------------

Start the Peer.js server by running this command from the terminal:
``sh
node main startPeerJs
``

Then open another terminal and start the http server by running this command.
``sh
node main start
``


license
-------
This code is given freely without license.
Do what you want with it.
