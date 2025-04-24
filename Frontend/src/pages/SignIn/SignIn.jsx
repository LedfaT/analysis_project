import { signInPageStyles } from "./SignIn.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

const SignIn = () => {
    return(
        <div className={signInPageStyles.signInPage}>
            <Header />
            <Footer />
        </div>
    );
};

export default SignIn;