import {IWebsite} from './IWebsite'

export const WEBSITES_LIST: IWebsite[] = [
  {
    "name": "MDN",
    "url": "https://developer.mozilla.org/fr/search?q={{input}}"
  },{
    "name": "GitHub",
    "url": "https://github.com/search?q={{input}}"
  },{
    "name": "stackoverflow",
    "url": "https://stackoverflow.com/search?q={{input}}"
  },{
    "name": "npmjs",
    "url": "https://www.npmjs.com/search?q={{input}}"
  },{
    "name": "Google",
    "url": "https://www.google.fr/search?q={{input}}"
  },{
    "name": "YouTube",
    "url": "https://www.youtube.com/results?search_query={{input}}"
  },{
    "name": "Doc Nodejs",
    "url": "https://nodejs.org/dist/latest-v14.x/docs/api/"
  },{
    "name": "Doc w3c",
    "url": "https://www.w3schools.com/jsref"
  },{
    "name": "Doc Angular",
    "url": "https://angular.io/docs"
  },{
    "name": "Doc React",
    "url": "https://fr.reactjs.org/docs/getting-started.html"
  },{
    "name": "WordReference En->Fr",
    "url": "https://www.wordreference.com/enfr/{{input}}"
  },{
    "name": "WordReference Fr->En",
    "url": "https://www.wordreference.com/fren/{{input}}"
  }
]
