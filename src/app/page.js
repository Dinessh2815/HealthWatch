import Link from "next/link";

const patients = [
  {
    id: 1,
    name: "John Doe",
    condition: "Hypertension",
    age: 45,
    gender: "Male",
    bloodType: "A+",
  },
  {
    id: 2,
    name: "Jane Smith",
    condition: "Diabetes",
    age: 52,
    gender: "Female",
    bloodType: "O-",
  },
  {
    id: 3,
    name: "Mike Johnson",
    condition: "Asthma",
    age: 30,
    gender: "Male",
    bloodType: "B+",
  },
  {
    id: 4,
    name: "Emily Brown",
    condition: "Arthritis",
    age: 68,
    gender: "Female",
    bloodType: "AB-",
  },
  {
    id: 5,
    name: "David Lee",
    condition: "Migraine",
    age: 41,
    gender: "Male",
    bloodType: "A-",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Doctor Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 border-b text-left px-4">Patient Name</th>
              <th className="py-2 border-b text-left px-4">Condition</th>
              <th className="py-2 border-b text-left px-4">Age</th>
              <th className="py-2 border-b text-left px-4">Gender</th>
              <th className="py-2 border-b text-left px-4">Blood Type</th>
              <th className="py-2 border-b text-left px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-[#E3FFFB]">
                <td className="py-2 px-4 border-b">{patient.name}</td>
                <td className="py-2 px-4 border-b">{patient.condition}</td>
                <td className="py-2 px-4 border-b">{patient.age}</td>
                <td className="py-2 px-4 border-b">{patient.gender}</td>
                <td className="py-2 px-4 border-b">{patient.bloodType}</td>
                <td className="py-2 px-4 border-b">
                  <Link href={`/patient/${patient.id}`}>
                    <button className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
