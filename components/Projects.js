export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Analytics',
      description: 'Developed a machine learning model using TensorFlow and PyTorch to analyze healthcare data and predict patient outcomes. Implemented data preprocessing pipeline and achieved 85% accuracy in outcome prediction.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Predictive modeling for patient outcomes',
        'Data visualization dashboard',
        'Real-time analytics processing',
        'HIPAA-compliant data handling'
      ],
      status: 'Completed',
      category: 'Machine Learning'
    },
    {
      id: 2,
      title: 'Full-Stack E-Commerce Platform',
      description: 'Built a responsive e-commerce platform with React frontend and Flask backend. Integrated secure payment processing, user authentication, and real-time inventory management.',
      technologies: ['React', 'Flask', 'MongoDB', 'AWS', 'Docker', 'JavaScript'],
      features: [
        'User authentication and authorization',
        'Secure payment integration',
        'Real-time inventory management',
        'Responsive design for all devices'
      ],
      status: 'Completed',
      category: 'Full-Stack Development'
    },
    {
      id: 3,
      title: 'Computer Vision Traffic Analysis',
      description: 'Created an OpenCV-based system to analyze traffic patterns and detect vehicle counts in real-time. Utilized neural networks for object detection and classification.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Matplotlib'],
      features: [
        'Real-time vehicle detection',
        'Traffic pattern analysis',
        'Automated report generation',
        'Multi-camera support'
      ],
      status: 'In Progress',
      category: 'Computer Vision'
    },
    {
      id: 4,
      title: 'Mobile Weather App',
      description: 'Developed a cross-platform mobile application using Flutter that provides weather forecasts, alerts, and location-based recommendations.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      features: [
        'Real-time weather updates',
        'Location-based forecasts',
        'Push notifications for alerts',
        'Offline data caching'
      ],
      status: 'Completed',
      category: 'Mobile Development'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400 border-green-500/20'
      case 'In Progress':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Machine Learning':
        return 'bg-purple-500/10 text-purple-400'
      case 'Full-Stack Development':
        return 'bg-blue-500/10 text-blue-400'
      case 'Computer Vision':
        return 'bg-red-500/10 text-red-400'
      case 'Mobile Development':
        return 'bg-green-500/10 text-green-400'
      default:
        return 'bg-gray-500/10 text-gray-400'
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A showcase of my technical projects spanning machine learning, full-stack development, and mobile applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-dark-light p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-text-muted mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-text-muted text-sm flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-medium mb-2 text-sm">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-primary/10 hover:bg-primary hover:text-white text-primary py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium">
                  View Details
                </button>
                <button className="flex-1 border border-primary/30 hover:border-primary text-text-light hover:text-primary py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/ketoeg7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}