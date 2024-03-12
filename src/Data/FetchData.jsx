export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "c87d2a0767msh15495ef26ba4235p14af4djsnfb6f2bcaeb78",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

 export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'c87d2a0767msh15495ef26ba4235p14af4djsnfb6f2bcaeb78'
    }
  };
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };
