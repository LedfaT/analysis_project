import {
  DefaultBluetooth,
  DefaultCPU,
  DefaultGPU,
  DefaultCooling,
  DefaultHDD,
  DefaultMother,
  DefaultPower,
  DefaultRAM,
  DefaultSSD,
  DefaultTower,
  DefaultWater,
  DefaultWIFI,
} from "../../types/componentsType";

export const tabsLink = [
  { name: "Bluetooth Модуль", url: "bluetooth-module", item: DefaultBluetooth },
  { name: "Computer", url: "computer" },
  { name: "Система охолодження", url: "cooling-system", item: DefaultCooling },
  { name: "Процессор", url: "CPU", item: DefaultCPU },
  { name: "Відеокарта", url: "GPU", item: DefaultGPU },
  { name: "Жорсткий диск", url: "HDD", item: DefaultHDD },
  { name: "Материнська плата", url: "motherboard", item: DefaultMother },
  { name: "Блок Живлення", url: "power-supply", item: DefaultPower },
  { name: "Оперативна Пам'ять", url: "RAM", item: DefaultRAM },
  { name: "ССД", url: "SSD", item: DefaultSSD },
  { name: "Корпус", url: "tower", item: DefaultTower },
  { name: "WI-FI Модуль", url: "wifi-module", item: DefaultWIFI },
  {
    name: "Водяна Система Охолодження",
    url: "water-cooling-system",
    item: DefaultWater,
  },
];
