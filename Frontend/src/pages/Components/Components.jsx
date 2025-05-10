import { componentsPageStyles } from "./Components.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ComponentsSecondSection from "../../components/ui/ComponentsElements/ComponentsSecondSection/SecondSection";
import ComponentsFirstSection from "../../components/ui/ComponentsElements/ComponentsFirstSection/FirstSection";

const Components = () => {
    return(
        <div className={componentsPageStyles.componentsPage}>
            <Header />
            <ComponentsFirstSection />
            <ComponentsSecondSection />
            <Footer />
        </div>
    );
};

export default Components;