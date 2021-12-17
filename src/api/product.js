import axiosClient from "./apiClient";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "@services/firebase";

const storageRef = ref(storage, "images");

export const doGetSearched = async (searchTerm) => {
  try {
    const { data } = await axiosClient.get(`/products/search/${searchTerm}`);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const doUploadBytes = (file) =>
  uploadBytes(storageRef, file).then(async (snapshot) => {
    const url = await getDownloadURL(snapshot.ref);
    return url;
  });

export const doCreateProduct = async (data) => {
  try {
    const photoURL = await doUploadBytes(data?.photo[0]);
    const {data} = await axiosClient.post("/products", {
      image: photoURL,
      ...data,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const doGetProducts = async () => {
  try {
    const { data } = await axiosClient.get("/products");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const doGetProductById = async (id) => {
  try {
    const { data } = await axiosClient.get(`/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const doGetUserProducts = async (id) => {
  try {
    const { data } = await axiosClient.get(`/products/user/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const doUpdateProductWatchCount = async({ product, watchCount }) => {
  try {
    const {data} = await axiosClient.put(`/products/${product._id}`, {
      watchCount
    })
    return data;
  } catch (e) {
    console.log(e);
  }
}
