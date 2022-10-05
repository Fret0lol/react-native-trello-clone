import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import { app } from "./app";

const auth = getAuth(app);

export function connectUser(email, password) {
    return new Promise((res, rej) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                res(userCredential.user);
                // ...
            })
            .catch((error) => {
                rej(error.message);
            });
    })
}

export function createUser(email, password) {
    return new Promise((res, rej) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                writeUserData(userCredential.user.uid, userCredential.user.email)
                res(userCredential.user);
                // ...
            })
            .catch((error) => {
                rej(error.message);
                // ..
            });
    })
}

function writeUserData(userId, email) {
    const db = getDatabase(app);
    set(ref(db, 'users/' + userId), {
        email: email,
        categories: []
    })
}