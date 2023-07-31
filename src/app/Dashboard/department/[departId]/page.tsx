import DepTeachersContainer from '@/app/components/DepartmentComponents/DepTeachersContainer';
import React from 'react'

const getDepartment = async (departId: string) => {
    try {
        console.log(departId);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/department/info/${departId}`, { cache: 'no-store' });
        const data=await res.json();
        return {department:data}
    }
    catch (error) {
        console.log(error + "Some error occred");
        return { department: null }
    }
}
export default async function page({ params }: any) {
    // console.log(params);
    const { departId } = params;
    console.log(departId);
    const {department} = await getDepartment(departId);
    console.log(department);
    const {teachers}=department;
    console.log(teachers,"teacher");
    return (
        <main>
            <DepTeachersContainer teachers={teachers} department={department}/>
        </main>
    )
}
