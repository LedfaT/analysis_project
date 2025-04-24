import { componentsPageStyles } from "./Components.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ComponentsSecondSection from "../../components/ui/ComponentsElements/ComponentsSecondSection/SecondSection";
import ComponentsThirdSection from "../../components/ui/ComponentsElements/ComponentsThirdSection/ThirdSection";

const Components = () => {
    return(
        <div className={componentsPageStyles.componentsPage}>
            <Header />
            <div className="flex mr-20 ml-20">
                <ComponentsSecondSection />
                <ComponentsThirdSection />
            </div>
            <Footer />
        </div>
    );
};

export default Components;