import axiosClient from './apiClient';

export async function getPokemon() {
  try {
    debugger;
    const { data } = await axiosClient.get('/users');
    console.log('🚀 ~ file: user.js ~ line 6 ~ getPokemon ~ data', data);
    return data;
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 8 ~ getPokemon ~ err', err);
  }
}
