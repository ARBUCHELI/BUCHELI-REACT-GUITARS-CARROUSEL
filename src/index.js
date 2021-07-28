import React from 'react';
import ReactDOM from 'react-dom';
import { GuineaPigs } from './GuineaPigs';

const GUINEAPATHS = [
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/william-fonteneau-XPVzpMy33rs-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/william-fonteneau-223aGXPZRzc-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/luana-azevedo-YBTLqyeSpoY-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/alejandro-morelos-6WOtQjsxlpU-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/brent-ninaber-C8gib_msapY-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/edgar-moran-6FFGRYEHIZI-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/giancarlo-duarte-cTj8vbZeX44-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/jacek-dylag-71k2FbrLMjA-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/kari-shea-laHwVPkMTzY-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/leutrim-fetahu-USOqMHpBl5Q-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/louis-hansel-M_dJ_ScwaLE-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/luana-azevedo-EUx5biJPWUI-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/luana-azevedo-N9JzD5G5ryY-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/luana-azevedo-cHg5Eddb3LA-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/markus-spiske-CVCH4cdf2wo-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/matthijs-smit-N-VDzD5z71E-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/rock-zhou--6cScQvixFY-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/sayla-brown-H6j0Zsy91WY-unsplash.jpg',
  'https://raw.githubusercontent.com/ARBUCHELI/BUCHELI-REACT-GUITARS-CARROUSEL-IMAGES/master/images/sergei-sushchik-Dyo5xZX687M-unsplash.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() { 
    const src = GUINEAPATHS[this.state.currentGP]; 
    return <GuineaPigs src={src} />;
  }
}

ReactDOM.render(
  <GuineaPigsContainer />, 
  document.getElementById('app')
);
