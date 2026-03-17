const Header = ({scores}) => {
    return (
        <div className="score-header">
            <div className="high-score">
                <h2>High Score: {scores.highScore}</h2>
            </div>
            <div className="score">
                <h2>Score: {scores.score}</h2>
            </div>
        </div>
    )
}

export default Header;