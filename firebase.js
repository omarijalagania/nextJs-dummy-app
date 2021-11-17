import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACSjaZ9i2KehCED73Fy66oy-oM6woGAHA",
  authDomain: "events-nextjs-f3f62.firebaseapp.com",
  databaseURL: "https://events-nextjs-f3f62-default-rtdb.firebaseio.com",
  projectId: "events-nextjs-f3f62",
  storageBucket: "events-nextjs-f3f62.appspot.com",
  messagingSenderId: "267664463525",
  appId: "1:267664463525:web:2e93058d8d4895c56ddf4c",
};

const appZ = initializeApp(firebaseConfig);
module.exports = appZ;
