import AddDepartmentContainer from "../components/DashboardComponents/AddDepartmentContainer"
import AddTeacherContainer from "../components/DashboardComponents/AddTeacherContainer"
import DepartmentContainer from "../components/DashboardComponents/DepartmentContainer"

const Dashboard = () => {
  return (
    <article className=" p-5 w-full">
      <DepartmentContainer />
      <section className="grid grid-cols-2 gap-4 mt-8">
        <AddDepartmentContainer />
        <AddTeacherContainer />
      </section>
    </article>
  )
}
export default Dashboard