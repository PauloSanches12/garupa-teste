import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from 'query-string';

export default function Pagination() {
    const location = useLocation();
    const navigate = useNavigate();

    const [actualPage, setActualPage] = useState(
        getActualPage() || 1
    )

    function getActualPage() {
        const queryParams = qs.parse(location.search);
        const page = queryParams.page;

        return page ? Number(page) : undefined;
    }

    useEffect(() => {
        const queryParams = qs.parse(location.search);
        // const navigate = useNavigate();
        navigate({
            search: qs.stringify({
                ...queryParams,
                page: actualPage
            })
        }) 
    }, [actualPage])

    return {
        setActualPage,
        actualPage
    }
}