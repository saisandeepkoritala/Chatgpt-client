/* eslint-disable react/prop-types */
import React from 'react';
import "../styles/answer.css";

const Answer = ({ string }) => {
    let render=<p>Something Went Wrong,Can not find information related to that</p>
    if(string){
            const replaced = string?.replace(/####/g, "");
            const divided = replaced?.split(/\. |(\[\[\d+\]\])/);
            render = divided?.map((item, index) => {
                const numberRegex = /\d+\.\n/g;
                if (item && !item.startsWith("[[") && 
                item.trim() !== "") {
                    const modified = item.replace(numberRegex, '');
                    const output = modified.split('\n')[0]; 
                    return <p key={index}>{output}</p>;
                }
                return null;
            });
    }

    else{
        console.log("no string")
    }
    return (
        <div className='answer'>{render}</div>
    );
};

export default Answer;
