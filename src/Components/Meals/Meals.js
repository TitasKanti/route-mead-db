import React from 'react';
import { useHistory } from 'react-router';

const Meals = (props) => {
    // console.log(props)
    const { strMealThumb, strMeal, strInstructions, idMeal } = props.meal;
    const history = useHistory();
    const handleDetail = () => {
        history.push(`/MealDetail/${idMeal}`)
    }

    return (
        <div className="w-sm">
            <div className="mt-16 py-2 px-2 bg-whit md:w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                <img src={strMealThumb} alt="" />
                <div className="mt-4 text-green-600 text-center">
                    <h1 className="text-xl font-bold">{strMeal}</h1>
                    <p className="mt-4 text-gray-600">{strInstructions.slice(0, 100)}</p>
                    <button onClick={handleDetail} className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Meals;