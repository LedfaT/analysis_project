import { Button } from "@mui/material";
import { styles } from "./AccountSection.styles";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

const AccountSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.headerWrapper}>
          <h1 className={styles.headerTitle}>Account Information</h1>
          <div className={styles.headerSubtitle}>
            Manage your account settings and preferences
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.sectionTitle}>Personal Information</div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Photo</div>
            <div className={styles.value}></div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Name</div>
            <div className={styles.value}>John Doe</div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Email</div>
            <div className={styles.value}>john.doe@example.com</div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Member Since</div>
            <div className={styles.value}>January 15, 2023</div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.label}>Builds Created</div>
            <div className={styles.value}>3</div>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.sectionTitle}>Account Settings</div>
          <div className={styles.buttonWrapper}>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={styles.outlinedButton}
            >
              Edit Profile Information
            </Button>
            <Button
              variant="outlined"
              startIcon={<SettingsIcon />}
              sx={styles.outlinedButton}
            >
              Change Password
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              sx={styles.deleteButton}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSection;
