import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Container() {
    const [Likecount, setCount] = useState(0);
    let Dislikecount = 0;
    if (Likecount > 0)
    {
        Dislikecount = Likecount / 0;
    }

    return (
        <div>
            <h1>Doggo better than catz</h1>
            <br/>

            <table>
                <tr>
                    <th><p>Doggo</p></th>
                    <th><p>catz</p></th>
                </tr>
                <tr>
                    <th>
                        <h1>Likes</h1>
                        <p>{Likecount}</p>
                        <button onClick={() => setCount(Likecount + 1)}>Like Me</button>
                    </th>
                    <th>
                        <h1>Dislikes</h1>
                        <p>{Dislikecount}</p>
                        <button onClick={() => setCount(Likecount + 1)}>dislike Me</button>
                    </th>
                </tr>
                <tr>
                    <th><iframe width="500px" height="400px" src="https://www.youtube.com/embed/AXCZ7Ge28dc" title="Best DOGS on the internet! 🐶 (Funny DOGGOS Compilation) 🥰" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></th>
                    <th><iframe width="500px" height="400px" src="https://www.youtube.com/embed/yWkSySVPXEE" title="Cats Being Jerks Supercut" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></th>
                </tr>
                <tr>
                    <th>
                        <a href="https://www.thesprucepets.com/reasons-dogs-are-better-than-cats-1118371">
                            <img src="Pics/husky.jpg" alt="Doggo" width="500px" height="400px" />
                        </a>
                    </th>
                    <th>
                    <a href="https://www.elitedaily.com/women/cats-literally-suck/709388">
                            <img src="Pics/cat.jpg" alt="Doggo" width="500px" height="400px" />
                        </a>
                    </th>
                </tr>
                <tr>
                    <th><img src="Pics/Doggo.jpg" alt="Doggo2" width="500px" height="400px"/></th>
                    <th><img src="Pics/catz.jpg" alt="Doggo" width="500px" height="400px"/></th>
                </tr>
            </table>

            <hr/>

            <h2>Dogs be Gud</h2>
            <p>Just cos</p>

            <hr/>

            <h2>catz be bad</h2>
            <p>Cos cats be Jerks</p>

            <hr/>

            <h3>reason</h3>
            <iframe width="1000px" height="500px" src="https://www.youtube.com/embed/73HwmscV1U8" title="Reasons Why Dogs Are Better Than Cats, And Here Are The Pics And Memes To Prove It" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);