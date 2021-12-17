import axiosClient from "./apiClient";

export async function doGetCategories() {
  try {
    const { data } = await axiosClient.get("/categories");
    return data;
  } catch (err) {
    console.log("🚀 ~ file: user.js ~ line 8 ~ getPokemon ~ err", err);
  }
}
