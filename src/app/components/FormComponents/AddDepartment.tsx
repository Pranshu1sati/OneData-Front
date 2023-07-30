import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
interface FormValues {
    department: string;
    hodId: string;
  }
export default function AddDepartment() {
    const initialValues: FormValues = {
        department: '',
        hodId: '',
      };
    
      const validationSchema = Yup.object({
        department: Yup.string().required('Department Name is required'),
        hodId: Yup.string().required('HOD ID is required'),
      });
    
      const handleSubmit = (values: FormValues) => {
        alert(JSON.stringify(values, null, 2));
      };
    
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <div>
      <Form className="px-4 rounded mx-auto max-w-3xl w-full my-8 Fields space-y-4 mt-8">
        <div>
          <h1 className="text-4xl font-bold">Add Departments</h1>
          <p className="text-gray-600">This will create a new department</p>
        </div>

       
          <>
            <div>
              <label htmlFor="department">Department Name</label>
              <Field
                className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="department"
                placeholder="Department of Computer Science"
                id="department"
              />
              <ErrorMessage name="department" component="div" />
            </div>

            <div>
              <label htmlFor="hodId">HOD ID</label>
              <Field
                className="border text-black border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
                type="text"
                name="hodId"
                placeholder="HOD123"
                id="hodId"
              />
              <ErrorMessage name="hodId" component="div" />
            </div>
          </>
       
          <button type="submit" className='bg-green-900 text-white uppercase py-2 px-4 rounded font-bold cursor-pointer border-2 border-slate-300 hover: bg-green-500 transition duration-2oo ease-in-out'>Submit</button>
      </Form>
    </div>
  </Formik>
  )
}