import axios from "axios";

export function getListings() {
  return axios
    .get(
      "http://localhost:8000/api/listings"
      // { params: { _sort: "title" } }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function register(payload) {
  return axios
    .post("http://localhost:8000/api/register", payload)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function logOut() {
  console.log({ logOut });
  return axios.post("http://localhost:8000/api/logout").then((res) => {
    console.log({ res });
    return res.data;
  });
}

export function getPostsPaginated(page) {
  return axios
    .get("http://localhost:3000/posts", {
      params: { _page: page, _sort: "title", _limit: 2 },
    })
    .then((res) => {
      const hasNext = page * 2 <= parseInt(res.headers["x-total-count"]);
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data,
      };
    });
}

export function getPost(id) {
  return axios.get(`http://localhost:3000/posts/${id}`).then((res) => res.data);
}

export function createPost({ title, body }) {
  return axios
    .post("http://localhost:3000/posts", {
      title,
      body,
      userId: 1,
      id: Date.now(),
    })
    .then((res) => res.data);
}
