import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD1lK-WOU37RPuB4Ji3XHrjg9VL2Xg1Uq4',
  authDomain: 'reactnativehw-fed37.firebaseapp.com',
  databaseURL: 'https://reactnativehw-fed37-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'reactnativehw-fed37',
  storageBucket: 'reactnativehw-fed37.appspot.com',
  messagingSenderId: '149782795921',
  appId: '1:149782795921:web:f81ed7079932801a3a5130',
  measurementId: 'G-X8QDBC8MZP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
