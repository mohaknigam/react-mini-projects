import EmployeeCard from "./EmployeeCard";

const EmployeeOverview = () => {
  return (
    <div className="details-container">
      <div>Employee Details</div>
      <hr className="hr-tag" />
      <EmployeeCard />
    </div>
  );
};

export default EmployeeOverview;
