import React, { useState } from "react";
import { calculateWinner } from "./Utils";
import Board from "./Board";

const style = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    info: {
        fontSize: "2rem",
        opacity: "0.5",
        textShadow: "5px 5px #424242",
    },
    button: {
        padding: "10px 20px",
        cursor: "pointer",
        boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
        marginTop: "20px",
    }
};

const Game = () => {
    const[board, setBoard] = useState(Array(9).fill(null));
    const[xTurn, setXTurn] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const tmpBoard = [...board];
        if (winner || tmpBoard[i]) return;

        tmpBoard[i]= xTurn ? "X" : "O";
        setBoard(tmpBoard);
        setXTurn(!xTurn);
    };

    const resetBoard = () => {
        setBoard(Array(9).fill(null));
        setXTurn(true);
    };

    return (
        <div style={style.container}>
            <p style={style.info}>
                {winner ? "Winner:" + winner : "Next Player:" + (xTurn ? "X" : "O")}
            </p>
            <Board squares={board} handleClick={handleClick}/>
            <button style={style.button} onClick={resetBoard}>Start Game</button>
        </div>
    );
};

export default Game;