/**
 *  Umotajte sliku u figure i stavite figcaption s tasktom "Logo"
 */
 import logo from './logo.svg';

export function Logo() {
    return (<figure>
            <img src={logo} className="App-logo" alt="logo" />
            <figcaption>Logo</figcaption>
          </figure>
          );
  }