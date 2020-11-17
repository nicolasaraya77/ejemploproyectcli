//sistema de rutas que el sitio tendrá
//componentes
import Home from "../components/Home";
import Book from "../components/Book";
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
