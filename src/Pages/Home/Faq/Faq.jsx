import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is Key Nest?",
    answer: "Key Nest is a modern platform that helps users find and manage properties effortlessly with a seamless experience.",
  },
  {
    question: "How do I list my property?",
    answer: "You can list your property by signing up, filling out the details, and submitting it for approval.",
  },
  {
    question: "Is Key Nest free to use?",
    answer: "Yes! Browsing properties is free, but there may be premium features for additional benefits.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our support team via the contact form on our website or through email support@keynest.com.",
  },
];

const  Faq=()=> {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-lg font-semibold text-gray-700 hover:bg-gray-200 transition-all"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-gray-50 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq;
