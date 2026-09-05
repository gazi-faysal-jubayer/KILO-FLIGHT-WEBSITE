'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TeamMember, MemberCategory } from '@/types/team';
import { fetchTeamDataFromGoogleSheets, formatImageUrl } from '@/lib/google-sheets';
import { FALLBACK_TEAM_DATA } from '@/lib/fallback-data';
import SheetGuideModal from './SheetGuideModal';

export default function TeamDirectory() {
  const [members, setMembers] = useState<TeamMember[]>(FALLBACK_TEAM_DATA);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSeason, setActiveSeason] = useState('2026');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedBios, setExpandedBios] = useState<{ [key: string]: boolean }>({});

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const sheetRes = await fetchTeamDataFromGoogleSheets();
      if (sheetRes.data && sheetRes.data.length > 0) {
        setMembers(sheetRes.data);
        setIsLive(sheetRes.isLive);
      }
    } catch (err) {
      console.warn('Could not load live sheet, falling back to local snapshot:', err);
      setMembers(FALLBACK_TEAM_DATA);
      setIsLive(false);
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
        <div
          className="role-badge"
          style={{ background: '#FEF3C7', borderColor: '#D97706', color: '#92400E', fontWeight: 700 }}
        >
          <i className="bi bi-mortarboard-fill me-1 text-warning"></i> {member.role || 'Faculty Advisor'}
        </div>
      );
    }

    switch (member.category) {
      case 'captain':
        return (
          <div
            className="role-badge"
            style={{ background: '#FEE2E2', borderColor: '#DC2626', color: '#991B1B', fontWeight: 700 }}
          >
            <i className="bi bi-flag-fill me-1 text-danger"></i> {member.role}
          </div>
        );
      case 'lead':
        return (
          <div
            className="role-badge"
            style={{ background: '#E0F2FE', borderColor: '#0284C7', color: '#0369A1', fontWeight: 700 }}
          >
            <i className="bi bi-star-fill me-1 text-info"></i> {member.role}
          </div>
        );
      case 'alumni':
        return (
          <div
            className="role-badge"
            style={{ background: '#F1F5F9', borderColor: '#64748B', color: '#334155', fontWeight: 700 }}
          >
            <i className="bi bi-award-fill me-1 text-secondary"></i> {member.role}
          </div>
        );
      default:
        return (
          <div
            className="role-badge"
            style={{ background: '#F8FAFC', borderColor: '#0F172A', color: '#0F172A', fontWeight: 600 }}
          >
            <i className="bi bi-gear-wide-connected me-1 text-muted"></i> {member.role}
          </div>
        );
    }
  };

  return (
    <>
      {/* Header Banner */}
      <section
        className="page-header-section"
        style={{
          background: 'radial-gradient(circle at top, rgba(255, 42, 42, 0.08) 0%, rgba(2, 132, 199, 0.05) 50%, var(--dark-bg) 100%)',
          paddingTop: '60px',
          paddingBottom: '40px',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 mb-3">
            <span className={`sync-badge ${isLive ? 'live' : 'cached'}`}>
              <i className={`bi bi-${isLive ? 'lightning-charge-fill' : 'database-fill'} me-1`}></i>
              {isLive ? 'Google Sheets Live Sync' : 'Live Snapshot Active'}
            </span>
            <a
              href="https://docs.google.com/spreadsheets/d/11V8Craw4Q8c6PlKQUCCAFZIpw3sonxeDN4E5BTjj-hI/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-refresh text-decoration-none d-inline-flex align-items-center"
              title="Open the Google Sheet in a new tab"
            >
              <i className="bi bi-file-earmark-spreadsheet-fill me-1 text-success"></i> Open Google Sheet
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-refresh"
              title="View Sheet Structure and Instructions"
            >
              <i className="bi bi-question-circle-fill me-1"></i> Guide
            </button>
            <button
              onClick={loadData}
              className="btn-refresh"
              title="Reload live team data from Google Sheet"
            >
              <i className={`bi bi-arrow-clockwise me-1 ${loading ? 'spin' : ''}`}></i> Sync Now
            </button>
          </div>

          <h1 className="mb-2 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            TEAM KILOFLIGHT DIRECTORY
          </h1>
          <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '750px', fontSize: '15px' }}>
            Faculty advisors, project directors, technical leads, and student engineers from Khulna University of Engineering &amp; Technology (KUET) building Bangladesh&apos;s pioneering Formula Student race vehicles.
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
      <section className="py-3">
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
                    <option value="all">All Members ({members.length})</option>
                    <option value="teacher">Faculty Advisors &amp; Teachers (Teacher: 1)</option>
                    <option value="student">Student Engineers (Teacher: 0)</option>
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
              <h5 className="font-orbitron">Fetching Live Google Sheets Team Data...</h5>
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
                const isExpanded = expandedBios[uniqueKey] || false;
                const hasLongBio = member.bio && member.bio.length > 180;
                const displayBio = hasLongBio && !isExpanded
                  ? member.bio!.substring(0, 180) + '...'
                  : member.bio;

                return (
                  <div key={uniqueKey} className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div
                      className="team-card d-flex flex-column justify-content-between h-100 p-3 rounded position-relative"
                      style={{
                        background: '#FFFFFF',
                        border: '2px solid #0F172A',
                        boxShadow: '4px 4px 0 #0F172A',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                      }}
                    >
                      {/* Top Season & Category Tag */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span
                          className="font-monospace fw-bold px-2 py-0.5 rounded"
                          style={{
                            fontSize: '10.5px',
                            background: '#0F172A',
                            color: '#FFFFFF',
                          }}
                        >
                          Season {member.season}
                        </span>

                        {member.isTeacher && (
                          <span
                            className="font-monospace fw-bold px-2 py-0.5 rounded text-uppercase"
                            style={{
                              fontSize: '10.5px',
                              background: '#FEF3C7',
                              color: '#92400E',
                              border: '1px solid #D97706',
                            }}
                          >
                            Faculty
                          </span>
                        )}
                      </div>

                      {/* Photo & Identity */}
                      <div className="text-center pt-1 pb-2">
                        <div
                          className="position-relative mx-auto mb-3 rounded-circle overflow-hidden"
                          style={{
                            width: '92px',
                            height: '92px',
                            border: member.isTeacher ? '2.5px solid #D97706' : '2.5px solid #0F172A',
                            boxShadow: member.isTeacher ? '3px 3px 0 #D97706' : '3px 3px 0 #0F172A',
                            background: '#F1F5F9',
                          }}
                        >
                          <Image
                            src={formatImageUrl(member.image)}
                            alt={member.name}
                            fill
                            unoptimized={true}
                            style={{ objectFit: 'cover' }}
                            sizes="92px"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (target && !target.src.includes('/images/logo.png')) {
                                target.src = '/images/logo.png';
                              }
                            }}
                          />
                        </div>

                        <h6
                          className="mb-1.5 font-orbitron"
                          style={{
                            color: '#0F172A',
                            fontWeight: 800,
                            fontSize: '15px',
                            lineHeight: '1.3',
                          }}
                        >
                          {member.name}
                        </h6>

                        <div className="d-flex justify-content-center my-1">
                          {getRoleBadge(member)}
                        </div>

                        <div
                          className="small mt-1 font-monospace"
                          style={{ color: '#0284C7', fontWeight: 700, fontSize: '12px' }}
                        >
                          {member.department}
                        </div>

                        {/* Bio snippet */}
                        {member.bio && (
                          <div className="mt-2 text-start p-2 rounded" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                            <p
                              className="small mb-0"
                              style={{
                                color: '#334155',
                                fontSize: '11.5px',
                                lineHeight: '1.45',
                                whiteSpace: isExpanded ? 'pre-line' : 'normal',
                              }}
                            >
                              {displayBio}
                            </p>
                            {hasLongBio && (
                              <button
                                type="button"
                                onClick={() => toggleBio(uniqueKey)}
                                className="btn btn-link p-0 text-danger text-decoration-none fw-bold mt-1"
                                style={{ fontSize: '11px' }}
                              >
                                {isExpanded ? 'Show less ▲' : 'Read more ▼'}
                              </button>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Footer Connect Buttons */}
                      <div className="mt-2 pt-2 border-top d-flex justify-content-between align-items-center">
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
                            <span>LinkedIn Profile</span>
                          </a>
                        ) : (
                          <span className="small text-muted font-monospace" style={{ fontSize: '10.5px' }}>
                            KUET Motorsport
                          </span>
                        )}

                        <span className="small font-monospace text-muted" style={{ fontSize: '10.5px' }}>
                          #KILOFLIGHT
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Helper Modal */}
      <SheetGuideModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
