import { child, getDatabase, ref, update } from "firebase/database";
import { app } from "./app";
import { getCategories } from "./categorie";

const database = getDatabase(app);

export async function addTodo(userId, categorieName, todoName) {
  let categories = await getCategories(userId);

  let index = categories.findIndex((elem) => {
    if (elem === undefined) return false
    return elem.name === categorieName
  })
  if (!categories[index].todos) {
    categories[index].todos = []
  }
  categories[index].todos.push(todoName)
  const db = ref(database)
  const categorie = child(db, `users/${userId}/categorie/${index}`)
  update(categorie, categories[index])
}
