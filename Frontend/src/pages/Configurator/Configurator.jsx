import { configuratorPageStyles } from "./Configurator.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ConfiguratorFirstSection from "../../components/ui/ConfiguratorElements/ConfiguratorFirstSection/FirstSection";
import ConfiguratorSecondSection from "../../components/ui/ConfiguratorElements/ConfiguratorSecondSection/SecondSection";
import ConfiguratorThirdSection from "../../components/ui/ConfiguratorElements/ConfiguratorThirdSection/ThirdSection";
import ConfiguratorFourthSection from "../../components/ui/ConfiguratorElements/ConfiguratorFourthSection/FourthSection";

const Configurator = () => {
  return (
    <div className={configuratorPageStyles.configuratorPage}>
      <ConfiguratorFirstSection />
      <div className={configuratorPageStyles.mainGrid}>
        <div className={configuratorPageStyles.leftColumn}>
          <ConfiguratorSecondSection />
          <ConfiguratorFourthSection />
        </div>
        <div className={configuratorPageStyles.rightColumn}>
          <ConfiguratorThirdSection />
        </div>
      </div>
    </div>
  );
};

export default Configurator;
