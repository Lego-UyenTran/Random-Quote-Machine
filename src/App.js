import { useState } from "react";
import "./App.css";

const getRandom = (array) => {
    const randomText = Math.trunc(Math.random() * array.length);
    return array[randomText];
};

function App() {
    const listText = [
        {
            id: 1,
            price: 10000,
        },
        {
            id: 2,
            price: 15000,
        },
        {
            id: 3,
            price: 20000,
        },
    ];

    const listAuthor = ["Nguyen Nhat Anh", "Le Duy Ngoc", "Nguyen Minh Trieu"];
    const [text, setText] = useState(() => {
        const initText = getRandom(listText);
        return initText;
    });

    const [author, setAuthor] = useState(() => {
        const initAuthor = getRandom(listAuthor);
        return initAuthor;
    });

    const handleClickRandomText = () => {
        const newText = getRandom(listText);
        setText(newText);
    };

    const handleClickRandomAuthor = () => {
        const newAuthor = getRandom(listAuthor);
        setAuthor(newAuthor);
    };

    return (
        <div id="qoute-box">
            <div id="text">{text.price}</div>
            <div id="author">{author}</div>
            <button id="new-qoute" onClick={handleClickRandomText}>
                Random text
            </button>
            <br></br>
            <a
                target="_blank"
                href="twitter.com/intent/tweet"
                id="tweet-quote"
                onClick={handleClickRandomAuthor}>
                Random author
            </a>
        </div>
    );
}

export default App;
