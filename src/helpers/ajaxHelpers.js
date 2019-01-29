import Constants from '../config/Endpoints';

const processResponse = (response) => {
  // Check if we are handling a JSON response
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) return response.json();

  return response;
};

const get = () => fetch(Constants.host).then(processResponse);

export default get;
