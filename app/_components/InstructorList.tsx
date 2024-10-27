import { getInstructors } from "../_lib/data-service";
import InstructorCard from "./InstructorCard";

async function InstructorList() {
  const instructors = await getInstructors();
  return (
    <div className="grid grid-cols-3 gap-12 max-md:grid-cols-2 max-sm:grid-cols-1">
      {instructors.map((instructor) => (
        <InstructorCard
          id={instructor.id}
          name={instructor.name}
          profileImage={instructor.profileImage}
          key={instructor.id}
        />
      ))}
    </div>
  );
}

export default InstructorList;
