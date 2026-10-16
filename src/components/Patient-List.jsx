



import axios from "axios";
import { useEffect, useState } from "react";

function PatientList() {
  const API_URL =
    "https://demo.lupinary.com/api/patients?user_id=1&clinic_id=1&page_no=0";

  const [list, update] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(API_URL);
      const data = response.data;

      console.log("Complete API response:", data);

     
      const patients = Array.isArray(data)
        ? data
        : Array.isArray(data?.data)
        ? data.data
        : Array.isArray(data?.data?.patients)
        ? data.data.patients
        : Array.isArray(data?.patients)
        ? data.patients
        : Array.isArray(data?.patients?.data)
        ? data.patients.data
        : Array.isArray(data?.result)
        ? data.result
        : Array.isArray(data?.items)
        ? data.items
        : [];

      update(patients);

      if (patients.length === 0) {
        console.log("No patient array found. Check the API response.");
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Unable to load patient details."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>
          <p className="mt-4 font-medium text-slate-600">
            Loading patient details...
          </p>
        </div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="text-xl font-bold text-red-600">
            Something went wrong!
          </h2>
          <p className="mt-3 text-slate-600">{error}</p>

          <button
            onClick={getProduct}
            className="mt-5 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-5 sm:p-10">
      <div className="mx-auto max-w-7xl">

     
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Patient Management
            </p>

            <h1 className="text-3xl font-extrabold text-slate-800 sm:text-4xl">
              Patient Directory
            </h1>

            <p className="mt-2 text-slate-500">
              View patient information and available details.
            </p>
          </div>

          <div className="w-fit rounded-2xl border border-indigo-100 bg-white px-6 py-4 shadow-sm">
            <p className="text-sm text-slate-500">Total Patients</p>
            <p className="mt-1 text-3xl font-bold text-indigo-600">
              {list.length}
            </p>
          </div>
        </div>

      
        {list.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <div className="text-5xl"></div>
            <h2 className="mt-4 text-xl font-bold text-slate-800">
              No Patients Found
            </h2>
            <p className="mt-2 text-slate-500">
              No patient records are available in this response.
            </p>
          </div>
        ) : (
        
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {list.map((patient, index) => {
              const name =
                patient.name ||
                patient.full_name ||
                [
                  patient.first_name,
                  patient.middle_name,
                  patient.last_name,
                ]
                  .filter(Boolean)
                  .join(" ") ||
                patient.username ||
                "Name not available";

              const id =
                patient.id ??
                patient.patient_id ??
                patient._id ??
                index;

              const address = patient.address;

              const addressText =
                typeof address === "string"
                  ? address
                  : address && typeof address === "object"
                  ? [
                      address.line1,
                      address.line2,
                      address.city,
                      address.state,
                      address.postal_code,
                      address.country,
                    ]
                      .filter(Boolean)
                      .join(", ")
                  : "";

              return (
                <div
                  key={id}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                 
                  <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-blue-500 p-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-2xl font-bold text-indigo-600 shadow">
                      {name.charAt(0).toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-bold text-white">
                        {name}
                      </h2>

                      <p className="mt-1 text-sm text-indigo-100">
                        Patient ID: {id}
                      </p>
                    </div>
                  </div>

                 
                  <div className="space-y-4 p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email
                      </p>
                      <p className="mt-1 break-words text-sm text-slate-700">
                        {patient.email || "Not available"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Phone
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {patient.phone ||
                          patient.mobile ||
                          patient.phone_number ||
                          patient.contact_number ||
                          "Not available"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Gender
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {patient.gender || "Not available"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Disease
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        {patient.disease ||
                          patient.desease ||
                          patient.medical_condition ||
                          patient.diagnosis ||
                          "Not available"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Address
                      </p>
                      <p className="mt-1 break-words text-sm text-slate-700">
                        {addressText || "Not available"}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {patient.status || "Patient Record"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientList;
