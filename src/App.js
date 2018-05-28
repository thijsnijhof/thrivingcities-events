import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Event from './components/Event';
import EventOdd from './components/EventOdd';
import MoreEvents from './components/MoreEvents';

class App extends Component {
    constructor() {
        super()
        this.state = {
            eventTitleFirst: 'Music Festival',
            eventTitleThird: 'Barbeque',
            eventTextFirst: 'This awesome music event starts at 31st of May.\n' +
            'It covers local bands. Make sure to come with your friends!',
            eventTextThird:' Come and enjoy the amazing food of local restaurants.\n' +
                'Try your favorite local dishes!'
        }

    }

    render() {
        const {eventTitleFirst, eventTitleThird, eventTextFirst, eventTextThird} = this.state;
        return (
            <div className="App">
                <Landing/>
                <Event title={eventTitleFirst} description={eventTextFirst}/>
                <EventOdd/>
                <Event title={eventTitleThird} description={eventTextThird}/>
                <MoreEvents/>
            </div>
        );
    }
}

export default App;
