import axiosClient from "./apiClient";

export const doCreateUser = async (data) => {
  try {
    const res = await axiosClient.post("/users", {
      id: data.uid,
      email: data.email,
      username: data.username, //TODO: change this username once implemented
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const doGetUserData = async (userId) => {
  try {
    const res = await axiosClient.get(`/users/${userId}`);
    return res.data;
  } catch (e) {
    console.error(e);
    console.error("Unable to get user.");
  }
};

export const doUpdateUserWatchList = async ({ user, watchList }) => {
  try {
    const response = await axiosClient.put(`/users/${user._id}`, {
      watchList
    });
    return response.data;
  } catch (e) {
    console.error(e);
    console.error("Unable to update watchlist of user.");
  }
};

/////////
export const doAddToWishlist = async () => {
  try {
    const response = await axiosClient.post("users/wishlist", {
      listing_id,
      user_id,
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const doDeleteFromWishlist = async (listing_id) => {
  try {
    const data = await axiosClient.delete(
      `users/wishlist/${listing_id}/${user_id}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
