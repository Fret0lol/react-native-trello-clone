import { child, get, getDatabase, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function ajoutTache(userId, name) {
    return new Promise((res, rej) => {

        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        console.log(refUser);
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            console.log(data);
            data.push(name)
            set(refUser, data);
            res(true)
        }).catch(err => rej(err.message))
    })

}

export function getMesTaches(userId) {
    return new Promise((res, rej) => {
        const refDb = ref(database)
        const refUser = child(refDb, `users/${userId}`)
        get(refUser).then(snap => {
            let data = snap.val()
            if (data == "" || data === null) data = []
            res(data)
        }).catch(err => rej(err.message))
    })
}
