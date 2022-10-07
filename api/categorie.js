import { child, get, getDatabase, ref, remove, set } from "firebase/database";
import { app } from "./app";

const database = getDatabase(app);

export function addCategorie(userId, nameCategorie) {
  return new Promise((res, rej) => {
    const db = ref(database)
    const user = child(db, `users/${userId}/categorie`)
    get(user).then((snap) => {
      let data = snap.val() || []
      data.push({name: nameCategorie, todos: []})
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

export function getOneCategorie(userId, categorieName) {
  return new Promise((res, rej) => {
    const db = ref(database)
    const categorie = child(db, `users/${userId}/categorie`)
    get(categorie).then(snap => {
      let data = snap.val()
      let categorie = data.find((elem) => {
        return elem.name === categorieName
      })
      res(categorie)
    }).catch(err => rej(err.message))
  })
}

export async function deleteCategorie(userId, categorieName) {
  let categories = await getCategories(userId);

  console.log(categories)

  let index = categories.findIndex((elem) => {
    if (elem === undefined) return false
    return elem.name === categorieName
  })

  if (index === -1) return true

  const db = ref(database)
  const categorie = child(db, `users/${userId}/categorie/${index}`)

  await remove(categorie)
  return true
}