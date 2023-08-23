import { useEffect, useState } from "react";

const useEmployees = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(12);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/employees");
      if (!response.ok) {
        throw new Error("Failed to fetch API");
      }

      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return list;
};

export default useEmployees;
