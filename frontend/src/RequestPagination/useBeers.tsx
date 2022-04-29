import { useState } from "react";
import api from "../services/api";

interface BeersFormat {
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
}

export default function useBeers(pageLimit: number) {
    const [beers, setBeers] = useState<BeersFormat[]>([]);

    function requestBeers(page: number) {
        const currentPage = ((page - 1) * pageLimit) <= 1 ? 1 : ((page - 1) * pageLimit);

        api.get(`beers?page=${currentPage}&per_page=${pageLimit}`)
            .then(function (response) {

                const { data } = response;

                setBeers(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return {
        requestBeers,
        beers
    }
}