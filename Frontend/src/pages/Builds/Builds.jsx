import { buildsPageStyles } from "./Builds.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import BuildsFirstSection from "../../components/ui/BuildsElements/BuildsFirstSection/FirstSection";
import BuildsSecondSection from "../../components/ui/BuildsElements/BuildsSecondSection/SecondSection";
import BuildsThirdSection from "../../components/ui/BuildsElements/BuildsThirdSection/ThirdSection";

const Builds = () => {
  return (
    <div className={buildsPageStyles.buildsPage}>
      <BuildsFirstSection />
      <div className="flex mr-20 ml-20">
        <BuildsSecondSection />
        <BuildsThirdSection />
      </div>
    </div>
  );
};

export default Builds;
