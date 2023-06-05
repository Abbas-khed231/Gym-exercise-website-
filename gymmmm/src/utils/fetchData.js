

const exerciseOptions =  {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
  };

const fetchData = async (url, option) => {
    const  response = await fetch(url, option);
    const data = await response.json();

    return data

}

export {
    exerciseOptions,
    fetchData
} 