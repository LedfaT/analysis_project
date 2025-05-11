import { useState } from "react";
import { styles } from "./SavedBuildsSection.styles";
import { Link } from 'react-router-dom';

const SavedBuildsSection = () => {
  const builds = [
    {
      name: "Ultimate Gaming Rig",
      price: "$3,499.99",
      date: "2023-08-15",
      type: "High-End",
      tags: ["$3,499.99", "high-end", "Gaming", "Streaming", "Content Creation"],
      summary: {
        totalPrice: "$3,499.99",
        componentsCount: 8,
        created: "2023-08-15",
        type: "High-End",
      },
      components: [
        { type: "CPU", name: "Intel Core i9-13900K", price: "$589.99" },
        { type: "Motherboard", name: "ASUS ROG Maximus Z790 Hero", price: "$629.99" },
        { type: "GPU", name: "NVIDIA GeForce RTX 4090", price: "$1599.99" },
        { type: "RAM", name: "Corsair Vengeance RGB Pro 32GB", price: "$129.99" },
        { type: "SSD", name: "Samsung 990 Pro 2TB", price: "$179.99" },
        { type: "Case", name: "Lian Li O11 Dynamic EVO", price: "$169.99" },
        { type: "Power Supply", name: "Corsair RM1000x", price: "$189.99" },
        { type: "WCS", name: "NZXT Kraken Z73", price: "$279.99" },
      ],
    },
    {
      name: "Mid-Range Powerhouse",
      price: "$1,799.99",
      date: "2023-07-22",
      type: "Mid-Range",
      tags: ["$1,799.99", "mid-range", "Gaming"],
      summary: {
        totalPrice: "$1,799.99",
        componentsCount: 7,
        created: "2023-07-22",
        type: "Mid-Range",
      },
      components: [
        { name: "Intel Core i7-13700K", price: "$419.99" },
        { name: "MSI MAG Z790 Tomahawk", price: "$329.99" },
        { name: "NVIDIA GeForce RTX 4070 Ti", price: "$799.99" },
        { name: "Corsair Vengeance RGB Pro 32GB", price: "$129.99" },
        { name: "Samsung 980 Pro 1TB", price: "$119.99" },
        { name: "NZXT H510", price: "$99.99" },
        { name: "Corsair RM850x", price: "$149.99" },
      ],
    },
    {
      name: "My Custom Gaming Rig",
      price: "$3,499.99",
      date: "2023-09-05",
      type: "Custom",
      tags: ["$3,499.99", "custom", "Gaming"],
      summary: {
        totalPrice: "$3,499.99",
        componentsCount: 8,
        created: "2023-09-05",
        type: "Custom",
      },
      components: [
        { name: "AMD Ryzen 9 7950X", price: "$699.99" },
        { name: "ASUS Crosshair X670E Hero", price: "$599.99" },
        { name: "NVIDIA GeForce RTX 4080", price: "$1199.99" },
        { name: "G.Skill Trident Z5 RGB 32GB", price: "$159.99" },
        { name: "Samsung 990 Pro 2TB", price: "$179.99" },
        { name: "Fractal Design Meshify 2", price: "$169.99" },
        { name: "Corsair RM1000x", price: "$189.99" },
        { name: "NZXT Kraken Elite 360", price: "$299.99" },
      ],
    },
  ];

  const [selectedBuild, setSelectedBuild] = useState(null);

  return (
    <div className={styles.section}>
      {/* LEFT PANEL */}
      <div className={styles.leftPanel}>
        <div className={styles.header}>
          <h1 className={styles.title}>Your Builds</h1>
          <div className={styles.subtitle}>
            {builds.length} builds saved to your profile
          </div>
        </div>

        <div className={styles.buildsList}>
          {builds.map((build, index) => (
            <div
              key={index}
              className={`${styles.buildItem} ${selectedBuild?.name === build.name ? styles.buildItemSelected : ""}`}
              onClick={() => setSelectedBuild(build)}
            >
              <div className={styles.buildInfo}>
                <div className={styles.buildName}>{build.name}</div>
                <div className={styles.buildMeta}>
                  {build.price} • {build.date}
                </div>
              </div>
              <div className="text-gray-400">⋮</div>
            </div>
          ))}
        </div>

        <div className={styles.createButtonWrapper}>
        <Link to="/configurator">
          <button className={styles.createButton}>
            <span>＋</span> Create New Build
          </button>
        </Link>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.rightPanel}>
        {selectedBuild ? (
          <>
            <h2 className={styles.buildTitle}>{selectedBuild.name}</h2>

            <div className={styles.buildTags}>
              {selectedBuild.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.summary}>
              <p><strong>Total Price:</strong> {selectedBuild.summary.totalPrice}</p>
              <p><strong>Components:</strong> {selectedBuild.summary.componentsCount}</p>
              <p><strong>Created:</strong> {selectedBuild.summary.created}</p>
              <p><strong>Type:</strong> {selectedBuild.summary.type}</p>
            </div>

            <div className={styles.componentList}>
              {selectedBuild.components.map((component, i) => (
                <div key={i} className={styles.componentItem}>
                  <span>{component.type}</span>
                  <span>{component.name}</span>
                  <span>{component.price}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-gray-400 text-center mt-32">Select a build to see details</div>
        )}
      </div>
    </div>
  );
};

export default SavedBuildsSection;
