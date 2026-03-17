import { useState } from 'react'
import './App.css'
import Cars from './components/Cars.jsx'
import Header from './components/Header.jsx';

const cars = [
  { id: 1, make: "BMW", model: "3 Series", year: 2022 },
  { id: 2, make: "Audi", model: "A4", year: 2023 },
  { id: 3, make: "Tesla", model: "Model 3", year: 2022 },
  { id: 4, make: "Mercedes-Benz", model: "C-Class", year: 2021 },
  { id: 5, make: "Toyota", model: "Camry", year: 2022 },
  { id: 6, make: "Honda", model: "Civic", year: 2023 },
  { id: 7, make: "Ford", model: "Mustang", year: 2021 },
  { id: 8, make: "Chevrolet", model: "Corvette", year: 2023 },
  { id: 9, make: "Nissan", model: "GT-R", year: 2022 },
  { id: 10, make: "Porsche", model: "911", year: 2023 },
  { id: 11, make: "Lamborghini", model: "Huracán", year: 2021 },
  { id: 12, make: "Ferrari", model: "F8 Tributo", year: 2022 }
];

function App() {
  const [cards, setCards] = useState(cars);
  const [scores , setScores] = useState({
    score: 0,
    highScore: 0
  });

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const handleShuffle = () => {
    setCards(shuffle(cards));
  }

  return (
    <>
      <h1>Memory Car</h1>
      <div className="game">
        <Header scores={scores}/>
        <Cars cards={cards} handleShuffle={handleShuffle} setScores={setScores} scores={scores}/>
      </div>
    </>
  )
}

export default App
