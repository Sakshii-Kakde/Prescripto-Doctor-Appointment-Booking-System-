import React from "react";

const Faq = () => {

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer: "You can browse doctors, select a doctor, and choose an available time slot to book an appointment."
    },
    {
      question: "Can I cancel my appointment?",
      answer: "Yes, you can cancel your appointment from the 'My Appointments' section."
    },
    {
      question: "Do I need an account to book an appointment?",
      answer: "Yes, you need to create an account to book and manage appointments."
    },
    {
      question: "How will I receive appointment confirmation?",
      answer: "You will receive a confirmation notification and email after booking."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, Prescripto ensures secure handling of all personal and medical data."
    }
  ]

  return (
    <div className="px-6 py-12 md:px-10 lg:px-20">

      <h1 className="text-3xl font-semibold text-center text-gray-700">
        Frequently Asked <span className="text-primary">Questions</span>
      </h1>

      <div className="max-w-3xl mx-auto mt-10 space-y-6">

        {faqs.map((faq,index)=>(
          <div key={index} className="p-5 bg-white rounded-lg shadow">

            <h3 className="font-semibold text-gray-700">
              {faq.question}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {faq.answer}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Faq