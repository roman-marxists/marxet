import { app } from "@services/firebase";
import axiosClient from "./apiClient";
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

const storage = getStorage(app);

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

export const getProducts = async () => {
  try {
    const { data } = await axiosClient.get("/products");
    console.log("searched products", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
