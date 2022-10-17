/*const readline = require('readline');
rl = readline.createInterface(process.stdin,  process.stdout);
rl.question('Task description: ', (answer) => {
let description = answer;
    rl.question('Is the task important? (y/n)', (answer) => {
    let important = answer;
            rl.question('Is the task private? (y/n)', (answer) => {
            let private = answer;
                    rl.question('Task deadline: ', (answer) => {
                    let date = answer;
rl.close();
                                });
            });
    });

});
/*
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();
*/


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});



function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("EIDIA..");
      }, 1000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
  }
   
  async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
  }
display();