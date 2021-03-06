//sistema de rutas que el sitio tendrá
//componentes
import Home from "../components/Home";
import Book from "../components/libros/Book";
import AddBook from "../components/libros/AddBook";
import Error404 from "../components/Error404";

//layout
import Layout from "../layouts/Layout";
const routes = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/libro",
        component: Book,
        exact: true,
      },
      {
        path: "/newlibro",
        component: AddBook,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
/* routes es un arreglo de objetos , donde cada objeto posee lo siguiente: 

path: (la ruta a la que se accede)
component: archivo .js que se mostrará 
exact: identificador que si la ruta es estricta o no
*/

/* esquema de componentes:

APP : componente base
 - Layout: Componente de grid (donde cargamos los demas componentes)
    - Libro: componente que tiene libros

*/
