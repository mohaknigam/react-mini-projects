import "./style.css";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import EmployeeOverview from "./EmployeeOverview";

const DBPage = () => {
  return (
    <div className="db-container">
      <div className="header-container">
        <Header />
      </div>

      <div className="body-container">
        <EmployeeList />
        <EmployeeOverview />
      </div>
    </div>
  );
};

export default DBPage;
