Greyjoy
=======

#Interactive Matlab Tutor
##sponsored by Hanshaw Virtual University 

###Progress Report.

####I.   Introduction
The Interactive MATLAB Tutor (IMT) is designed for a friendly, enjoyable teaching and learning experience for teachers, and students. IMT is a modular system that allow  teachers to create web pages for lectures,  questions for quizzes, math coding problems, and much more. IMT is built with the ease for the users in mind.  It is also equipped with features that will allow the teachers to teach a wide range of their classes by creating a panel of any materials they want to teach, test, or help their students with. Additionally, the project requires that a course for teach MATLAB be set up.

The purpose of this document is to detail the alpha prototype (section II), provide an overview of the prototype demonstration (section III), and list the major tasks for next semester as well as the plan to complete them. (section IV).

####II.   Alpha Prototype Description
The IMT has been divided into the three subsystems to maximize cohesion and reduce coupling within the design. The subsystems are as follows:
Web Application (Section II.1.)
This subsystem handles user input and provides the user views. 
Server (Section II.2.)
This subsystem is responsible for serving pages and providing an API for client side apps to interface with application data stored the database. 
Database (Section II.3.)
This subsystem is responsible for storing all of the persistent data the project requires.

Development on each subsystem has been iterative and incremental. This has allowed for easy integration of new features to the project. With the exceptions of the GNU Octave implementation and the user page interface, all software design progress has been integrated into the prototype.

In addition to the software design, the project involves in a significant amount of work pertaining to postsecondary education including designing methods to generate pseudo code and developing teaching strategies for MATLAB concepts that have proved difficult to grasp in a traditional learning environment. The progress on these educational requirements has been conceptual as the team focuses on the engineering portions.
II.1.   Web Application
II.1.1.   Web Page Builder
II.1.1.1.   Functions and Interfaces Implemented
Currently there is up and running a web page builder on the site hosting our web application. Users will be able to go to the page and build simple web pages for the future application. The building is done using HTML markup currently which is sent to the server and then when accessed the server sends this markup back and the AngularJS front end system renders this out into the view. Currently in the pipeline there is a change to the design of submitting markup so that it will use a form to submit information. 



Future work for this page will be a complete overhaul of the building system so that users will have more functionality and choice when building the page. Users tend to want to have more creativity when creating a page so we plan to design a drag drop system for users to build web pages. 
II.1.1.2.   Preliminary Tests
Preliminary tests for this section include tests of sending markup to the server and confirming it is correctly stored, Receiving markup from server on request and confirming it is correct. 
II.1.2.   Dynamic Render
II.1.2.1.   Functions and Interfaces Implemented
Dynamic Render is currently up and working with a few bugs currently. We use a preview page on the page builder to test the dynamic render and what the user will see and currently the dynamic rendering works with a few minor bugs which will need to be fixed. 

Future work of this includes fixing of the bugs and possibly a system redesign using react which is in theory a simpler application then AngularJS which has been recommended to us. Using AngularJS 2.0 would make this project simpler but the version of angularJS 2.0 has yet to be officially released and we will look into it should the update become available.
II.1.2.2.   Preliminary Tests
Dynamic rendering was done using the testing framework zombieJS which simulated a user using the web page by submitting JSON markup to the server and requesting that markup then checking the page to confirm that the elements dynamically made are in fact being rendered into the web page by checking for unique IDs. 
II.1.3.   Modules
II.1.3.1.   Functions and Interfaces Implemented
Currently we have several modules that are currently working for our design including a visualization modules, code module, and two quiz modules that are currently working. 






Future works include many more modules including table modules, better detailed visualization modules, lecture modules, and to fix the current video module that is currently not working.
II.1.3.2.   Preliminary Tests
Modules have been tested to verify that they are getting dynamically rendered after the page loads.
II.2.   Server
II.2.1.   Functions and Interfaces Implemented
Our server is fully functional and serving its two main purposes. It is serving out our applications pages: Demo and Admin. Also it facilitates our applications API to GET, POST, and PUT the various modules supported.

Future work includes adding DELETE which will remove data from the database.
II.2.2.   Preliminary Tests
Full API tests have been run to ensure that application data is saved, loaded, and modified correctly. POST, GET, and PUT tests have been successfully validated for: Modules, Panels, and Answers. All these test were possible though MochaJS, a testing framework, and Express API which is the framework our server is built upon.


####II.3.   Database
II.3.1.   Functions and Interfaces Implemented
Our Mongo Database is up and fully functional. It currently contains collections for modules, panels, and answers.

Future work for the database includes course content population, schemas for users, and schemas for application modules that have yet to be developed.
II.3.2.   Preliminary Tests
The tests ran on the server/API have already validated that the database is functioning correctly. It is storing each supported object successfully every time, given the input data is valid according to our object schemas.
III.   Alpha Prototype Demonstration
In the Demonstration we showed all the features that are currently in the prototype and an explanation of how it works. The presentation demoed all modules and the mathJAX and dynamic render that we worked the most on this semester. During the Alpha Prototype Demonstration there were several requests and other bits that were requested that we would add to the prototype for the next demonstration.

####Suggestions
User page - It was requested that a user page was built for the demo. Supposedly a user page was built but was unable to be shown for some unknown reason.
Admin page - A mock up for what the administrators would see on their pages.
Pseudo Code generation - A mock up for this was supposed to be designed but it was suggested that these either be hard coded or that we try to tweak our current system to make room for it.
Table module - A module that will allow users to walk through coding problems. 
Questions
Q: What would users see in the user page? 
	A: The preview panel is the majority of what the user will use.
Q: Where is the pseudo code generation? 
	A: Pseudo code generation module has not yet been created because of the difficulty inherent in the design.
 
There were a number of suggestions that we will be implementing in the coming semester to fill out and create the rest of the project. This previous semester's work was to build the framework and everything we will need to have the pages properly build and display.
IV.   Future Work
We have a number of tasks that need to be completed depending on the sections that they are in.

####Modules
Table module
This will be created per Hanshaw’s requests that will allow users to input data and have it show certain results depending on table to help users visualize code.
Visualization modules
Research shows that visualization of code helps students learn how to code so creating more visualization modules will increase the amount of versatility in the system. 
Lecture modules
More lecture modules including notes, videos, pictures, and other modules to make lectures more informative will be added to the system. 
Rendering
React
React may simplify the dynamic rendering system we currently have in place so updating to React may be an option that we follow. 
Page building
Currently the page building system uses JSON markup to create the page. Also in the works is to use forms to create the webpage but in the future I want to add more function and versatility in the building process.
Server
Update our server instance on our AWS server. As of right now we are doing all testing though localhost connections.
Database
Population of course content needs to be done, we have been using localhost mock database files for storage.
Access to our database needs to be restricted with public and private keys, without this anyone can access our API and do with it as they please. 
Monitoring
Tracking student progress 
Instructors want see how their students are performing before an exam and not just based on individual assignment grades either.  


####V.   Glossary
Application Programming Interface (API) - The way outside applications can access our Database/Server
JavaScript Object Notation (JSON) - How we package up our data.
GNU Octave - A free MATLAB-like software.
mathJAX - Fancy formatting for equations and special characters. 
Amazon Web Service (AWS) - Cloud computing and hosting.

####VI. References
AngularJS API Docs, https://docs.angularjs.org/api
# qproject
