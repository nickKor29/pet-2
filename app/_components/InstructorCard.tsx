import Image from "next/image";
import Link from "next/link";

function InstructorCard({
  id,
  name,
  profileImage,
}: {
  id: number;
  name: string;
  profileImage: string;
}) {
  return (
    <Link href={`/instructors/${id}`} className="relative w-full h-64">
      <Image
        src={profileImage}
        alt={name}
        quality={80}
        fill
        className="object-cover rounded-lg"
      />
      <p className="absolute bottom-2 left-2 text-primary-50 bg-primary-950 bg-opacity-50 px-2 py-1 rounded">
        {name}
      </p>
    </Link>
  );
}

export default InstructorCard;
