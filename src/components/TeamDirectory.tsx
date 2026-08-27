'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TeamMember, MemberCategory } from '@/types/team';
import { fetchTeamDataFromGoogleSheets, formatImageUrl } from '@/lib/google-sheets';
import SheetGuideModal from './SheetGuideModal';

export default function TeamDirectory() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSeason, setActiveSeason] = useState('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/content');
      const json = await res.json();
      if (json.success && json.data?.team && json.data.team.length > 0) {
        setMembers(json.data.team);
        setIsLive(true);
      } else {
        const sheetRes = await fetchTeamDataFromGoogleSheets();
        setMembers(sheetRes.data);
        setIsLive(sheetRes.isLive);
      }
    } catch (err) {
      const sheetRes = await fetchTeamDataFromGoogleSheets();
      setMembers(sheetRes.data);
      setIsLive(sheetRes.isLive);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredMembers = members.filter((member) => {
    // Season filter
    let matchSeason = false;
    if (activeSeason === 'all') {
      matchSeason = true;
    } else {
      const seasons = (member.season || '').split(' ');
      matchSeason = seasons.includes(activeSeason) || member.season === 'all';
    }

    // Category filter
    let matchCategory = false;
    if (activeCategory === 'all') {
      matchCategory = true;
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

  const getRoleBadge = (category: MemberCategory, role: string) => {
    switch (category) {
      case 'advisor':
        return (
          <div className="role-badge" style={{ background: '#FEF3C7', borderColor: '#D97706', color: '#B45309' }}>
            <i className="bi bi-mortarboard me-1"></i> {role}
          </div>
        );
      case 'captain':
        return (
          <div className="role-badge" style={{ background: '#FEE2E2', borderColor: '#DC2626', color: '#DC2626' }}>
            <i className="bi bi-flag-fill me-1"></i> {role}
          </div>
        );
      case 'lead':
        return (
          <div className="role-badge" style={{ background: '#E0F2FE', borderColor: '#0284C7', color: '#0284C7' }}>
            <i className="bi bi-star-fill me-1"></i> {role}
          </div>
        );
      case 'alumni':
        return (
          <div className="role-badge" style={{ background: '#FEF3C7', borderColor: '#D97706', color: '#B45309' }}>
            <i className="bi bi-award-fill me-1"></i> {role}
          </div>
        );
      default:
        return (
          <div className="role-badge" style={{ background: '#F1F5F9', borderColor: '#0F172A', color: '#0F172A' }}>
            {role}
          </div>
        );
    }
  };

  const seasonsList = [
    { id: 'all', label: 'All Seasons' },
    { id: '2027', label: 'Season 2026–2027 (Phoenix)' },
    { id: '2026', label: 'Season 2026' },
    { id: '2025', label: 'Season 2025' },
    { id: '2024', label: 'Season 2024' },
    { id: '2023', label: 'Season 2023 (FSAE Japan)' },
    { id: '2021', label: 'Season 2021 (Alpha FSUK)' },
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="page-header-section" style={{ background: 'radial-gradient(circle at top, rgba(2, 132, 199, 0.08) 0%, var(--dark-bg) 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
            <span className={`sync-badge ${isLive ? 'live' : 'cached'}`}>
              <i className={`bi bi-${isLive ? 'lightning-charge-fill' : 'database-fill'} me-1`}></i>
              {isLive ? 'Google Sheets Live Sync' : 'Static Fallback Active'}
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-refresh"
              title="Google Sheet Configuration Guide"
            >
              <i className="bi bi-gear-fill me-1"></i> Sheet Config
            </button>
            <button
              onClick={loadData}
              className="btn-refresh"
              title="Reload live team data from Google Sheet"
            >
              <i className="bi bi-arrow-clockwise me-1"></i> Sync Now
            </button>
          </div>

          <h1 className="mb-2">TEAM KILO FLIGHT DIRECTORY</h1>
          <p className="text-muted max-w-700 mx-auto mb-4" style={{ maxWidth: '700px' }}>
            Meet the multidisciplinary engineers, researchers, and student innovators driving Bangladesh&apos;s pioneering Formula Student automotive program at KUET.
          </p>

          {/* Season Filter Tabs */}
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {seasonsList.map((season) => (
              <button
                key={season.id}
                onClick={() => setActiveSeason(season.id)}
                className={`season-btn ${activeSeason === season.id ? 'active' : ''}`}
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
          <div className="glass-panel p-3">
            <div className="row g-3 align-items-center">
              {/* Search Box */}
              <div className="col-lg-6 col-md-6 col-12">
                <div className="position-relative">
                  <i className="bi bi-search position-absolute text-cyan" style={{ left: '14px', top: '50%', transform: 'translateY(-50%)' }}></i>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control-custom"
                    style={{ paddingLeft: '40px' }}
                    placeholder="Search by name, role, department (e.g. Mahir, Aero, Mechanical)..."
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div className="col-lg-4 col-md-4 col-8">
                <div className="d-flex align-items-center gap-2">
                  <label htmlFor="category-select" className="text-muted small text-nowrap mb-0">
                    <i className="bi bi-funnel text-cyan me-1"></i> Filter:
                  </label>
                  <select
                    id="category-select"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="form-control-custom"
                  >
                    <option value="all">All Roles & Categories</option>
                    <option value="advisor">Faculty Advisors & Mentors</option>
                    <option value="captain">Team Captains & Directors</option>
                    <option value="lead">Sub-team Department Leads</option>
                    <option value="member">Student Engineers</option>
                    <option value="alumni">Alumni & Founders</option>
                  </select>
                </div>
              </div>

              {/* Count */}
              <div className="col-lg-2 col-md-2 col-4 text-end">
                <span className="text-muted small font-monospace">
                  Showing {filteredMembers.length} member{filteredMembers.length === 1 ? '' : 's'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding py-4">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-cyan mb-3" style={{ width: '3rem', height: '3rem' }}></div>
              <h5>Connecting to Database...</h5>
            </div>
          ) : filteredMembers.length === 0 ? (
            <div className="text-center py-5">
              <div className="glass-panel p-5 mx-auto" style={{ maxWidth: '500px' }}>
                <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                <h4 className="mb-2">No Members Found</h4>
                <p className="text-muted small mb-4">No team members match your selected season, category, or search keywords.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setActiveSeason('all');
                  }}
                  className="custom-btn-outline"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {filteredMembers.map((member, idx) => (
                <div key={idx} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="team-card">
                    <div>
                      <div className="position-relative mx-auto mb-3 rounded-circle overflow-hidden" style={{ width: '88px', height: '88px', border: '2px solid #0F172A', boxShadow: '3px 3px 0 #0F172A', background: '#FFFFFF' }}>
                        <Image
                          src={formatImageUrl(member.image)}
                          alt={member.name}
                          fill
                          unoptimized={true}
                          style={{ objectFit: 'cover' }}
                          sizes="88px"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target && !target.src.includes('/images/logo.png')) {
                              target.src = '/images/logo.png';
                            }
                          }}
                        />
                      </div>
                      <h6 className="mb-1 fs-5 font-orbitron" style={{ color: '#0F172A', fontWeight: 800 }}>{member.name}</h6>
                      {getRoleBadge(member.category, member.role)}
                      <div className="small mt-2 font-monospace" style={{ color: '#0284C7', fontWeight: 800 }}>{member.department}</div>
                      {member.bio && <p className="small mt-2 mb-0" style={{ color: '#334155', fontWeight: 500, lineHeight: '1.5' }}>{member.bio}</p>}
                    </div>

                    <div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="linkedin-btn mt-3 d-inline-flex align-items-center gap-1 small"
                          title="LinkedIn Profile"
                        >
                          <i className="bi bi-linkedin"></i> <span>Connect</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Helper Modal */}
      <SheetGuideModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
