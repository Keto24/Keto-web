export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-secondary">About <span className="text-gradient">Me</span></h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-text-muted">
              <p>
                I'm a dedicated Computer Science student at Pomona College, expected to graduate in May 2025. 
                My academic journey has been enriched by coursework in Algorithms, Data Structures, Machine Learning, 
                and Neural Networks, providing me with a strong foundation in both theoretical concepts and practical applications.
              </p>
              <p>
                As a recipient of both the Matchlighters Scholarship and General Pomona Scholarship, I've been 
                recognized for my academic excellence and commitment to the field. My passion lies at the 
                intersection of artificial intelligence and software engineering, where I enjoy building 
                innovative solutions that can make a real impact.
              </p>
              <p>
                During my virtual internship at Sematha Technologies, I gained hands-on experience in full-stack 
                development, working with modern technologies like Python, Flask, React, and AWS. I successfully 
                reduced client-reported errors by 15% and enhanced user experience by 20% through my contributions 
                to backend services.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-dark p-6 rounded-lg border border-primary/10">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-2">
                <p className="text-primary font-medium">Pomona College</p>
                <p className="text-text-light">Bachelor of Arts in Computer Science</p>
                <p className="text-text-muted">Expected Graduation: May 2025</p>
                <p className="text-text-muted">Claremont, CA</p>
              </div>
            </div>

            <div className="bg-dark p-6 rounded-lg border border-primary/10">
              <h4 className="text-xl font-semibold text-white mb-4">Achievements</h4>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Matchlighters Scholarship Recipient
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  General Pomona Scholarship Recipient
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  15% Reduction in Client-Reported Errors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  20% Enhancement in User Experience
                </li>
              </ul>
            </div>

            <div className="bg-dark p-6 rounded-lg border border-primary/10">
              <h4 className="text-xl font-semibold text-white mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Neural Networks', 'AI Research', 'Full-Stack Development', 'Cloud Computing', 'Open Source'].map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}