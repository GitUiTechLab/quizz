import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./Main";
import "./css/App.css";
import Registration from './pages/registration/Registration';
import Category from './pages/Category';
import GetStarted from './pages/GetStarted';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/registration" element={<Registration />} />
                <Route path='/categories' element={<Category />} />
                <Route path='/getstarted' element={<GetStarted />} />
                <Route path="/category/:name" element={<Category />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
