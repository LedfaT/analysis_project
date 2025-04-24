import { configuratorPageStyles } from "./Configurator.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

const Configurator = () => {
    return(
        <div className={configuratorPageStyles.configuratorPage}>
            <Header />
            <Footer />
        </div>
    );
};

export default Configurator;