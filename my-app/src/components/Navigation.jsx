/**
 * 
 *  Napravite komponentu Navigation.jsx u mapi components
 * Navigation.jsx treba exporttati (named export) komponentu
 * Navigation. Komponenta prikazuje link iz App.js
 * Uključite komponentu Navigation u App.js
 */

export function Navigation() {
    return (
        <>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a href="#">Test</a>
      </>);
  }