// const fetchChart = async ({ queryKey }) => {
//     const { chart, country, number } = queryKey[0];
//     if (!country) return Promise.resolve(null);

//     const response = await fetch("/api/musixmatch", {
//         method: "POST",
//         body: JSON.stringify({ chart, country, number }),
//     });

//     const data = await response.json();
//     return data;
// };

// export default fetchChart;

// useMusixmatchChart.js
import { useQuery } from "react-query";

const fetchMusixmatchChart = async ({ chart, country, number }) => {
    const response = await fetch("/api/musixmatch", {
        method: "POST",
        body: JSON.stringify({ chart, country, number }),
    });
    return response.json();
};

const useMusixmatchChart = (options) => {
    return useQuery(["musixmatchChart", options], () =>
        fetchMusixmatchChart(options)
    );
};

export default useMusixmatchChart;
