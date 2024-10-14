import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9vdZb3Wr6wCnTrdAvZCG-5SX0xKCMe5E",
  authDomain: "photologin-7869f.firebaseapp.com",
  projectId: "photologin-7869f",
  storageBucket: "photologin-7869f.appspot.com",
  messagingSenderId: "540056222130",
  appId: "1:540056222130:web:1db07d95fe0f5e1331ccab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);