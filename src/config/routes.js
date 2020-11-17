//sistema de rutas que el sitio tendrá

import Home from "../components/Home";
import Book from "../components/Book";
import Auth from "../components/Auth";
const routes = [
  {
    path: "/",
    component: Home,
    exact: false,
    routes: [
      {
        path: "/",
        component: Auth,
        exact: true,
      },
      {
        path: "/libro",
        component: Book,
        exact: true,
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
