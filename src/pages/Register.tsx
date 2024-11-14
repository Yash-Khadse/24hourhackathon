import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface FormData {
  teamName: string;
  members: {
    name: string;
    email: string;
    phone: string;
    roll: string;
    college: string;
  }[];
}

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      members: [{}, {}, {}, {}] // Max 4 members per team
    }
  });

  const onSubmit = async (data:FormData) => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };


  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Register Your Team
          </h1>
          <p className="text-center text-gray-400 mb-12">
            Early bird registration: ₹1,249 per team (Regular: ₹1,499)
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <label className="block mb-2 font-medium">Team Name</label>
              <input
                {...register("teamName", { required: "Team name is required" })}
                className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                placeholder="Enter your team name"
              />
              {errors.teamName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.teamName.message}
                </p>
              )}
            </div>

            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg">
                <h3 className="font-medium mb-4">Team Member {index + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm">Full Name</label>
                    <input
                      {...register(`members.${index}.name`)}
                      className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <input
                      {...register(`members.${index}.email`)}
                      type="email"
                      className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Phone Number</label>
                    <input
                      {...register(`members.${index}.phone`)}
                      className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm">Roll No.</label>
                    <input
                      {...register(`members.${index}.roll`)}
                      className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                      placeholder="Enter Roll No."
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">College Name</label>
                    <input
                      {...register(`members.${index}.college`)}
                      className="w-full bg-dark border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                      placeholder="Enter college name"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Register Team
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}