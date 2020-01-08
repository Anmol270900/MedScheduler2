'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
}

  function addreminders(agent) {
      const medicine = agent.parameters['given-name'];
      const no_of_times = agent.parameters.number;
      const no_of_days = agent.parameters.duration;
      var i;
    	var  interval;
      if(no_of_times != 1)
        interval = 12 / (no_of_times - 1);
      else
        interval = 6;

    	agent.add(`You will be reminded to take medicine ${medicine}, ${no_of_times} times between 9AM to 9PM in intervals of ${interval} hours.`);
    	for(i = 0; i < no_of_times; i++)
      {
        agent.add(`Reminder ${i + 1} at ${9 + interval*i}00 hours, `);
      }
    	console.log("To be reminded ", no_of_times, "times, in intervals of ", interval);

  }

  
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Medicine Scheduler', addreminders);
  //intentMap.set('Show Reminders', showreminders);
  // intentMap.set('', yourFunctionHandler);
  // intentMap.set('', googleAssistantHandler);
  agent.handleRequest(intentMap);
});