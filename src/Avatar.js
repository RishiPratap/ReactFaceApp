import React from 'react';
import './Avatar.css';
import 'tachyons';
// eslint-disable-next-line no-unused-vars
import Avatarlist from './Avatarlist.js';
  
const Avatar = (props) => {
    return (
    <div>
    <h1> Welcome to RishiPratap Website</h1>
    <p>Click to Reveal</p>
    <Avatarlist id="1" name="rishi"/>
    <Avatarlist id="2" name="raaj"/>
    <Avatarlist id="3" name="rahull"/>
    <Avatarlist id="4" name="raam"/>
    <br></br>
    <div id="group">
    <button>Subscribe</button>
    </div>
    </div>
    );
}

export default Avatar;