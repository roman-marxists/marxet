import axiosClient from "./apiClient";

export async function getPokemon() {
  try {
    const { data } = await axiosClient.get("/users");
    return data;
  } catch (err) {
    console.log("🚀 ~ file: user.js ~ line 8 ~ getPokemon ~ err", err);
  }
}

export const doCreateUser = async (data) => {
  console.log(data);
  try {
    const res = await axiosClient.post("/users", {
      email: data.email,
      id: data.uid,
    });
    console.log(res);
    // return res;
  } catch (err) {
    console.log(err);
  }
};
