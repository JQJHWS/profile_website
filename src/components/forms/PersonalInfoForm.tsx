import React from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { PhotoUploader } from './PhotoUploader';

export const PersonalInfoForm: React.FC = () => {
  const { data, setPersonalInfo } = useResumeStore();
  const { personalInfo } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPersonalInfo({ [name]: value });
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          基本信息
        </div>
      </div>
      <div className="section-content">
        <PhotoUploader />
        
        <div className="form-group">
          <label className="form-label">姓名 *</label>
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            onChange={handleChange}
            className="form-input"
            placeholder="请输入您的姓名"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">邮箱 *</label>
            <input
              type="email"
              name="email"
              value={personalInfo.email}
              onChange={handleChange}
              className="form-input"
              placeholder="example@email.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">电话 *</label>
            <input
              type="tel"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="138-0000-0000"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">地址</label>
          <input
            type="text"
            name="address"
            value={personalInfo.address}
            onChange={handleChange}
            className="form-input"
            placeholder="城市，省份"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">个人网站</label>
            <input
              type="url"
              name="website"
              value={personalInfo.website || ''}
              onChange={handleChange}
              className="form-input"
              placeholder="https://yourwebsite.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={personalInfo.linkedin || ''}
              onChange={handleChange}
              className="form-input"
              placeholder="LinkedIn 用户名或链接"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">GitHub</label>
          <input
            type="text"
            name="github"
            value={personalInfo.github || ''}
            onChange={handleChange}
            className="form-input"
            placeholder="GitHub 用户名或链接"
          />
        </div>

        <div className="form-group">
          <label className="form-label">个人简介</label>
          <textarea
            name="summary"
            value={personalInfo.summary}
            onChange={handleChange}
            className="form-textarea"
            placeholder="简要介绍您的职业背景、核心技能和职业目标..."
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};
