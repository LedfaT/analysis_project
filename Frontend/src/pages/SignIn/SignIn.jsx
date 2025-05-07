import { signInPageStyles } from "./SignIn.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import MainSection from "../../components/ui/SignInElements/SignInMainSection/MainSection";

const SignIn = () => {
    return(
        <div className={signInPageStyles.signInPage}>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
};

export default SignIn;