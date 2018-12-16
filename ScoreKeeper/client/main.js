import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Shawn',
    score: 99
    },
    {
        _id: '2',
        name: 'Brad',
        score: -12
    },
    {
        _id: '3',
        name: 'Alex',
        score: -1
    }];
const renderPlayers = function (playersList) {
    return players.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
};
Meteor.startup(function () {
    let title = "Score Keep";
    let name = "shawn";
    let jsx = (
        <div>
            <h1> {title} </h1>
            <p>hello {name} </p>
            <p>This is my 2nd P</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});