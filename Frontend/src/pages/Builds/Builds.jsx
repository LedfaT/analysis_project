import { buildsPageStyles } from "./Builds.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

const Builds = () => {
    return(
        <div className={buildsPageStyles.buildsPage}>
            <Header />
            <Footer />
        </div>
    );
};

export default Builds;