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

Starting the Servers
--------------------

Start the Peer.js server and the http server by running this on the command line.
``sh
node main start
``


license
-------
This code is given freely without license.
Do what you want with it.
