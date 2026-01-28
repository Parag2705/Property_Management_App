export const properties = [
  {
    id: 1,
    name: "Grand Plaza Office Complex",
    group: "Retail Ventures Ltd.",
    owner: "Kumar Holdings",
    portfolio: "Commercial",
    area: "8,500 sq ft",
    value: "₹12.5 Cr",
    currentValue: "₹15.2 Cr",
    location: "Mumbai, Maharashtra",
    coordinates: { lat: 19.0760, lng: 72.8777 },
    legalStatus: "Clear Title",
    mortgage: "Yes - HDFC Bank",
    mortgageAmount: "₹6 Cr",
    documents: ["Sale Deed", "Encumbrance Certificate", "Property Tax Receipt"],
    status: "active",
    lastVisit: "2024-12-15",
    spoc: "spoc1",
    tasks: [
      { id: 1, description: "Property tax payment due", dueDate: "2024-02-15", status: "pending" },
      { id: 2, description: "Annual maintenance contract renewal", dueDate: "2024-03-01", status: "pending" }
    ],
    siteImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
    ]
  },
  {
    id: 2,
    name: "Riverfront Warehouse",
    group: "Logistics & Supply Co.",
    owner: "Patel Enterprises",
    portfolio: "Industrial",
    area: "25,000 sq ft",
    value: "₹8.2 Cr",
    currentValue: "₹9.8 Cr",
    location: "Pune, Maharashtra",
    coordinates: { lat: 18.5204, lng: 73.8567 },
    legalStatus: "Clear Title",
    mortgage: "No",
    mortgageAmount: "-",
    documents: ["Sale Deed", "NOC from Fire Department", "Industrial License"],
    status: "active",
    lastVisit: "2024-12-20",
    spoc: "spoc2",
    tasks: [
      { id: 3, description: "Fire safety inspection completed", dueDate: "2024-01-10", status: "completed" }
    ],
    siteImages: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
    ]
  },
  {
    id: 3,
    name: "Green Valley Resort",
    group: "Hospitality Division",
    owner: "Shah Family Trust",
    portfolio: "Hospitality",
    area: "45,000 sq ft",
    value: "₹32 Cr",
    currentValue: "₹38.5 Cr",
    location: "Goa",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    legalStatus: "Under Review",
    mortgage: "Yes - SBI",
    mortgageAmount: "₹15 Cr",
    documents: ["Sale Deed", "Tourism License", "Environmental Clearance"],
    status: "under-review",
    lastVisit: "2024-11-28",
    spoc: "spoc3",
    tasks: [
      { id: 4, description: "Resolve boundary dispute with neighbor", dueDate: "2024-02-28", status: "pending" },
      { id: 5, description: "Environmental audit", dueDate: "2024-01-30", status: "in-progress" }
    ],
    siteImages: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800"
    ]
  },
  {
    id: 4,
    name: "Tech Park Building B",
    group: "Tech Ventures Ltd.",
    owner: "Reddy Investments",
    portfolio: "Commercial",
    area: "12,000 sq ft",
    value: "₹18 Cr",
    currentValue: "₹22.3 Cr",
    location: "Bangalore, Karnataka",
    coordinates: { lat: 12.9716, lng: 77.5946 },
    legalStatus: "Clear Title",
    mortgage: "Yes - ICICI Bank",
    mortgageAmount: "₹8 Cr",
    documents: ["Sale Deed", "Occupancy Certificate", "Approved Building Plan"],
    status: "active",
    lastVisit: "2025-01-05",
    spoc: "spoc1",
    tasks: [],
    siteImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
    ]
  },
  {
    id: 5,
    name: "Skyline Apartments",
    group: "Residential Holdings",
    owner: "Gupta Real Estate",
    portfolio: "Residential",
    area: "32,000 sq ft",
    value: "₹28 Cr",
    currentValue: "₹35 Cr",
    location: "Delhi NCR",
    coordinates: { lat: 28.7041, lng: 77.1025 },
    legalStatus: "Clear Title",
    mortgage: "No",
    mortgageAmount: "-",
    documents: ["Sale Deed", "Completion Certificate", "Society Formation Documents"],
    status: "active",
    lastVisit: "2024-12-10",
    spoc: "spoc2",
    tasks: [
      { id: 6, description: "Society maintenance review", dueDate: "2024-01-20", status: "in-progress" }
    ],
    siteImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
    ]
  },
  {
    id: 6,
    name: "Heritage Mall",
    group: "Retail Ventures Ltd.",
    owner: "Kumar Holdings",
    portfolio: "Commercial",
    area: "55,000 sq ft",
    value: "₹65 Cr",
    currentValue: "₹72 Cr",
    location: "Hyderabad, Telangana",
    coordinates: { lat: 17.3850, lng: 78.4867 },
    legalStatus: "Clear Title",
    mortgage: "Yes - Axis Bank",
    mortgageAmount: "₹25 Cr",
    documents: ["Sale Deed", "Shopping Complex License", "Fire Safety Certificate"],
    status: "needs-attention",
    lastVisit: "2024-10-15",
    spoc: "spoc3",
    tasks: [
      { id: 7, description: "Tenant lease renewals (5 pending)", dueDate: "2024-01-31", status: "pending" },
      { id: 8, description: "HVAC system upgrade required", dueDate: "2024-02-15", status: "pending" }
    ],
    siteImages: [
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800"
    ]
  }
];

