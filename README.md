# MedScheduler

Theme: Healthcare

## The Problem: 

Medical Prescriptions having more than a dozen of medicines each having different number of times to be applied per day and different number of days of application can be very difficult to manage.

## The Solution: 

The app interacts with the user through voice messages and chatbots to extract information like "Name of medicines", "Number of times" each has to be applied per day and "Number of days" for which each has to be applied.

This information is then used to exactly calculate the length of intervals between two intakes in a window (eg. 9AM to 9PM) and set reminders at the time of medicine intake.

**Technologies used:** Node.js, Dialogflow, Google assistant, Amazon Alexa Reminder API

**Link to the Test version of assistant app working through Dialogflow and connected to the API:**
https://bot.dialogflow.com/06b95237-ad65-463c-826a-e7d6b71c3a71

## Sample conversation: 

    User:   Talk to Med Scheduler

    MedScheduler:   Let's get the test version of Med Scheduler.
                    Greetings! How can I assist?
    
    User:   Please remind me to take my medicines

    MedScheduler:   What is the name of the medicine?

    User:   Paracetamol

    MedScheduler:    How many times this medicine has to be taken in a day?

    User: 5

    MedScheduler:    For how many days this medicine has to be taken?

    User:   4 days

    MedScheduler:     You will be reminded to take medicine Paracetamol, 
                       5 times between 9AM to 9PM in intervals of 3 hours.
                        Reminder 1 at 900 hours, 
                        Reminder 2 at 1200 hours, 
                        Reminder 3 at 1500 hours, 
                        Reminder 4 at 1800 hours, 
                        Reminder 5 at 2100 hours, 

    Reminders would be added at the mentioned times.

