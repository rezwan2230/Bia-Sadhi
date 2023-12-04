import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import SixBiodata from "./SixBiodata/SixBiodata";

const Home = () => {
    return (
        <>
         <Helmet>
                <title>Sweetiny | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <SixBiodata></SixBiodata>
            </div>

        </>
    );
};

export default Home;