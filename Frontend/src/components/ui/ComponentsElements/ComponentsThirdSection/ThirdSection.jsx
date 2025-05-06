import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { thirdSectionStyles } from "./ThirdSection.styles";
import StarIcon from "@mui/icons-material/Star";

const components = [
  {
    name: "Intel Core i9-13900K",
    title: "CPU",
    price: 589.99,
    rating: 4.8,
    description: "High-performance desktop processor with 24 cores...",
  },
];

const ComponentsThirdSection = ({ comp }) => {
  return (
    <div className={thirdSectionStyles.container}>
      <div className={thirdSectionStyles.wrapper}>
        <TextField
          sx={thirdSectionStyles.searchBar}
          fullWidth
          variant="outlined"
          placeholder="Search components..."
          size="small"
        />

        <div className={thirdSectionStyles.gridContainer}>
          {comp.map((component, index) => (
            <Card key={index} sx={thirdSectionStyles.card}>
              <CardContent className={thirdSectionStyles.cardContent}>
                <Typography variant="h6" className={thirdSectionStyles.name}>
                  {component?.title}
                </Typography>
                <Typography className={thirdSectionStyles.title}>
                  {component?.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={thirdSectionStyles?.price}
                >
                  ${component.cost.toFixed(2)}
                </Typography>
                <StarIcon className="text-yellow-500" />
                <Typography
                  variant="body2"
                  className={thirdSectionStyles?.description}
                >
                  {component.description}
                </Typography>
                <div className={thirdSectionStyles.buttonGroup}>
                  <Button
                    sx={thirdSectionStyles.buttonPrimary}
                    variant="outlined"
                    size="small"
                  >
                    Details
                  </Button>
                  <Button
                    sx={thirdSectionStyles.buttonSecondary}
                    variant="contained"
                    size="small"
                  >
                    Add to Build
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentsThirdSection;
