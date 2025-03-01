"use client"

import type React from "react"

import { useState, type FormEvent } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch("https://localhost:5002/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
  
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // })

  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [submitStatus, setSubmitStatus] = useState<{
  //   success?: boolean
  //   message?: string
  // } | null>(null)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   setSubmitStatus(null)

  //   // Simulate form submission
  //   try {
  //     // In a real application, you would send the form data to your server
  //     await new Promise((resolve) => setTimeout(resolve, 1500))

  //     setSubmitStatus({
  //       success: true,
  //       message: "Thank you for your message! We will get back to you soon.",
  //     })

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       subject: "",
  //       message: "",
  //     })
  //   } catch (error) {
  //     setSubmitStatus({
  //       success: false,
  //       message: "Something went wrong. Please try again later.",
  //     })
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="container">
        <div className="max-w-8xl p-8 mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="mb-8 text-3xl font-bold text-center">Send Message</h2>

          {submitStatus && (
            <div
              className={`p-4 mb-6 rounded-md ${submitStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter subject"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 font-medium text-white transition-colors rounded-md bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

