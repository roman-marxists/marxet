import axiosClient from "./apiClient";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@services/firebase";

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
  uploadBytes(ref(storage, `images/${file.name}`), file).then(
    async (snapshot) => {
      const url = await getDownloadURL(snapshot.ref);
      return url;
    }
  );

export const doCreateProduct = async (data) => {
  try {
    let photoURL;
    if (data?.photo[0]) {
      photoURL = await doUploadBytes(data?.photo[0]);
    }
    const res = await axiosClient.post("/products", {
      image: photoURL,
      ...data,
    });
    return res.data;
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
