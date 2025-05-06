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

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState("");

  const [totalPages, setTotalPages] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setPage(1);
    fetchComponents(selectedComponent);
  }, [selectedComponent]);

  useEffect(() => {
    fetchComponents(selectedComponent);
  }, [page]);

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
          res = await cpuService.getAllCpus(page, limit);
          break;

        case "Motherboard":
          res = await motherboardService.getAllMotherboards(page, limit);
          break;

        case "Graphics Card":
          res = await gpuService.getAllGpus(page, limit);
          break;

        case "RAM":
          res = await ramService.getAllRams(page, limit);
          break;

        case "SSD":
          res = await ssdService.getAllSsds(page, limit);
          break;

        case "HDD":
          res = await hddService.getAllHdds(page, limit);
          break;

        case "Tower":
          res = await towerService.getAllTowers(page, limit);
          break;

        case "Power Supply":
          res = await powerSupplyService.getAllSupplies(page, limit);
          break;

        case "Fan Cooling System":
          res = await coolingSystem.getAllCollingSystems(page, limit);
          break;

        case "Water Cooling System":
          res = await waterCoolingSystemService.getAllSystems(page, limit);
          break;

        case "Bluetooth module":
          res = await bluetoothModuleService.getAllBluetoothModules(
            page,
            limit
          );
          break;

        case "Wifi module":
          res = await wifiModule.getAllWifiModules();
          break;
      }

      if (res.status === 200) {
        setFetchedComponents(res.data.data);

        setTotalPages(res.data.meta.totalPages);
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

        <ComponentsThirdSection
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          loading={isLoading}
          comp={fetchedComponents}
        />
      </div>
    </div>
  );
};

export default Components;
