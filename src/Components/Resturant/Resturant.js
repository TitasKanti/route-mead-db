import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Resturant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearch = e => {
        const searchText = e.target.value;
        setSearchText(searchText);
    }
    return (
        <div className="p-4 bg-gray-400 md:flex md:justify-center items-center flex-col">
            <div className="bg-white md:w-1/2 rounded-md">
                <div className="mt-4 mb-2 border-2 px-2 flex justify-between rounde-md rounded-md">
                    <input onChange={handleSearch} className="flex-grow outline-none text-gray-600 focus:text-blue-600" type="text" placeholder="Search your meals..." />
                    <spa>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </spa>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:justify-center justify-items-center md:gap-8">
                {
                    meals.map(meal => <Meals
                        key={meal.idMeal}
                        meal={meal} />)
                }
            </div>
        </div>
    );
};

export default Resturant;