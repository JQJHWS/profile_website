import React from 'react';
import { ResumeData } from '../../types';
import './ResumeTemplates.css';

interface TemplateProps {
  data: ResumeData;
}

const formatDate = (dateStr: string): string => {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-');
  return `${year}年${month}月`;
};

const formatPeriod = (start: string, end: string, current?: boolean): string => {
  const startStr = formatDate(start);
  const endStr = current ? '至今' : formatDate(end);
  if (!startStr && !endStr) return '';
  return `${startStr} - ${endStr}`;
};

export const ModernTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, education, workExperience, projects, skills, certificates, awards, languages } = data;

  return (
    <div className="resume-template modern-template">
      <header className="resume-header">
        <div className="header-content">
          {personalInfo.photo && (
            <div className="photo-container">
              <img src={personalInfo.photo} alt={personalInfo.name} className="profile-photo" />
            </div>
          )}
          <div className="header-info">
            <h1 className="name">{personalInfo.name || '您的姓名'}</h1>
            <div className="contact-info">
              {personalInfo.email && (
                <span className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {personalInfo.email}
                </span>
              )}
              {personalInfo.phone && (
                <span className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {personalInfo.phone}
                </span>
              )}
              {personalInfo.address && (
                <span className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {personalInfo.address}
                </span>
              )}
            </div>
            <div className="social-links">
              {personalInfo.website && (
                <a href={personalInfo.website} className="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  个人网站
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} className="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} className="social-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {personalInfo.summary && (
        <section className="resume-section">
          <h2 className="section-title">
            <span className="title-text">个人简介</span>
          </h2>
          <p className="summary-text">{personalInfo.summary}</p>
        </section>
      )}

      {workExperience.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">
            <span className="title-text">工作经历</span>
          </h2>
          <div className="section-content">
            {workExperience.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="item-header">
                  <div className="item-title">
                    <span className="company">{exp.company}</span>
                    <span className="position">{exp.position}</span>
                  </div>
                  <span className="item-date">{formatPeriod(exp.startDate, exp.endDate, exp.current)}</span>
                </div>
                <div className="item-location">{exp.location}</div>
                {exp.responsibilities && (
                  <div className="item-description">
                    {exp.responsibilities.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">
            <span className="title-text">项目经验</span>
          </h2>
          <div className="section-content">
            {projects.map((project) => (
              <div key={project.id} className="experience-item">
                <div className="item-header">
                  <div className="item-title">
                    <span className="company">{project.name}</span>
                    <span className="position">{project.role}</span>
                  </div>
                  <span className="item-date">{formatPeriod(project.startDate, project.endDate)}</span>
                </div>
                {project.technologies && (
                  <div className="tech-stack">
                    {project.technologies.split(',').map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                )}
                {project.description && (
                  <div className="item-description">
                    {project.description.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">
            <span className="title-text">教育背景</span>
          </h2>
          <div className="section-content">
            {education.map((edu) => (
              <div key={edu.id} className="experience-item">
                <div className="item-header">
                  <div className="item-title">
                    <span className="company">{edu.school}</span>
                    <span className="position">{edu.degree} · {edu.major}</span>
                  </div>
                  <span className="item-date">{formatPeriod(edu.startDate, edu.endDate)}</span>
                </div>
                {edu.gpa && <div className="item-gpa">GPA: {edu.gpa}</div>}
                {edu.achievements && (
                  <div className="item-description">
                    {edu.achievements.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">
            <span className="title-text">技能特长</span>
          </h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-category">
                <div className="skill-name">{skill.category}</div>
                <div className="skill-items">
                  {skill.items.split(',').map((item, idx) => (
                    <span key={idx} className="skill-tag">{item.trim()}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(certificates.length > 0 || awards.length > 0 || languages.length > 0) && (
        <section className="resume-section">
          <h2 className="section-title">
            <span className="title-text">其他信息</span>
          </h2>
          <div className="additional-info">
            {certificates.length > 0 && (
              <div className="info-group">
                <h3 className="info-title">证书资质</h3>
                <ul className="info-list">
                  {certificates.map((cert) => (
                    <li key={cert.id}>
                      <span className="info-name">{cert.name}</span>
                      <span className="info-detail"> - {cert.issuer} ({formatDate(cert.date)})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {awards.length > 0 && (
              <div className="info-group">
                <h3 className="info-title">荣誉奖项</h3>
                <ul className="info-list">
                  {awards.map((award) => (
                    <li key={award.id}>
                      <span className="info-name">{award.title}</span>
                      <span className="info-detail"> - {award.issuer} ({formatDate(award.date)})</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {languages.length > 0 && (
              <div className="info-group">
                <h3 className="info-title">语言能力</h3>
                <div className="language-list">
                  {languages.map((lang) => (
                    <span key={lang.id} className="language-item">
                      {lang.name}: {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export const ClassicTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, education, workExperience, projects, skills, certificates, awards, languages } = data;

  return (
    <div className="resume-template classic-template">
      <header className="resume-header">
        <h1 className="name">{personalInfo.name || '您的姓名'}</h1>
        <div className="contact-line">
          {[
            personalInfo.email,
            personalInfo.phone,
            personalInfo.address,
          ].filter(Boolean).join(' | ')}
        </div>
        <div className="contact-line">
          {[
            personalInfo.website,
            personalInfo.linkedin,
            personalInfo.github,
          ].filter(Boolean).join(' | ')}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="resume-section">
          <h2 className="section-title">个人简介</h2>
          <div className="section-line" />
          <p className="summary-text">{personalInfo.summary}</p>
        </section>
      )}

      {workExperience.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">工作经历</h2>
          <div className="section-line" />
          {workExperience.map((exp) => (
            <div key={exp.id} className="classic-item">
              <div className="classic-header">
                <strong>{exp.company}</strong>
                <span>{formatPeriod(exp.startDate, exp.endDate, exp.current)}</span>
              </div>
              <div className="classic-subheader">
                <em>{exp.position}</em>
                <span>{exp.location}</span>
              </div>
              {exp.responsibilities && (
                <div className="classic-description">
                  {exp.responsibilities.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">项目经验</h2>
          <div className="section-line" />
          {projects.map((project) => (
            <div key={project.id} className="classic-item">
              <div className="classic-header">
                <strong>{project.name}</strong>
                <span>{formatPeriod(project.startDate, project.endDate)}</span>
              </div>
              <div className="classic-subheader">
                <em>{project.role}</em>
              </div>
              {project.technologies && (
                <div className="classic-tech">技术栈: {project.technologies}</div>
              )}
              {project.description && (
                <div className="classic-description">
                  {project.description.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">教育背景</h2>
          <div className="section-line" />
          {education.map((edu) => (
            <div key={edu.id} className="classic-item">
              <div className="classic-header">
                <strong>{edu.school}</strong>
                <span>{formatPeriod(edu.startDate, edu.endDate)}</span>
              </div>
              <div className="classic-subheader">
                <em>{edu.degree} - {edu.major}</em>
                {edu.gpa && <span>GPA: {edu.gpa}</span>}
              </div>
              {edu.achievements && (
                <div className="classic-description">
                  {edu.achievements.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">技能特长</h2>
          <div className="section-line" />
          <div className="classic-skills">
            {skills.map((skill) => (
              <div key={skill.id} className="classic-skill">
                <strong>{skill.category}:</strong> {skill.items}
              </div>
            ))}
          </div>
        </section>
      )}

      {(certificates.length > 0 || awards.length > 0 || languages.length > 0) && (
        <section className="resume-section">
          <h2 className="section-title">其他信息</h2>
          <div className="section-line" />
          {certificates.length > 0 && (
            <div className="classic-subsection">
              <strong>证书资质:</strong>
              <ul>
                {certificates.map((cert) => (
                  <li key={cert.id}>{cert.name} - {cert.issuer} ({formatDate(cert.date)})</li>
                ))}
              </ul>
            </div>
          )}
          {awards.length > 0 && (
            <div className="classic-subsection">
              <strong>荣誉奖项:</strong>
              <ul>
                {awards.map((award) => (
                  <li key={award.id}>{award.title} - {award.issuer} ({formatDate(award.date)})</li>
                ))}
              </ul>
            </div>
          )}
          {languages.length > 0 && (
            <div className="classic-subsection">
              <strong>语言能力:</strong>
              <span> {languages.map((l) => `${l.name}(${l.level})`).join(', ')}</span>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export const MinimalTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, education, workExperience, projects, skills, certificates, awards, languages } = data;

  return (
    <div className="resume-template minimal-template">
      <header className="resume-header">
        <h1 className="name">{personalInfo.name || '您的姓名'}</h1>
        <div className="contact-info">
          {[personalInfo.email, personalInfo.phone, personalInfo.address].filter(Boolean).join(' · ')}
        </div>
        <div className="contact-info">
          {[personalInfo.website, personalInfo.linkedin, personalInfo.github].filter(Boolean).join(' · ')}
        </div>
      </header>

      {personalInfo.summary && (
        <section className="resume-section">
          <p className="summary-text">{personalInfo.summary}</p>
        </section>
      )}

      {workExperience.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Experience</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="minimal-item">
              <div className="minimal-header">
                <div>
                  <span className="company">{exp.company}</span>
                  <span className="separator">—</span>
                  <span className="position">{exp.position}</span>
                </div>
                <span className="date">{formatPeriod(exp.startDate, exp.endDate, exp.current)}</span>
              </div>
              {exp.responsibilities && (
                <div className="minimal-description">
                  {exp.responsibilities.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="minimal-item">
              <div className="minimal-header">
                <div>
                  <span className="company">{project.name}</span>
                  <span className="separator">—</span>
                  <span className="position">{project.role}</span>
                </div>
                <span className="date">{formatPeriod(project.startDate, project.endDate)}</span>
              </div>
              {project.technologies && (
                <div className="minimal-tech">{project.technologies}</div>
              )}
              {project.description && (
                <div className="minimal-description">
                  {project.description.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="minimal-item">
              <div className="minimal-header">
                <div>
                  <span className="company">{edu.school}</span>
                  <span className="separator">—</span>
                  <span className="position">{edu.degree} in {edu.major}</span>
                </div>
                <span className="date">{formatPeriod(edu.startDate, edu.endDate)}</span>
              </div>
              {edu.gpa && <div className="minimal-gpa">GPA: {edu.gpa}</div>}
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Skills</h2>
          <div className="minimal-skills">
            {skills.map((skill) => (
              <div key={skill.id}>
                <strong>{skill.category}:</strong> {skill.items}
              </div>
            ))}
          </div>
        </section>
      )}

      {(certificates.length > 0 || awards.length > 0 || languages.length > 0) && (
        <section className="resume-section">
          <h2 className="section-title">Additional</h2>
          <div className="minimal-additional">
            {certificates.length > 0 && (
              <div>
                <strong>Certificates:</strong> {certificates.map((c) => c.name).join(', ')}
              </div>
            )}
            {awards.length > 0 && (
              <div>
                <strong>Awards:</strong> {awards.map((a) => a.title).join(', ')}
              </div>
            )}
            {languages.length > 0 && (
              <div>
                <strong>Languages:</strong> {languages.map((l) => `${l.name} (${l.level})`).join(', ')}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export const CreativeTemplate: React.FC<TemplateProps> = ({ data }) => {
  const { personalInfo, education, workExperience, projects, skills, certificates, awards, languages } = data;

  return (
    <div className="resume-template creative-template">
      <aside className="creative-sidebar">
        {personalInfo.photo && (
          <div className="creative-photo">
            <img src={personalInfo.photo} alt={personalInfo.name} />
          </div>
        )}
        <div className="creative-name">{personalInfo.name || '您的姓名'}</div>
        
        <div className="creative-section">
          <h3>联系方式</h3>
          <div className="creative-contact">
            {personalInfo.email && (
              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.address && (
              <div className="contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{personalInfo.address}</span>
              </div>
            )}
          </div>
        </div>

        {skills.length > 0 && (
          <div className="creative-section">
            <h3>技能特长</h3>
            <div className="creative-skills">
              {skills.map((skill) => (
                <div key={skill.id} className="skill-group">
                  <div className="skill-label">{skill.category}</div>
                  <div className="skill-items">
                    {skill.items.split(',').map((item, idx) => (
                      <span key={idx} className="skill-dot">{item.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(certificates.length > 0 || languages.length > 0) && (
          <div className="creative-section">
            {certificates.length > 0 && (
              <>
                <h3>证书资质</h3>
                <div className="creative-list">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="list-item">
                      <div className="item-name">{cert.name}</div>
                      <div className="item-detail">{cert.issuer}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {languages.length > 0 && (
              <>
                <h3>语言能力</h3>
                <div className="creative-languages">
                  {languages.map((lang) => (
                    <div key={lang.id} className="language-row">
                      <span className="lang-name">{lang.name}</span>
                      <span className="lang-level">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </aside>

      <main className="creative-main">
        {personalInfo.summary && (
          <section className="creative-main-section">
            <h2>个人简介</h2>
            <p>{personalInfo.summary}</p>
          </section>
        )}

        {workExperience.length > 0 && (
          <section className="creative-main-section">
            <h2>工作经历</h2>
            {workExperience.map((exp) => (
              <div key={exp.id} className="creative-experience">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-position">{exp.position}</div>
                  </div>
                  <div className="exp-date">{formatPeriod(exp.startDate, exp.endDate, exp.current)}</div>
                </div>
                {exp.responsibilities && (
                  <div className="exp-description">
                    {exp.responsibilities.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {projects.length > 0 && (
          <section className="creative-main-section">
            <h2>项目经验</h2>
            {projects.map((project) => (
              <div key={project.id} className="creative-experience">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{project.name}</div>
                    <div className="exp-position">{project.role}</div>
                  </div>
                  <div className="exp-date">{formatPeriod(project.startDate, project.endDate)}</div>
                </div>
                {project.technologies && (
                  <div className="exp-tech">
                    {project.technologies.split(',').map((tech, idx) => (
                      <span key={idx}>{tech.trim()}</span>
                    ))}
                  </div>
                )}
                {project.description && (
                  <div className="exp-description">
                    {project.description.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="creative-main-section">
            <h2>教育背景</h2>
            {education.map((edu) => (
              <div key={edu.id} className="creative-experience">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{edu.school}</div>
                    <div className="exp-position">{edu.degree} · {edu.major}</div>
                  </div>
                  <div className="exp-date">{formatPeriod(edu.startDate, edu.endDate)}</div>
                </div>
                {edu.gpa && <div className="exp-gpa">GPA: {edu.gpa}</div>}
              </div>
            ))}
          </section>
        )}

        {awards.length > 0 && (
          <section className="creative-main-section">
            <h2>荣誉奖项</h2>
            <div className="creative-awards">
              {awards.map((award) => (
                <div key={award.id} className="award-item">
                  <div className="award-title">{award.title}</div>
                  <div className="award-detail">{award.issuer} · {formatDate(award.date)}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
