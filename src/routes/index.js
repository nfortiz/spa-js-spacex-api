import Header from '../templates/Header';
import Footer from '../templates/Footer'

import Home from '../pages/Home';
import Launches from '../pages/Launches';
import Rockets from '../pages/Rockets';
import About from '../pages/About';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoute from '../utils/resolveRoute';

const routes = {
    '/': Home,
    '/launches': Launches,
    '/rockets': Rockets,
};

let currentRoute;

async function router() {

    const header = document.getElementById('header');
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');

    header.innerHTML = Header();
    footer.innerHTML = Footer();

    if(currentRoute) {
        currentRoute.unMount && currentRoute.unMount();
    }

    const hash = getHash();
    const route = resolveRoute(hash);
    const render = routes[route] ? routes[route] : Error404;

    currentRoute = render;
    content.innerHTML = await render();
}

export default router;
