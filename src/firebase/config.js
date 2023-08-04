import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCr2ujA4nAHLz_HONo9GlyMftAmuv2Y1hA",
  authDomain: "olxclone-ebd65.firebaseapp.com",
  projectId: "olxclone-ebd65",
  storageBucket: "olxclone-ebd65.appspot.com",
  messagingSenderId: "136846691267",
  appId: "1:136846691267:web:71bae93d0eba4a8fff0b76",
  measurementId: "G-VK9DKHQWZK"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;