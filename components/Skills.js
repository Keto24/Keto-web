export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'Rust', level: 65 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'R', level: 70 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'pandas', level: 85 },
        { name: 'NumPy', level: 80 },
        { name: 'OpenCV', level: 70 },
        { name: 'Matplotlib', level: 75 },
      ]
    },
    {
      title: 'Developer Tools & Platforms',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 70 },
        { name: 'Git', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'Firebase', level: 70 },
        { name: 'Android Studio', level: 65 },
        { name: 'Vim', level: 80 },
        { name: 'R Studio', level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">Technical <span className="text-gradient">Skills</span></h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-dark-light p-6 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-text-light font-medium">{skill.name}</span>
                      <span className="text-primary text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-dark-light p-8 rounded-lg border border-primary/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-medium text-primary mb-3">Software Development</h4>
                <ul className="space-y-2 text-text-muted">
                  <li>• Full-stack web development</li>
                  <li>• RESTful API design and implementation</li>
                  <li>• Database design and optimization</li>
                  <li>• Version control and collaborative development</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-primary mb-3">AI & Machine Learning</h4>
                <ul className="space-y-2 text-text-muted">
                  <li>• Neural network design and training</li>
                  <li>• Data preprocessing and analysis</li>
                  <li>• Computer vision applications</li>
                  <li>• Model deployment and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}