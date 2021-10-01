import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';

const MealDetail = () => {
    const { idMeal } = useParams();
    const [mealDetail, setMealDetail] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals[0]))
    }, [])
    console.log(mealDetail)
    const history = useHistory();
    const handleClick = () => {
        history.push('/Resturant');
    }
    return (
        <div className="w-sm flex justify-center items-center">
            <div className="mt-16 py-2 px-2 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <img src={mealDetail.strMealThumb} alt="" />
                <div className="mt-4 text-green-600 text-center">
                    <h1 className="text-xl font-bold">{mealDetail.strMeal}</h1>
                    <p className="mt-4 text-gray-600">{mealDetail.strInstructions?.slice(0, 100)}</p>
                    <button onClick={handleClick} className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;