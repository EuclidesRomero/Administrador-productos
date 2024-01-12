import Header from "../components/Header";
import Footer from "../components/Footer";

// eslint-disable-next-line react/prop-types
const BaseLayout = ({children}) => {
  return (
    <>
    <Header />
        {children}
    <Footer/> 
    </>
  );
};

export default BaseLayout;
