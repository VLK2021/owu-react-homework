import React from 'react';
import {useSearchParams} from "react-router-dom";
import Button from "../Button/Button";

const Paginator = ({info:{pages, next, prev}}) => {

    const [params] = useSearchParams();
    const pagesArr = [];

    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i)
    }

    return (
        <div>
            <Button to={`?page=${+params.get('page') - 1}`} disabled={!prev}>Prev</Button>
            {/*{pagesArr.map(page => <Button key={page} to={`?page=${page}`} isNav={true}>{page}</Button>)}*/}
            <Button to={`?page=${+params.get('page') + 1}`} disabled={!next}>Next</Button>




        </div>
    );
};

export default Paginator;