import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcXvQxW3-gab78Mb9vVNw5mQFxTrEkU3s",
  authDomain: "tenedores-ffe81.firebaseapp.com",
  databaseURL: "https://tenedores-ffe81.firebaseio.com",
  projectId: "tenedores-ffe81",
  storageBucket: "tenedores-ffe81.appspot.com",
  messagingSenderId: "580526085176",
  appId: "1:580526085176:web:84162ebc364756b15502cd",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
