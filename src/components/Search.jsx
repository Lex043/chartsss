import { BiChevronDown } from "react-icons/bi";
import { useContext } from "react";
import ChartsContext from "../context/ChartsssContext";

const Search = () => {
    const {
        text,
        artistTrack,
        country,
        handleSubmit,
        charts,
        handleChange,
        handleArtistTracks,
        countryChange,
        countries,
        otherCountries,
    } = useContext(ChartsContext);

    return (
        <section className="flex flex-col gap-8 lg:flex-row">
            <div className="bg-white rounded-[16px] py-6 px-4 lg:search_cont">
                <form
                    action="submit"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <label className="flex flex-col gap-1">
                        Top:
                        <input
                            min="1"
                            max="100"
                            type="number"
                            placeholder="10 (Default)"
                            onChange={handleChange}
                            className="w-full p-2 border-[1px] border-purpleBorder outline-none rounded-full"
                        />
                    </label>

                    <div>
                        <p>Chart:</p>
                        <div className="flex gap-2">
                            {charts.map((chart) => (
                                <div key={chart} className="w-full">
                                    <label
                                        htmlFor={chart}
                                        className="flex justify-center w-full p-2 border-[1.5px] border-purpleBorder outline-none rounded-full cursor-pointer"
                                    >
                                        <input
                                            id={chart}
                                            type="radio"
                                            value={chart}
                                            className="hidden peer"
                                            checked={artistTrack === chart}
                                            onChange={handleArtistTracks}
                                        />
                                        <span className="peer-checked:text-pink">
                                            {chart}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <label>
                        Country:
                        <div className="relative">
                            <BiChevronDown
                                size={20}
                                className="absolute top-[25%] right-[7px] min-w-[16px] pointer-events-none"
                            />
                            <select
                                name="country"
                                id="country"
                                required
                                defaultValue={"DEFAULT"}
                                onChange={countryChange}
                                className="w-full p-2 border-[1px] border-purpleBorder outline-none rounded-full appearance-none"
                            >
                                <option disabled value="DEFAULT">
                                    Pick a Country
                                </option>
                                {countries.map((country) => (
                                    <option
                                        key={country.value}
                                        value={country.label}
                                    >
                                        {country.label}
                                    </option>
                                ))}
                                <option disabled value="">
                                    other countries
                                </option>
                                {otherCountries.map((country) => (
                                    <option
                                        key={country.value}
                                        value={country.label}
                                    >
                                        {country.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </label>
                    <p className="mt-4 font-semibold text-[15px] text-pink">
                        Search for the: <br />
                        Top{" "}
                        <span className="text-purple">
                            {text} {artistTrack}
                        </span>{" "}
                        in{" "}
                        <span className="text-black">
                            {!country ? "..." : country}
                        </span>
                    </p>

                    <button className="text-white bg-pink w-full p-2 border-[1px] border-purpleBorder outline-none rounded-full cursor-pointer">
                        Search
                    </button>
                </form>
            </div>

            <div className="mt-4 rounded-[16px] bg-white w-full py-6 px-4 lg:awaiting_search lg:mt-0">
                <h3 className="text-purple border-b-[1px] border-purpleBorder pb-4 font-Arapey text-[24px] font-bold">
                    Awaiting Search...
                </h3>
                <div className="grid mt-8"></div>
            </div>
        </section>
    );
};

export default Search;
