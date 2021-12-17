import axiosClient from "./apiClient";

export const doCreateUser = async (data) => {
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
    })
  } catch (e) {
    console.log(e);
    console.log('Unable to update watchlist of user.');
  }
}