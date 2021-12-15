import axiosClient from "./apiClient";

export async function getPokemon() {
  try {
    const { data } = await axiosClient.get("/users");
    console.log("🚀 ~ file: user.js ~ line 6 ~ getPokemon ~ data", data);
    return data;
  } catch (err) {
    console.log("🚀 ~ file: user.js ~ line 8 ~ getPokemon ~ err", err);
  }
}

export const doCreateUser = (data) => {
  try {
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
