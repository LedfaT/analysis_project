import { componentsPageStyles } from "./Components.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ComponentsSecondSection from "../../components/ui/ComponentsElements/ComponentsSecondSection/SecondSection";
import ComponentsThirdSection from "../../components/ui/ComponentsElements/ComponentsThirdSection/ThirdSection";
import ComponentsFirstSection from "../../components/ui/ComponentsElements/ComponentsFirstSection/FirstSection";

const Components = () => {
  return (
    <div className={componentsPageStyles.componentsPage}>
      <ComponentsFirstSection />
      <div className="flex mr-20 ml-20">
        <ComponentsSecondSection />
        <ComponentsThirdSection />
      </div>
    </div>
  );
};

export default Components;
