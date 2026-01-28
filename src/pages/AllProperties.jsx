import React, { useState } from 'react';
import { properties, spocs } from '../data/mockData';
import { Building2, MapPin, IndianRupee, FileText, Phone, Mail, ChevronDown } from 'lucide-react';

const AllProperties = () => {
  const [filter, setFilter] = useState('all');
  const [portfolioFilter, setPortfolioFilter] = useState('all');

  const filteredProperties = properties.filter(property => {
    const statusMatch = filter === 'all' || property.status === filter;
    const portfolioMatch = portfolioFilter === 'all' || property.portfolio === portfolioFilter;
    return statusMatch && portfolioMatch;
  });

  const portfolios = [...new Set(properties.map(p => p.portfolio))];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-200 text-emerald-800 border-emerald-300';
      case 'needs-attention':
        return 'bg-red-200 text-red-800 border-red-300';
      case 'under-review':
        return 'bg-amber-200 text-amber-800 border-amber-300';
      default:
        return 'bg-stone-200 text-stone-800 border-stone-300';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active':
        return '✓ Active';
      case 'needs-attention':
        return '⚠️ Needs Attention';
      case 'under-review':
        return '🔍 Under Review';
      default:
        return status;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">All Properties</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[300px]">
            <label className="block text-lg font-semibold text-stone-700 mb-2">Filter by Status</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-6 py-3 text-lg border-2 border-stone-300 rounded-lg bg-white text-stone-900 font-semibold focus:border-amber-500 focus:outline-none min-h-[44px]"
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="needs-attention">Needs Attention</option>
              <option value="under-review">Under Review</option>
            </select>
          </div>

          <div className="flex-1 min-w-[300px]">
            <label className="block text-lg font-semibold text-stone-700 mb-2">Filter by Portfolio</label>
            <select
              value={portfolioFilter}
              onChange={(e) => setPortfolioFilter(e.target.value)}
              className="w-full px-6 py-3 text-lg border-2 border-stone-300 rounded-lg bg-white text-stone-900 font-semibold focus:border-amber-500 focus:outline-none min-h-[44px]"
            >
              <option value="all">All Portfolios</option>
              {portfolios.map(portfolio => (
                <option key={portfolio} value={portfolio}>{portfolio}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-xl text-stone-600">
          Showing {filteredProperties.length} of {properties.length} properties
        </p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProperties.map(property => {
          const spoc = spocs[property.spoc];
          return (
            <div key={property.id} className={`card ${getStatusColor(property.status)} hover:shadow-lg transition-shadow duration-200`}>
              {/* Property Header */}
              <div className="flex items-start justify-between mb-4 pb-4 border-b-2 border-stone-300">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-stone-900 mb-2">{property.name}</h2>
                  <div className="flex items-center text-lg text-stone-700 mb-1">
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </div>
                  <div className="text-lg text-stone-700">
                    <span className="font-semibold">Portfolio:</span> {property.portfolio}
                  </div>
                </div>
                <span className={`status-badge ${getStatusColor(property.status)} border-2`}>
                  {getStatusLabel(property.status)}
                </span>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-base text-stone-600 mb-1">Owner</p>
                  <p className="text-lg font-semibold text-stone-900">{property.owner}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Group</p>
                  <p className="text-lg font-semibold text-stone-900">{property.group}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Area</p>
                  <p className="text-lg font-semibold text-stone-900">{property.area}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Current Value</p>
                  <p className="text-lg font-semibold text-emerald-700">{property.currentValue}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Purchase Value</p>
                  <p className="text-lg font-semibold text-stone-900">{property.value}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Legal Status</p>
                  <p className={`text-lg font-semibold ${
                    property.legalStatus === 'Clear Title' ? 'text-emerald-700' : 'text-amber-700'
                  }`}>
                    {property.legalStatus}
                  </p>
                </div>
              </div>

              {/* Mortgage Info */}
              <div className="mb-4 p-4 bg-stone-100 rounded-lg border-2 border-stone-300">
                <p className="text-base text-stone-600 mb-1">Mortgage Status</p>
                <p className="text-lg font-semibold text-stone-900">
                  {property.mortgage === 'Yes' ? `${property.mortgage} - ${property.mortgageAmount}` : 'No Mortgage'}
                </p>
              </div>

              {/* Documents */}
              <div className="mb-4">
                <p className="text-base text-stone-600 mb-2 font-semibold">Documents:</p>
                <div className="flex flex-wrap gap-2">
                  {property.documents.map((doc, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-base border-2 border-blue-300">
                      <FileText className="w-4 h-4 mr-2" />
                      {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tasks */}
              {property.tasks.length > 0 && (
                <div className="mb-4">
                  <p className="text-base text-stone-600 mb-2 font-semibold">Active Tasks:</p>
                  <div className="space-y-2">
                    {property.tasks.map(task => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-white rounded-lg border-2 border-stone-300">
                        <span className="text-base text-stone-900">{task.description}</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          task.status === 'completed' ? 'bg-emerald-200 text-emerald-800' :
                          task.status === 'in-progress' ? 'bg-blue-200 text-blue-800' :
                          'bg-amber-200 text-amber-800'
                        }`}>
                          {task.status === 'completed' ? '✓ Done' : task.status === 'in-progress' ? '⟳ In Progress' : '⏳ Pending'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SPOC Contact */}
              <div className="pt-4 border-t-2 border-stone-300">
                <p className="text-base text-stone-600 mb-2 font-semibold">Property Contact (SPOC):</p>
                <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg border-2 border-amber-300">
                  <div>
                    <p className="text-lg font-bold text-stone-900 mb-1">{spoc.name}</p>
                    <p className="text-base text-stone-600">{spoc.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${spoc.phone}`}
                      className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors min-h-[44px]"
                      title="Call"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${spoc.email}`}
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors min-h-[44px]"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-16">
          <Building2 className="w-20 h-20 text-stone-400 mx-auto mb-4" />
          <p className="text-2xl text-stone-600">No properties match your filters</p>
        </div>
      )}
    </div>
  );
};

export default AllProperties;
