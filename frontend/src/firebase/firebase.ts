import firebase from "firebase/compat/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmVX4Qd2CVcjkw38bUBcIOqijcxJO3700",
    authDomain: "loginreact-c1c92.firebaseapp.com",
    projectId: "loginreact-c1c92",
    storageBucket: "loginreact-c1c92.appspot.com",
    messagingSenderId: "866685723228",
    appId: "1:866685723228:web:75c012e1805bb28df87c99"
};

firebase.initializeApp(firebaseConfig);

const authGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const authUser = getAuth();

    const result = await signInWithPopup(authUser, provider)
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err
    })
    
    return result;
}

export default authGoogle