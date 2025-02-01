import sqlite from "sqlite3";

let sql = "";

//CONEXION A LA BASE DE DATOS
const db = new sqlite.Database(
  "./db.sqlite",
  sqlite.OPEN_READWRITE,
  (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Connected to the database.");
    }
  }
);

//CREAR TABLA SI NO EXISTE
/* sql = `CREATE TABLE IF NOT EXISTS categories ( id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100) NOT NULL)`;

db.run(sql, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Table categories created.");
  }
}); */

//INSERTAR DATOS
/* sql = `INSERT INTO categories (name) VALUES (?) `;

db.run(sql, ["Categoría 4"], (error) => {
  // Inserting data into the table
  if (error) {
    console.error(error);
  } else {
    console.log("Data inserted into the table.");
  }
}); */

//ACTUALIZAR DATOS
/* sql = `UPDATE categories SET name = ? WHERE id = ?`;

db.run(sql, ["Categoría 1 B", 1], (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Data updated successfully.");
  }
}); */

//ELIMINAR DATOS
/* sql = `DELETE FROM categories WHERE id = ?`;

db.run(sql, [2], (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Data deleted successfully.");
  }
}); */

//CONSULTAR TODOS LOS DATOS
sql = `SELECT * FROM categories`;

db.all(sql, [], (error, rows) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Data fetched successfully.");
    console.log(rows);
  }
});

//CONSULTAR UN SOLO DATO
/* sql = "SELECT * FROM categories WHERE id = ?";

db.get(sql, [3], (error, row) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Data fetched successfully.");
    console.log(row);
  }
}); */

//CERRAR LA CONEXION

db.close((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Database connection closed.");
  }
});
