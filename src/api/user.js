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
