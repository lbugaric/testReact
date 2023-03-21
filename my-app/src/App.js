import { SignInPage } from './pages/SignInPage';
import { ChatPage } from './pages/ChatPage';
import { Counter } from './components/Counter';
import { Routes, Route } from "react-router-dom";

/*
Omogućit App komponenti da u svoj state pohrani username koji se submitao u SignInPage komponenti.
Kada se u App komponenti pohrani usename, onda potrebno umjesto SignInPage prikazati ChatPage.
*/

function App() {
  return (
    <div>
      <Counter initialValue={0} step={1.255} precision={null} />
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

/* swap za route
import { useContext } from 'react';
import { AppContext } from './contexts/AppContext';

  const context = useContext(AppContext);

      {!context.isSignedIn && <SignInPage />}
      {context.isSignedIn && <ChatPage />}
*/
