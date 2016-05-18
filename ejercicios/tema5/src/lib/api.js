import 'isomorphic-fetch';


function handleResponse(response){
  if(response.ok){
    return response.json();
  }
  throw {
    status: response.status,
    text: response.statusText
  }
}

export function get(url){
  return fetch(url)
  .then(handleResponse);
}