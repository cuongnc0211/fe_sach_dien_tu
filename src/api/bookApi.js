import axiosClient from "./axiosClient";

const bookApi = {
  getAll(params) {
    const url = '/books';
    return axiosClient.get(url, { params });
  },

  // get(id) {
  //   const url = `/books/${id}`;
  //   return axiosClient.get(url);
  // },

  // add(data) {
  //   const url = '/books';
  //   return axiosClient.post(url, data)
  // },

  // update(data) {
  //   const url = `/books/${data.id}`;
  //   return axiosClient.patch(url, data)
  // },

  // remove(id) {
  //   const url = `/books/${id}`;
  //   return axiosClient.delete(url);
  // }
};

export default bookApi;