import axios from "axios";
import { useEffect, useState } from "react";


const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => setPhones(data.data.data))
    }, [])
    return (
        <div>
            <h1 className="text-3xl font-bold mt-8 text-center">phones {phones.length}</h1>

        </div>
    );
};

export default Phones;