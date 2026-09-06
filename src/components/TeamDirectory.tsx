'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TeamMember } from '@/types/team';
import { fetchTeamDataFromGoogleSheets, formatImageUrl } from '@/lib/google-sheets';
import { FALLBACK_TEAM_DATA } from '@/lib/fallback-data';

export default function TeamDirectory() {
  const [members, setMembers] = useState<TeamMember[]>(FALLBACK_TEAM_DATA);
  const [loading, setLoading] = useState(true);
  const [activeSeason, setActiveSeason] = useState('2026');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});



  const loadData = async () => {
    setLoading(true);
    try {
      const sheetRes = await fetchTeamDataFromGoogleSheets();
      if (sheetRes.data && sheetRes.data.length > 0) {
        setMembers(sheetRes.data);
      }
    } catch (err) {
      console.warn('Could not load live sheet, falling back to local snapshot:', err);
      setMembers(FALLBACK_TEAM_DATA);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const seasonsList = [
    { id: '2026', label: 'Season 2026' },
    { id: '2025', label: 'Season 2025' },
    { id: '2024', label: 'Season 2024' },
    { id: 'all', label: 'All Seasons' },
  ];

  const filteredMembers = members.filter((member) => {
    // Season filter
    let matchSeason = false;
    if (activeSeason === 'all') {
      matchSeason = true;
    } else {
      const s = (member.season || '').toString().toLowerCase();
      matchSeason = s.includes(activeSeason) || s === 'all';
    }

    // Category filter
    let matchCategory = false;
    if (activeCategory === 'all') {
      matchCategory = true;
    } else if (activeCategory === 'teacher') {
      matchCategory = member.isTeacher === true || member.category === 'advisor';
    } else if (activeCategory === 'student') {
      matchCategory = member.isTeacher === false && member.category !== 'advisor';
    } else {
      matchCategory = member.category === activeCategory;
    }

    // Search filter
    let matchSearch = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const combined = `${member.name} ${member.role} ${member.department} ${member.bio || ''}`.toLowerCase();
      matchSearch = combined.includes(q);
    }

    return matchSeason && matchCategory && matchSearch;
  });

  const getRoleBadge = (member: TeamMember) => {
    if (member.isTeacher || member.category === 'advisor') {
      return (
        <span
          className="badge d-inline-flex align-items-center text-truncate"
          style={{
            background: '#FEF3C7',
            border: '1.5px solid #D97706',
            color: '#92400E',
            fontWeight: 800,
            fontSize: '11px',
            maxWidth: '100%',
            padding: '4px 8px',
          }}
        >
          <i className="bi bi-mortarboard-fill me-1 text-warning"></i>
          <span className="text-truncate">{member.role || 'Faculty Advisor'}</span>
        </span>
      );
    }

    switch (member.category) {
      case 'captain':
        return (
          <span
            className="badge d-inline-flex align-items-center text-truncate"
            style={{
              background: '#FEE2E2',
              border: '1.5px solid #DC2626',
              color: '#991B1B',
              fontWeight: 800,
              fontSize: '11px',
              maxWidth: '100%',
              padding: '4px 8px',
            }}
          >
            <i className="bi bi-flag-fill me-1 text-danger"></i>
            <span className="text-truncate">{member.role}</span>
          </span>
        );
      case 'lead':
        return (
          <span
            className="badge d-inline-flex align-items-center text-truncate"
            style={{
              background: '#E0F2FE',
              border: '1.5px solid #0284C7',
              color: '#0369A1',
              fontWeight: 800,
              fontSize: '11px',
              maxWidth: '100%',
              padding: '4px 8px',
            }}
          >
            <i className="bi bi-star-fill me-1 text-info"></i>
            <span className="text-truncate">{member.role}</span>
          </span>
        );
      case 'alumni':
        return (
          <span
            className="badge d-inline-flex align-items-center text-truncate"
            style={{
              background: '#F1F5F9',
              border: '1.5px solid #64748B',
              color: '#334155',
              fontWeight: 800,
              fontSize: '11px',
              maxWidth: '100%',
              padding: '4px 8px',
            }}
          >
            <i className="bi bi-award-fill me-1 text-secondary"></i>
            <span className="text-truncate">{member.role}</span>
          </span>
        );
      default:
        return (
          <span
            className="badge d-inline-flex align-items-center text-truncate"
            style={{
              background: '#F8FAFC',
              border: '1.5px solid #0F172A',
              color: '#0F172A',
              fontWeight: 700,
              fontSize: '11px',
              maxWidth: '100%',
              padding: '4px 8px',
            }}
          >
            <i className="bi bi-gear-wide-connected me-1 text-muted"></i>
            <span className="text-truncate">{member.role}</span>
          </span>
        );
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <>
      {/* Member Certificate Detail Modal */}
      {selectedMember && (
        <div
          className="position-fixed inset-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{
            zIndex: 9998,
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(6px)',
            top: 0,
            left: 0,
          }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="position-relative rounded overflow-hidden"
            style={{
              width: '100%',
              maxWidth: '680px',
              background: '#FFFFFF',
              border: '3px solid #0F172A',
              boxShadow: '8px 8px 0 #FF2A2A',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certificate Header Banner */}
            <div
              className="px-4 py-3 d-flex justify-content-between align-items-center"
              style={{
                background: '#0F172A',
                color: '#FFFFFF',
                borderBottom: '2px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-patch-check-fill text-danger fs-5"></i>
                <div>
                  <div className="font-monospace fw-bold" style={{ fontSize: '11px', letterSpacing: '1px', color: '#94A3B8' }}>
                    FORMULA STUDENT ENGINEERING CREDENTIAL
                  </div>
                  <h5 className="mb-0 font-orbitron fw-bold" style={{ fontSize: '15px' }}>
                    KUET MOTORSPORT PERSONNEL RECORD
                  </h5>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="btn btn-sm btn-danger d-flex align-items-center justify-content-center"
                style={{ width: '30px', height: '30px', fontWeight: 900 }}
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4">
              <div className="row g-4 align-items-center">
                {/* Photo */}
                <div className="col-md-5 col-12 text-center">
                  <div
                    className="position-relative mx-auto rounded overflow-hidden"
                    style={{
                      width: '180px',
                      height: '220px',
                      border: '2px solid #0F172A',
                      boxShadow: '4px 4px 0 #0F172A',
                      background: '#F1F5F9',
                    }}
                  >
                    <Image
                      src={formatImageUrl(selectedMember.image)}
                      alt={selectedMember.name}
                      fill
                      unoptimized={true}
                      style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                      onError={() => setImageErrors((prev) => ({ ...prev, [selectedMember.name]: true }))}
                    />
                    <div className="cert-photo-glare"></div>
                  </div>
                  <div className="mt-2 font-monospace fw-bold text-muted" style={{ fontSize: '11px' }}>
                    ID: #{selectedMember.season}-{selectedMember.name.slice(0, 3).toUpperCase()}
                  </div>
                </div>

                {/* Details */}
                <div className="col-md-7 col-12">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span
                      className="font-monospace fw-bold px-2 py-0.5 rounded text-white"
                      style={{ fontSize: '11px', background: '#0F172A' }}
                    >
                      Season {selectedMember.season}
                    </span>
                    {selectedMember.isTeacher && (
                      <span
                        className="font-monospace fw-bold px-2 py-0.5 rounded"
                        style={{ fontSize: '11px', background: '#FEF3C7', color: '#92400E', border: '1px solid #D97706' }}
                      >
                        FACULTY ADVISOR
                      </span>
                    )}
                  </div>

                  <h4 className="font-orbitron fw-bold mb-1" style={{ color: '#0F172A' }}>
                    {selectedMember.name}
                  </h4>

                  <div className="my-2">{getRoleBadge(selectedMember)}</div>

                  <div className="font-monospace fw-bold mb-3" style={{ color: '#0284C7', fontSize: '13px' }}>
                    {selectedMember.department} • KUET
                  </div>

                  {/* Biography */}
                  <div
                    className="p-3 rounded mb-3"
                    style={{
                      background: '#F8FAFC',
                      border: '1px dashed #CBD5E1',
                      maxHeight: '160px',
                      overflowY: 'auto',
                    }}
                  >
                    <div className="fw-bold small text-muted font-monospace mb-1">OFFICIAL CITATION / BIO:</div>
                    <p className="small mb-0" style={{ color: '#334155', lineHeight: '1.5' }}>
                      {selectedMember.bio && selectedMember.bio.trim()
                        ? selectedMember.bio
                        : 'Official Formula Student project personnel responsible for engineering design, computer-aided testing, and vehicle construction for Team Kilo Flight KUET.'}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm d-inline-flex align-items-center gap-1"
                        style={{
                          background: '#0284C7',
                          color: '#FFFFFF',
                          fontWeight: 700,
                          fontSize: '12px',
                          border: '1.5px solid #0F172A',
                          boxShadow: '2px 2px 0 #0F172A',
                        }}
                      >
                        <i className="bi bi-linkedin"></i> LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <section
        className="page-header-section"
        style={{
          background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, rgba(2, 132, 199, 0.05) 50%, var(--dark-bg) 100%)',
          paddingTop: '50px',
          paddingBottom: '30px',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <span className="badge-motorsport red mb-2">Team Personnel &amp; Credentials Roster</span>
          <h1 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            TEAM KILOFLIGHT DIRECTORY
          </h1>
          <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '750px', fontSize: '15px' }}>
            Faculty advisors, technical directors, and student engineers from Khulna University of Engineering &amp; Technology (KUET) building Bangladesh&apos;s pioneering Formula Student race vehicles.
          </p>

          {/* Season Filter Tabs */}
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {seasonsList.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`season-btn ${activeSeason === season.id ? 'active' : ''}`}
                style={{
                  padding: '8px 18px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  borderRadius: '10px',
                  border: '2px solid #0F172A',
                  boxShadow: activeSeason === season.id ? '3px 3px 0 #FF2A2A' : '2px 2px 0 #0F172A',
                  background: activeSeason === season.id ? '#0F172A' : '#FFFFFF',
                  color: activeSeason === season.id ? '#FFFFFF' : '#0F172A',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease-in-out',
                }}
              >
                {season.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Control Bar */}
      <section className="py-2">
        <div className="container mx-auto px-4">
          <div
            className="p-3 rounded"
            style={{
              background: '#FFFFFF',
              border: '2px solid #0F172A',
              boxShadow: '3px 3px 0 #0F172A',
            }}
          >
            <div className="row g-3 align-items-center">
              {/* Search Box */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="position-relative">
                  <i
                    className="bi bi-search position-absolute text-muted"
                    style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }}
                  ></i>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="neo-input w-100"
                    style={{ paddingLeft: '40px' }}
                    placeholder="Search by name, role, department (e.g. Auritra, Faysal, Powertrain, ME)..."
                  />
                </div>
              </div>

              {/* Category / Role Filter */}
              <div className="col-lg-4 col-md-4 col-7">
                <div className="d-flex align-items-center gap-2">
                  <label htmlFor="category-select" className="small fw-bold text-nowrap mb-0" style={{ color: '#0F172A' }}>
                    <i className="bi bi-funnel-fill text-danger me-1"></i> Filter:
                  </label>
                  <select
                    id="category-select"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="neo-input"
                    style={{ padding: '7px 12px', fontSize: '13px' }}
                  >
                    <option value="all">All Personnel ({members.length})</option>
                    <option value="teacher">Faculty Advisors &amp; Mentors</option>
                    <option value="student">Student Engineers</option>
                    <option value="captain">Captains &amp; Directors</option>
                    <option value="lead">Sub-Team Department Leads</option>
                    <option value="member">General Crew &amp; Executives</option>
                  </select>
                </div>
              </div>

              {/* Count */}
              <div className="col-lg-2 col-md-2 col-5 text-end">
                <span className="badge-motorsport" style={{ background: '#F1F5F9', color: '#0F172A', border: '1.5px solid #0F172A' }}>
                  {filteredMembers.length} member{filteredMembers.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding py-4">
        <div className="container mx-auto px-4">
          {loading && members.length === 0 ? (
            <div className="text-center py-5">
              <div className="spinner-border text-danger mb-3" style={{ width: '3rem', height: '3rem' }}></div>
              <h5 className="font-orbitron">Loading Team Directory...</h5>
            </div>
          ) : filteredMembers.length === 0 ? (
            <div className="text-center py-5">
              <div
                className="p-5 mx-auto rounded text-center"
                style={{
                  maxWidth: '520px',
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: '4px 4px 0 #0F172A',
                }}
              >
                <i className="bi bi-people-fill fs-1 text-muted mb-3 d-block"></i>
                <h4 className="mb-2 font-orbitron" style={{ color: '#0F172A' }}>No Team Members Found</h4>
                <p className="text-muted small mb-4">
                  No members match your selected season ({activeSeason}), role filter, or search term.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveSeason('all');
                  }}
                  className="custom-btn"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {filteredMembers.map((member, idx) => {
                const uniqueKey = `${member.season}-${member.name}-${idx}`;
                const hasImgError = imageErrors[member.name];
                const serialNum = `KF-${member.season.slice(-2)}-${(idx + 1).toString().padStart(2, '0')}`;

                return (
                  <div key={uniqueKey} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
                    <div className={`team-cert-card ${member.isTeacher ? 'is-faculty' : ''}`}>
                      {/* Top Header Zone (Identical 32px height) */}
                      <div className="cert-header-zone">
                        <span
                          className="font-monospace fw-bold px-2 py-0.5 rounded text-white"
                          style={{
                            fontSize: '10.5px',
                            background: '#0F172A',
                            letterSpacing: '0.5px',
                          }}
                        >
                          SEASON {member.season}
                        </span>

                        {member.isTeacher ? (
                          <span
                            className="badge font-monospace"
                            style={{
                              background: '#FEF3C7',
                              color: '#92400E',
                              border: '1px solid #D97706',
                              fontSize: '10px',
                              letterSpacing: '0.5px',
                            }}
                          >
                            <i className="bi bi-mortarboard-fill me-1"></i> FACULTY
                          </span>
                        ) : member.category === 'captain' ? (
                          <span
                            className="badge font-monospace"
                            style={{
                              background: '#FEE2E2',
                              color: '#991B1B',
                              border: '1px solid #DC2626',
                              fontSize: '10px',
                              letterSpacing: '0.5px',
                            }}
                          >
                            <i className="bi bi-flag-fill me-1"></i> LEADERSHIP
                          </span>
                        ) : member.category === 'lead' ? (
                          <span
                            className="badge font-monospace"
                            style={{
                              background: '#E0F2FE',
                              color: '#0369A1',
                              border: '1px solid #0284C7',
                              fontSize: '10px',
                              letterSpacing: '0.5px',
                            }}
                          >
                            <i className="bi bi-star-fill me-1"></i> DIVISION LEAD
                          </span>
                        ) : (
                          <span
                            className="badge font-monospace"
                            style={{
                              background: '#F1F5F9',
                              color: '#475569',
                              border: '1px solid #CBD5E1',
                              fontSize: '10px',
                              letterSpacing: '0.5px',
                            }}
                          >
                            <i className="bi bi-shield-check me-1"></i> STUDENT ENGR
                          </span>
                        )}
                      </div>

                      {/* Photo Area (Identical 190px height) */}
                      <div
                        className="cert-photo-window"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedMember(member)}
                        title="Click to view official credentials"
                      >
                        {/* Certificate Corner Brackets */}
                        <div className="cert-corner-bracket cert-corner-tl"></div>
                        <div className="cert-corner-bracket cert-corner-tr"></div>
                        <div className="cert-corner-bracket cert-corner-bl"></div>
                        <div className="cert-corner-bracket cert-corner-br"></div>

                        {/* Glass Glare Overlay */}
                        <div className="cert-photo-glare"></div>

                        {/* Photo or Monogram fallback */}
                        {!hasImgError ? (
                          <Image
                            src={formatImageUrl(member.image)}
                            alt={member.name}
                            fill
                            unoptimized={true}
                            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                            onError={() => setImageErrors((prev) => ({ ...prev, [member.name]: true }))}
                          />
                        ) : (
                          <div
                            className="w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                            style={{
                              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                              color: '#FFFFFF',
                            }}
                          >
                            <div className="font-orbitron fw-bold fs-3 mb-1" style={{ color: '#FF2A2A' }}>
                              {getInitials(member.name)}
                            </div>
                            <div className="font-monospace text-muted" style={{ fontSize: '10px' }}>
                              KUET MOTORSPORT
                            </div>
                          </div>
                        )}

                        {/* Serial Tag */}
                        <div className="cert-serial-tag">{serialNum}</div>
                      </div>

                      {/* Name Zone (Identical 48px height) */}
                      <div className="cert-name-zone">
                        <h6 title={member.name}>{member.name}</h6>
                      </div>

                      {/* Role Badge Zone (Identical 32px height) */}
                      <div className="cert-role-zone">{getRoleBadge(member)}</div>

                      {/* Department Zone (Identical 24px height) */}
                      <div className="cert-dept-zone">
                        <span
                          className="font-monospace fw-bold text-truncate"
                          style={{
                            color: '#0284C7',
                            fontSize: '11.5px',
                            letterSpacing: '0.4px',
                            maxWidth: '100%',
                          }}
                          title={member.department}
                        >
                          {member.department || 'KUET FORMULA STUDENT'}
                        </span>
                      </div>

                      {/* Bio / Citation Zone (Identical 68px height) */}
                      <div className="cert-bio-zone">
                        <p className="cert-bio-text">
                          {member.bio && member.bio.trim()
                            ? member.bio
                            : 'Official Formula Student project personnel responsible for engineering design, computer-aided testing, and vehicle construction for Team Kilo Flight KUET.'}
                        </p>
                      </div>

                      {/* Footer Actions Zone (Identical 42px height, anchored to bottom) */}
                      <div className="cert-footer-zone">
                        {member.linkedin ? (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none d-inline-flex align-items-center gap-1 small fw-bold px-2 py-1 rounded"
                            style={{
                              background: '#E0F2FE',
                              color: '#0369A1',
                              border: '1px solid #0284C7',
                              fontSize: '11px',
                            }}
                            title="Connect on LinkedIn"
                          >
                            <i className="bi bi-linkedin text-primary"></i>
                            <span>LinkedIn</span>
                          </a>
                        ) : (
                          <span
                            className="small font-monospace fw-bold d-inline-flex align-items-center gap-1 text-muted"
                            style={{ fontSize: '10.5px' }}
                          >
                            <i className="bi bi-patch-check-fill text-success"></i>
                            <span>KUET RACING</span>
                          </span>
                        )}

                        <button
                          type="button"
                          onClick={() => setSelectedMember(member)}
                          className="btn btn-sm d-inline-flex align-items-center gap-1"
                          style={{
                            background: '#0F172A',
                            color: '#FFFFFF',
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: '5px',
                          }}
                        >
                          <i className="bi bi-person-badge"></i> Pass
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
