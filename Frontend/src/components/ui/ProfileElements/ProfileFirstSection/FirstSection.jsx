import { styles } from "./FirstSection.styles";
import { Avatar, Button } from "@mui/material";
import { Context } from "@/contextProvider";
import { useContext } from "react";

const ProfileFirstSection = () => {
    const { store } = useContext(Context);
    const user = store.getData().user;
    return(
        <section className={styles.firstSection}>
            <div className={styles.profileInfo}>
                <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
                <div>
                    <div className={styles.userName}>{user.username}</div>
                    <div className={styles.userNickname}>PC Enthusiast</div>
                </div>
            </div>

            <div className={styles.buttonsGroup}>
                <Button sx={styles.editProfileButton} variant="text">
                    Edit Profile
                </Button>
            </div>
        </section>
    );
};

export default ProfileFirstSection;
