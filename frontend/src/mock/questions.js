export const QUESTIONS = {
  // HLD Questions
  url_shortener: {
    id: 'url_shortener',
    title: 'Design a URL Shortener',
    type: 'HLD',
    difficulty: 'Easy',
    description: 'Design a URL shortening service like TinyURL or bit.ly',
    requirements: [
      'Generate short URLs that redirect to original URLs',
      'Custom short URLs should be supported',
      'URLs should expire after a standard timespan',
      'Analytics for URL visits'
    ],
    constraints: {
      dailyActiveUsers: '1M',
      targetLatency: '100ms',
      dataRetention: '90 days',
      storageLimit: '5TB'
    }
  },
  chat_system: {
    id: 'chat_system',
    title: 'Real-time Chat System',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design a real-time chat system like Facebook Messenger',
    requirements: [
      'Support one-on-one and group chats',
      'Online/offline status',
      'Message persistence',
      'Media file sharing'
    ],
    constraints: {
      dailyActiveUsers: '5M',
      messageSize: '1MB',
      mediaSize: '10MB',
      maxGroupSize: 100
    }
  },
  video_streaming: {
    id: 'video_streaming',
    title: 'Video Streaming Platform',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design a video streaming service like YouTube or Netflix',
    requirements: [
      'Video upload and processing',
      'Content delivery across globe',
      'Multiple quality options',
      'User engagement features'
    ],
    constraints: {
      dailyActiveUsers: '10M',
      videoStorage: '1PB',
      maxVideoSize: '10GB',
      maxStreamQuality: '4K'
    }
  },
  
  // LLD Questions
  parking_lot: {
    id: 'parking_lot',
    title: 'Design a Parking Lot',
    type: 'LLD',
    difficulty: 'Medium',
    description: 'Design a parking lot system that can handle multiple levels, different vehicle types, and parking spot allocation.',
    requirements: [
      'Support multiple levels of parking',
      'Different types of vehicles (Car, Bike, Bus)',
      'Track occupied/available spots',
      'Payment calculation'
    ],
    constraints: {
      maxLevels: 5,
      spotsPerLevel: 100
    },
    expectedComponents: [
      'class',
      'enum',
      'interface'
    ]
  },
  library_system: {
    id: 'library_system',
    title: 'Library Management System',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design a system to manage books, members, and book transactions in a library.',
    requirements: [
      'Book management (add, remove, search)',
      'Member management',
      'Book borrowing and returns',
      'Fine calculation'
    ],
    constraints: {
      maxBooks: '1M',
      maxMembers: '50K',
      borrowDuration: '14 days'
    },
    expectedComponents: [
      'class',
      'database',
      'api_endpoint'
    ]
  },
  elevator: {
    id: 'elevator',
    title: 'Elevator System',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design an elevator system for a building with multiple elevators.',
    requirements: [
      'Handle multiple elevators',
      'Optimize elevator scheduling',
      'Support different algorithms for up/down requests',
      'Emergency protocols'
    ],
    constraints: {
      maxFloors: 50,
      maxElevators: 4,
      maxCapacity: '1000 kg'
    },
    expectedComponents: [
      'class',
      'interface',
      'design_pattern'
    ]
  },
  text_editor: {
    id: 'text_editor',
    title: 'Simple Text Editor',
    type: 'LLD',
    difficulty: 'Medium',
    description: 'Design a basic text editor with undo/redo functionality.',
    requirements: [
      'Basic text operations (insert, delete)',
      'Undo/Redo functionality',
      'Text selection',
      'Copy/Paste operations'
    ],
    constraints: {
      maxFileSize: '10MB',
      undoLimit: 100
    },
    expectedComponents: [
      'class',
      'interface',
      'command_pattern'
    ]
  }
};