"use client";

const Heading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="  text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start mx-16 md:mx-36">
      {title}
    </h1>
  );
};

export default Heading;
