import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import {
  ModernTemplate,
  ClassicTemplate,
  MinimalTemplate,
  CreativeTemplate,
} from '../templates/ResumeTemplates';

export const ResumePreview: React.FC = () => {
  const { data, selectedTemplate } = useResumeStore();

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'classic':
        return <ClassicTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  return (
    <div className="preview-panel">
      <div className="preview-header">
        <h2>简历预览</h2>
      </div>
      <div className="preview-content">{renderTemplate()}</div>
    </div>
  );
};
