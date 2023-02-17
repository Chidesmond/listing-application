import axios from "axios";

export function getListings(pageNo = 1) {
  return axios
    .get(`http://localhost:8000/api/listings?page=${pageNo}`)
    .then((res) => {
      // console.log({ res });
      return res.data;
    });
}

export function getListing(id) {
  return axios.get(`http://localhost:8000/api/listings/${id}`).then((res) => {
    console.log({ res });
    return res.data;
  });
}

export function register(payload) {
  return axios
    .post("http://localhost:8000/api/register", payload)
    .then((res) => {
      return res.data;
    });
}

// export function logOut() {
//   console.log({ logOut });
//   return axios.post("http://localhost:8000/api/logout").then((res) => {
//     console.log({ res: res.data });
//     return res.data;
//   });
// }

export function logIn(payload) {
  return axios.post("http://localhost:8000/api/login", payload).then((res) => {
    return res.data;
  });
}

export function createListing(payload) {
  return axios
    .post("http://localhost:8000/api/create-listing", payload)
    .then((res) => {
      return res.data;
    });
}

export function search(payload) {
  return axios
    .post(`http://localhost:8000/api/listings/search/${payload.title}`, payload)
    .then((res) => {
      return res.data;
    });
}
