const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getReddit = async () => {
  /*
  fetch('https://raw.githubusercontent.com/erasabi/trekthroughs/master/pen_testing/RickdiculouslyEasy.md') 
    .then(response => response.text())
    .then(result => document.getElementById('content').innerHTML = marked(result));
  */


  // Ler sobre promise then(), await e fetch

  // get html text from reddit
  const response = await fetch('https://github.com/hpoleselo/notes/blob/master/README.md');
  // using await to ensure that the promise resolves
  const body = await response.text();
  result = body.
  console.log(body);

  // parse the html text and extract titles
  const $ = cheerio.load(body);
  const titleList = [];
    
  // using CSS selector  
  $('._eYtD2XCVieq6emjKBH3m').each((i, title) => {
    const titleNode = $(title);
    const titleText = titleNode.text();
    
    titleList.push(titleText);
  });
  console.log(titleList);
};

getReddit();