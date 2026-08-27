'use client';

import React, { useEffect, useState } from 'react';

export default function AdminCarsPage() {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingCar, setEditingCar] = useState<any | null>(null);
  const [successMsg, setSuccessMsg] = useState('');

  const fetchCars = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/cars');
      const data = await res.json();
      if (data.success) {
        setCars(data.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleSaveCar = async () => {
    if (!editingCar) return;
    setSaving(true);
    setSuccessMsg('');

    try {
      let updatedList = [];
      const exists = cars.some((c) => c.id === editingCar.id);

      if (exists) {
        updatedList = cars.map((c) => (c.id === editingCar.id ? editingCar : c));
      } else {
        updatedList = [...cars, editingCar];
      }

      const res = await fetch('/api/admin/cars', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });

      const data = await res.json();
      if (data.success) {
        setCars(updatedList);
        setEditingCar(null);
        setSuccessMsg('Car specifications updated successfully! Live website synced.');
        setTimeout(() => setSuccessMsg(''), 4000);
      }
    } catch (err) {
      alert('Failed to save car data');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteCar = async (id: string) => {
    if (!confirm('Are you sure you want to remove this car model?')) return;
    try {
      const updatedList = cars.filter((c) => c.id !== id);
      const res = await fetch('/api/admin/cars', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedList),
      });
      if (res.ok) {
        setCars(updatedList);
      }
    } catch (err) {
      alert('Delete failed');
    }
  };

  const handleCreateNew = () => {
    setEditingCar({
      id: `car-${Date.now()}`,
      name: 'NEW RACE CAR PROTOTYPE',
      status: 'ongoing',
      season: '2027',
      tag: 'Next Generation Concept',
      engine: 'High-Revving Powertrain Engine',
      topSpeed: '120 km/h',
      acceleration: '≤ 5.0 seconds',
      aero: 'Multi-element Front & Rear Wings',
      chassis: '4130 Chromoly Spaceframe (24.4 kg)',
      bodywork: '7-Layer Jute Composite',
      brakes: 'Custom CNC 3-Pedal Box with TVS Hydraulics',
      steering: '7075-T6 Al Rack (300 mm)',
      targetMilestone: 'Formula Student International',
      description: 'Next generation student formula racing vehicle.',
      image: '/images/formula_track_action.jpg',
    });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <div>
          <span className="badge-motorsport red mb-1">Vehicle Engineering</span>
          <h2 className="mb-1 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>
            THE CARS &amp; SPECIFICATIONS MATRIX
          </h2>
          <p className="text-muted small mb-0">
            Manage car model profiles and live technical comparison matrix parameters for the public website.
          </p>
        </div>
        <div className="d-flex gap-2">
          <button onClick={handleCreateNew} className="custom-btn">
            <i className="bi bi-plus-circle-fill me-1"></i> Add New Car Model
          </button>
        </div>
      </div>

      {successMsg && (
        <div
          className="alert p-3 mb-4 rounded d-flex align-items-center gap-2 fw-bold"
          style={{ background: '#DCFCE7', color: '#16A34A', border: '1.5px solid #16A34A' }}
        >
          <i className="bi bi-check-circle-fill fs-5"></i>
          <span>{successMsg}</span>
        </div>
      )}

      {/* Cars Grid */}
      {loading ? (
        <div className="p-5 text-center">
          <div className="spinner-border text-danger mb-2"></div>
          <div className="small fw-bold">Loading cars...</div>
        </div>
      ) : (
        <div className="row g-4 mb-5">
          {cars.map((car) => (
            <div key={car.id} className="col-lg-6 col-12">
              <div
                className="p-4 rounded h-100"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #0F172A',
                  boxShadow: '4px 4px 0 #0F172A',
                }}
              >
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div>
                    <span className="badge-motorsport red mb-1">{car.season} &bull; {car.status.toUpperCase()}</span>
                    <h3 className="mb-0 font-orbitron" style={{ color: '#0F172A', fontWeight: 900 }}>{car.name}</h3>
                  </div>
                  <div className="d-flex gap-1">
                    <button
                      onClick={() => setEditingCar(car)}
                      className="btn btn-sm"
                      style={{
                        background: '#0F172A',
                        color: '#FFFFFF',
                        border: '1.5px solid #0F172A',
                        boxShadow: '1.5px 1.5px 0 #FF2A2A',
                        fontWeight: 700,
                        fontSize: '12px',
                      }}
                    >
                      <i className="bi bi-pencil-fill me-1"></i> Edit Specs
                    </button>
                    {cars.length > 1 && (
                      <button
                        onClick={() => handleDeleteCar(car.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    )}
                  </div>
                </div>

                <p className="small text-muted mb-3" style={{ lineHeight: '1.5' }}>
                  {car.description}
                </p>

                {/* Specs Summary Grid */}
                <div className="p-3 rounded mb-3" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                  <div className="row g-2 small">
                    <div className="col-sm-6">
                      <div className="text-muted fw-bold" style={{ fontSize: '10.5px' }}>POWERTRAIN ENGINE</div>
                      <div className="fw-bold" style={{ color: '#0F172A' }}>{car.engine}</div>
                    </div>
                    <div className="col-sm-3 col-6">
                      <div className="text-muted fw-bold" style={{ fontSize: '10.5px' }}>TOP SPEED</div>
                      <div className="fw-bold text-danger">{car.topSpeed}</div>
                    </div>
                    <div className="col-sm-3 col-6">
                      <div className="text-muted fw-bold" style={{ fontSize: '10.5px' }}>0-100 ACCEL</div>
                      <div className="fw-bold text-danger">{car.acceleration}</div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-muted fw-bold" style={{ fontSize: '10.5px' }}>CHASSIS STRUCTURE</div>
                      <div className="fw-bold text-cyan">{car.chassis}</div>
                    </div>
                    <div className="col-sm-6">
                      <div className="text-muted fw-bold" style={{ fontSize: '10.5px' }}>BODYWORK MATERIAL</div>
                      <div className="fw-bold text-warning" style={{ color: '#B45309' }}>{car.bodywork}</div>
                    </div>
                    <div className="col-12">
                      <div className="text-muted fw-bold" style={{ fontSize: '10.5px' }}>TARGET MILESTONE</div>
                      <div className="fw-bold text-dark">{car.targetMilestone}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Car Specifications Modal */}
      {editingCar && (
        <div
          className="modal d-block"
          style={{ background: 'rgba(15, 23, 42, 0.7)', backdropFilter: 'blur(4px)', zIndex: 1100 }}
          onClick={() => setEditingCar(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
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
                <h4 className="modal-title font-orbitron mb-0" style={{ color: '#0F172A', fontWeight: 900 }}>
                  <i className="bi bi-speedometer2 text-danger me-2"></i> Edit {editingCar.name}
                </h4>
                <button type="button" className="btn-close" onClick={() => setEditingCar(null)}></button>
              </div>

              <div className="modal-body p-4" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">VEHICLE NAME</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.name}
                      onChange={(e) => setEditingCar({ ...editingCar, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="small fw-bold mb-1">STATUS</label>
                    <select
                      className="neo-input w-100"
                      value={editingCar.status}
                      onChange={(e) => setEditingCar({ ...editingCar, status: e.target.value })}
                    >
                      <option value="ongoing">Ongoing Project</option>
                      <option value="legacy">Legacy Project</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="small fw-bold mb-1">SEASON / YEAR</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.season}
                      onChange={(e) => setEditingCar({ ...editingCar, season: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">ENGINE / POWERTRAIN PLATFORM</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.engine}
                      onChange={(e) => setEditingCar({ ...editingCar, engine: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">MAX TOP SPEED</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.topSpeed}
                      onChange={(e) => setEditingCar({ ...editingCar, topSpeed: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">0–100 KM/H ACCELERATION</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.acceleration}
                      onChange={(e) => setEditingCar({ ...editingCar, acceleration: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">AERODYNAMICS PACKAGE</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.aero}
                      onChange={(e) => setEditingCar({ ...editingCar, aero: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">CHASSIS STRUCTURE &amp; MASS</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.chassis}
                      onChange={(e) => setEditingCar({ ...editingCar, chassis: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">BODYWORK &amp; COMPOSITE MATERIAL</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.bodywork}
                      onChange={(e) => setEditingCar({ ...editingCar, bodywork: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">BRAKE &amp; PEDAL BOX SYSTEM</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.brakes}
                      onChange={(e) => setEditingCar({ ...editingCar, brakes: e.target.value })}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">STEERING SYSTEM</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.steering}
                      onChange={(e) => setEditingCar({ ...editingCar, steering: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">TARGET EVENT / MILESTONE</label>
                    <input
                      type="text"
                      className="neo-input w-100"
                      value={editingCar.targetMilestone}
                      onChange={(e) => setEditingCar({ ...editingCar, targetMilestone: e.target.value })}
                    />
                  </div>

                  <div className="col-12">
                    <label className="small fw-bold mb-1">DETAILED PROJECT DESCRIPTION</label>
                    <textarea
                      className="neo-input w-100"
                      rows={3}
                      value={editingCar.description}
                      onChange={(e) => setEditingCar({ ...editingCar, description: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="modal-footer bg-light border-top border-dark p-3">
                <button type="button" className="btn btn-secondary btn-sm" onClick={() => setEditingCar(null)}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="custom-btn btn-sm"
                  disabled={saving}
                  onClick={handleSaveCar}
                >
                  {saving ? 'Saving...' : 'Save Specifications'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
