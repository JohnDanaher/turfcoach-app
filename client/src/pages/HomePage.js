import AddActivityForm from "../components/AddActivityForm";
import WeatherBox from "../components/WeatherBox";
import { useState, useEffect } from "react";
import axios from "axios";
import ActivityBox from "../components/ActivityBox";

export default function HomePage() {
  const [activities, setActivities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  const getActivities = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/activities`)
      .then((res) => setActivities(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getActivities();
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  const toggleWeather = () => setShowWeather(!showWeather);

  return (
    <div>
      <h1 className="text-3xl font-bold underline p-4">Activity Scheduler</h1>
      <div>
        <button onClick={toggleForm} className="bg-gray-200 border-solid border-2 border-gray-400 rounded p-1 shadow-md mb-3">
          {showForm ? "Hide Form" : "Add Activity"}
        </button>
      </div>
      <div>
        <button onClick={toggleWeather} className="bg-gray-200 border-solid border-2 border-gray-400 rounded p-1 shadow-md mb-1">
          {showWeather ? "Hide Forecast" : "Display Weather Forecast"}
        </button>
      </div>
      {showWeather && <WeatherBox />}
      {showForm && <AddActivityForm refreshActivities={getActivities} activities={activities}/>}
      {activities &&
        activities.map((acts) => {
          return (
            <div key={acts._id}>
              <ActivityBox acts={acts}/>
            </div>
          );
        })}
    </div>
  );
}
