import { styles } from "./FirstSection.styles";

const CompareFirstSection = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Compare PC Builds</h1>
            <h2 className={styles.subtext}>Compare different PC builds side by side to find the perfect match for your needs</h2>
        </div>
    );
};

export default CompareFirstSection;