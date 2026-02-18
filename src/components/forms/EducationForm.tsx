import React, { useState } from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import {
  Education,
  createEmptyEducation,
} from '../../types';

export const EducationForm: React.FC = () => {
  const { data, addEducation, updateEducation, removeEducation } =
    useResumeStore();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = () => {
    const newEducation = createEmptyEducation();
    addEducation(newEducation);
    setEditingId(newEducation.id);
  };

  const handleChange = (id: string, field: keyof Education, value: string) => {
    updateEducation(id, { [field]: value });
  };

  const handleRemove = (id: string) => {
    removeEducation(id);
    if (editingId === id) {
      setEditingId(null);
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
          教育背景
        </div>
        <button className="btn btn-primary btn-sm" onClick={handleAdd}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          添加
        </button>
      </div>
      <div className="section-content">
        {data.education.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <p>暂无教育经历，点击上方按钮添加</p>
          </div>
        ) : (
          data.education.map((edu) => (
            <div key={edu.id} className="item-card">
              <div className="item-header">
                <div>
                  <div className="item-title">{edu.school || '学校名称'}</div>
                  <div className="item-subtitle">
                    {edu.degree} {edu.major}
                  </div>
                </div>
                <div className="item-actions">
                  <button
                    className="btn-icon"
                    onClick={() =>
                      setEditingId(editingId === edu.id ? null : edu.id)
                    }
                  >
                    {editingId === edu.id ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() => handleRemove(edu.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
              {editingId === edu.id && (
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">学校名称</label>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={(e) =>
                          handleChange(edu.id, 'school', e.target.value)
                        }
                        className="form-input"
                        placeholder="学校名称"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">学位</label>
                      <select
                        value={edu.degree}
                        onChange={(e) =>
                          handleChange(edu.id, 'degree', e.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">请选择</option>
                        <option value="高中">高中</option>
                        <option value="专科">专科</option>
                        <option value="本科">本科</option>
                        <option value="硕士">硕士</option>
                        <option value="博士">博士</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">专业</label>
                      <input
                        type="text"
                        value={edu.major}
                        onChange={(e) =>
                          handleChange(edu.id, 'major', e.target.value)
                        }
                        className="form-input"
                        placeholder="专业名称"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">GPA</label>
                      <input
                        type="text"
                        value={edu.gpa || ''}
                        onChange={(e) =>
                          handleChange(edu.id, 'gpa', e.target.value)
                        }
                        className="form-input"
                        placeholder="3.8/4.0"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">开始时间</label>
                      <input
                        type="month"
                        value={edu.startDate}
                        onChange={(e) =>
                          handleChange(edu.id, 'startDate', e.target.value)
                        }
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">结束时间</label>
                      <input
                        type="month"
                        value={edu.endDate}
                        onChange={(e) =>
                          handleChange(edu.id, 'endDate', e.target.value)
                        }
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">主要成就/课程</label>
                    <textarea
                      value={edu.achievements}
                      onChange={(e) =>
                        handleChange(edu.id, 'achievements', e.target.value)
                      }
                      className="form-textarea"
                      placeholder="主要课程、获奖情况、学术成就等..."
                    />
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
