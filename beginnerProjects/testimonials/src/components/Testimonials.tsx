import { useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center min-w-[100vw] min-h-screen bg-emerald-50">
      <h2 className="text-3xl font-bold text-center underline text-emerald-400">
        What Our Clients Say
      </h2>
      <div
        key={testimonials[index].name}
        className="my-4 bg-white border-2 rounded-lg shadow-sm drop-shadow-md border-emerald-50"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">
              {testimonials[index].name}
            </h3>
            <span className="text-sm text-yellow-600">
              {testimonials[index].rating} ★
            </span>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            {testimonials[index].message}
          </p>
          <p className="text-xs text-gray-400">
            {testimonials[index].position}
          </p>
          <div className="flex items-center justify-between w-full mt-3">
            <button
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}
              className={`px-6 rounded-full py-2 ${
                index === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "text-white shadow-md bg-emerald-500 drop-shadow-lg"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => setIndex(index + 1)}
              disabled={index === testimonials.length - 1}
              className={`px-6 rounded-full py-2 ${
                index === testimonials.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "text-white shadow-md bg-emerald-500 drop-shadow-lg"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Emily Johnson",
    position: "Marketing Manager",
    rating: 4.5,
    message:
      "The service was outstanding! The team went above and beyond to ensure our campaign's success.",
  },
  {
    name: "Michael Smith",
    position: "Software Engineer",
    rating: 5.0,
    message:
      "I was amazed by the quality of the work and the prompt responses to my queries. Highly recommended!",
  },
  {
    name: "Sophia Williams",
    position: "Project Coordinator",
    rating: 4.8,
    message:
      "Exceptional attention to detail and professionalism throughout the entire process.",
  },
  {
    name: "James Brown",
    position: "Product Designer",
    rating: 4.6,
    message:
      "The results exceeded our expectations, and the team was a pleasure to work with.",
  },
  {
    name: "Olivia Davis",
    position: "Business Analyst",
    rating: 4.7,
    message:
      "Very pleased with the outcome! The team delivered high-quality results on time.",
  },
  {
    name: "Liam Wilson",
    position: "Sales Executive",
    rating: 4.9,
    message:
      "A seamless experience from start to finish. I couldn't be happier with the service provided.",
  },
  {
    name: "Emma Martinez",
    position: "Content Creator",
    rating: 5.0,
    message:
      "Absolutely fantastic work! They truly understood my vision and brought it to life.",
  },
  {
    name: "Noah Garcia",
    position: "Operations Manager",
    rating: 4.4,
    message:
      "Good service with room for improvement, but overall a very positive experience.",
  },
  {
    name: "Ava Lee",
    position: "Human Resources Specialist",
    rating: 4.8,
    message:
      "Professional and reliable! The team provided consistent updates and excellent support.",
  },
];

console.log(testimonials);

export default Testimonials;
