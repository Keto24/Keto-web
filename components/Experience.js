export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Sematha Technologies',
      period: 'May 2024 - Aug 2024',
      location: 'Virtual Internship',
      description: 'Gained comprehensive experience in full-stack development and cloud technologies while working on production-level applications.',
      achievements: [
        'Engineered robust backend services using Python and Flask, resulting in a 15% reduction in client-reported errors',
        'Enhanced user experience by 20% through optimized API design and implementation',
        'Collaborated with cross-functional teams using modern development tools and practices',
        'Worked extensively with cloud technologies including AWS and Docker for deployment',
        'Implemented comprehensive testing strategies using Jest for frontend components'
      ],
      technologies: ['Python', 'Flask', 'MongoDB', 'React', 'AWS', 'Docker', 'Firebase', 'Jest'],
      icon: '💼'
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Arts in Computer Science',
      school: 'Pomona College',
      period: '2021 - 2025 (Expected)',
      location: 'Claremont, CA',
      description: 'Comprehensive computer science education with focus on algorithms, data structures, and machine learning.',
      achievements: [
        'Matchlighters Scholarship recipient for academic excellence',
        'General Pomona Scholarship recipient',
        'Relevant coursework: Algorithms, Data Structures, Machine Learning, Neural Networks',
        'Active participation in computer science research and projects'
      ],
      gpa: 'Dean\'s List',
      icon: '🎓'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-dark-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Experience & <span className="text-gradient">Education</span></h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            My professional journey and academic background in computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-dark p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <p className="text-text-muted text-sm">{exp.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-text-muted mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-text-muted text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-white font-medium mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-dark p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                      <p className="text-primary font-medium mb-1">{edu.school}</p>
                      <p className="text-text-muted text-sm">{edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-text-muted mb-4">{edu.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white font-medium mb-2">Academic Highlights:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-text-muted text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}