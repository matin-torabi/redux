import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sliders from "../Slider/Sliders";
import Card from "../Card/Card";
import Categoryes from "../Category/Categoryes";
import Productsexists from "../Productsexist/Productsexists";
import Dastresi from "../Dastresi/Dastresi";
import Productses from "../Products/Productses";
import Brands from "../Brand/Brands";
import Articles from "../Articles/Articles";

const App = () => {
    return ( 
        <Provider store={store}>
            {/* <Counter/> */}
            <Header/>
            <Sliders />
            <Card/>
            <Categoryes/>
            <Productsexists/>
            <Dastresi/>
            <Productses/>
            <Brands/>
            <Articles/>
            <Footer />
        </Provider>
    );
}
 
export default App;