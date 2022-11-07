import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDf1ys6O88XgnNCRO4if6eCRo4pI4HY2XE",
    authDomain: "slack-react-clone-5dfc0.firebaseapp.com",
    databaseURL:"https://slack-react-clone-5dfc0-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "slack-react-clone-5dfc0",
    storageBucket: "slack-react-clone-5dfc0.appspot.com",
    messagingSenderId: "923864482982",
    appId: "1:923864482982:web:1fc53eda5e8b437929e067",
    measurementId: "G-L67F2L18SK"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
 
  export default firebase;