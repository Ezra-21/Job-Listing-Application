"use client";
import React from "react";
import JobCard from "../Components/JobCards";
import { data } from "../dummydata/data";

const Home = () => {
  return (
    <div className="text-black">
      <h1 className="font-bold text-[25px] mt-10 ml-10">
        Opportunities
      </h1>

      <div className="flex justify-between items-center px-10 mb-6">
        <p className="text-gray-500">Showing 73 results</p>
        <p>Sorted by: Most relevant</p>
      </div>

      {data.length === 0 ? (
        <p className="ml-10">No job found</p>
      ) : (
        <div className="space-y-4">
          {data.map((job, idx) => (
            <JobCard key={idx} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
