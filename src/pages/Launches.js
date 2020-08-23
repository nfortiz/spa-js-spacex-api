import { getLaunches, getNextLaunch } from '../utils/getData';

async function Launches() {

    const nextMission = await getNextLaunch();
    const endDate = new Date(nextMission.launch_date_utc).getTime();

    const idInterval = setInterval(() => {
        const now = new Date().getTime();
        let time = endDate - now;
        const timer = document.getElementById('timer-container');
        if(time >= 0) {
            let days = Math.floor(time / (1000 * 60 * 60 * 24));
            let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((time % (1000 * 60)) / 1000);
            timer.innerHTML = `
                <div class='timer'><p class='timer__title'>Days</p><span class='timer__value'>${days}</span></div>
                <div class='timer'><p class='timer__title'>Hours</p><span class='timer__value'>${hours}</span></div>
                <div class='timer'><p class='timer__title'>Mins</p><span class='timer__value'>${mins}</span></div>
                <div class='timer'><p class='timer__title'>Secs</p><span class='timer__value'>${secs}</span></div>
            `;
        }
    }, 1000);

    const launches = await getLaunches();

    Launches.unMount = () => clearInterval(idInterval);

    return `
        <aside class='container'>
            <div class='row'>
                <h3 class='col-12'>Next Launch in:</h3>
                <div class='col-12' id='timer-container'></div>
            </div>
        </aside>
        <section class='container launches'>
            <div class='row'>
            <h2 class='col-12'>Launches</h2>
            ${launches.map((launch) => {
                const details = launch.details ? launch.details : 'Description not available';
                return `<article class='col-4 launch'>
                    <h3>${launch.mission_name}</h3>
                    <div class='launch__description'>
                        <p class='launch__description--item'>${details}</p>
                        <span class='launch__description--item'>🚀Rocket: ${launch.rocket.rocket_name}</span>
                        <span class='launch__description--item'>⌚Launch Year: ${launch.launch_year}</span>
                        <span class='launch__description--item'>🤖Flight Number: ${launch.flight_number}</span>
                    </div>
                </article>`
            }).join('')}
            </div>
        </section>
    `;
}

export default Launches;