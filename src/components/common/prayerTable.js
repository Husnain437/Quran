import React from "react";
import { Table } from "react-bootstrap";

const prayerTimes = [
  {
    date: "01 Mon",
    dhulHijjah: 24,
    fajr: "04:17",
    dhuhr: "04:17",
    asr: "15:58",
    maghrib: "15:58",
    isha: "20:54",
  },
  {
    date: "02 Tue",
    dhulHijjah: 25,
    fajr: "04:17",
    dhuhr: "04:17",
    asr: "15:58",
    maghrib: "15:58",
    isha: "21:56",
  },
  {
    date: "03 Wed",
    dhulHijjah: 26,
    fajr: "04:17",
    dhuhr: "04:17",
    asr: "15:58",
    maghrib: "15:58",
    isha: "21:56",
  },
  // Add more rows as needed
];
const PrayerTable = () => {
  return (
    <div className="rounded-2xl ">
      <div className=" ">
        {" "}
        {/* Add horizontal overflow */}
        <Table
          className=" w-full bg-[#111214] custom-table text-white rounded-2xl "
          responsive
        >
          <thead>
            <tr className="bg-[#342D23]">
              <th className="py-3 px-4">July</th>
              <th className="py-3 px-4">Dhul Hijjah</th>
              <th className="py-3 px-4">Fajr</th>
              <th className="py-3 px-4">Dhuhr</th>
              <th className="py-3 px-4">Asr</th>
              <th className="py-3 px-4">Maghrib</th>
              <th className="py-3 px-4">Isha</th>
            </tr>
          </thead>
          <tbody>
            {prayerTimes.map((time, index) => (
              <tr key={index} className="text-start">
                <td className="py-3 px-4 border-b border-[#979797]">
                  {time.date}
                </td>
                <td className="py-3 px-4 border-b border-[#979797]">
                  {time.dhulHijjah}
                </td>
                <td className="py-3 px-4 border-b border-[#979797]">
                  {time.fajr}
                </td>
                <td className="py-3 px-4 border-b border-[#979797]">
                  {time.dhuhr}
                </td>
                <td className="py-3 px-4 border-b border-[#979797]">
                  {time.asr}
                </td>
                <td className="py-3 px-4 border-b border-[#979797]">
                  {time.maghrib}
                </td>
                <td className="py-3 px-4 border-b border-[#979797]">
                  {time.isha}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PrayerTable;
