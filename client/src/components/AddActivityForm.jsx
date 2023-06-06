import { useState } from "react";
import axios from "axios";

// Iteration 4
export default function AddActivityForm({ refreshActivities, activities }) {
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [user, setUser] = useState("");
  const [pitch, setPitch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newActivity = {
      type,
      time,
      user,
      pitch,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/activities`, newActivity)
      .then(() => {
        setType("");
        setTime("");
        setUser("");
        setPitch("");
        refreshActivities();
      })
      .catch((err) => console.log(err));
  };

  const pitchAvailable = (pitchNum) => {
    if(activities.filter((act) => act.pitch === pitchNum).length >= 1){
      return <option>Pitch {pitchNum} in use</option>
     } else {
      return <option value={pitchNum}>{pitchNum}</option>
     }
  };

  console.log(activities.filter((act) => act.pitch === 1));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-4"
            required
            onChange={(event) => setType(event.target.value)}
            name="type"
          >
            <option defaultValue={"Select an activity"}>
              Select an activity
            </option>
            <option value="Mowing">Mowing</option>
            <option value="Fertilisation">Fertilisation</option>
            <option value="Irrigation">Irrigation</option>
            <option value="Aeration">Aeration</option>
          </select>
        </div>
        <div className="pt-2">
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
          >
            <option selected>Select a caretaker</option>
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
          >
            <option selected>Select a pitch</option>
            {pitchAvailable(1)}
            {pitchAvailable(2)}
            {pitchAvailable(3)}
          </select>
        </div>

        <button type="submit" className="bg-gray-200 border-solid border-2 border-gray-400 rounded p-1 shadow-md m-3">Create Activity</button>
      </form>
    </div>
  );
}
