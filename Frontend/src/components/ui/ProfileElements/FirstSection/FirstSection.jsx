import { styles } from "./FirstSection.styles";
import { Avatar } from "@mui/material";

const ProfileFirstSection = () => {
    return(
        <section className={styles.firstSection}>
            <div className={styles.profileInfo}>
                <Avatar src="/broken-image.jpg" />
                <span>Name</span>
                <div>Nickname</div>
            </div>
        </section>
    );
};

export default ProfileFirstSection;