import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllBioCart from "../../components/SocialLogin/AllBioCart/AllBioCart";


const SingleBiodataPage = () => {
    const biodata = useLoaderData()
    const [isPremium, setisPremium] = useState(false)
    const [bioDatas, setBioDatas] = useState([])

    var url = 'http://localhost:5000/biodataSearch'

    const gender = biodata.gender

    if (gender === 'male') {
        url = 'http://localhost:5000/biodataSearch?male=male'
    }
    else {
        url = 'http://localhost:5000/biodataSearch?female=female'
    }


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBioDatas(data);
            })
    }, [url, gender])


    console.log(biodata);
    return (
        <div>
            <div className="flex">
                <div className="w-[800px]  fixed text-center pt-28 mb-60 font-serif ">
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
                                {
                                    isPremium && <>
                                        <h3>Gamil : {biodata.email}</h3>
                                        <h3>Mobile No. : {biodata.mobileNo}</h3>
                                    </>
                                }
                                <div>
                                    <Link to='/payment'><button className="button text-center mx-auto">Contact Request</button></Link>
                                </div>

                            </div>
                        </div>
                        <div className="flex-1 mt-12">
                            <div className='ml-10'>
                                <img className='h-52 w-52 rounded-sm' src={biodata.photoURL} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-96 mx-auto mt-40">
                    <div className="grid grid-cols-1 gap-5 text-left ml-96">
                        {
                            bioDatas.map((biodata) => <AllBioCart key={biodata._id} biodata={biodata}></AllBioCart>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleBiodataPage;