import { styles } from "./SecondSection.styles";
import { Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import CompareIcon from '@mui/icons-material/Compare';
import ComputerIcon from '@mui/icons-material/Computer';

const ProfileSecondSection = () => {
    return(
        <section className={styles.secondSection}>
            <div className={styles.switchButtonsGroup}>
                <Button sx={styles.switchButtons} variant="text"><ComputerIcon />Saved Builds</Button>
                <Button sx={styles.switchButtons} variant="text"><CompareIcon />Compare</Button>
                <Button sx={styles.switchButtons} variant="text"><PersonIcon />Account</Button>
            </div>
        </section>
    );
};

export default ProfileSecondSection;