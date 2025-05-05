import { styles } from "./FirstSection.styles";
import { Avatar, Button } from "@mui/material";

const ProfileFirstSection = () => {
    return(
        <section className={styles.firstSection}>
            <div className={styles.profileInfo}>
                <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
                <div>
                    <div className={styles.userName}>John Doe</div>
                    <div className={styles.userNickname}>PC Enthusiast</div>
                </div>
            </div>

            <div className={styles.buttonsGroup}>
                <Button sx={styles.accountSettingsButton} variant="text">
                    Account Settings
                </Button>
                <Button sx={styles.editProfileButton} variant="text">
                    Edit Profile
                </Button>
            </div>
        </section>
    );
};

export default ProfileFirstSection;
