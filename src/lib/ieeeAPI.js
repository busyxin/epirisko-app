const httpOptions = {
  headers: {
    // 'apikey': 'fjkrw9wdut3kdv8jgmg297jd',
  }
};

// API Helper methods
const abstractUrl = 'http://ieeexploreapi.ieee.org/api/v1/search/articles';

const parseSearchUrl = (query) => {

  const queryParams = [
    `format=json`, 
    `max_records=25`, 
    `start_record=1`, 
    `sort_order=desc`, 
    `sort_field=publication_year`,
    `open_access=true`,
    `apikey=fjkrw9wdut3kdv8jgmg297jd`,
  ];

  if (query !== undefined && query !== '') {
    queryParams.push(`abstract=${encodeURIComponent(query)}`);
  }

  return `${abstractUrl}?${queryParams.join('&')}`
};

const processResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  throw response;
};

const getResults = (response) => {
  return response.articles
}

const ieeeAPI = fetch => ({

  fetchArticles: (query) => fetch(parseSearchUrl(query), httpOptions)
    .then(processResponse)
    .then(getResults)
});

export default ieeeAPI;