import {getStorage, ref, getDownloadURL} from 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoLSwyUKrUggK7W7dekM7__x3xoRhL3Bo",
  authDomain: "mazerpg-3f9a9.firebaseapp.com",
  projectId: "mazerpg-3f9a9",
  storageBucket: "mazerpg-3f9a9.appspot.com",
  messagingSenderId: "956569513488",
  appId: "1:956569513488:web:ed424d0d0337b4094f6495",
  measurementId: "G-PR4C1K8Q83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const getImageUrl = async () =>{
    const caveRef = ref(storage, 'caveBackground.png')
    const url = await getDownloadURL(caveRef)
    return Promise.resolve(url)
}

export {getImageUrl}