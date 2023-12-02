
import hudai from '../../assets/banner3.jpg'
const ViewBioData = () => {
    // const {name} = biodata
    return (
        <div>
            <div>
                <div className="text-center mt-6 mb-28 font-serif">
                    <h2 className="text-3xl font-serif">Bio Data- <span className='text-4xl'>1</span></h2>
                    <h4 className="font-serif text-xl">Personal Information</h4>
                    <hr className="w-28 mx-auto border-1 border-black mt-4" />

                    <div className="flex mt-12">
                        <div className=" h-96 flex-1 flex justify-center items-center text-left text-xl w-52 ml-20 pt-10  ">
                            <div className="text-xl space-y-3">
                                <h3>Name : Rezwanul Haque</h3>
                                <h3>Birth Date : 11-02-2000</h3>
                                <h3>Age : 23</h3>
                                <h3>Occupation : Banker</h3>
                                <h3>Gender : Male</h3>
                                <h3>Height : 5.7"</h3>
                                <h3>Weight : 75</h3>
                                <h3>Division : Rangpur</h3>
                                <h3>Father's Name : Khairul Islam</h3>
                                <h3>Mother's Name : Rawshan Ara</h3>
                                <h3>Race : African</h3>
                            </div>
                        </div>
                        <div className="flex-1 ">
                            <div className='ml-10'>
                                <img className='h-52 w-52 rounded-sm' src={hudai} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBioData;