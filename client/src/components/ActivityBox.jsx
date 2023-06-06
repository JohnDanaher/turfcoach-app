import { Link } from "react-router-dom";

export default function ActivityBox({ acts }) {
  return (
    <div className="flex justify-center">
      <Link to={`/activities/${acts._id}`} className="bg-gray-100 rounded w-1/4 p-4 mb-3 mt-2 shadow-md">
        <div>
          <h2 className="text-md font-bold">{acts.type}</h2>
          <h4 className="text-sm pt-1">{acts.time}</h4>
          <h4 className="text-sm">{acts.user}</h4>
          <h4 className="text-sm">Pitch {acts.pitch}</h4>

        </div>
      </Link>
    </div>
  );
}
