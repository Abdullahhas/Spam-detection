import React, { useState } from "react";
import { Mail, Send, FileText, Loader2 } from "lucide-react";

const SpamForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [res, setRes] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
   
    setRes("Waiting for ML backend...")


    
    setLoading(false);
  };

  const handleClear = () => {
    setEmail("");
    setError("");
    setRes("")
  };

  return (
    <form onSubmit={handleSubmit} >
    <div className="max-w-2xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Mail className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">
            Email Spam Detection
          </h1>
        </div>
        <p className="text-gray-600">
          Enter your email content below for spam analysis
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Content *
              </label>
              <textarea
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                rows={8}
                placeholder="Paste the email content you want to analyze for spam detection..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition duration-200"
                required
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{email.length} characters</span>
                <span>Minimum 10 characters required</span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading || !email.trim() || email.trim().length < 10}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Check for Spam
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClear}
                disabled={loading}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 transition duration-200 flex items-center"
              >
                <FileText className="h-5 w-5 mr-2" />
                Clear
              </button>

              
            </div>
          </div>
        </div>
      </div>
      {res && (
  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm text-center">
    {res}
  </div>
)}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          Instructions:
        </h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Paste the complete email content including subject and body</li>
          <li>• Ensure the content is at least 10 characters long</li>
          <li>• The system will analyze the text for spam indicators</li>
        </ul>
      </div>
    </div>
    </form>
  );
};

export default SpamForm;
