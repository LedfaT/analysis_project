import { useState } from 'react';
import { styles, buttonStyles } from './SecondSection.styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const categories = [
  'CPU', 'Motherboard', 'Graphics Card', 'RAM',
  'Storage', 'Case', 'Power Supply', 'CPU Cooler'
];

const ConfiguratorSecondSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className={styles.container}>
      <div className={styles.contentRow}>
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="contained"
              disableElevation
              sx={buttonStyles(cat === activeCategory)}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className={styles.searchContainer}>
          <SearchIcon className="text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeCategory}...`}
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorSecondSection;
