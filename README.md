 # :woman_technologist: ADLUDIO ASSIGNMENT :woman_technologist: 
## What this project is about:

Two tasks were given to me from Adludio to evalutate my technical skills as a junior developer:
- Task 1: Mainly Front End - see related repository **[Adludio client](https://github.com/evelinawahlstrom/ad-assignment-client)**
- Task 2: Backend - this repository

## TASK 2:
- "ODIDULA"
That's a string of letters.
If we were to create an array of all the possible permutations of these letters, sort them alphabetically and remove repetitions, which index would ADLUDIO be at? :) 
<br/>
Create a single REST JSON endpoint that solves that puzzle GET /permutation-index/{someStringHere} 
<br/>
The endpoint will respond with a json object with one key: 
<br/>
{
"indexOfGivenPermutation": 34 } 
<br/>
And the value 34 above is an example of the position of the given permutation in a sorted array of all permutations (when repetitions are omitted)
<br/>
For example:
<br/>
Request
GET /permutation-index/LABA
<br/>
Response
{
"indexOfGivenPermutation": 11
}

## Table of contents:
- **[Technologies used](#technologies-used)**
- **[How to install](#how-to-install)**
- **[Features working](#features-working)**
- **[To do](#to-do)**

## Technologies used

## How to install

1. Clone this repo 

`git clone https://github.com/evelinawahlstrom/ad-assignment-server `

2. cd into adludio-server

3. In your terminal, run the following command to install all the dependencies

```
npm install
```

4. To start the terminal with nodemon, use the following command (assumes nodemon is installed globally)

```
nodemon index
```
 
5. To start the code without tracking saved changes, you can simply run:

```
node index
```

As a standard I'm using port 4000 for this server.

