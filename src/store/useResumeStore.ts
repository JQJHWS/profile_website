import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ResumeState,
  TemplateType,
  Education,
  WorkExperience,
  Project,
  Skill,
  Certificate,
  Award,
  Language,
  PersonalInfo,
  initialResumeData,
} from '../types';

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      data: initialResumeData,
      selectedTemplate: 'modern',

      setPersonalInfo: (info: Partial<PersonalInfo>) =>
        set((state) => ({
          data: {
            ...state.data,
            personalInfo: { ...state.data.personalInfo, ...info },
          },
        })),

      addEducation: (education: Education) =>
        set((state) => ({
          data: {
            ...state.data,
            education: [...state.data.education, education],
          },
        })),

      updateEducation: (id: string, education: Partial<Education>) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.map((item) =>
              item.id === id ? { ...item, ...education } : item
            ),
          },
        })),

      removeEducation: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            education: state.data.education.filter((item) => item.id !== id),
          },
        })),

      addWorkExperience: (experience: WorkExperience) =>
        set((state) => ({
          data: {
            ...state.data,
            workExperience: [...state.data.workExperience, experience],
          },
        })),

      updateWorkExperience: (id: string, experience: Partial<WorkExperience>) =>
        set((state) => ({
          data: {
            ...state.data,
            workExperience: state.data.workExperience.map((item) =>
              item.id === id ? { ...item, ...experience } : item
            ),
          },
        })),

      removeWorkExperience: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            workExperience: state.data.workExperience.filter(
              (item) => item.id !== id
            ),
          },
        })),

      addProject: (project: Project) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: [...state.data.projects, project],
          },
        })),

      updateProject: (id: string, project: Partial<Project>) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.map((item) =>
              item.id === id ? { ...item, ...project } : item
            ),
          },
        })),

      removeProject: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            projects: state.data.projects.filter((item) => item.id !== id),
          },
        })),

      addSkill: (skill: Skill) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: [...state.data.skills, skill],
          },
        })),

      updateSkill: (id: string, skill: Partial<Skill>) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: state.data.skills.map((item) =>
              item.id === id ? { ...item, ...skill } : item
            ),
          },
        })),

      removeSkill: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            skills: state.data.skills.filter((item) => item.id !== id),
          },
        })),

      addCertificate: (certificate: Certificate) =>
        set((state) => ({
          data: {
            ...state.data,
            certificates: [...state.data.certificates, certificate],
          },
        })),

      updateCertificate: (id: string, certificate: Partial<Certificate>) =>
        set((state) => ({
          data: {
            ...state.data,
            certificates: state.data.certificates.map((item) =>
              item.id === id ? { ...item, ...certificate } : item
            ),
          },
        })),

      removeCertificate: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            certificates: state.data.certificates.filter(
              (item) => item.id !== id
            ),
          },
        })),

      addAward: (award: Award) =>
        set((state) => ({
          data: {
            ...state.data,
            awards: [...state.data.awards, award],
          },
        })),

      updateAward: (id: string, award: Partial<Award>) =>
        set((state) => ({
          data: {
            ...state.data,
            awards: state.data.awards.map((item) =>
              item.id === id ? { ...item, ...award } : item
            ),
          },
        })),

      removeAward: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            awards: state.data.awards.filter((item) => item.id !== id),
          },
        })),

      addLanguage: (language: Language) =>
        set((state) => ({
          data: {
            ...state.data,
            languages: [...state.data.languages, language],
          },
        })),

      updateLanguage: (id: string, language: Partial<Language>) =>
        set((state) => ({
          data: {
            ...state.data,
            languages: state.data.languages.map((item) =>
              item.id === id ? { ...item, ...language } : item
            ),
          },
        })),

      removeLanguage: (id: string) =>
        set((state) => ({
          data: {
            ...state.data,
            languages: state.data.languages.filter((item) => item.id !== id),
          },
        })),

      setTemplate: (template: TemplateType) =>
        set(() => ({
          selectedTemplate: template,
        })),

      resetData: () =>
        set(() => ({
          data: initialResumeData,
        })),
    }),
    {
      name: 'resume-storage',
    }
  )
);
