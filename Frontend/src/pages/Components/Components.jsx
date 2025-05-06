import { componentsPageStyles } from "./Components.styles";
import { useEffect, useState } from "react";
import cpuService from "@services/cpuService";
import motherboardService from "@services/motherboardService";
import gpuService from "@services/gpuService";
import ramService from "@services/ramService";
import ssdService from "@services/ssdService";
import hddService from "@services/hddService";
import towerService from "@services/towerService";
import powerSupplyService from "@services/powerSupplyService";
import coolingSystem from "@services/coolingSystem";
import waterCoolingSystemService from "@services/waterCoolingSystemService";
import bluetoothModuleService from "@services/bluetoothModuleService";
import wifiModule from "@services/wifiModule";

import ComponentsSecondSection from "../../components/ui/ComponentsElements/ComponentsSecondSection/SecondSection";
import ComponentsThirdSection from "../../components/ui/ComponentsElements/ComponentsThirdSection/ThirdSection";
import ComponentsFirstSection from "../../components/ui/ComponentsElements/ComponentsFirstSection/FirstSection";

const Components = () => {
  const [selectedComponent, setSelectedComponent] = useState("CPU");
  const [fetchedComponents, setFetchedComponents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchComponents(selectedComponent);
  }, [selectedComponent]);
  const components = [
    "CPU",
    "Motherboard",
    "Graphics Card",
    "RAM",
    "SSD",
    "HDD",
    "Tower",
    "Power Supply",
    "Fan Cooling System",
    "Water Cooling System",
    "Bluetooth module",
    "Wifi module",
  ];

  const fetchComponents = async function (component) {
    setIsLoading(true);

    try {
      let res;
      switch (component) {
        case "CPU":
          res = await cpuService.getAllCpus();
          break;

        case "Motherboard":
          res = await motherboardService.getAllMotherboards();
          break;

        case "Graphics Card":
          res = await gpuService.getAllGpus();
          break;

        case "RAM":
          res = await ramService.getAllRams();
          break;

        case "SSD":
          res = await ssdService.getAllSsds();
          break;

        case "HDD":
          res = await hddService.getAllHdds();
          break;

        case "Tower":
          res = await towerService.getAllTowers();
          break;

        case "Power Supply":
          res = await powerSupplyService.getAllSupplies();
          break;

        case "Fan Cooling System":
          res = await coolingSystem.getAllCollingSystems();
          break;

        case "Water Cooling System":
          res = await waterCoolingSystemService.getAllSystems();
          break;

        case "Bluetooth module":
          res = await bluetoothModuleService.getAllBluetoothModules();
          break;

        case "Wifi module":
          res = await wifiModule.getAllWifiModules();
          break;
      }

      if (res.status === 200) {
        if (!res.data.data) {
          setFetchedComponents(res.data);
          return;
        }

        setFetchedComponents(res.data.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
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

        <ComponentsThirdSection loading={isLoading} comp={fetchedComponents} />
      </div>
    </div>
  );
};

export default Components;
