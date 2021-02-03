
/* o .then() function prevents the callback hell when dealing with async calls */
/* each async task will return a promise object
   each promise obj will have a then() function, can take two args: success and error handlers
    */

/*
  .then(response => response.text())
  .then(result => document.getElementById('content').innerHTML = marked(result));
 */
const fetch = require("node-fetch");

/*
const fetchGit = async () => {
  const data = await fetch('https://github.com/hpoleselo/notes/blob/master/SUMMARY.md');
  
  console.log(data);
}

fetchGit()
*/

/*
fetch('https://github.com/hpoleselo/notes/blob/master/SUMMARY.md')
.then(response => response.text())
.then(body => body.getElementById('content').innterHTML = marked(body));
/* .then(body => console.log(body)); */


const { Octokit } = require('@octokit/core')

const octokit = new Octokit({auth: "df.."});

async function fetchGitzao() {
  const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'hpoleselo',
    repo: 'notes',
    path: '/blob/master/'
  });
  console.log(response);
}

fetchGitzao()