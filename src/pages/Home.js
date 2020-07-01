import { getInfo } from '../utils/getData';

async function Home() {
    const info = await getInfo();

    return `
        <div class='hero'>
            <h1 class='hero__title'>SPA with vanilla JS using <a href='${info.project_link}' target='_blank' rel='noopener'>${info.project_name}</a></h1>
            <p>This is awesome personal project for show my skills with JavaScript</p>
        </div>
    `;
}

export default Home;