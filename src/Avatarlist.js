import React from 'react';
import './Avatar.css';

const Avatarlist = (props) =>{
    return (
        <div className="header ma4 bg-light-purple grow">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} title={props.name} alt={props.name} />
    <h2 className=""> {props.name} </h2>
    <p> web developer</p>
    </div>

    );
}
export default Avatarlist;