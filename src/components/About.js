export default function About() {
  const features = [
    {
      icon: "🔤",
      title: "Text Case Conversion",
      description: "Convert your text to uppercase, lowercase, or capitalize each word with a single click."
    },
    {
      icon: "🗑️",
      title: "Clear Text",
      description: "Quickly clear all text content to start fresh with your text editing tasks."
    },
    {
      icon: "📋",
      title: "Copy to Clipboard",
      description: "Easily copy your processed text to clipboard for use in other applications."
    },
    {
      icon: "📊",
      title: "Text Analytics",
      description: "Get instant word count, character count, and line count statistics for your text."
    },
    {
      icon: "📝",
      title: "Text Formatting",
      description: "Format and structure your text with various capitalization and formatting options."
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description: "See changes applied instantly as you work with your text content."
    }
  ];

  return (
    <div className="container-fluid py-5" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'}}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-4" 
               style={{width: '80px', height: '80px', fontSize: '2rem'}}>
            📄
          </div>
          <h1 className="display-4 fw-bold text-dark mb-4">Text Helper Application</h1>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            A powerful and intuitive text manipulation tool built with React.js to streamline your text editing workflow.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-5">
          <h2 className="display-5 fw-semibold text-center text-dark mb-5">Key Features</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3" style={{fontSize: '2rem'}}>{feature.icon}</div>
                      <h5 className="card-title mb-0 fw-semibold">{feature.title}</h5>
                    </div>
                    <p className="card-text text-muted">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <h2 className="display-6 fw-semibold text-dark mb-4">About This Application</h2>
                <div className="fs-5 text-muted lh-base">
                  <p className="mb-4">
                    Text Helper is a comprehensive text manipulation application designed to make text processing quick, 
                    efficient, and user-friendly. Whether you're a writer, developer, student, or professional, 
                    this tool provides essential text operations at your fingertips.
                  </p>
                  <p className="mb-4">
                    Built with modern React.js technology, the application offers a responsive and intuitive interface 
                    that works seamlessly across different devices. The router-based navigation ensures smooth 
                    transitions between different sections of the app.
                  </p>
                  <p className="mb-0">
                    Every feature is designed with productivity in mind, providing instant results and real-time 
                    feedback as you work with your text content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card border-0 text-white" style={{background: 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)'}}>
          <div className="card-body text-center py-5">
            <h2 className="display-6 fw-semibold mb-4">Built With</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <span className="badge fs-6 py-2 px-3" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
                React.js
              </span>
              <span className="badge fs-6 py-2 px-3" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
                React Router
              </span>
              <span className="badge fs-6 py-2 px-3" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
                Bootstrap
              </span>
              <span className="badge fs-6 py-2 px-3" style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
                Modern JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}