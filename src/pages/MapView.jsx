import React, { useState } from 'react';
import { properties } from '../data/mockData';
import { MapPin, X, Building2, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';

const MapView = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProperty && selectedProperty.siteImages.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === selectedProperty.siteImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProperty && selectedProperty.siteImages.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProperty.siteImages.length - 1 : prev - 1
      );
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-emerald-600';
      case 'needs-attention':
        return 'text-red-600';
      case 'under-review':
        return 'text-amber-600';
      default:
        return 'text-stone-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Geographic Property Overview</h1>
        <p className="text-xl text-stone-600">
          Visual property locations across India with site image galleries
        </p>
      </div>

      {/* Map Placeholder with Property Markers */}
      <div className="card mb-8 bg-stone-100 min-h-[600px] relative overflow-hidden">
        {/* India Map Background */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-emerald-50">
          <div className="text-center">
            <MapPin className="w-20 h-20 text-stone-400 mx-auto mb-4" />
            <p className="text-2xl font-semibold text-stone-600 mb-2">Property Locations Map</p>
            <p className="text-lg text-stone-500">Interactive map integration ready</p>
            <p className="text-base text-stone-400 mt-2">(Google Maps/Mapbox can be integrated here)</p>
          </div>
        </div>

        {/* Property Markers - Positioned based on approximate coordinates */}
        <div className="absolute inset-0">
          {/* Mumbai */}
          <button
            onClick={() => handlePropertyClick(properties[0])}
            className="absolute hover:scale-110 transition-transform"
            style={{ left: '15%', top: '55%' }}
            title={properties[0].name}
          >
            <MapPin className={`w-12 h-12 ${getStatusColor(properties[0].status)} drop-shadow-lg`} fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Mumbai
            </span>
          </button>

          {/* Pune */}
          <button
            onClick={() => handlePropertyClick(properties[1])}
            className="absolute hover:scale-110 transition-transform"
            style={{ left: '20%', top: '60%' }}
            title={properties[1].name}
          >
            <MapPin className={`w-12 h-12 ${getStatusColor(properties[1].status)} drop-shadow-lg`} fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Pune
            </span>
          </button>

          {/* Goa */}
          <button
            onClick={() => handlePropertyClick(properties[2])}
            className="absolute hover:scale-110 transition-transform"
            style={{ left: '18%', top: '70%' }}
            title={properties[2].name}
          >
            <MapPin className={`w-12 h-12 ${getStatusColor(properties[2].status)} drop-shadow-lg`} fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Goa
            </span>
          </button>

          {/* Bangalore */}
          <button
            onClick={() => handlePropertyClick(properties[3])}
            className="absolute hover:scale-110 transition-transform"
            style={{ left: '25%', top: '75%' }}
            title={properties[3].name}
          >
            <MapPin className={`w-12 h-12 ${getStatusColor(properties[3].status)} drop-shadow-lg`} fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Bangalore
            </span>
          </button>

          {/* Delhi NCR */}
          <button
            onClick={() => handlePropertyClick(properties[4])}
            className="absolute hover:scale-110 transition-transform"
            style={{ left: '35%', top: '25%' }}
            title={properties[4].name}
          >
            <MapPin className={`w-12 h-12 ${getStatusColor(properties[4].status)} drop-shadow-lg`} fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Delhi NCR
            </span>
          </button>

          {/* Hyderabad */}
          <button
            onClick={() => handlePropertyClick(properties[5])}
            className="absolute hover:scale-110 transition-transform"
            style={{ left: '32%', top: '65%' }}
            title={properties[5].name}
          >
            <MapPin className={`w-12 h-12 ${getStatusColor(properties[5].status)} drop-shadow-lg`} fill="currentColor" />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
              Hyderabad
            </span>
          </button>
        </div>
      </div>

      {/* Property List Below Map */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">All Properties by Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <button
              key={property.id}
              onClick={() => handlePropertyClick(property)}
              className="card hover:shadow-lg transition-all duration-200 text-left border-2 hover:border-amber-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start">
                  <MapPin className={`w-6 h-6 ${getStatusColor(property.status)} mr-2 mt-1 flex-shrink-0`} />
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-1">{property.name}</h3>
                    <p className="text-lg text-stone-700">{property.location}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-base text-stone-600">Portfolio:</span>
                  <span className="text-base font-semibold text-stone-900">{property.portfolio}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-stone-600">Value:</span>
                  <span className="text-base font-semibold text-emerald-700">{property.currentValue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-stone-600">Images:</span>
                  <span className="text-base font-semibold text-blue-700">{property.siteImages.length} photo{property.siteImages.length !== 1 ? 's' : ''}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Property Detail Modal with Image Gallery */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b-4 border-stone-300 p-6 flex items-center justify-between z-10">
              <div className="flex items-center flex-1">
                <Building2 className="w-8 h-8 text-amber-600 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold text-stone-900">{selectedProperty.name}</h2>
                  <p className="text-xl text-stone-600">{selectedProperty.location}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-3 hover:bg-stone-100 rounded-lg transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Close"
              >
                <X className="w-8 h-8 text-stone-600" />
              </button>
            </div>

            {/* Image Gallery */}
            {selectedProperty.siteImages.length > 0 && (
              <div className="relative bg-stone-900">
                <img
                  src={selectedProperty.siteImages[currentImageIndex]}
                  alt={`${selectedProperty.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-[400px] object-cover"
                />

                {/* Image Navigation */}
                {selectedProperty.siteImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-4 rounded-full transition-all min-h-[44px] min-w-[44px]"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-8 h-8 text-stone-900" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 p-4 rounded-full transition-all min-h-[44px] min-w-[44px]"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-8 h-8 text-stone-900" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-full text-lg font-semibold">
                      {currentImageIndex + 1} / {selectedProperty.siteImages.length}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Property Details */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-base text-stone-600 mb-1">Owner</p>
                  <p className="text-xl font-semibold text-stone-900">{selectedProperty.owner}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Group</p>
                  <p className="text-xl font-semibold text-stone-900">{selectedProperty.group}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Portfolio</p>
                  <p className="text-xl font-semibold text-stone-900">{selectedProperty.portfolio}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Area</p>
                  <p className="text-xl font-semibold text-stone-900">{selectedProperty.area}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Purchase Value</p>
                  <p className="text-xl font-semibold text-stone-900">{selectedProperty.value}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Current Value</p>
                  <p className="text-xl font-semibold text-emerald-700">{selectedProperty.currentValue}</p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Legal Status</p>
                  <p className={`text-xl font-semibold ${
                    selectedProperty.legalStatus === 'Clear Title' ? 'text-emerald-700' : 'text-amber-700'
                  }`}>
                    {selectedProperty.legalStatus}
                  </p>
                </div>
                <div>
                  <p className="text-base text-stone-600 mb-1">Mortgage</p>
                  <p className="text-xl font-semibold text-stone-900">
                    {selectedProperty.mortgage === 'Yes' ? selectedProperty.mortgageAmount : 'No Mortgage'}
                  </p>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {selectedProperty.siteImages.length > 1 && (
                <div>
                  <p className="text-lg font-semibold text-stone-700 mb-3">All Images</p>
                  <div className="grid grid-cols-4 gap-3">
                    {selectedProperty.siteImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-4 transition-all ${
                          currentImageIndex === index ? 'border-amber-500 shadow-lg' : 'border-stone-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="btn-primary w-full"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
