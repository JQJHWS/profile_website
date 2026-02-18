import React, { useState } from 'react';
import { useResumeStore } from '../../store/useResumeStore';
import {
  createEmptyCertificate,
  createEmptyAward,
  createEmptyLanguage,
} from '../../types';

export const AdditionalForm: React.FC = () => {
  const {
    data,
    addCertificate,
    updateCertificate,
    removeCertificate,
    addAward,
    updateAward,
    removeAward,
    addLanguage,
    updateLanguage,
    removeLanguage,
  } = useResumeStore();

  const [editingCertificateId, setEditingCertificateId] = useState<
    string | null
  >(null);
  const [editingAwardId, setEditingAwardId] = useState<string | null>(null);
  const [editingLanguageId, setEditingLanguageId] = useState<string | null>(
    null
  );

  return (
    <>
      <div className="section">
        <div className="section-header">
          <div className="section-title">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="7" />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
            证书资质
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              const newCert = createEmptyCertificate();
              addCertificate(newCert);
              setEditingCertificateId(newCert.id);
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            添加
          </button>
        </div>
        <div className="section-content">
          {data.certificates.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              <p>暂无证书，点击上方按钮添加</p>
            </div>
          ) : (
            data.certificates.map((cert) => (
              <div key={cert.id} className="item-card">
                <div className="item-header">
                  <div>
                    <div className="item-title">{cert.name || '证书名称'}</div>
                    <div className="item-subtitle">{cert.issuer || '颁发机构'}</div>
                  </div>
                  <div className="item-actions">
                    <button
                      className="btn-icon"
                      onClick={() =>
                        setEditingCertificateId(
                          editingCertificateId === cert.id ? null : cert.id
                        )
                      }
                    >
                      {editingCertificateId === cert.id ? (
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
                      onClick={() => removeCertificate(cert.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
                {editingCertificateId === cert.id && (
                  <div className="form-group">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">证书名称</label>
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) =>
                            updateCertificate(cert.id, { name: e.target.value })
                          }
                          className="form-input"
                          placeholder="证书名称"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">颁发机构</label>
                        <input
                          type="text"
                          value={cert.issuer}
                          onChange={(e) =>
                            updateCertificate(cert.id, { issuer: e.target.value })
                          }
                          className="form-input"
                          placeholder="颁发机构"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">获得日期</label>
                        <input
                          type="month"
                          value={cert.date}
                          onChange={(e) =>
                            updateCertificate(cert.id, { date: e.target.value })
                          }
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">证书链接</label>
                        <input
                          type="url"
                          value={cert.link || ''}
                          onChange={(e) =>
                            updateCertificate(cert.id, { link: e.target.value })
                          }
                          className="form-input"
                          placeholder="证书验证链接"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <div className="section-title">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 15l-2 5l9-11h-6l2-5l-9 11h6z" />
            </svg>
            荣誉奖项
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              const newAward = createEmptyAward();
              addAward(newAward);
              setEditingAwardId(newAward.id);
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            添加
          </button>
        </div>
        <div className="section-content">
          {data.awards.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15l-2 5l9-11h-6l2-5l-9 11h6z" />
              </svg>
              <p>暂无奖项，点击上方按钮添加</p>
            </div>
          ) : (
            data.awards.map((award) => (
              <div key={award.id} className="item-card">
                <div className="item-header">
                  <div>
                    <div className="item-title">{award.title || '奖项名称'}</div>
                    <div className="item-subtitle">{award.issuer || '颁发机构'}</div>
                  </div>
                  <div className="item-actions">
                    <button
                      className="btn-icon"
                      onClick={() =>
                        setEditingAwardId(
                          editingAwardId === award.id ? null : award.id
                        )
                      }
                    >
                      {editingAwardId === award.id ? (
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
                      onClick={() => removeAward(award.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
                {editingAwardId === award.id && (
                  <div className="form-group">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">奖项名称</label>
                        <input
                          type="text"
                          value={award.title}
                          onChange={(e) =>
                            updateAward(award.id, { title: e.target.value })
                          }
                          className="form-input"
                          placeholder="奖项名称"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">颁发机构</label>
                        <input
                          type="text"
                          value={award.issuer}
                          onChange={(e) =>
                            updateAward(award.id, { issuer: e.target.value })
                          }
                          className="form-input"
                          placeholder="颁发机构"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">获得日期</label>
                      <input
                        type="month"
                        value={award.date}
                        onChange={(e) =>
                          updateAward(award.id, { date: e.target.value })
                        }
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">奖项描述</label>
                      <textarea
                        value={award.description}
                        onChange={(e) =>
                          updateAward(award.id, { description: e.target.value })
                        }
                        className="form-textarea"
                        placeholder="描述奖项的背景和意义..."
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

      <div className="section">
        <div className="section-header">
          <div className="section-title">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            语言能力
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              const newLang = createEmptyLanguage();
              addLanguage(newLang);
              setEditingLanguageId(newLang.id);
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            添加
          </button>
        </div>
        <div className="section-content">
          {data.languages.length === 0 ? (
            <div className="empty-state">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <p>暂无语言能力，点击上方按钮添加</p>
            </div>
          ) : (
            data.languages.map((lang) => (
              <div key={lang.id} className="item-card">
                <div className="item-header">
                  <div>
                    <div className="item-title">{lang.name || '语言'}</div>
                    <div className="item-subtitle">{lang.level}</div>
                  </div>
                  <div className="item-actions">
                    <button
                      className="btn-icon"
                      onClick={() =>
                        setEditingLanguageId(
                          editingLanguageId === lang.id ? null : lang.id
                        )
                      }
                    >
                      {editingLanguageId === lang.id ? (
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
                      onClick={() => removeLanguage(lang.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
                {editingLanguageId === lang.id && (
                  <div className="form-group">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">语言</label>
                        <input
                          type="text"
                          value={lang.name}
                          onChange={(e) =>
                            updateLanguage(lang.id, { name: e.target.value })
                          }
                          className="form-input"
                          placeholder="如：英语、日语"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">熟练程度</label>
                        <select
                          value={lang.level}
                          onChange={(e) =>
                            updateLanguage(lang.id, { level: e.target.value })
                          }
                          className="form-select"
                        >
                          <option value="初级">初级</option>
                          <option value="中级">中级</option>
                          <option value="高级">高级</option>
                          <option value="精通">精通</option>
                          <option value="母语">母语</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
