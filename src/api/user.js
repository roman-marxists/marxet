import axiosClient from "./apiClient";

export const doCreateUser = async (data) => {
  try {
    console.log({doCreateUser: data})
    const res = await axiosClient.post("/users", {
      id: data.uid,
      email: data.email,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
