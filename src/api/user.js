import axiosClient from "./apiClient";

export const doCreateUser = async (data) => {
  try {
    const res = await axiosClient.post("/users", {
      email: data.email,
      id: data.uid,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
