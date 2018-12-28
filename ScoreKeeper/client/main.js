import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from './../imports/api/players';
import TitleBar from './../imports/UI/TitleBar';
import AddPlayer from './../imports/UI/AddPlayer';
import Player from './../imports/UI/Player';



const renderPlayers = (playersList) => {
    return playersList.map((player) => {
        return <Player key={player._id} player={player} />;
    });
};
Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = "Score Keep";
        let jsx = (
            <div>
                <TitleBar title='Score Keeper' sub='version 1.0 - Made by Shawn Noruzi' />
               
                {renderPlayers(players)}
                <AddPlayer score={10} />
            

            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});

