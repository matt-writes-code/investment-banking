import React from 'react';
import './google-keep.css';
import GK from '../images/google-keep.png';

export default class GoogleKeep extends React.Component {
    render() {
        return (
            <div className="gk">
                <a href="https://keep.google.com/u/0/#label/Work" target="_blank"><img src={GK} className="image" /></a>
            </div>
        )
    }
}