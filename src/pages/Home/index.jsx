import "./styles.css";
import { Link } from 'react-router-dom';

//Components
import Header from "../../components/Header/index";
import Body from "../../components/Body/index";
import Footer from "../../components/Footer/index";

function Home(){
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Home;