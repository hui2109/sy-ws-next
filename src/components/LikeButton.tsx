'use client';

import {useState} from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState<number>(0);

    function handleClick() {
        setLikes(likes + 1)
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Like ({likes})</button>
    );
}