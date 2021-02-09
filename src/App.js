import './App.css';
import Header from "./components/header/header.jsx"
import Sidebar from "./components/sidebar/sidebar";
import Messages from "./components/messages/messages";
import Posts from  "./components/posts/posts"

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Posts/>
        </div>
    );
}

export default App;
