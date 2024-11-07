import { FaTrash } from 'react-icons/fa';
import AdminDashboard from '../../../components/AdminDashboard';
import "../../../css/ShowClass.css";
import { useAuth } from '../../../store/auth';
import { useNavigate } from 'react-router-dom';

function ShowClass() {
  const navigate = useNavigate();
  const { classes } = useAuth();
  console.log(classes.length);
  function handleClick() {
    navigate("/classdetails");
  }

  function handleAddClass() {
    navigate("/addclass");
  }
  return <>
    <AdminDashboard />
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className='class-name-th'>Class Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((className, index) => (
            <tr key={index} >
              <td>{className.classes}</td>
              <td className="actions">
                <button className="delete-btn">
                  <FaTrash />
                </button>
                <button className="view-btn" onClick={handleClick}>VIEW</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div >
      <button className="btn" onClick={handleAddClass}>Add Class</button>
    </div>
  </>
}

export default ShowClass;