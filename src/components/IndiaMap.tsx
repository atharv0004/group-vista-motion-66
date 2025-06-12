import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Factory, Leaf } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'logistics' | 'enterprises' | 'enviro';
  description: string;
}

const IndiaMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  // Locations based on the image provided
  const locations: Location[] = [
    { id: 'dehradun', name: 'Dehradun', x: 280, y: 140, type: 'enviro', description: 'Environmental Solutions Hub' },
    { id: 'delhi', name: 'Delhi', x: 270, y: 170, type: 'enterprises', description: 'Corporate Headquarters' },
    { id: 'bikaner', name: 'Bikaner', x: 200, y: 180, type: 'logistics', description: 'Logistics Distribution Center' },
    { id: 'lucknow', name: 'Lucknow', x: 320, y: 200, type: 'enterprises', description: 'Enterprise Solutions Office' },
    { id: 'siliguri', name: 'Siliguri', x: 450, y: 200, type: 'logistics', description: 'Regional Logistics Hub' },
    { id: 'ahmedabad', name: 'Ahmedabad', x: 180, y: 240, type: 'enterprises', description: 'Business Development Center' },
    { id: 'dahej', name: 'Dahej', x: 160, y: 280, type: 'enviro', description: 'Environmental Monitoring Station' },
    { id: 'kolkata', name: 'Kolkata', x: 450, y: 280, type: 'logistics', description: 'Eastern Logistics Gateway' },
    { id: 'vapi', name: 'Vapi', x: 160, y: 320, type: 'enviro', description: 'Sustainability Research Center' },
    { id: 'pune', name: 'Pune', x: 200, y: 360, type: 'enterprises', description: 'Technology Innovation Hub' },
    { id: 'bbsr', name: 'BBSR', x: 420, y: 320, type: 'logistics', description: 'Supply Chain Operations' },
    { id: 'bhiwandi', name: 'Bhiwandi', x: 180, y: 350, type: 'logistics', description: 'Warehouse & Distribution' },
    { id: 'hyderabad', name: 'Hyderabad', x: 280, y: 400, type: 'enterprises', description: 'Strategic Planning Office' },
    { id: 'tumkur', name: 'Tumkur', x: 240, y: 460, type: 'enviro', description: 'Green Technology Center' },
    { id: 'bengaluru', name: 'Bengaluru', x: 260, y: 480, type: 'enterprises', description: 'Innovation & Development Hub' }
  ];

  const getMarkerColor = (type: string) => {
    switch (type) {
      case 'logistics': return '#dc2626'; // red
      case 'enterprises': return '#2563eb'; // blue
      case 'enviro': return '#16a34a'; // green
      default: return '#6b7280'; // gray
    }
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'logistics': return Building2;
      case 'enterprises': return Factory;
      case 'enviro': return Leaf;
      default: return MapPin;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-red-600 to-red-800">
        <h3 className="text-2xl font-bold text-white mb-2">Our Presence Across India</h3>
        <p className="text-red-100">Strategic locations serving diverse industries nationwide</p>
      </div>
      
      <div className="relative p-8">
        {/* SVG Map of India */}
        <svg
          viewBox="0 0 600 600"
          className="w-full h-auto border-2 border-gray-200 rounded-lg"
          style={{ maxHeight: '500px' }}
        >
          {/* India Map Path - Simplified outline */}
          <path
            d="M150 120 L180 100 L220 90 L280 85 L320 90 L380 95 L420 100 L450 110 L480 130 L500 150 L510 180 L520 220 L515 260 L510 300 L500 340 L485 380 L470 420 L450 450 L420 480 L380 500 L340 510 L300 515 L260 520 L220 515 L180 500 L150 480 L130 450 L120 420 L115 380 L110 340 L105 300 L100 260 L95 220 L100 180 L110 150 L130 130 Z"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="2"
            className="hover:fill-red-50 transition-colors duration-300"
          />
          
          {/* State boundaries - simplified */}
          <g stroke="#cbd5e1" strokeWidth="1" fill="none">
            <path d="M150 200 L200 180 L250 185 L300 190 L350 195" />
            <path d="M200 250 L280 240 L360 245 L420 250" />
            <path d="M180 320 L260 310 L340 315 L400 320" />
            <path d="M220 380 L300 370 L380 375" />
            <path d="M250 450 L320 440 L390 445" />
          </g>

          {/* Location Markers */}
          {locations.map((location) => {
            const Icon = getMarkerIcon(location.type);
            return (
              <g key={location.id}>
                {/* Marker Circle */}
                <motion.circle
                  cx={location.x}
                  cy={location.y}
                  r="8"
                  fill={getMarkerColor(location.type)}
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer drop-shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedLocation(location)}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 * locations.indexOf(location) }}
                />
                
                {/* Location Label */}
                <text
                  x={location.x}
                  y={location.y - 15}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-gray-700 pointer-events-none"
                  style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                >
                  {location.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Logistics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Enterprises</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Environmental</span>
          </div>
        </div>

        {/* Location Details Modal */}
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-xl border-2 border-gray-200 max-w-xs"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg text-gray-800">{selectedLocation.name}</h4>
              <button
                onClick={() => setSelectedLocation(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getMarkerColor(selectedLocation.type) }}
              ></div>
              <span className="text-sm text-gray-600 capitalize">{selectedLocation.type}</span>
            </div>
            <p className="text-sm text-gray-700">{selectedLocation.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IndiaMap;