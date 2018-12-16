import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';




const renderPlayers = function (playersList) {
    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>;
    });
};
Meteor.startup(function () {
    Tracker.autorun(function () {
        let players = Players.find().fetch();
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

    Players.insert({
        name: 'rad',
        score: 45
    });

});

