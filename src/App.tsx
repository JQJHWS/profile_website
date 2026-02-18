import React, { useState } from 'react';
import { useResumeStore } from './store/useResumeStore';
import { PersonalInfoForm } from './components/forms/PersonalInfoForm';
import { EducationForm } from './components/forms/EducationForm';
import { WorkExperienceForm } from './components/forms/WorkExperienceForm';
import { ProjectForm } from './components/forms/ProjectForm';
import { SkillForm } from './components/forms/SkillForm';
import { AdditionalForm } from './components/forms/AdditionalForm';
import { TemplateSelector } from './components/forms/TemplateSelector';
import { ResumePreview } from './components/preview/ResumePreview';
import { exportToPDF, exportToImage } from './utils/pdfExport';
import './styles/index.css';

const App: React.FC = () => {
  const { data, resetData } = useResumeStore();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const fileName = data.personalInfo.name 
        ? `${data.personalInfo.name}_简历.pdf` 
        : 'resume.pdf';
      await exportToPDF('resume-preview', fileName);
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('PDF导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportImage = async () => {
    setIsExporting(true);
    try {
      const fileName = data.personalInfo.name 
        ? `${data.personalInfo.name}_简历.png` 
        : 'resume.png';
      await exportToImage('resume-preview', fileName);
    } catch (error) {
      console.error('Image export failed:', error);
      alert('图片导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  };

  const handleReset = () => {
    if (window.confirm('确定要清空所有数据吗？此操作不可撤销。')) {
      resetData();
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>简历生成器</h1>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              className="btn btn-secondary" 
              onClick={handleReset}
              style={{ color: '#ef4444' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
              清空数据
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={handleExportImage}
              disabled={isExporting}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              导出图片
            </button>
            <button 
              className="btn btn-success" 
              onClick={handleExportPDF}
              disabled={isExporting}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {isExporting ? '导出中...' : '下载PDF'}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="editor-panel">
          <TemplateSelector />
          <PersonalInfoForm />
          <EducationForm />
          <WorkExperienceForm />
          <ProjectForm />
          <SkillForm />
          <AdditionalForm />
        </div>
        
        <div id="resume-preview">
          <ResumePreview />
        </div>
      </main>
    </div>
  );
};

export default App;
