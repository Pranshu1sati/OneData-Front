import AddDepartmentContainer from "../components/DashboardComponents/AddDepartmentContainer"
import AddTeacherContainer from "../components/DashboardComponents/AddTeacherContainer"
import DepartmentContainer from "../components/DashboardComponents/DepartmentContainer"
import {PiStudentFill, PiChalkboardTeacherBold} from 'react-icons/Pi'
import { CgProfile } from "react-icons/cg";
import {BsFillBuildingFill} from 'react-icons/Bs'
import AddFacultyButton from "../components/addFaculty/AddFacultyButton";
import AddDepartmentButton from "../components/addDepartment/AddDepartmentButton";
import AddStudentsButton from "../components/addStudents/AddStudentsButton";
const Dashboard = () => {
  return (
    <article className="mt-16 p-5 w-full">
      <DepartmentContainer/>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="button bg-blue-500 text-white p-4 rounded-lg flex items-center">
          <PiChalkboardTeacherBold className="text-2xl mr-2" />
          <span><AddFacultyButton/></span>
        </div>
        <div className="button bg-green-500 text-white p-4 rounded-lg flex items-center">
          <PiStudentFill className="text-2xl mr-2" />
          <span><AddStudentsButton/></span>
        </div>
        <div className="button bg-red-500 text-white p-4 rounded-lg flex items-center">
          <BsFillBuildingFill className="text-2xl mr-2" />
          <span><AddDepartmentButton/></span>
        </div>
      </div>
    </article>
  )
}
export default Dashboard