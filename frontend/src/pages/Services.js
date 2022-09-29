import React from "react";
import CardComponent from "../components/Card";
import SmallSearchBar from "../components/SmallSearchBar";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Howick Vets",
    location: "123 Howick road, Howick",
    phone: "555-3434",
    hours: ["Monday: 7am-7pm ", "Tuesday: 7am-4pm", " Wednesday: 7am-2pm"],
  },
  {
    id: 2,
    name: "New Lynn Vets",
    location: "123 New road, New Lynn",
    phone: "555-2222",
    hours: ["Monday: 7am-7pm ", "Tuesday: 7am-4pm", " Wednesday: 7am-2pm"],
  },
  {
    id: 3,
    name: "Mangere Vets",
    location: "234 Mangere road, Mangere",
    phone: "555-1111",
    hours: ["Monday: 7am-7pm ", "Tuesday: 7am-4pm", " Wednesday: 7am-2pm"],
  },
  {
    id: 4,
    name: "Northcote Vets",
    location: "645 Northcote road, Nortcote",
    phone: "555-3422",
    hours: ["Monday: 7am-7pm ", "Tuesday: 7am-4pm", " Wednesday: 7am-2pm"],
  },
];

const Services = () => {
  return (
    <div>
      <SmallSearchBar />
      <div className="d-flex justify-content-around pt-4 flex-wrap">
        {DUMMY_DATA.map((clinic) => {
          return (
            <CardComponent
              id={clinic.id}
              clinic={clinic.name}
              location={clinic.location}
              phone={clinic.phone}
              hours={clinic.hours}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
