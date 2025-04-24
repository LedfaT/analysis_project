import { comparePageStyles } from "./Compare.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

const Compare = () => {
    return(
        <div className={comparePageStyles.comparePage}>
            <Header />
            <Footer />
        </div>
    );
};

export default Compare;