const httpOptions = {
  headers: {'apikey': 'fjkrw9wdut3kdv8jgmg297jd'}
};

// API Helper methods
const abstractUrl = 'http://ieeexploreapi.ieee.org/api/v1/search/articles';

const parseSearchUrl = (query) => {

  const queryParams = [`format=json`, `max_records=25`, `start_record=1`, `sort_order=asc`, `sort_field=author`];

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

const getResults = (response) => response.results;

const ieeeAPI = fetch => ({

  fetchArticles: (query) => fetch(parseSearchUrl(query), httpOptions)
    .then(processResponse)
    .then(getResults)
    .then(results => results),
});

export default ieeeAPI;