import { styles } from './ThirdSection.styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

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
            <div className="text-xs text-gray-500 flex items-center justify-between">
              <span>Select a {part.toLowerCase()}</span>
              <ArrowForwardIosIcon className="text-xs text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className="flex justify-between text-sm">
          <span>Total Price:</span>
          <span className="font-bold">$0.00</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">0 of 8 components selected <span className="ml-1 bg-gray-200 px-2 rounded-full">Incomplete</span></div>

        <button className={styles.saveButton}>💾 Save Build</button>
        <button className={styles.exportButton}>Export Parts List</button>
      </div>
    </div>
  );
};

export default ConfiguratorThirdSection;
