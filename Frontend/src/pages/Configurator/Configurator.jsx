import React, { useState } from "react";
import { configuratorPageStyles } from "./Configurator.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ConfiguratorFirstSection from "../../components/ui/ConfiguratorElements/ConfiguratorFirstSection/FirstSection";
import ConfiguratorSecondSection from "../../components/ui/ConfiguratorElements/ConfiguratorSecondSection/SecondSection";
import ConfiguratorThirdSection from "../../components/ui/ConfiguratorElements/ConfiguratorThirdSection/ThirdSection";
import ConfiguratorFourthSection from "../../components/ui/ConfiguratorElements/ConfiguratorFourthSection/FourthSection";
import ConfirmationDialog from "../../components/ui/ConfiguratorElements/ConfirmationDialog/ConfirmationDialog";

const Configurator = () => {
  const [activeCategory, setActiveCategory] = useState("CPU");
  const [build, setBuild] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pendingPart, setPendingPart] = useState(null);
  const [pendingCategory, setPendingCategory] = useState(null);

  const handleAddToBuild = (component, category) => {
    if (build[category]) {
      // Якщо компонент вже вибраний, показуємо діалог підтвердження
      setPendingPart(component);
      setPendingCategory(category);
      setDialogOpen(true);
    } else {
      // Якщо компонент ще не вибраний, додаємо його
      setBuild((prev) => ({
        ...prev,
        [category]: component,
      }));
    }
  };

  const handleConfirmReplace = () => {
    setBuild((prev) => ({
      ...prev,
      [pendingCategory]: pendingPart,
    }));
    setDialogOpen(false);
  };

  const calculateTotalPrice = () => {
    return Object.values(build).reduce(
      (total, component) => total + component.price,
      0
    );
  };

  const selectedCount = Object.keys(build).length;

  return (
    <div>
      <div className={configuratorPageStyles.configuratorPage}>
        <ConfiguratorFirstSection />
        <div className={configuratorPageStyles.mainGrid}>
          <div className={configuratorPageStyles.leftColumn}>
            <ConfiguratorSecondSection setActiveCategory={setActiveCategory} />
            <ConfiguratorFourthSection
              activeCategory={activeCategory}
              onAddToBuild={handleAddToBuild}
            />
          </div>
          <div className={configuratorPageStyles.rightColumn}>
            <ConfiguratorThirdSection
              build={build}
              totalPrice={calculateTotalPrice()}
              selectedCount={selectedCount}
            />
          </div>
        </div>

        <ConfirmationDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onConfirm={handleConfirmReplace}
          currentPart={build[pendingCategory]}
          newPart={pendingPart}
        />

        <Footer />
      </div>
      <div className={configuratorPageStyles.rightColumn}>
        <ConfiguratorThirdSection />
      </div>
    </div>
  );
};

export default Configurator;
