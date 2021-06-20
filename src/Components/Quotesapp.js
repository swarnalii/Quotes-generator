import React from 'react';
import axios from 'axios';
import './Quotesapp.css';
import img1 from './img1.png';

class Quotesapp extends React.Component {
    state = {
      quote: '',
    }
  
    componentDidMount() {
      this.fetchQuote();
    }
  
    fetchQuote = () => {
      axios.get('https://api.quotable.io/random?tags=famous-quotes')
        .then((res) => {
          //console.log(res.data.content);
          const quote = res.data.content;
          if(quote.length < 60)
            this.setState({ quote });
          else this.fetchQuote();
        })
        .catch((error) => {
          console.log(error);
        });
    }

    render(){
        return(
            <div className="app">
                <div className="quotebox">
                <div className="shape1"></div>
                <h1 className="quotation">{this.state.quote}</h1>
                </div>
                <button className="button" onClick={this.fetchQuote}>
                    <span>Generate Again</span>
                </button>
                <img className = "img1" src={img1} alt="img1"/>
            </div>
        );
    }
}  

export default Quotesapp;