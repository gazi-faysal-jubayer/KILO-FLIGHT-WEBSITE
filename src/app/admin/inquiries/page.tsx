'use client';

import React, { useEffect, useState } from 'react';

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<any | null>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (data.success) {
        setInquiries(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleToggleStatus = async (inq: any) => {
    const newStatus = inq.status === 'Read' ? 'Unread' : 'Read';
    try {
      const res = await fetch('/api/contact', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: inq.id, status: newStatus }),
      });
      if (res.ok) {
        setInquiries((prev) => prev.map((item) => (item.id === inq.id ? { ...item, status: newStatus } : item)));
        if (selectedInquiry?.id === inq.id) {
          setSelectedInquiry({ ...selectedInquiry, status: newStatus });
        }
      }
    } catch (err) {
      alert('Failed to update message status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setInquiries((prev) => prev.filter((item) => item.id !== id));
        if (selectedInquiry?.id === id) setSelectedInquiry(null);
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Incoming Communications</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            CONTACT MESSAGES INBOX
          </h2>
          <p className="text-muted small mb-0">
            Messages received from the website contact section regarding corporate sponsorships, press, and partnerships.
          </p>
        </div>
        <button onClick={fetchInquiries} className="custom-btn">
          <i className="bi bi-arrow-clockwise me-1"></i> Refresh Inbox
        </button>
      </div>

      {/* Inquiries Table */}
      <div
        className="rounded overflow-hidden"
        style={{
          background: '#FFFFFF',
          border: '2px solid #0F172A',
          boxShadow: '4px 4px 0 #0F172A',
        }}
      >
        {loading ? (
          <div className="p-5 text-center">
            <div className="spinner-border text-danger mb-2"></div>
            <div className="small fw-bold">Loading messages...</div>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="p-5 text-center">
            <i className="bi bi-envelope-check fs-1 text-muted mb-2 d-block"></i>
            <h5 className="font-orbitron" style={{ color: '#0F172A' }}>Inbox Clean</h5>
            <p className="small text-muted mb-0">No new contact messages received.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead style={{ background: '#F8FAFC', borderBottom: '2px solid #0F172A' }}>
                <tr className="small text-uppercase font-orbitron" style={{ fontSize: '11.5px' }}>
                  <th>Sender</th>
                  <th>Inquiry Type</th>
                  <th>Message Preview</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="small">
                {inquiries.map((inq) => (
                  <tr key={inq.id} style={{ background: inq.status === 'Unread' ? '#FFFBEB' : 'transparent' }}>
                    <td>
                      <div className="fw-bold" style={{ color: '#0F172A', fontSize: '13px' }}>{inq.fullName}</div>
                      <a href={`mailto:${inq.email}`} className="text-muted text-decoration-none small">
                        {inq.email}
                      </a>
                    </td>
                    <td>
                      <span className="badge bg-secondary text-capitalize">{inq.inquiryType}</span>
                    </td>
                    <td>
                      <div className="text-truncate" style={{ maxWidth: '300px' }}>
                        {inq.message}
                      </div>
                    </td>
                    <td className="text-muted small">{new Date(inq.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={() => handleToggleStatus(inq)}
                        className={`badge btn btn-sm ${inq.status === 'Unread' ? 'bg-danger' : 'bg-light text-dark border'}`}
                        style={{ cursor: 'pointer', fontSize: '11px' }}
                      >
                        {inq.status || 'Unread'}
                      </button>
                    </td>
                    <td className="text-end">
                      <button
                        onClick={() => setSelectedInquiry(inq)}
                        className="btn btn-sm me-1"
                        style={{
                          background: '#0F172A',
                          color: '#FFFFFF',
                          border: '1.5px solid #0F172A',
                          boxShadow: '1.5px 1.5px 0 #FF2A2A',
                          fontWeight: 700,
                          fontSize: '11px',
                        }}
                      >
                        <i className="bi bi-eye-fill me-1"></i> Read
                      </button>
                      <button
                        onClick={() => handleDelete(inq.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Message Modal */}
      {selectedInquiry && (
        <div
          className="modal d-block"
          style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', zIndex: 1100 }}
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="modal-content"
              style={{
                border: '3px solid #0F172A',
                boxShadow: '8px 8px 0 #FF2A2A',
                borderRadius: '16px',
              }}
            >
              <div className="modal-header bg-light border-bottom border-dark p-3">
                <div>
                  <span className="badge bg-secondary text-capitalize mb-1">{selectedInquiry.inquiryType} Inquiry</span>
                  <h4 className="modal-title font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
                    {selectedInquiry.fullName}
                  </h4>
                </div>
                <button type="button" className="btn-close" onClick={() => setSelectedInquiry(null)}></button>
              </div>

              <div className="modal-body p-4">
                <div className="p-3 mb-3 rounded" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div className="small text-muted"><strong>From:</strong> {selectedInquiry.fullName} &lt;{selectedInquiry.email}&gt;</div>
                  <div className="small text-muted"><strong>Received:</strong> {new Date(selectedInquiry.createdAt).toLocaleString()}</div>
                </div>

                <div className="small fw-bold text-muted mb-1">MESSAGE CONTENT:</div>
                <div className="p-3 rounded" style={{ background: '#FFFFFF', border: '1.5px solid #0F172A', lineHeight: '1.6' }}>
                  {selectedInquiry.message}
                </div>
              </div>

              <div className="modal-footer bg-light border-top border-dark p-3 justify-content-between">
                <a
                  href={`mailto:${selectedInquiry.email}?subject=RE: Team KILOFLIGHT ${selectedInquiry.inquiryType} Inquiry`}
                  className="custom-btn btn-sm text-decoration-none"
                >
                  <i className="bi bi-reply-fill me-1"></i> Reply via Email
                </a>
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setSelectedInquiry(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
