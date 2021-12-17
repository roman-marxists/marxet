import axiosClient from "./apiClient";

export const doCreateUser = async (data) => {
  console.log(data);
  try {
    const res = await axiosClient.post("/users", {
      id: data.uid,
      email: data.email,
    });
  } catch (e) {
    console.log(e);
    console.log("Unable to create user.");
  }
};

export const doUpdateUserWatchList = async ({ userId, productId, action }) => {
  try {
    await axiosClient.put(`/users/${userId}`, {
      productId,
      action,
    });
  } catch (e) {
    console.log(e);
    console.log("Unable to update watchlist of user.");
  }
};

////
export const doAddToWishlist = async () => {
  try {
    const data = await axiosClient.post("users/wishlist", {
      listing_id,
      user_id,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const doDeleteFromWishlist = async (listing_id) => {
  try {
    const data = await axiosClient.delete(
      `users/wishlist/${listing_id}/${user_id}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
