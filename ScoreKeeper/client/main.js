import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import App from './../imports/UI/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        //sort the scores by value 
        let players = Players.find({}, { sort: { score: -1 } }).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = "Score Keep";
        //send props to App component, render to html page using ReactDOM
        ReactDOM.render(<App title={title} players={positionedPlayers} />, document.getElementById('app'));
    });
});

