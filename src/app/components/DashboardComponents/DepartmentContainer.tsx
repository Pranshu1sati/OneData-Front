import React from 'react';
import DepartmentList from './DepartmentList';

interface Department {
  _id: string;
  name: string;
  __v: number;
  hod:string | undefined;
}

interface DepartmentContainerProps {
  departments: Department[];
}

const DepartmentContainer: React.FC<DepartmentContainerProps> = ({ departments }) => {
    console.log(departments,"here is the props")

  return (
    <article className='w-full rounded-lg p-5 bg-white text-black'>
      <div className='w-full flex'>
        <div>
          <h1 className='font-extrabold text-4xl'>Departments</h1>
          <h2 className='font-semibold text-[#83c5be]'>{departments.length} teachers</h2>
        </div>
        <div className='flex ml-auto'>
          <div className='font-extrabold flex flex-col items-center mx-4 text-xl'>
            <div>{departments.length}</div>
            <div className='font-semibold text-[#83c5be]'>departments</div>
          </div>
          <div className='font-extrabold flex flex-col items-center text-xl'>
            <div>113</div>
            <div className='font-semibold text-[#83c5be]'>teachers</div>
          </div>
        </div>
      </div>
      <section className='w-full my-3'>
        <hr />
        <div id='department-header' className='grid grid-cols-6 my-2 text-[#83c5be] font-semibold text-lg'>
          <h3 className='col-span-2'>Name</h3>
          <h3 className='text-center'>H.O.D</h3>
          <h3 className='text-center'>Teachers</h3>
          <h3 className='text-center'>Papers</h3>
          <h3 className='text-center'>Placed</h3>
        </div>
        <hr />
        {/* Render the department list here */}
        {departments.map((department) => (
          <React.Fragment key={department._id}>
            <DepartmentList department={department}/>
            <hr />
          </React.Fragment>
        ))}
      </section>
    </article>
  );
};

export default DepartmentContainer;
