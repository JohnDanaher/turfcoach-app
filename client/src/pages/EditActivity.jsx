import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditActivity() {
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [user, setUser] = useState("");
  const [pitch, setPitch] = useState();
  const { activityId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedActivity = { type, time, user, pitch };

    axios
      .put(`http://localhost:5005/activities/${activityId}`, updatedActivity)
      .then(() => navigate(`/`))
      .catch((err) => console.log(err));
  };

  const deleteActivity = () => {
    axios
      .delete(`http://localhost:5005/activities/${activityId}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5005/activities/${activityId}`)
      .then((response) => {
        setType(response.data.type);
        setTime(response.data.time);
        setUser(response.data.user);
        setPitch(response.data.pitch);
      });
  }, [activityId]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-3">
        <h1 className="text-xl font-bold p-4">Edit Activity</h1>

        <div>
          <select
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
            required
            onChange={(event) => setType(event.target.value)}
            name="type"
            value={type}
          >
            <option value="Mowing">Mowing</option>
            <option value="Fertilisation">Fertilisation</option>
            <option value="Irrigation">Irrigation</option>
            <option value="Aeration">Aeration</option>
          </select>
        </div>

        <div className="pt-3">
          <label className="pr-2">Select a time</label>
          <input
            required
            value={time}
            type="time"
            name="time"
            onChange={(event) => setTime(event.target.value)}
          />
        </div>

        <div>
          <select
            id="user"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-2 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(event) => setUser(event.target.value)}
            name="user"
            value={user}
          >
            <option value="John">John</option>
            <option value="Tom">Tom</option>
            <option value="Tony">Tony</option>
          </select>
        </div>

        <div>
          <select
            id="pitch"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 m-2 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(event) => setPitch(event.target.value)}
            name="pitch"
            value={pitch}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-gray-200 border-solid border-2 border-gray-400 rounded p-1 shadow-md m-2"
        >
          Save Changes
        </button>
        <div>
          <button
            onClick={deleteActivity}
            className="bg-red-700 text-white border-solid border-2 border-gray-400 rounded p-1 shadow-md mb-3"
          >
            Delete Activity
          </button>
        </div>
      </form>
    </div>
  );
}
