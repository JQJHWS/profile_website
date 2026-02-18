export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
  photo?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  responsibilities: string;
}

export interface Project {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string;
  link?: string;
}

export interface Skill {
  id: string;
  category: string;
  items: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface Language {
  id: string;
  name: string;
  level: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: WorkExperience[];
  projects: Project[];
  skills: Skill[];
  certificates: Certificate[];
  awards: Award[];
  languages: Language[];
}

export type TemplateType = 'modern' | 'classic' | 'minimal' | 'creative';

export interface ResumeState {
  data: ResumeData;
  selectedTemplate: TemplateType;
  setPersonalInfo: (info: Partial<PersonalInfo>) => void;
  addEducation: (education: Education) => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addWorkExperience: (experience: WorkExperience) => void;
  updateWorkExperience: (id: string, experience: Partial<WorkExperience>) => void;
  removeWorkExperience: (id: string) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  removeProject: (id: string) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  removeSkill: (id: string) => void;
  addCertificate: (certificate: Certificate) => void;
  updateCertificate: (id: string, certificate: Partial<Certificate>) => void;
  removeCertificate: (id: string) => void;
  addAward: (award: Award) => void;
  updateAward: (id: string, award: Partial<Award>) => void;
  removeAward: (id: string) => void;
  addLanguage: (language: Language) => void;
  updateLanguage: (id: string, language: Partial<Language>) => void;
  removeLanguage: (id: string) => void;
  setTemplate: (template: TemplateType) => void;
  resetData: () => void;
}

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const createEmptyEducation = (): Education => ({
  id: generateId(),
  school: '',
  degree: '',
  major: '',
  startDate: '',
  endDate: '',
  gpa: '',
  achievements: '',
});

export const createEmptyWorkExperience = (): WorkExperience => ({
  id: generateId(),
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  current: false,
  location: '',
  responsibilities: '',
});

export const createEmptyProject = (): Project => ({
  id: generateId(),
  name: '',
  role: '',
  startDate: '',
  endDate: '',
  description: '',
  technologies: '',
  link: '',
});

export const createEmptySkill = (): Skill => ({
  id: generateId(),
  category: '',
  items: '',
});

export const createEmptyCertificate = (): Certificate => ({
  id: generateId(),
  name: '',
  issuer: '',
  date: '',
  link: '',
});

export const createEmptyAward = (): Award => ({
  id: generateId(),
  title: '',
  issuer: '',
  date: '',
  description: '',
});

export const createEmptyLanguage = (): Language => ({
  id: generateId(),
  name: '',
  level: '中级',
});

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    linkedin: '',
    github: '',
    summary: '',
    photo: '',
  },
  education: [],
  workExperience: [],
  projects: [],
  skills: [],
  certificates: [],
  awards: [],
  languages: [],
};
