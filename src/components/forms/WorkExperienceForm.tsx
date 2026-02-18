import React, { useState } from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import {
  WorkExperience,
  createEmptyWorkExperience,
} from '../../types';

export const WorkExperienceForm: React.FC = () => {
  const {
    data,
    addWorkExperience,
    updateWorkExperience,
    removeWorkExperience,
  } = useResumeStore();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = () => {
    const newExperience = createEmptyWorkExperience();
    addWorkExperience(newExperience);
    setEditingId(newExperience.id);
  };

  const handleChange = (
    id: string,
    field: keyof WorkExperience,
    value: string | boolean
  ) => {
    updateWorkExperience(id, { [field]: value });
  };

  const handleRemove = (id: string) => {
    removeWorkExperience(id);
    if (editingId === id) {
      setEditingId(null);
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
          工作经历
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
        {data.workExperience.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <p>暂无工作经历，点击上方按钮添加</p>
          </div>
        ) : (
          data.workExperience.map((exp) => (
            <div key={exp.id} className="item-card">
              <div className="item-header">
                <div>
                  <div className="item-title">{exp.company || '公司名称'}</div>
                  <div className="item-subtitle">{exp.position || '职位'}</div>
                </div>
                <div className="item-actions">
                  <button
                    className="btn-icon"
                    onClick={() =>
                      setEditingId(editingId === exp.id ? null : exp.id)
                    }
                  >
                    {editingId === exp.id ? (
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
                    onClick={() => handleRemove(exp.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
              {editingId === exp.id && (
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">公司名称</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          handleChange(exp.id, 'company', e.target.value)
                        }
                        className="form-input"
                        placeholder="公司名称"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">职位</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) =>
                          handleChange(exp.id, 'position', e.target.value)
                        }
                        className="form-input"
                        placeholder="职位名称"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">开始时间</label>
                      <input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) =>
                          handleChange(exp.id, 'startDate', e.target.value)
                        }
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">结束时间</label>
                      <input
                        type="month"
                        value={exp.endDate}
                        onChange={(e) =>
                          handleChange(exp.id, 'endDate', e.target.value)
                        }
                        className="form-input"
                        disabled={exp.current}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">工作地点</label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) =>
                        handleChange(exp.id, 'location', e.target.value)
                      }
                      className="form-input"
                      placeholder="城市，省份"
                    />
                  </div>
                  <div className="form-group">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id={`current-${exp.id}`}
                        checked={exp.current}
                        onChange={(e) =>
                          handleChange(exp.id, 'current', e.target.checked)
                        }
                        className="checkbox-input"
                      />
                      <label
                        htmlFor={`current-${exp.id}`}
                        className="checkbox-label"
                      >
                        目前在此工作
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">工作职责与成就</label>
                    <textarea
                      value={exp.responsibilities}
                      onChange={(e) =>
                        handleChange(exp.id, 'responsibilities', e.target.value)
                      }
                      className="form-textarea"
                      placeholder="描述您的主要职责、项目成就和贡献...&#10;• 负责XXX项目的开发与维护&#10;• 优化系统性能，提升响应速度50%&#10;• 带领团队完成XXX目标"
                      rows={5}
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
