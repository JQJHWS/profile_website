import React, { useState } from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Project, createEmptyProject } from '../../types';

export const ProjectForm: React.FC = () => {
  const { data, addProject, updateProject, removeProject } = useResumeStore();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = () => {
    const newProject = createEmptyProject();
    addProject(newProject);
    setEditingId(newProject.id);
  };

  const handleChange = (id: string, field: keyof Project, value: string) => {
    updateProject(id, { [field]: value });
  };

  const handleRemove = (id: string) => {
    removeProject(id);
    if (editingId === id) {
      setEditingId(null);
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
          项目经验
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
        {data.projects.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            <p>暂无项目经验，点击上方按钮添加</p>
          </div>
        ) : (
          data.projects.map((project) => (
            <div key={project.id} className="item-card">
              <div className="item-header">
                <div>
                  <div className="item-title">{project.name || '项目名称'}</div>
                  <div className="item-subtitle">{project.role || '角色'}</div>
                </div>
                <div className="item-actions">
                  <button
                    className="btn-icon"
                    onClick={() =>
                      setEditingId(editingId === project.id ? null : project.id)
                    }
                  >
                    {editingId === project.id ? (
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
                    onClick={() => handleRemove(project.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
              {editingId === project.id && (
                <div className="form-group">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">项目名称</label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) =>
                          handleChange(project.id, 'name', e.target.value)
                        }
                        className="form-input"
                        placeholder="项目名称"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">您的角色</label>
                      <input
                        type="text"
                        value={project.role}
                        onChange={(e) =>
                          handleChange(project.id, 'role', e.target.value)
                        }
                        className="form-input"
                        placeholder="如：前端开发负责人"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">开始时间</label>
                      <input
                        type="month"
                        value={project.startDate}
                        onChange={(e) =>
                          handleChange(project.id, 'startDate', e.target.value)
                        }
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">结束时间</label>
                      <input
                        type="month"
                        value={project.endDate}
                        onChange={(e) =>
                          handleChange(project.id, 'endDate', e.target.value)
                        }
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">项目链接</label>
                    <input
                      type="url"
                      value={project.link || ''}
                      onChange={(e) =>
                        handleChange(project.id, 'link', e.target.value)
                      }
                      className="form-input"
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">项目描述</label>
                    <textarea
                      value={project.description}
                      onChange={(e) =>
                        handleChange(project.id, 'description', e.target.value)
                      }
                      className="form-textarea"
                      placeholder="描述项目的背景、目标和您的贡献..."
                      rows={4}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">技术栈</label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) =>
                        handleChange(project.id, 'technologies', e.target.value)
                      }
                      className="form-input"
                      placeholder="React, TypeScript, Node.js, MongoDB..."
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
