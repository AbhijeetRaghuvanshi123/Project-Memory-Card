import { useState } from "react";

const Cars = ({ cards, handleShuffle , setScores , scores}) => {

    const [prevIds , setPrevIds] = useState([]);
    const checkMatch = (id) => {
        if(prevIds.includes(id)){
            return true;
        }
        return false;
    }

    const handleClick = (id) => {
        if(checkMatch(id)){
            if(scores.highScore < scores.score){
                setScores({
                    highScore: scores.score,
                    score: 0
                })
            }
            else{
                setScores(prev => ({
                    ...prev,
                    score: 0
                }))
            }

            setPrevIds([])
        }
        else{
            setPrevIds(prev => [...prev, id]);
            setScores(prev => ({...prev, score: prev.score + 1}))
        }

        handleShuffle();
    }

    return (
        <div className="cars-cards">
            {
                cards.map(car => {
                    return (
                        <img key={car.id}
                            onClick={() => handleClick(car.id)}
                            data-ci-make={car.make}
                            data-ci-model={car.model}
                            data-ci-year={car.year}
                            width={200}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cars;