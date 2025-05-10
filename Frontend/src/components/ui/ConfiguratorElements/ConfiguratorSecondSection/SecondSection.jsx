import { useState } from 'react';
import { styles, buttonStyles } from './SecondSection.styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const categories = [
  'CPU', 'Motherboard', 'GPU', 'RAM',
  'SSD', 'HDD', 'Case', 'Power Supply', "FCS", "WCS"
];

const ConfiguratorSecondSection = ({ setActiveCategory }) => {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const handleCategoryChange = (cat) => {
    setCurrentCategory(cat);
    setActiveCategory(cat);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentRow}>
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="contained"
              disableElevation
              sx={buttonStyles(cat === currentCategory)}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className={styles.searchContainer}>
          <SearchIcon className="text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${currentCategory}...`}
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorSecondSection;