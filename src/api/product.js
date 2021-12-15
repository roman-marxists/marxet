import { app } from '@services/firebase';
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require('firebase/storage');

const storage = getStorage(app);

const storageRef = ref(storage, 'images');

export const doUploadBytes = (file) =>
  uploadBytes(storageRef, file).then(async (snapshot) => {
    const url = await getDownloadURL(snapshot.ref);
    console.log('🚀 ~ file: product.js ~ line 16 ~ uploadBytes ~ url', url);

    console.log('Uploaded a blob or file!');
  });
