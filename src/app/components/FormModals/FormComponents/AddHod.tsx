import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
interface FormValues {
    teacherId: string;
    departmentId: string;
}
interface ChangeHodProps {
    _id: string;
}
const AddHod: React.FC<ChangeHodProps> = ({ _id }) => {
    const api = process.env.NEXT_PUBLIC_API;
    const [teachers, setTeachers] = useState<any>([]);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        async function fetchTeachers(): Promise<any> {
            try {
                const params = new URLSearchParams();
                params.append('departmentId', _id);
                const res = await fetch(`${process.env.NEXT_PUBLIC_API}/department/teachers`, {
                    method: "POST",
                    body: params,
                });
                const data = await res.json();
                console.log(data, "This is the fetched teachers");
                if (data.teachers) {
                    setTeachers(data);
                }
                else {
                    setError("Not found");
                }
                return data; // Assuming the response data is the actual teacher data you want to use.
            } catch (error) {
                console.log(error);
                setError("Something went wrong!");
                return null; // Or handle the error appropriately.
            }
        }

        fetchTeachers();
    }, []);

    const initialValues: FormValues = {
        teacherId: '',
        departmentId: "",
    };
    // const teachers=await getDepartmentTeachers(_id);
    console.log(teachers, "fetched teachers")
    const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        // Send the form data to the backend API
        await axios.post(`${api}/department/addhod`, values)
            .then((response: any) => {
                // Handle the API response if needed
                console.log(response);
                // alert('Form data submitted successfully!');
                resetForm();
            })

            .catch((error: any) => {

                // Handle errors if necessary
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form.');
            });
    };

    const validationSchema = Yup.object({
        teacherId: Yup.string().required('Teacher is required'),
        departmentId: Yup.string().required('Department is required'),
        // hodId: Yup.string().required('HOD ID is required'),
    });


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <div>
                <Form className="px-4 rounded mx-auto max-w-3xl w-full my-8 Fields space-y-4 mt-8 h-full">
                    <div>
                        <h1 className="text-4xl font-bold">Add HOD</h1>
                        <p className="text-gray-600">This will Assign HOD</p>
                    </div>

                    <div className='flex flex-col w-full h-full'>
                        <label htmlFor="teacher">Select Teacher</label>
                        <select name="teacher" id="teacher">
                            {
                                (teachers.length <= 0) ? <option value={""}>
                                    No teacher
                                </option> :
                                    <>
                                        {
                                            teachers.map((teacher: { _id: string, name: string }) => {
                                                return (
                                                    <option value={teacher._id}>{teacher.name}</option>
                                                )
                                            })
                                        }
                                    </>
                            }
                        </select>
                        <button type="submit" className='bg-green-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover:bg-green-500 transition duration-2oo ease-in-out mt-auto'>Submit</button>
                    </div>

                </Form>
            </div>
        </Formik>
    )
}

export default AddHod;