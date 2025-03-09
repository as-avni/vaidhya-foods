

import { useState } from "react";

const ContactForm = 










































() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // ✅ State for success message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(""); // Reset message on new submit

    try {
      const response = await fetch("https://vaidhya-backend.vercel.app/api/contact/submit-form", {
        
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSuccessMessage("✅ Message sent successfully!"); // ✅ Update success message
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("❌ Failed to send message. Please try again."); // ✅ Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required />
        </div>
        <textarea name="message" placeholder="Your Message" rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
        <div className="text-center">
          <button type="submit" disabled={isSubmitting} className="px-8 py-3 font-medium text-black transition-colors rounded-2xl bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2">
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      {/* ✅ Display success or error message */}
      {successMessage && (
        <p className={`mt-4 text-center font-medium ${successMessage.includes("✅") ? "text-green-600" : "text-red-600"}`}>
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
