"use client"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function page() {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    userName: Yup.string().required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
        </div>
        <Formik
          initialValues={{
            email: '',
            userName: '',
            password: '',
            designation: '',
            dateofjoining: '',
            graduation: '',
            postgraduation: '',
            docterate: '',
            postdoc: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <Field
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
                </div>
                <div>
                  <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <Field
                    id="userName"
                    name="userName"
                    type="text"
                    autoComplete="userName"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                  />
                  <ErrorMessage name="userName" component="div" className="text-red-500 text-xs" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
                </div>
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                    Designation
                  </label>
                  <Field
                    id="designation"
                    name="designation"
                    type="text"
                    autoComplete="Assist Prof."
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Designation"
                  />
                </div>
                <div>
                  <label htmlFor="dateofjoining" className="block text-sm font-medium text-gray-700">
                    Date of joining
                  </label>
                  <Field
                    id="dateofjoining"
                    name="dateofjoining"
                    type="text"
                    autoComplete="15-5-2023"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Date of Joining"
                  />
                </div>
                <div>
                  <label htmlFor="graduation" className="block text-sm font-medium text-gray-700">
                    Graduation
                  </label>
                  <Field
                    id="graduation"
                    name="graduation"
                    type="text"
                    autoComplete="Graduation"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Graduation"
                  />
                </div>
                <div>
                  <label htmlFor="postgraduation" className="block text-sm font-medium text-gray-700">
                    Post Graduation
                  </label>
                  <Field
                    id="postgraduation"
                    name="postgraduation"
                    type="text"
                    autoComplete="Post Graduation"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Post Graduation"
                  />
                </div>
                <div>
                  <label htmlFor="docterate" className="block text-sm font-medium text-gray-700">
                    Docterate
                  </label>
                  <Field
                    id="docterate"
                    name="docterate"
                    type="text"
                    autoComplete="Docterate"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Docterate"
                  />
                </div>
                <div>
                  <label htmlFor="postdoc" className="block text-sm font-medium text-gray-700">
                    Postdoc
                  </label>
                  <Field
                    id="postdoc"
                    name="postdoc"
                    type="text"
                    autoComplete="Postdoc"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Postdoc"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Faculty account
                </button>
              </div>
            </Form>
           
          )}
        </Formik>
      </div>
    </div>
  );
}
