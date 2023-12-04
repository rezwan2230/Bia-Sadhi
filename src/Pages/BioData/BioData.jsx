import useUserBiodata from '../../hooks/useUserBiodata';

const BioData = () => {
    const [biodatas, refetch] = useUserBiodata()

    return (
        <div>
            {

                biodatas.length>0 ? <><div>
                    {
                        biodatas.map(biodata => <div key={biodata._id}>
                            <div>
                                <div className="text-center mt-6 mb-60 font-serif ">
                                    <h2 className="text-3xl font-serif">Bio Data- <span className='text-4xl '>{biodata.biodataID}</span></h2>
                                    <h4 className="font-serif text-xl">Personal Information</h4>
                                    <hr className="w-28 mx-auto border-1 border-black mt-4" />

                                    <div className="flex ">
                                        <div className="mt-36 h-96 flex-1 flex justify-center items-center text-left text-xl w-52 ml-20 pt-10  ">
                                            <div className="text-xl space-y-3">
                                                <h3>Name : {biodata.name}</h3>
                                                <h3>Birth Date : {biodata.dateofbirth}</h3>
                                                <h3>Age : {biodata.age}</h3>
                                                <h3>Occupation : {biodata.occupation}</h3>
                                                <h3>Gender : {biodata.gender}</h3>
                                                <h3>Height : {biodata.height}</h3>
                                                <h3>Weight : {biodata.weight}</h3>
                                                <h3>Present Division : {biodata.presentDivision}</h3>
                                                <h3>Permanent Division : {biodata.permanentDivision}</h3>
                                                <h3>Father's Name : {biodata.FathersName}</h3>
                                                <h3>Mother's Name : {biodata.mothersName}</h3>
                                                <h3>Expected Partner Age : {biodata.ExpectedAge}</h3>
                                                <h3>Expected Partner Height : {biodata.ExpectedHeight}</h3>
                                                <h3>Expected Partner Weight : {biodata.ExpectedWeight}</h3>
                                                <h3>Gamil : {biodata.email}</h3>
                                                <h3>Mobile No. : {biodata.mobileNo}</h3>

                                            </div>
                                        </div>
                                        <div className="flex-1 mt-12">
                                            <div className='ml-10'>
                                                <img className='h-52 w-52 rounded-sm' src={biodata.photoURL} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div></>



                    : <>
                        <div className="flex justify-center items-center h-[90vh]">
                            <h3 className="text-4xl -mt-20">You haven't published any biodata yet</h3>
                        </div>


                    </>
            }
        </div>

    );
};

export default BioData;