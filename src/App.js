import { SignInPage } from './pages/SignInPage';
import { ChatPage } from './pages/ChatPage';
import { Counter } from './components/Counter';
import { Routes, Route } from "react-router-dom";
import { FaqPage } from './pages/FaqPage';
import { useContext } from 'react';
import { AppContext } from './contexts/AppContext';

/*
const initialState = {
  counter: 0,
  username: 'user',
};

function reducer(initialState, action) {
  console.log('REDUCER', initialState, action);
  if (action.type === 'INCREMENT') {
    return { ...initialState, counter: initialState.counter + action.value };
  }
  if (action.type === 'DECREMENT') {
    return { ...initialState, counter: initialState.counter - action.value };
  }
  return initialState;
}

const state1 = reducer(initialState, { type: 'INCREMENT', value: 2});
const state2 = reducer(state1, { type: 'DECREMENT', value: 3});

console.log('REDUCER', state1);
console.log('REDUCER', state2);
*/
/*
Omogućit App komponenti da u svoj state pohrani username koji se submitao u SignInPage komponenti.
Kada se u App komponenti pohrani usename, onda potrebno umjesto SignInPage prikazati ChatPage.
*/



function App() {
  const context = useContext(AppContext);

  if (context.error !== null) {
    return (
      <div>
        <h1>Error!</h1>
        <div>Something went wrong: {context.error.toString()}</div>
      </div>
    );
  }



  return (
    <div>
      <Counter initialValue={0} step={1.255} precision={null} />
      <Routes>
        <Route path="/">
          <Route index element={<SignInPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/faq" element={<FaqPage />} />
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
