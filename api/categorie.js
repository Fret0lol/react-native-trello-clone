import { child, get, getDatabase, ref, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function addCategorie(userId, nameCategorie) {
  return new Promise((res, rej) => {
    const db = ref(database)
    const user = child(db, `users/${userId}/categorie`)
    get(user).then((snap) => {
      let data = snap.val() || []
      data.push(nameCategorie)
      set(user, data);
      res(true)
    }).catch(err => rej(err.message))
  })
}

export function getCategories(userId) {
  return new Promise((res, rej) => {

    const db = ref(database)
    const user = child(db, `users/${userId}/categorie`)
    get(user).then(snap => {
      let data = snap.val()
      res(data)
    }).catch(err => rej(err.message))
  })
}