import { Link } from "react-router-dom";
import "../styles/FaqPage.css";

export  function FaqPage() {
    return (
      <div className="faq-page">
        <div className="faq-content">
          <h1>FAQ / Info</h1>
          <p>- Set your avatar</p>
          <p>- Set your username, or randomize it by clicking "Generate random name"</p>
          <p>- Set your text color </p>
          <p>- When you are ready press "Sign in"</p>
          <div className="faq-links">
            <Link to="/">Sign in page</Link>
          </div>
        </div>
      </div>
    );
  }