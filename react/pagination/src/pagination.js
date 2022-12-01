import React, { useState, useRef, useEffect, useCallback } from "react";
import "./styles.css";

export default function Pagination({setData}){
    const [query, setQuery] = useState("");
    const terms = ["dog", "nope", "office"];
    let page = useRef(0);

    const search = useCallback(() => {
        if (!query) {
            setData(null);
            return;
        }
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=y1ZFwiomdYKWy80gtSxU4iEdv165yeOD`
        )
            .then(response => response.json())
            .then(json => {
                setData(json.data);
            });
    }, [query, setData]);
    

    useEffect(()=>{search()},[query, search])
    

    const decrement = () => {
        const leftBtn = document.getElementById('left');
        const rightBtn = document.getElementById('right');
        page.current -= 1;
        
        if (page.current === 0) {
            leftBtn.disabled = true;
        }
        else if (page.current === terms.length - 2){
            rightBtn.disabled = false;
        }
        setQuery(terms[page.current])
    }
     const increment = () =>{
         const leftBtn = document.getElementById('left');
         const rightBtn = document.getElementById('right');
         page.current += 1;
         
         if (page.current === terms.length - 1) {
             rightBtn.disabled = true;
         }
         else if (page.current === 1) {
             leftBtn.disabled = false;
         }
        setQuery(terms[page.current]);
    }

    return (
        <>
            <div className="pagination">
                <button id='left' onClick={decrement}>{"<"}</button>
                <form onSubmit={e => {
                    e.preventDefault();
                    search();
                }}>
                    <input value={query} onChange={e => setQuery(e.target.value)} />{" "}
                    <input type="submit" value="Search" />
                </form>
                <button id='right' onClick={increment}>{">"}</button>
            </div>         
        </>
    )
}