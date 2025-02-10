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

const vitals = [
  { name: "BPM", value: "72", unit: "bpm" },
  { name: "Heart Rate", value: "75", unit: "bpm" },
  { name: "Respiration Rate", value: "16", unit: "breaths/min" },
  { name: "Blood Pressure", value: "120/80", unit: "mmHg" },
  { name: "Oxygen Saturation", value: "98", unit: "%" },
];

export default function PatientDetails({ params }) {
  const patientId = Number.parseInt(params.id);
  const patient = patients.find((p) => p.id === patientId);

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Vitals</h2>
          {vitals.map((vital, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{vital.name}:</span>
              <span className="font-semibold">
                {vital.value} {vital.unit}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Patient Information</h2>
          <p>
            <strong>Name:</strong> {patient.name}
          </p>
          <p>
            <strong>Condition:</strong> {patient.condition}
          </p>
          <p>
            <strong>Age:</strong> {patient.age}
          </p>
          <p>
            <strong>Gender:</strong> {patient.gender}
          </p>
          <p>
            <strong>Blood Type:</strong> {patient.bloodType}
          </p>
        </div>
      </div>
      <Link href="/" className="text-blue-600 hover:underline">
        Back to Dashboard
      </Link>
    </div>
  );
}
