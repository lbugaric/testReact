import { useState } from 'react';
import { SingInPage } from './pages/SignInPage';
import { ChatPage } from './pages/ChatPage';

/*
Omogućit App komponenti da u svoj state pohrani username koji se submitao u SignInPage komponenti.
Kada se u App komponenti pohrani usename, onda potrebno umjesto SignInPage prikazati ChatPage.
*/

function App() {
  const [ username, setUsername ] = useState('');
  function handleSubmit(username) {
    setUsername(username)
  }


  return (
    <div>
      {username === '' && <SingInPage onSubmit={handleSubmit} />}
      {username !== '' && <ChatPage />}
    </div>
  );
}

export default App;
