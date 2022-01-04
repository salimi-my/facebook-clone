import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBIRNp9xSE7czAk7k3tB9hRz74sQhZKZWs',
  authDomain: 'facebook-clone-4a50b.firebaseapp.com',
  projectId: 'facebook-clone-4a50b',
  storageBucket: 'facebook-clone-4a50b.appspot.com',
  messagingSenderId: '514143402885',
  appId: '1:514143402885:web:b2daed199ea89ca3cde2ec'
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage(app);

export { app, db, storage };
