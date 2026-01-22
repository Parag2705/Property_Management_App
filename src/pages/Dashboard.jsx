import React from 'react';
import { Link } from 'react-router-dom';
import { properties, meetingMinutes, portfolioStats } from '../data/mockData';
import { TrendingUp, AlertTriangle, CheckCircle, Calendar, Building2, IndianRupee } from 'lucide-react';

const Dashboard = () => {
  const needsAttentionProperties = properties.filter(
    p => p.status === 'needs-attention' || p.status === 'under-review'
  );

  const pendingTasks = properties.flatMap(p =>
    p.tasks
      .filter(t => t.status === 'pending' || t.status === 'in-progress')
      .map(t => ({ ...t, propertyName: p.name, propertyId: p.id }))
  );

  const recentDirections = meetingMinutes
    .slice(0, 3)
    .flatMap(m =>
      m.directions
        .filter(d => d.status !== 'completed')
        .map(d => ({ ...d, meetingDate: m.date, propertyName: m.propertyName }))
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Good Morning</h1>
        <p className="text-xl text-stone-600">
          Here's your property portfolio overview for {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">Total Properties</p>
              <p className="text-4xl font-bold text-stone-900">{portfolioStats.totalProperties}</p>
            </div>
            <Building2 className="w-12 h-12 text-amber-600" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">Portfolio Value</p>
              <p className="text-3xl font-bold text-stone-900">₹{portfolioStats.totalValue.toFixed(1)} Cr</p>
            </div>
            <IndianRupee className="w-12 h-12 text-emerald-600" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-red-50 to-red-100 border-red-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">Needs Attention</p>
              <p className="text-4xl font-bold text-red-700">{portfolioStats.needsAttention}</p>
            </div>
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">Pending Tasks</p>
              <p className="text-4xl font-bold text-blue-700">{portfolioStats.pendingTasks}</p>
            </div>
            <Calendar className="w-12 h-12 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Properties Needing Attention */}
      {needsAttentionProperties.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-stone-900">Properties Requiring Attention</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {needsAttentionProperties.map(property => (
              <Link
                key={property.id}
                to={`/properties`}
                className="card hover:shadow-lg transition-shadow duration-200 border-red-300 bg-red-50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{property.name}</h3>
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <p className="text-lg text-stone-700">
                        <span className="font-semibold">Location:</span> {property.location}
                      </p>
                      <p className="text-lg text-stone-700">
                        <span className="font-semibold">Portfolio:</span> {property.portfolio}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.tasks.filter(t => t.status === 'pending').map(task => (
                        <span key={task.id} className="status-badge bg-red-200 text-red-800">
                          📋 {task.description}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="status-badge bg-red-600 text-white">
                      {property.status === 'needs-attention' ? '⚠️ Needs Attention' : '🔍 Under Review'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Pending Tasks */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <Calendar className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-stone-900">Upcoming Tasks</h2>
        </div>
        <div className="card">
          {pendingTasks.length > 0 ? (
            <div className="space-y-4">
              {pendingTasks.slice(0, 5).map((task, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b-2 border-stone-200 last:border-b-0 last:pb-0">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-stone-900 mb-1">{task.description}</h3>
                    <p className="text-lg text-stone-600">{task.propertyName}</p>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <span className="text-lg font-semibold text-stone-700">
                      Due: {new Date(task.dueDate).toLocaleDateString('en-IN')}
                    </span>
                    <span className={`status-badge ${
                      task.status === 'pending' ? 'bg-amber-200 text-amber-800' : 'bg-blue-200 text-blue-800'
                    }`}>
                      {task.status === 'pending' ? '⏳ Pending' : '🔄 In Progress'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-3" />
              <p className="text-xl text-stone-600">All tasks completed!</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Directions Given */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-8 h-8 text-emerald-600 mr-3" />
          <h2 className="text-3xl font-bold text-stone-900">Recent Directions Given</h2>
        </div>
        <div className="card">
          <div className="space-y-4">
            {recentDirections.slice(0, 5).map((direction, index) => (
              <div key={index} className="pb-4 border-b-2 border-stone-200 last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-stone-900 flex-1">{direction.text}</h3>
                  <span className={`status-badge ml-4 ${
                    direction.priority === 'high'
                      ? 'bg-red-200 text-red-800'
                      : direction.priority === 'medium'
                      ? 'bg-amber-200 text-amber-800'
                      : 'bg-stone-200 text-stone-800'
                  }`}>
                    {direction.priority === 'high' ? '🔴 High Priority' : direction.priority === 'medium' ? '🟡 Medium Priority' : '🟢 Low Priority'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-lg text-stone-600">
                  <span>📍 {direction.propertyName}</span>
                  <span>•</span>
                  <span>👤 {direction.assignedTo}</span>
                  <span>•</span>
                  <span>📅 Due: {new Date(direction.dueDate).toLocaleDateString('en-IN')}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t-2 border-stone-200">
            <Link to="/meetings" className="btn-primary w-full text-center block">
              View All Meeting Minutes
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/properties" className="btn-primary text-center">
          View All Properties
        </Link>
        <Link to="/meetings" className="btn-secondary text-center">
          Meeting History
        </Link>
        <Link to="/map" className="btn-secondary text-center">
          Map View
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
