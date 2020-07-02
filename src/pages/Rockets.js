import { getRockets } from '../utils/getData';
import carousel from '../utils/carousel';

async function Rockets() {

    carousel('rockets');
    
    const rockets = await getRockets();

    return `
        <div class='container'>
        <article class='rocket' data-carousel='rockets'>
            ${rockets.map((rocket, idx) => {
                return `
                    <div class='carousel-item ${idx===0 ? 'active' : ''} rocket__info'>
                        <h3>${rocket.rocket_name}</h3>
                        <div class='rocket__info--stats'>
                            <span>Cost p/ Launch: ${rocket.cost_per_launch}</span>
                            <span>Firts Flight: ${rocket.first_flight}</span>
                            <span>Company: ${rocket.company}</span>
                            <span>Country: ${rocket.country}</span>
                            <span>Height: ${rocket.height.meters} m</span>
                            <span>Mass: ${rocket.mass.kg} kg</span>
                            <span>Number Engines: ${rocket.engines.number} </span>
                        </div>
                    </div>
                `;
            }).join('')}
            <a class='prev'>&#10094;</a>
            <a class='next'>&#10095;</a>
        </article>
        </div>        
    `;
}

export default Rockets;