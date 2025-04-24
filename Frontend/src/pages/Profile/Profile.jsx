import { profilePageStyles } from "./Profile.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

const Profile = () => {
    return(
        <div className={profilePageStyles.profilePage}>
            <Header />
            <Footer />
        </div>
    );
};

export default Profile;