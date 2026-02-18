import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { TemplateType } from '../../types';

const templates: { id: TemplateType; name: string; description: string }[] = [
  { id: 'modern', name: '现代风格', description: '简洁现代，适合科技行业' },
  { id: 'classic', name: '经典风格', description: '传统正式，适合传统行业' },
  { id: 'minimal', name: '简约风格', description: '极简设计，突出内容' },
  { id: 'creative', name: '创意风格', description: '双栏布局，个性鲜明' },
];

export const TemplateSelector: React.FC = () => {
  const { selectedTemplate, setTemplate } = useResumeStore();

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
          模板选择
        </div>
      </div>
      <div className="section-content">
        <div className="template-selector">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`template-option ${selectedTemplate === template.id ? 'active' : ''}`}
              onClick={() => setTemplate(template.id)}
            >
              <div className="template-preview">
                <TemplateThumbnail type={template.id} />
              </div>
              <div className="template-name">{template.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TemplateThumbnail: React.FC<{ type: TemplateType }> = ({ type }) => {
  const renderThumbnail = () => {
    switch (type) {
      case 'modern':
        return (
          <div className="thumb modern-thumb">
            <div className="thumb-header">
              <div className="thumb-photo" />
              <div className="thumb-info">
                <div className="thumb-name" />
                <div className="thumb-contact" />
              </div>
            </div>
            <div className="thumb-section" />
            <div className="thumb-section" />
          </div>
        );
      case 'classic':
        return (
          <div className="thumb classic-thumb">
            <div className="thumb-header-center">
              <div className="thumb-name" />
              <div className="thumb-contact" />
            </div>
            <div className="thumb-section" />
            <div className="thumb-section" />
          </div>
        );
      case 'minimal':
        return (
          <div className="thumb minimal-thumb">
            <div className="thumb-name-lg" />
            <div className="thumb-contact" />
            <div className="thumb-section" />
            <div className="thumb-section" />
          </div>
        );
      case 'creative':
        return (
          <div className="thumb creative-thumb">
            <div className="thumb-sidebar">
              <div className="thumb-photo" />
              <div className="thumb-section-sm" />
            </div>
            <div className="thumb-main">
              <div className="thumb-section" />
              <div className="thumb-section" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return renderThumbnail();
};
