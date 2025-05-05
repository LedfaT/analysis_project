import { styles } from './ThirdSection.styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';


const parts = [
  'CPU', 'Motherboard', 'Graphics Card', 'RAM',
  'Storage', 'Case', 'Power Supply', 'CPU Cooler'
]

const ConfiguratorThirdSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Build</h2>
      <p className={styles.subtitle}>
        Select components from each category to complete your build
      </p>

      <div className={styles.partsList}>
        {parts.map((part, idx) => (
          <div key={idx} className={styles.partItem}>
          <div className="text-sm font-medium">{part}</div>
          <div className="text-xs text-gray-500">
            Select a {part.toLowerCase()}
          </div>
          <ArrowForwardIosIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className="flex justify-between text-sm">
          <span>Total Price:</span>
          <span className="font-bold">$0.00</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">0 of 8 components selected <span className="ml-1 bg-gray-200 px-2 rounded-full">Incomplete</span></div>

        <Button fullWidth sx={styles.saveButton}>
          💾 Save Build
        </Button>

        <Button fullWidth sx={styles.exportButton}>
          Export Parts List
        </Button>
      </div>
    </div>
  );
};

export default ConfiguratorThirdSection;
