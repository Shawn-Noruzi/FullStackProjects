import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Created By Shawn" />
                <div className="wrapper">
                    <PlayerList players={this.props.players} />
                    <AddPlayer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    players: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
};