import { profilePageStyles } from "./Profile.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ProfileFirstSection from "../../components/ui/ProfileElements/ProfileFirstSection/FirstSection";
import ProfileSecondSection from "../../components/ui/ProfileElements/ProfileSecondSection/SecondSection";

const Profile = () => {
    return(
        <div className={profilePageStyles.profilePage}>
            <Header />
            <ProfileFirstSection />
            <ProfileSecondSection />
            <Footer />
        </div>
    );
};

export default Profile;