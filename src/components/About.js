

export default function About{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About Text Help
        </h1>
        <p className="text-gray-600 mb-4 leading-relaxed text-lg">
          <strong>Text Help</strong> is a lightweight and easy-to-use web
          application built to simplify your text editing needs. Instead of
          switching between multiple tools, Text Help brings all the essential
          text utilities in one place.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
          Features of Text Help:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-lg">
          <li>🔠 Convert text to <b>UPPERCASE</b> or <b>lowercase</b></li>
          <li>🧹 Clear text with a single click</li>
          <li>📋 Copy processed text to clipboard</li>
          <li>📑 Count the total number of lines</li>
          <li>📝 Count the number of words</li>
          <li>🔢 Track the number of characters</li>
        </ul>

        <p className="text-gray-600 mt-6 leading-relaxed text-lg">
          Our mission is to provide a <b>simple, fast, and distraction-free
          text utility tool</b> that helps students, developers, writers, and
          professionals work more efficiently.
        </p>
      </div>
    </div>
  );
};


