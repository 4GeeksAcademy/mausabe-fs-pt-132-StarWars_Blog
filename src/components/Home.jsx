import { useEffect, useState } from 'react';

const Home = () => {

const [characters, setCharacters] = useState([]);
const [locations, setLocations] = useState([]);
const [episodes, setEpisodes] = useState([]);

const getCharacters = async () => {
    const resp = await fetch ('https://rickandmortyapi.com/api/character');
    const data = await resp.json();
    setCharacters(data.results);
}

const getLocations = async() => {
    const resp = await fetch ('https://rickandmortyapi.com/api/location');
    const data = await resp.json();
    setLocations(data.results);
}

const getEpisodes = async() => {
    const resp = await fetch ('https://rickandmortyapi.com/api/episode');
    const data = await resp.json();
    setEpisodes(data.results);
}

useEffect(() => {
    getCharacters();
    getLocations();
    getEpisodes();
    }, [])

return (
    <div className = "container">
        <div className ="row">
                <h2 className="my-3">Personajes</h2>
                {characters.map((character) => (
                    <div className = "col-6 col-md-4 col-lg-3 p-3 mt-2" key={character.id}>
                        <img src={character.image} className="card-img-top  rounded-2" alt="..." />
                        <div className="card-body my-2">
                            <h4>{character.name}</h4>
                            <a href="#" className="btn btn-primary my-2">Ver más</a>
                        </div>
                    </div>
                ))}
        </div>

        <div className ="row">
                <h2 className="my-3">Localizaciones</h2>
                {locations.map((location) => (
                    <div className = "col-6 col-md-4 col-lg-3 p-3 mt-2" key={location.id}>
                        <div className="card-body my-2">
                            <h4>{location.name}</h4>
                            <a href={location.url} className="btn btn-primary my-2">Ver más</a>
                        </div>
                    </div>
                ))}
        </div>

        <div className ="row">
                <h2 className="my-3">Episodios</h2>
                {episodes.map((episodes) => (
                    <div className = "col-6 col-md-4 col-lg-3 p-3 mt-2" key={episodes.id}>
                        <div className="card-body my-2">
                            <h4>{episodes.name}</h4>
                            <a href="#" className="btn btn-primary my-2">Ver más</a>
                        </div>
                    </div>
                ))}
        </div>
        
    </div>
);
}

export default Home;