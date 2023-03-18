import React from 'react';
import axios from 'axios';

import './App.css';

let slip_id = 0;
class App extends React.Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        slip_id = Math.floor((Math.random() * 200));

        axios.get(`https://api.adviceslip.com/advice/${slip_id}`)
        .then((response) => {
            console.log(response);
            let {advice} = response.data.slip;
            this.setState({advice: advice});
        }).catch((err)=> {
            if(err) console.log('an error detected in api call!')
        });
    }

    render() {
        const { advice } = this.state;
        return (
            // <div className="outer" style={{height: 'auto'}}>
            <>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Provide Me a Advice!</span>
                        </button>

                </div>
            </div>
            <div className="Social" style={{position: 'relative', bottom: '4rem', float: 'right', marginRight: '9rem'}}>
            
            <a style={{color: 'white', textDecoration: 'none', fontSize: '2rem'}} href='https://github.com/Ashudevrel' target="_blank"> <i class="bi bi-github" style={{color: 'Red'}}></i></a>
            <a style={{color: 'Purple', textDecoration: 'none', fontSize: '2rem'}} href='https://www.instagram.com/_ashu.hel/' target="_blank"> <i class="bi bi-instagram" style={{color: 'Fuchsia'}}></i></a>
            <a style={{color: 'Blue', textDecoration: 'none', fontSize: '2rem'}} href='https://twitter.com/Aman412OP' target="_blank"> <i class="bi bi-twitter" style={{color: 'aqua'}}></i></a>
            </div>
            </>
            // </div>
        );
    }
}

export default App;