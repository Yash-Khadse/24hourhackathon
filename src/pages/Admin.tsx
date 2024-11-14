import React, { useState, useEffect } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { ArrowUpDown, Download, Search, X } from "lucide-react";

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  year: string;
  department: string;
  college: string;
}

interface Registration {
  id: string;
  teamName: string;
  members: TeamMember[];
  registrationDate: string;
  paymentStatus: "pending" | "completed";
  amount: number;
}

const columnHelper = createColumnHelper<Registration>();

const columns = [
  columnHelper.accessor("teamName", {
    header: "Team Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("registrationDate", {
    header: "Registration Date",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor("paymentStatus", {
    header: "Payment Status",
    cell: (info) => (
      <span
        className={`px-2 py-1 rounded-full text-xs ${
          info.getValue() === "completed"
            ? "bg-green-500/20 text-green-500"
            : "bg-yellow-500/20 text-yellow-500"
        }`}
      >
        {info.getValue().charAt(0).toUpperCase() + info.getValue().slice(1)}
      </span>
    ),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => `₹${info.getValue()}`,
  }),
];

export default function Admin() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [selectedRegistration, setSelectedRegistration] =
    useState<Registration | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/registrations");
        const data = await response.json();
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };
    fetchRegistrations();
  }, []);

  const table = useReactTable({
    data: registrations,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Admin Dashboard</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  value={globalFilter ?? ""}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:border-primary"
                  placeholder="Search..."
                />
              </div>
              <button className="px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr
                      key={headerGroup.id}
                      className="border-b border-gray-700"
                    >
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="px-6 py-4 text-left text-sm font-semibold text-gray-300"
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              className="flex items-center gap-2 cursor-pointer"
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              <ArrowUpDown className="w-4 h-4" />
                            </div>
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-gray-700 hover:bg-white/5 transition-colors cursor-pointer"
                      onClick={() => setSelectedRegistration(row.original)}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-6 py-4 text-sm">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {selectedRegistration && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-dark rounded-lg p-6 w-11/12 md:w-1/2">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Team Details</h2>
                  <button
                    onClick={() => setSelectedRegistration(null)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-lg mb-2">
                  <strong>Team Name:</strong> {selectedRegistration.teamName}
                </p>
                <p className="text-lg mb-2">
                  <strong>Registration Date:</strong>{" "}
                  {new Date(
                    selectedRegistration.registrationDate
                  ).toLocaleDateString()}
                </p>
                <p className="text-lg mb-2">
                  <strong>Payment Status:</strong>{" "}
                  {selectedRegistration.paymentStatus}
                </p>
                <p className="text-lg mb-4">
                  <strong>Amount:</strong> ₹{selectedRegistration.amount}
                </p>

                <h3 className="text-xl font-semibold mb-2">Team Members</h3>
                {selectedRegistration.members.map((member, index) => (
                  <div
                    key={index}
                    className="mb-4 border-t border-gray-700 pt-2"
                  >
                    <p>
                      <strong>Name:</strong> {member.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {member.email}
                    </p>
                    <p>
                      <strong>Phone:</strong> {member.phone}
                    </p>
                    <p>
                      <strong>Year:</strong> {member.year}
                    </p>
                    <p>
                      <strong>Department:</strong> {member.department}
                    </p>
                    <p>
                      <strong>College:</strong> {member.college}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
