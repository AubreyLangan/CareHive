import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    projectId:'care-hive-3ac61',
    messagingSenderId: '649787065613',
    appId: '1:649787065613:web:2e1fd387222042a0b09c44'
};

firebase.initializeApp(firebaseConfig);

export default firebase;