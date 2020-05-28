import axios from "axios";
const baseUrl = "https://fathomless-tundra-81713.herokuapp.com/api/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then((response) => response.data)
    .catch((error) => error.response.statusText);
};

const create = (personObject) => {
  const request = axios.post(baseUrl, personObject);
  return request.then((response) => response.data);
};

const del = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then((response) => response.status)
    .catch((error) => error.response.status);
};

const update = (id, personObject) => {
  const request = axios.put(`${baseUrl}/${id}`, personObject);
  return request
    .then((response) => response.data)
    .catch((error) => error.response.status);
};

export default { getAll, create, del, update };
