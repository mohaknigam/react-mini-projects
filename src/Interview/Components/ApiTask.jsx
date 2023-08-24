import { useEffect, useState } from "react";
import { api_url } from "../Constants";

const ApiTask = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(api_url);
      if (!response.ok) {
        throw new Error("Error Fetching Data");
      }
      const obj = await response.json();
      const list = obj?.data.sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
      setUsers(list);
    } catch (error) {
      console.error("Error Fetching data", error);
    }
  };

  return (
    <div className="rating-container">
      <table className="border">
        <thead>
          <tr>
            <th className="border">Name</th>
            <th className="border">Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="border">
                  {item?.first_name + " " + item?.last_name}
                </td>
                <td className="border">{item?.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ApiTask;
