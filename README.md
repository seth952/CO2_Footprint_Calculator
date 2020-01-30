CO2 Footprint Calculator

http://co2byyou.com/ 

A full stack web app that allows a user to input various aspects of their lifestyle and check their CO2 footprint.

The app stores the form data into a database and then displays the data using HighChartsJS with a detailed breakdown of the emissions measured in kgCO2e/day. As the user enters information into the form, a running total updates in real time showing the effect of their lifestyle. A user can also view previous footprints using the stored data in the database.

Our API contains two endpoints, one containing the emissions factors used in the calculations, the other containing the users stored footprints.

The front-end was built using VueJS, whilst the backend uses Express, MongoDB and Node.js.

Getting Started
npm install
Compile and Run back-end, front-end servers
cd client
npm run serve
In a new tab

cd server
npm run server:dev
New tab

cd server/db
npm run seeds
Compiles and minifies for production
npm run build
View the API
To view the API data, use

http://localhost:3000/api/emissions/users http://localhost:3000/api/emissions/emissionfactors

Opening the app
Visit

http://localhost:8080

Authors
Stephen Campbell, Grant Houston and Paul McManus

Aknowledgement
CodeClan for issuing the project brief and gifting knowledge required to build

Resources used for Emissions Factor research
http://shrinkthatfootprint.com/calculate-your-carbon-footprint http://assets.wwf.org.uk/downloads/how_low_report_1.pdf https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/829336/2019_Green-house-gas-reporting-methodology.pdf https://earthscience.stackexchange.com/questions/10160/co2-emissions-per-calorie-food
