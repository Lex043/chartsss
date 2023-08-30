import { createContext, useState } from "react";
import { countries, otherCountries } from "../utills/countries";
import axios from "axios";

const ChartsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ChartsProvider = ({ children }) => {
    const [text, setText] = useState(10);
    const [artistTrack, setArtistTrack] = useState("tracks");
    const [country, setCountry] = useState();

    const charts = ["tracks", "artists"];

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleArtistTracks = (e) => {
        setArtistTrack(e.target.value);
    };

    const countryChange = (e) => {
        setCountry(e.target.value);
    };

    const fetchTracks = () => {
        const apiUrl = "https://api.musixmatch.com/ws/1.1/chart.tracks.get";
        const apiKey = import.meta.env.VITE_MUSIXMATCH_API_KEY; // Replace with your actual Musixmatch API key

        const params = {
            page: 1,
            page_size: 10,
            country: "us",
            f_has_lyrics: 1,
            apikey: apiKey,
        };

        axios
            .get(apiUrl, { params })
            .then((response) => {
                console.log("Response data:", response.data);
                // Assuming that the API response structure contains the tracks data
                // setTracks(response.data.tracks);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);

                // Handle errors here
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchTracks();
    };

    return (
        <ChartsContext.Provider
            value={{
                text,
                artistTrack,
                country,
                charts,
                handleSubmit,

                handleChange,
                handleArtistTracks,
                countryChange,
                countries,
                otherCountries,
            }}
        >
            {children}{" "}
        </ChartsContext.Provider>
    );
};

export default ChartsContext;
