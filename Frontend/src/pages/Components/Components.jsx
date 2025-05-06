import { componentsPageStyles } from "./Components.styles";
import { useEffect, useState } from "react";
import cpuService from "@services/cpuService";
import ComponentsSecondSection from "../../components/ui/ComponentsElements/ComponentsSecondSection/SecondSection";
import ComponentsThirdSection from "../../components/ui/ComponentsElements/ComponentsThirdSection/ThirdSection";
import ComponentsFirstSection from "../../components/ui/ComponentsElements/ComponentsFirstSection/FirstSection";

const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState("CPU");
  const [fetchedComponents, setFetchedComponents] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchComponents(selectedComponent);
  }, [selectedComponent]);
  const components = [
    "CPU",
    "Motherboard",
    "Graphics Card ",
    "RAM",
    "SSD",
    "HDD",
    "Case",
    "Power Supply",
    "Fan Cooling System",
    "Water Cooling System",
  ];

  const fetchComponents = async function (component) {
    setIsLoading(true);
    try {
      const res = await cpuService.getAllCpus();

      if (res.status === 200) {
        setFetchedComponents(res.data);
        console.log(res.data);
      }
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  return (
    <div className={componentsPageStyles.componentsPage}>
      <ComponentsFirstSection />
      <div className="flex mr-20 ml-20">
        <ComponentsSecondSection
          setSelectedComponent={setSelectedComponent}
          selectedComponent={selectedComponent}
          components={components}
        />
        {!isLoading && fetchedComponents && (
          <ComponentsThirdSection comp={fetchedComponents} />
        )}
      </div>
    </div>
  );
};

export default Components;
