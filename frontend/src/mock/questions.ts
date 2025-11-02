export interface Question {
  id: string;
  title: string;
  type: 'HLD' | 'LLD';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  requirements: string[];
  constraints: {
    [key: string]: string | number;
  };
  expectedComponents?: string[];
}

export const QUESTIONS: Record<string, Question> = {
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
      dailyActiveUsers: 1000000,
      targetLatency: 100,
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
      dailyActiveUsers: 5000000,
      messageSize: '1MB',
      mediaSize: '10MB',
      maxGroupSize: 100
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
    expectedComponents: ['class', 'enum', 'interface']
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
      maxBooks: 1000000,
      maxMembers: 50000,
      borrowDuration: 14
    },
    expectedComponents: ['class', 'database', 'api_endpoint']
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
      maxCapacity: 1000
    },
    expectedComponents: ['class', 'interface', 'design_pattern']
  }
};