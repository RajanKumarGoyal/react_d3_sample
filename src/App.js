import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./router/Routes";
import Header from "./components/Header";
import './App.css';

function App() {

    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}

export default App;
