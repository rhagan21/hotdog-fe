# Hotdog question app

This is a sample app that asks a question and sends it to a locally running API, and can poll for previous answers and display them in a table. It was built using NextJS/React for the frontend.

## Todos
- [x] Make front page with links to sub pages
- [x] Make Submission page
- [x] Make View Answers page
- [x] Form validation - No empty answer, no "yes", "no", "I don't know", "That's fine"
- [x] Make submission work and show success message
- [x] Make View Answers work
- [x] Limit answers to last 100 answers
- [x] Make View Answers use polling
- [x] Update this readmes
- [x] Form validation improvement - OnBlur works with click out but misses keyout
- [x] Style subission page
- [x] Style View Answers page

## Running the app
- Clone the github repo for the frontend
- The first time, cd into the the project, run `npm i` to install dependencies
- Run `npm run dev` to run the frontend
- The frontend will deploy to `http://localhost:3001`