export const spocs = {
  spoc1: {
    id: "spoc1",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@example.com",
    role: "Property Manager",
    assignedProperties: [1, 4]
  },
  spoc2: {
    id: "spoc2",
    name: "Priya Sharma",
    phone: "+91 98765 43211",
    email: "priya.sharma@example.com",
    role: "Site Supervisor",
    assignedProperties: [2, 5]
  },
  spoc3: {
    id: "spoc3",
    name: "Amit Patel",
    phone: "+91 98765 43212",
    email: "amit.patel@example.com",
    role: "Facilities Manager",
    assignedProperties: [3, 6]
  }
};

export const meetingMinutes = [
  {
    id: 1,
    date: "2025-01-18",
    propertyId: 6,
    propertyName: "Heritage Mall",
    attendees: ["Chairman", "Amit Patel", "Legal Team"],
    discussion: "Discussed pending tenant lease renewals and mall HVAC system issues. Reviewed financial impact of delayed renewals.",
    directions: [
      {
        id: 1,
        text: "Expedite tenant lease renewal process - target completion by January 31st",
        assignedTo: "Amit Patel",
        priority: "high",
        status: "in-progress",
        dueDate: "2024-01-31"
      },
      {
        id: 2,
        text: "Get 3 quotes for HVAC system upgrade and present cost-benefit analysis",
        assignedTo: "Amit Patel",
        priority: "high",
        status: "pending",
        dueDate: "2024-02-05"
      }
    ]
  },
  {
    id: 2,
    date: "2025-01-15",
    propertyId: 3,
    propertyName: "Green Valley Resort",
    attendees: ["Chairman", "Amit Patel", "Legal Counsel"],
    discussion: "Boundary dispute review and environmental audit status. Discussed potential impact on resort operations.",
    directions: [
      {
        id: 3,
        text: "Engage surveyor to establish clear boundary markers and resolve dispute amicably",
        assignedTo: "Legal Team",
        priority: "high",
        status: "in-progress",
        dueDate: "2024-02-28"
      },
      {
        id: 4,
        text: "Complete environmental audit and obtain certification",
        assignedTo: "Amit Patel",
        priority: "medium",
        status: "in-progress",
        dueDate: "2024-01-30"
      }
    ]
  },
  {
    id: 3,
    date: "2025-01-10",
    propertyId: 1,
    propertyName: "Grand Plaza Office Complex",
    attendees: ["Chairman", "Rajesh Kumar", "Finance Team"],
    discussion: "Reviewed upcoming property tax payment and maintenance contract renewals. Discussed occupancy rates and rental income.",
    directions: [
      {
        id: 5,
        text: "Ensure property tax payment is completed before February 15th deadline",
        assignedTo: "Rajesh Kumar",
        priority: "medium",
        status: "pending",
        dueDate: "2024-02-15"
      },
      {
        id: 6,
        text: "Negotiate better rates for annual maintenance contract - aim for 10% reduction",
        assignedTo: "Rajesh Kumar",
        priority: "low",
        status: "pending",
        dueDate: "2024-03-01"
      }
    ]
  },
  {
    id: 4,
    date: "2025-01-05",
    propertyId: 5,
    propertyName: "Skyline Apartments",
    attendees: ["Chairman", "Priya Sharma", "Residents Association"],
    discussion: "Society maintenance review and resident concerns. Discussed infrastructure improvements and budget allocation.",
    directions: [
      {
        id: 7,
        text: "Complete society maintenance review and submit detailed report",
        assignedTo: "Priya Sharma",
        priority: "medium",
        status: "in-progress",
        dueDate: "2024-01-20"
      },
      {
        id: 8,
        text: "Address resident concerns regarding parking and security within 2 weeks",
        assignedTo: "Priya Sharma",
        priority: "medium",
        status: "in-progress",
        dueDate: "2024-01-20"
      }
    ]
  },
  {
    id: 5,
    date: "2024-12-28",
    propertyId: 2,
    propertyName: "Riverfront Warehouse",
    attendees: ["Chairman", "Priya Sharma", "Fire Safety Officer"],
    discussion: "Fire safety inspection results and warehouse operational efficiency. All safety measures found satisfactory.",
    directions: [
      {
        id: 9,
        text: "Maintain fire safety compliance - schedule quarterly inspections",
        assignedTo: "Priya Sharma",
        priority: "low",
        status: "completed",
        dueDate: "2024-01-10"
      }
    ]
  },
  {
    id: 6,
    date: "2024-12-20",
    propertyId: 4,
    propertyName: "Tech Park Building B",
    attendees: ["Chairman", "Rajesh Kumar", "Tenant Representatives"],
    discussion: "Tenant satisfaction survey results and building amenities upgrade proposals. Overall positive feedback received.",
    directions: [
      {
        id: 10,
        text: "Explore smart building upgrades to attract premium tenants",
        assignedTo: "Rajesh Kumar",
        priority: "low",
        status: "completed",
        dueDate: "2024-12-31"
      }
    ]
  }
];

export const portfolioStats = {
  totalProperties: properties.length,
  totalValue: properties.reduce((sum, p) => sum + parseFloat(p.currentValue.replace(/[₹,Cr]/g, '')), 0),
  activeProperties: properties.filter(p => p.status === 'active').length,
  needsAttention: properties.filter(p => p.status === 'needs-attention' || p.status === 'under-review').length,
  pendingTasks: properties.reduce((sum, p) => sum + p.tasks.filter(t => t.status === 'pending').length, 0),
  upcomingMeetings: 2
};
