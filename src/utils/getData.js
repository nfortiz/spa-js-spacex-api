const API_URL = 'https://api.spacexdata.com/v3';

async function fetchData(URL) {
    const resp = await fetch(URL);
    const data = resp.json();
    return data;
}

export async function getInfo() {
    const data = await fetchData(`${API_URL}`);
    return data;
}

export async function getLaunches() {
    const data = await fetchData(`${API_URL}/launches`);
    return data;
}

export async function getNextLaunch() {
    const data = await fetchData(`${API_URL}/launches/next`);
    return data;
}

export async function getRockets() {
    const data = await fetchData(`${API_URL}/rockets`);
    return data;
}