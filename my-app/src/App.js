import { useContext } from 'react';
import { SingInPage } from './pages/SignInPage';
import { ChatPage } from './pages/ChatPage';
import { Counter } from './components/Counter';
import { AppContext } from './contexts/AppContext';

/*
Omogućit App komponenti da u svoj state pohrani username koji se submitao u SignInPage komponenti.
Kada se u App komponenti pohrani usename, onda potrebno umjesto SignInPage prikazati ChatPage.
*/

function App() {
  const context = useContext(AppContext);



  return (
    <div>
      <Counter initialValue={0} step={1.255} precision={null} />
      {!context.isSignedIn && <SingInPage />}
      {context.isSignedIn && <ChatPage />}
    </div>
  );
}

export default App;
