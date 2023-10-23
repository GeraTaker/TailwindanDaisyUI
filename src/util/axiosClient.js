import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
  params: {
    tag: '2d',
  },
  headers: {
    'X-RapidAPI-Key': '2b959bccf8msh9e8c58938e7428bp1cba5djsn5fd0c2124205',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

export default {axios, options};
