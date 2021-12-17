import axiosClient from "./apiClient";

export async function doGetCategories() {
  try {
    const { data } = await axiosClient.get("/categories");
    return data;
  } catch (err) {
    console.error(err);
  }
}
