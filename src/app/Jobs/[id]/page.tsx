import React from "react";
import { data } from "../../../dummydata/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = data.find((job) => job.id === id);

  if (!job) return notFound();

  return (
    <div className="flex text-black ml-15">
      {/* LEFT SECTION */}
      <div className="mr-15">
        {/* Description */}
        <div className="w-270 h-30">
          <h1 className="font-bold text-xl mt-4 mb-2">Description</h1>
          <p>{job.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="responsibilities">
          <h1 className="font-bold text-xl mt-3 mb-3">Responsibilities</h1>
          <ul className="space-y-0">
            {job.responsibilities.map((r, i) => (
              <li key={i} className="flex items-center mb-2 gap-1">
                <Image src="/right.png" alt="log" width={20} height={20} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal Candidate */}
        <div className="ideal">
          <h1 className="font-bold text-xl mt-5 mb-3">Ideal Candidate</h1>
          <p className="font-bold">
            ● Young ({job.ideal_candidate.age}) {job.ideal_candidate.gender} {job.title}
          </p>
          <ul className="w-270">
            {job.ideal_candidate.traits.map((trait, i) => (
              <li key={i}>● {trait}</li>
            ))}
          </ul>
        </div>

        {/* When & Where */}
        <div className="where">
          <h1 className="font-bold text-xl mt-5 mb-3">When & Where</h1>
          <p className="flex items-center">
            <Image src="/location.png" alt="Location" width={35} height={35} />
            <span className="ml-3">{job.when_where}</span>
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="about">
        <h1 className="font-bold text-xl mt-7 mb-5">About</h1>

        {/* Posted On */}
        <div className="flex items-center mb-3">
          <Image src="/plus.png" alt="plus" width={35} height={13} className="mr-3" />
          <div>
            <span className="text-gray-500">Posted On</span>
            <p>{job.about.posted_on}</p>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-center mb-3">
          <Image src="/fire.png" alt="fire" width={35} height={13} className="mr-3" />
          <div>
            <span className="text-gray-500">Deadline</span>
            <p>{job.about.deadline}</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center mb-3">
          <Image src="/location.png" alt="location" width={35} height={13} className="mr-3" />
          <div>
            <span className="text-gray-500">Location</span>
            <p>{job.about.location}</p>
          </div>
        </div>

        {/* Start Date */}
        <div className="flex items-center mb-3">
          <Image src="/startcaleder.png" alt="startcaleder" width={35} height={13} className="mr-3" />
          <div>
            <span className="text-gray-500">Start Date</span>
            <p>{job.about.start_date}</p>
          </div>
        </div>

        {/* End Date */}
        <div className="flex items-center mb-3">
          <Image src="/calendar.png" alt="calendar" width={35} height={13} className="mr-3" />
          <div>
            <span className="text-gray-500">End Date</span>
            <p>{job.about.end_date}</p>
          </div>
        </div>

        {/* Categories */}
        <h1 className="font-bold mb-3 text-[18px]">Categories</h1>
        <ul className="flex flex-wrap gap-3 mb-3">
          {job.about.categories.map((cat, i) => (
            <li
              key={i}
              className="px-4 py-1 border rounded-full bg-orange-100 text-orange-500"
            >
              {cat}
            </li>
          ))}
        </ul>

        {/* Required Skills */}
        <h1 className="font-bold mb-3 text-[18px]">Required Skills</h1>
        <ul className="flex flex-wrap gap-2">
          {job.about.required_skills.map((skill, i) => (
            <li
              key={i}
              className="px-3 py-1 text-green-400 border border-green-200 bg-green-100 rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
