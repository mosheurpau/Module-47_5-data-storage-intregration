import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic     
                    key={cosmetic.id}
                    cosmetic = {cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;