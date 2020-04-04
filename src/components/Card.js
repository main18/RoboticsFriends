import React from "react";
const Card = (robots)=>{
    /*const {id , name , email} = robots;*/
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/${robots.id}?size=200x200`} alt='robots'/>
            <div>
                <h2>{robots.name}</h2>
                <p>{robots.email}</p>
            </div>
        </div>
    );
}

export default Card;