import {
  FaRoad,
  FaTrash,
  FaWater,
  FaLightbulb,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Road Damage",
      icon: <FaRoad size={40} className="text-blue-600" />,
    },
    {
      id: 2,
      title: "Garbage",
      icon: <FaTrash size={40} className="text-green-600" />,
    },
    {
      id: 3,
      title: "Flood",
      icon: <FaWater size={40} className="text-cyan-600" />,
    },
    {
      id: 4,
      title: "Street Light",
      icon: <FaLightbulb size={40} className="text-yellow-500" />,
    },
    {
      id: 5,
      title: "Mental Health",
      icon: <FaUserShield size={40} className="text-red-500" />,
    },
  ];

  const stats = [
    {
      title: "Reports",
      value: "1500+",
    },
    {
      title: "Solved",
      value: "1100+",
    },
    {
      title: "Citizens",
      value: "5000+",
    },
    {
      title: "Areas",
      value: "64",
    },
  ];

  return (
    <div className="bg-slate-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <h1 className="text-5xl font-bold leading-tight">

                Smart Citizen Reporting Platform

              </h1>

              <p className="mt-6 text-lg text-blue-100">

                Report road damage, garbage, flooding,
                street light problems, mentally disordered
                persons and other community issues easily.

              </p>

              <div className="mt-8 flex gap-4 flex-wrap">

                <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">

                  Report Now

                </button>

                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">

                  Explore Reports

                </button>

              </div>

            </div>

            <div>

              <img
                src="/logo.png"
                alt="CitizenConnect"
                className="w-full max-w-md mx-auto"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {stats.map((item) => (

              <div
                key={item.title}
                className="bg-white shadow-lg rounded-xl p-8 text-center"
              >

                <h2 className="text-4xl font-bold text-blue-600">

                  {item.value}

                </h2>

                <p className="mt-2 text-gray-600">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">

              Report Categories

            </h2>

            <p className="text-gray-500 mt-3">

              Select the category that matches your issue.

            </p>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {categories.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition text-center cursor-pointer"
              >

                <div className="flex justify-center">

                  {item.icon}

                </div>

                <h3 className="mt-5 font-semibold">

                  {item.title}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why CitizenConnect */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div>

              <img
                src="/logo.png"
                alt=""
                className="w-80 mx-auto"
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold">

                Why CitizenConnect?

              </h2>

              <p className="mt-5 text-gray-600 leading-8">

                CitizenConnect helps citizens quickly report
                environmental and local community problems.

                Reports are stored securely and can be reviewed
                by administrators for faster action.

              </p>

              <ul className="mt-8 space-y-4">

                <li className="flex items-center gap-3">

                  <FaArrowRight className="text-blue-600" />

                  Easy Online Reporting

                </li>

                <li className="flex items-center gap-3">

                  <FaArrowRight className="text-blue-600" />

                  Real-time Report Tracking

                </li>

                <li className="flex items-center gap-3">

                  <FaArrowRight className="text-blue-600" />

                  Secure Authentication

                </li>

                <li className="flex items-center gap-3">

                  <FaArrowRight className="text-blue-600" />

                  Admin Management

                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;