import './App.css';
import Header from "./components/header/header.jsx"
import Sidebar from "./components/sidebar/sidebar";
import Messages from "./components/messages/messages";
import Posts from "./components/posts/posts"
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Sidebar/>

                <Route path="/posts" component={Posts}/>
                <Route path="/messages" component={Messages}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
