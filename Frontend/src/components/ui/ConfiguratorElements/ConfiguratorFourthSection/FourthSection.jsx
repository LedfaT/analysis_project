import React, { useState } from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";
import { styles } from "./FourthSection.styles";
import StarIcon from "@mui/icons-material/Star";
import ComponentDetailsDialog from "../../../layout/ComponentDetailsDialog/ComponentDetailsDialog";
import ComponentCard from "@/components/ui/ComponentsElements/ComponentsThirdSection/ComponentCard";

const ConfiguratorFourthSection = ({
  activeCategory,
  onAddToBuild,
  components,
}) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleDetailsClick = (component) => {
    setSelectedComponent({ ...component, category: activeCategory });
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          {components.map((component, index) => (
            <ComponentCard
              key={index}
              addToBuild={onAddToBuild}
              showDetails={handleDetailsClick}
              component={component}
            />
          ))}
        </div>
      </div>

      <ComponentDetailsDialog
        open={detailsOpen}
        onClose={handleCloseDetails}
        component={selectedComponent}
      />
    </div>
  );
};

export default ConfiguratorFourthSection;
