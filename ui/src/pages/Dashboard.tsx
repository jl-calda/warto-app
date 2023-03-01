import { FaBed, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center space-y-4">
      <h1 className="text-5xl font-bold">.warto</h1>
      <div className="flex space-x-0">
        <Link to="/search">
          <div className="bg-stone-500 flex-1 flex flex-col space-y-2 items-center rounded-l-full px-6 py-4 border border-stone-600">
            <span className="text-white font-bold">Looking for a room</span>
            <FaSearch className="text-white text-2xl" />
          </div>
        </Link>
        <Link to="/post">
          <div className="flex-1 flex flex-col space-y-2 items-center rounded-r-full px-6 py-4 border border-stone-600">
            <span className=" font-bold">Posting a room!</span>
            <FaBed className="text-2xl" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
