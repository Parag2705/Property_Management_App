import React, { useState } from 'react';
import { meetingMinutes } from '../data/mockData';
import { Calendar, Building2, Users, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const MeetingMinutes = () => {
  const [expandedMeeting, setExpandedMeeting] = useState(null);

  const sortedMeetings = [...meetingMinutes].sort((a, b) => new Date(b.date) - new Date(a.date));

  const getDirectionStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-200 text-emerald-800 border-emerald-300';
      case 'in-progress':
        return 'bg-blue-200 text-blue-800 border-blue-300';
      case 'pending':
        return 'bg-amber-200 text-amber-800 border-amber-300';
      default:
        return 'bg-stone-200 text-stone-800 border-stone-300';
    }
  };

  const getDirectionStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⟳';
      case 'pending':
        return '⏳';
      default:
        return '•';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-600 text-white';
      case 'medium':
        return 'bg-amber-600 text-white';
      case 'low':
        return 'bg-stone-600 text-white';
      default:
        return 'bg-stone-400 text-white';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Meeting Minutes</h1>
        <p className="text-xl text-stone-600">
          Chairman's direction history with task completion tracking
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="card bg-blue-50 border-blue-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">Total Meetings</p>
              <p className="text-4xl font-bold text-stone-900">{meetingMinutes.length}</p>
            </div>
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <div className="card bg-emerald-50 border-emerald-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">Completed</p>
              <p className="text-4xl font-bold text-emerald-700">
                {meetingMinutes.reduce((sum, m) => sum + m.directions.filter(d => d.status === 'completed').length, 0)}
              </p>
            </div>
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
        </div>

        <div className="card bg-blue-50 border-blue-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">In Progress</p>
              <p className="text-4xl font-bold text-blue-700">
                {meetingMinutes.reduce((sum, m) => sum + m.directions.filter(d => d.status === 'in-progress').length, 0)}
              </p>
            </div>
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <div className="card bg-amber-50 border-amber-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg text-stone-600 mb-1">Pending</p>
              <p className="text-4xl font-bold text-amber-700">
                {meetingMinutes.reduce((sum, m) => sum + m.directions.filter(d => d.status === 'pending').length, 0)}
              </p>
            </div>
            <AlertCircle className="w-10 h-10 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Meeting Timeline */}
      <div className="space-y-6">
        {sortedMeetings.map((meeting) => {
          const isExpanded = expandedMeeting === meeting.id;
          const completedDirections = meeting.directions.filter(d => d.status === 'completed').length;
          const totalDirections = meeting.directions.length;
          const completionRate = Math.round((completedDirections / totalDirections) * 100);

          return (
            <div key={meeting.id} className="card hover:shadow-lg transition-shadow duration-200">
              {/* Meeting Header */}
              <button
                onClick={() => setExpandedMeeting(isExpanded ? null : meeting.id)}
                className="w-full text-left"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-7 h-7 text-amber-600" />
                      <h2 className="text-2xl font-bold text-stone-900">
                        {new Date(meeting.date).toLocaleDateString('en-IN', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 text-lg text-stone-700 ml-10">
                      <div className="flex items-center">
                        <Building2 className="w-5 h-5 mr-2" />
                        {meeting.propertyName}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        {meeting.attendees.length} Attendees
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-4">
                    <span className="status-badge bg-stone-200 text-stone-800 border-2 border-stone-300">
                      {totalDirections} Direction{totalDirections !== 1 ? 's' : ''}
                    </span>
                    <div className="text-right">
                      <div className="text-base text-stone-600">Completion Rate</div>
                      <div className={`text-2xl font-bold ${
                        completionRate === 100 ? 'text-emerald-700' :
                        completionRate >= 50 ? 'text-blue-700' : 'text-amber-700'
                      }`}>
                        {completionRate}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-4 bg-stone-200 rounded-full overflow-hidden border-2 border-stone-300">
                    <div
                      className={`h-full transition-all duration-300 ${
                        completionRate === 100 ? 'bg-emerald-600' :
                        completionRate >= 50 ? 'bg-blue-600' : 'bg-amber-600'
                      }`}
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                </div>

                {/* Discussion Preview */}
                <p className="text-lg text-stone-700 mb-3">
                  <span className="font-semibold">Discussion:</span> {meeting.discussion}
                </p>

                {/* Attendees */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {meeting.attendees.map((attendee, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-base border-2 border-blue-300">
                      {attendee}
                    </span>
                  ))}
                </div>

                <div className="text-center pt-2 border-t-2 border-stone-300">
                  <span className="text-lg font-semibold text-amber-600">
                    {isExpanded ? '▼ Hide Details' : '▶ View All Directions'}
                  </span>
                </div>
              </button>

              {/* Expanded Directions */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t-2 border-stone-300 space-y-4">
                  {meeting.directions.map((direction) => (
                    <div
                      key={direction.id}
                      className={`p-5 rounded-lg border-2 ${getDirectionStatusColor(direction.status)}`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-stone-900 mb-2">
                            {getDirectionStatusIcon(direction.status)} {direction.text}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-base text-stone-700">
                            <span>👤 <span className="font-semibold">Assigned to:</span> {direction.assignedTo}</span>
                            <span>📅 <span className="font-semibold">Due:</span> {new Date(direction.dueDate).toLocaleDateString('en-IN')}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          <span className={`px-4 py-2 rounded-full text-base font-semibold ${getPriorityColor(direction.priority)}`}>
                            {direction.priority === 'high' ? '🔴 High' : direction.priority === 'medium' ? '🟡 Medium' : '🟢 Low'}
                          </span>
                          <span className={`status-badge ${getDirectionStatusColor(direction.status)} border-2`}>
                            {direction.status === 'completed' ? '✓ Completed' :
                             direction.status === 'in-progress' ? '⟳ In Progress' : '⏳ Pending'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetingMinutes;
