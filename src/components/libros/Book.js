import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";

import { getBooks, updateBook } from "../../api/book";
export default function Book() {
  const [rows, setRows] = useState({});

  const [books, setBooks] = useState([]);
  const [reloadBooks, setReloadBooks] = useState(false);
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
      text: "Product Price",
    },
    {
      dataField: "author",
      text: "author",
    },
  ];

  const beforeSaveCell = async (oldValue, newValue, row, column, done) => {
    console.log({ row });
    const data = row;

    console.log(column);

    if (window.confirm("Estas seguro de realizar cambio?")) {
      const response = await updateBook(row.id, { data });

      done(true);
    } else {
      done(false);
    }

    return { async: true };
  };

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
      cellEdit={cellEditFactory({
        mode: "click",
        beforeSaveCell,
      })}
    />
  );
}
