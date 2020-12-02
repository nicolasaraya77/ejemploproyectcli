//conexion al servidor mediante rest-api
import { basePath } from "./config";

//añadir libro a la base de datos
export function createBook(libro) {
  const url = `${basePath}/books`; //debe ser igual a la ruta del back

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(libro),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

//mostrar libros

export function getBooks() {
  const url = `${basePath}/books`; //debe ser igual a la ruta del back

  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}

//actualizar libro

export function updateBook(id, libro) {
  const url = `${basePath}/books/${id}`; //debe ser igual a la ruta del back

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify(libro),
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}
