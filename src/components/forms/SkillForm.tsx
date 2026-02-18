import React, { useState } from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import { Skill, createEmptySkill } from '../../types';

export const SkillForm: React.FC = () => {
  const { data, addSkill, updateSkill, removeSkill } = useResumeStore();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = () => {
    const newSkill = createEmptySkill();
    addSkill(newSkill);
    setEditingId(newSkill.id);
  };

  const handleChange = (id: string, field: keyof Skill, value: string) => {
    updateSkill(id, { [field]: value });
  };

  const handleRemove = (id: string) => {
    removeSkill(id);
    if (editingId === id) {
      setEditingId(null);
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          技能特长
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
        {data.skills.length === 0 ? (
          <div className="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <p>暂无技能，点击上方按钮添加</p>
          </div>
        ) : (
          data.skills.map((skill) => (
            <div key={skill.id} className="item-card">
              <div className="item-header">
                <div>
                  <div className="item-title">{skill.category || '技能类别'}</div>
                  <div className="item-subtitle">
                    {skill.items
                      ? skill.items.split(',').slice(0, 3).join(', ') + '...'
                      : '技能列表'}
                  </div>
                </div>
                <div className="item-actions">
                  <button
                    className="btn-icon"
                    onClick={() =>
                      setEditingId(editingId === skill.id ? null : skill.id)
                    }
                  >
                    {editingId === skill.id ? (
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
                    onClick={() => handleRemove(skill.id)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
              {editingId === skill.id && (
                <div className="form-group">
                  <div className="form-group">
                    <label className="form-label">技能类别</label>
                    <select
                      value={skill.category}
                      onChange={(e) =>
                        handleChange(skill.id, 'category', e.target.value)
                      }
                      className="form-select"
                    >
                      <option value="">请选择或自定义</option>
                      <option value="编程语言">编程语言</option>
                      <option value="前端技术">前端技术</option>
                      <option value="后端技术">后端技术</option>
                      <option value="数据库">数据库</option>
                      <option value="开发工具">开发工具</option>
                      <option value="设计工具">设计工具</option>
                      <option value="语言能力">语言能力</option>
                      <option value="软技能">软技能</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">技能列表（用逗号分隔）</label>
                    <textarea
                      value={skill.items}
                      onChange={(e) =>
                        handleChange(skill.id, 'items', e.target.value)
                      }
                      className="form-textarea"
                      placeholder="JavaScript, TypeScript, React, Vue, Node.js..."
                      rows={2}
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
