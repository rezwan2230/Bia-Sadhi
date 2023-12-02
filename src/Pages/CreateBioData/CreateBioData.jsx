import { Button, Input } from "rizzui";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useUserBiodata from "../../hooks/useUserBiodata";


const CreateBioData = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const [, fetch] = useUserBiodata()

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const bioData = {
            email: user.email,
            name: data.name,
            age: parseInt(data.Age),
            dateofbirth: data.dateofbirth,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            occupation: data.occupation,
            photoURL: data.photoURL,
            FathersName: data.FathersName,
            mothersName: data.mothersName,
            race: data.race,
            ExpectedAge: parseInt(data.partnerAge),
            ExpectedHeight: data.partnerHeight,
            ExpectedWeight: data.partnerWeight,
            presentDivision: data.presentDivision,
            permanentDivision: data.permanentDivision,
            mobileNo: data.mobileNo
        }
        console.log(bioData);

        const res = await axiosPublic.post(`/biodata/${user.email}`, bioData)
        if (res.data.insertedId) {
            fetch()
            reset()
            Swal.fire({
                position: "center",
                icon: "success",
                title: "New Bio-Data has been published",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }

    return (
        <div>

            <div>
                <div className="flex flex-col md:flex-row h-[100vh]">

                    <div className="flex-1 mt-6">
                        <section >
                            <div className="">
                                <div
                                    className="first-letter:w-full px-0 py-10  mx-auto mt-4 mb-0  bg-transparent border-0 border-gray-200 rounded-lg md:bg-white md:border sm:w-10/12 lg:w-8/12   md:px-6 sm:mt-8 sm:mb-5 "
                                >
                                    <h1 className="mb-4 text-3xl font-semibold text-left text-gray-800 sm:text-center py-4">Create Your Bio-Data</h1>

                                    <form onSubmit={handleSubmit(onSubmit)} className="pb-1 space-y-4">


                                        <div className='grid grid-cols-3 gap-5'>

                                            <Input className='text-2xl font-semibold' {...register("name", { required: true })} label="Name" type='text' placeholder="Enter your name" variant="active" required />

                                            <div>
                                                <label className="text-black text-sm font-semibold mb-20">Gender</label>
                                                <select {...register("gender", { required: true })} name="brandname" id="" className="block w-full text-gray-700 bg-white border border-black rounded-md dark:bg-gray-800  focus:ring-opacity-40  focus:outline-none" required>
                                                    <option className='text-sm font-semibold' value="female">Male</option>
                                                    <option className='text-sm font-semibold' value="female">Female</option>
                                                </select>
                                            </div>


                                            <Input className='text-2xl font-semibold' {...register("photoURL", { required: true })} label="Photo URL" type='text' placeholder="Photo URL" variant="active" required />

                                            <Input className='text-2xl font-semibold' {...register("dateofbirth", { required: true })} label="Date of birth" type='date' placeholder="date of birth" variant="active" required />

                                            <Input className='text-2xl font-semibold' {...register("height", { required: true })} label="Height" type='text' placeholder="Height : 5.7" variant="active" required />

                                            <Input className='text-2xl font-semibold' {...register("weight", { required: true })} label="weight" type='number' placeholder="Weight : 58 kg" variant="active" required />

                                            <Input className='text-2xl font-semibold' {...register("Age", { required: true })} label="Age" type='number' placeholder="Age" variant="active" required />

                                            <Input className='text-2xl font-semibold' {...register("occupation", { required: true })} label="occupation" type='text' placeholder="Occupation" variant="active" required />



                                            <Input className='text-2xl font-semibold' {...register("FathersName")} label="Father's Name" type='text' placeholder="Father's Name" variant="active" />

                                            <Input className='text-2xl font-semibold' {...register("mothersName")} label="Mother's Name" type='text' placeholder="Mother's Name" variant="active" />

                                            <Input className='text-2xl font-semibold' {...register("partnerAge")} label="Expected partner Age" type='number' placeholder="Expected Age" variant="active" />

                                            <Input className='text-2xl font-semibold' {...register("partnerHeight")} label="Expected partner Height" type='text' placeholder="Expected Height" variant="active" />

                                            <div>
                                                <label className="text-black text-sm font-semibold mb-20">Present Division</label>
                                                <select {...register("presentivision", { required: true })} id="" className="block w-full text-gray-700 bg-white border border-black rounded-md dark:bg-gray-800  focus:ring-opacity-40  focus:outline-none" required>
                                                    <option className='text-sm font-semibold' value="dhaka">Dhaka</option>
                                                    <option className='text-sm font-semibold' value="chattagram">Chattagram</option>
                                                    <option className='text-sm font-semibold' value="rangpur">Rangpur</option>
                                                    <option className='text-sm font-semibold' value="rajshahi">Rajshahi</option>
                                                    <option className='text-sm font-semibold' value="khulna">Khunla</option>
                                                    <option className='text-sm font-semibold' value="barishal">Barishal</option>
                                                    <option className='text-sm font-semibold' value="sylhet">Sylhet</option>
                                                    <option className='text-sm font-semibold' value="maymansgingh">Maymanshingh</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="text-black text-sm font-semibold mb-20">Permanent Division</label>
                                                <select {...register("permanentDivision", { required: true })} id="" className="block w-full text-gray-700 bg-white border border-black rounded-md dark:bg-gray-800  focus:ring-opacity-40  focus:outline-none" required>
                                                    <option className='text-sm font-semibold' value="dhaka">Dhaka</option>
                                                    <option className='text-sm font-semibold' value="chattagram">Chattagram</option>
                                                    <option className='text-sm font-semibold' value="rangpur">Rangpur</option>
                                                    <option className='text-sm font-semibold' value="rajshahi">Rajshahi</option>
                                                    <option className='text-sm font-semibold' value="khulna">Khunla</option>
                                                    <option className='text-sm font-semibold' value="barishal">Barishal</option>
                                                    <option className='text-sm font-semibold' value="sylhet">Sylhet</option>
                                                    <option className='text-sm font-semibold' value="maymansgingh">Maymanshingh</option>
                                                </select>
                                            </div>

                                            <Input className='text-2xl font-semibold' {...register("partnerWeight")} label="Expected partner Weight" type='number' placeholder="Expected weight" variant="active" required/>

                                            <Input className='text-2xl font-semibold' {...register("race", { required: true })} label="Race" type='text' placeholder="Enter your Race" variant="active" required />

                                            <Input className='text-2xl font-semibold' {...register("mobileNo", { required: true })} label="Mobile No." type='text' placeholder="0131*****" variant="active" required /> 
                                        </div>

                                       


                                        <div className="flex items-center justify-between">
                                            <Button type='submit' className='text-white mx-auto bg-slate-700 px-5 mt-2 ' size="sm">Create Biodata</Button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CreateBioData;