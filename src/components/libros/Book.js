import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { getBooks } from "../../api/book";

export default function Book() {
  //seteamos el estado inicial de los libros retornados
  const [books, setBooks] = useState([]);
  //seteo de recarga de libros
  const [reloadBooks, setReloadBooks] = useState(false);

  // efecto que retorna los datos de la api de libros
  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response);
    });
    setReloadBooks(false);
  }, [reloadBooks]);

  console.log(books);

  const columns = [
    {
      dataField: "id",
      text: "Libro ID",
      sort: true,
    },
    {
      dataField: "section",
      text: "Seccion",
    },
    {
      dataField: "title",
      text: "Titulo",
    },
    {
      dataField: "author",
      text: "author",
    },
  ];

  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={books}
      columns={columns}
      pagination={paginationFactory({ sizePerPage: 5 })}
      striped
      hover
      condensed
    />
  );
}
