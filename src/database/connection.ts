import { Database, OPEN_READWRITE } from "sqlite3"

const DB_PATH = "./mydb.db"

export const db = new Database(DB_PATH, OPEN_READWRITE, err => {
  if (err) {
    console.error(err.message)
  }
  console.info("Connected to the database.")
  initDatabase()
})

const initDatabase = () => {
  const sql = "CREATE TABLE IF NOT EXISTS products (id STRING PRIMARY KEY, body_html STRING, image_url STRING)"
  db.run(sql)
}
