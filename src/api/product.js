import axiosClient from "./apiClient";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "@services/firebase";

const storageRef = ref(storage, "images");

export const doUploadBytes = (file) =>
  uploadBytes(storageRef, file).then(async (snapshot) => {
    const url = await getDownloadURL(snapshot.ref);
    return url;
  });

export const doCreateProduct = async (data) => {
  try {
    const photoURL = await doUploadBytes(data?.photo[0]);
    const res = await axiosClient.post("/products", {
      image: photoURL,
      ...data,
    });
    return res;
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
