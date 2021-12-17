import axiosClient from "./apiClient";

export const doCreateUser = async (data) => {
  console.log(data);
  try {
    const res = await axiosClient.post("/users", {
      id: data.uid,
      email: data.email,
      username: data.uid //TODO: change this username once implemented
    });
    return res;
  } catch (e) {
    console.log(e);
    console.log('Unable to create user.', data);
  }
};

export const doGetUserData = async (userId) => {
  try {
    console.log({userId})
    const res = await axiosClient.get(`/users/${userId}`)
    console.log({res});
    return res.data;
  } catch (e) {
    console.log(e);
    console.log('Unable to get user.');
  }
}

export const doUpdateUserWatchList = async ({userId, product, action}) => {
  try {
    await axiosClient.put(`/users/${userId}`, {
      product,
      action,
    });
  } catch (e) {
    console.log(e);
    console.log("Unable to update watchlist of user.");
  }
};

/////////
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
