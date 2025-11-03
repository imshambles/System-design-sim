export const QUESTIONS = {
  // HLD Questions - Easy
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
  
  pastebin: {
    id: 'pastebin',
    title: 'Design Pastebin',
    type: 'HLD',
    difficulty: 'Easy',
    description: 'Design a service where users can store and share text snippets',
    requirements: [
      'Create and store text snippets',
      'Generate unique URLs for each paste',
      'Support expiration times',
      'Syntax highlighting for code'
    ],
    constraints: {
      dailyActiveUsers: '500K',
      maxPasteSize: '10MB',
      defaultExpiry: '30 days',
      storageLimit: '1TB'
    }
  },

  rate_limiter: {
    id: 'rate_limiter',
    title: 'Design a Rate Limiter',
    type: 'HLD',
    difficulty: 'Easy',
    description: 'Design an API rate limiter to prevent abuse',
    requirements: [
      'Limit requests per user/IP',
      'Support different rate limit rules',
      'Handle distributed systems',
      'Low latency overhead'
    ],
    constraints: {
      requestsPerSecond: '10K',
      targetLatency: '1ms',
      rules: 'Per user, Per IP, Per API key'
    }
  },

  // HLD Questions - Medium
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

  twitter_feed: {
    id: 'twitter_feed',
    title: 'Design Twitter News Feed',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design a news feed system like Twitter',
    requirements: [
      'Follow/Unfollow users',
      'Post tweets with text, images, videos',
      'Timeline generation (home feed)',
      'Trending topics'
    ],
    constraints: {
      dailyActiveUsers: '100M',
      maxTweetSize: '280 chars',
      maxFollowers: '1M',
      feedLoadTime: '200ms'
    }
  },

  instagram: {
    id: 'instagram',
    title: 'Design Instagram',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design a photo-sharing platform like Instagram',
    requirements: [
      'Upload and store photos/videos',
      'Follow users and view their posts',
      'News feed generation',
      'Like, comment, and share functionality'
    ],
    constraints: {
      dailyActiveUsers: '50M',
      maxPhotoSize: '15MB',
      maxVideoSize: '100MB',
      storageLimit: '10PB'
    }
  },

  uber: {
    id: 'uber',
    title: 'Design Uber/Ride-Sharing Service',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design a ride-sharing service like Uber or Lyft',
    requirements: [
      'Match riders with drivers',
      'Real-time location tracking',
      'ETA calculation',
      'Payment processing',
      'Rating system'
    ],
    constraints: {
      dailyActiveUsers: '10M',
      concurrentRides: '500K',
      locationUpdateFrequency: '5 seconds',
      matchingTime: '3 seconds'
    }
  },

  notification_system: {
    id: 'notification_system',
    title: 'Design Notification System',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design a notification system supporting multiple channels',
    requirements: [
      'Support push, SMS, email notifications',
      'Priority-based delivery',
      'Rate limiting per user',
      'Delivery tracking and analytics'
    ],
    constraints: {
      notificationsPerDay: '100M',
      deliveryLatency: '5 seconds',
      channels: 'Push, SMS, Email, In-app'
    }
  },

  web_crawler: {
    id: 'web_crawler',
    title: 'Design a Web Crawler',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design a web crawler for search engines',
    requirements: [
      'Crawl billions of web pages',
      'Respect robots.txt',
      'Handle duplicate content',
      'Politeness policy (rate limiting per domain)'
    ],
    constraints: {
      pagesPerDay: '1B',
      storageLimit: '100PB',
      crawlFreshness: '7 days'
    }
  },

  typeahead: {
    id: 'typeahead',
    title: 'Design Typeahead/Autocomplete',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design an autocomplete system like Google Search',
    requirements: [
      'Suggest top N results as user types',
      'Real-time suggestions',
      'Support personalization',
      'Handle typos'
    ],
    constraints: {
      queriesPerSecond: '100K',
      suggestionLatency: '50ms',
      maxSuggestions: 10
    }
  },

  ticketmaster: {
    id: 'ticketmaster',
    title: 'Design Ticketmaster',
    type: 'HLD',
    difficulty: 'Medium',
    description: 'Design an online ticket booking system',
    requirements: [
      'Browse events and venues',
      'Book tickets with seat selection',
      'Handle high traffic during sales',
      'Prevent double booking',
      'Payment processing'
    ],
    constraints: {
      peakUsersPerSecond: '1M',
      concurrentBookings: '100K',
      bookingTimeout: '10 minutes'
    }
  },

  // HLD Questions - Hard
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

  google_drive: {
    id: 'google_drive',
    title: 'Design Google Drive/Dropbox',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design a cloud file storage and synchronization service',
    requirements: [
      'Upload and download files',
      'File synchronization across devices',
      'File sharing with permissions',
      'Version history',
      'Offline access'
    ],
    constraints: {
      dailyActiveUsers: '50M',
      storagePerUser: '15GB',
      maxFileSize: '5GB',
      syncLatency: '10 seconds'
    }
  },

  facebook: {
    id: 'facebook',
    title: 'Design Facebook',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design a social network like Facebook',
    requirements: [
      'User profiles and friendships',
      'News feed generation',
      'Post creation with media',
      'Search functionality',
      'Groups and pages'
    ],
    constraints: {
      dailyActiveUsers: '1B',
      postsPerDay: '500M',
      storageLimit: '100PB',
      feedLatency: '200ms'
    }
  },

  whatsapp: {
    id: 'whatsapp',
    title: 'Design WhatsApp',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design an end-to-end encrypted messaging system',
    requirements: [
      'One-to-one and group messaging',
      'End-to-end encryption',
      'Media sharing',
      'Voice and video calls',
      'Last seen and read receipts'
    ],
    constraints: {
      dailyActiveUsers: '2B',
      messagesPerDay: '100B',
      maxGroupSize: 256,
      messageLatency: '100ms'
    }
  },

  netflix: {
    id: 'netflix',
    title: 'Design Netflix',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design a video streaming platform with recommendations',
    requirements: [
      'Video streaming with adaptive bitrate',
      'Personalized recommendations',
      'Continue watching functionality',
      'Multiple user profiles',
      'Content delivery optimization'
    ],
    constraints: {
      concurrentStreams: '10M',
      videoQuality: 'Up to 4K',
      recommendationLatency: '500ms',
      storageLimit: '10PB'
    }
  },

  amazon: {
    id: 'amazon',
    title: 'Design Amazon/E-commerce System',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design a large-scale e-commerce platform',
    requirements: [
      'Product catalog with search',
      'Shopping cart and checkout',
      'Order management',
      'Inventory management',
      'Payment processing',
      'Recommendation engine'
    ],
    constraints: {
      dailyActiveUsers: '100M',
      productsInCatalog: '100M',
      ordersPerDay: '10M',
      checkoutTime: '30 seconds'
    }
  },

  distributed_cache: {
    id: 'distributed_cache',
    title: 'Design Distributed Cache',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design a distributed caching system like Memcached or Redis',
    requirements: [
      'Distributed key-value storage',
      'Consistent hashing',
      'Replication and high availability',
      'Eviction policies'
    ],
    constraints: {
      requestsPerSecond: '1M',
      latency: '1ms',
      dataSize: '1TB',
      availability: '99.99%'
    }
  },

  google_maps: {
    id: 'google_maps',
    title: 'Design Google Maps',
    type: 'HLD',
    difficulty: 'Hard',
    description: 'Design a navigation and mapping service',
    requirements: [
      'Route calculation',
      'ETA estimation with traffic',
      'Turn-by-turn navigation',
      'Location search',
      'Real-time traffic updates'
    ],
    constraints: {
      dailyActiveUsers: '1B',
      routeCalculationTime: '500ms',
      mapDataSize: '10PB',
      locationAccuracy: '10 meters'
    }
  },

  // LLD Questions - Easy
  stack_queue: {
    id: 'stack_queue',
    title: 'Design Stack and Queue',
    type: 'LLD',
    difficulty: 'Easy',
    description: 'Implement basic data structures: Stack and Queue',
    requirements: [
      'Implement push, pop, peek for Stack',
      'Implement enqueue, dequeue for Queue',
      'Handle edge cases (empty, full)',
      'Generic implementation'
    ],
    constraints: {
      maxCapacity: '1000'
    },
    expectedComponents: [
      'class',
      'interface',
      'generic'
    ]
  },

  logger: {
    id: 'logger',
    title: 'Design a Logger System',
    type: 'LLD',
    difficulty: 'Easy',
    description: 'Design a flexible logging system with multiple log levels',
    requirements: [
      'Support multiple log levels (DEBUG, INFO, WARN, ERROR)',
      'Multiple output destinations (console, file)',
      'Thread-safe implementation',
      'Configurable log format'
    ],
    constraints: {
      maxFileSize: '100MB',
      logLevels: 5
    },
    expectedComponents: [
      'class',
      'interface',
      'singleton_pattern'
    ]
  },

  // LLD Questions - Medium
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

  lru_cache: {
    id: 'lru_cache',
    title: 'Design LRU Cache',
    type: 'LLD',
    difficulty: 'Medium',
    description: 'Implement a Least Recently Used (LRU) cache',
    requirements: [
      'Get and Put operations in O(1)',
      'Evict least recently used item when capacity is reached',
      'Thread-safe implementation',
      'Generic key-value support'
    ],
    constraints: {
      maxCapacity: '1000',
      timeComplexity: 'O(1)'
    },
    expectedComponents: [
      'class',
      'data_structure',
      'interface'
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
  },

  chess_game: {
    id: 'chess_game',
    title: 'Design Chess Game',
    type: 'LLD',
    difficulty: 'Medium',
    description: 'Design a chess game with all rules and piece movements',
    requirements: [
      'Implement all chess pieces with valid moves',
      'Enforce game rules (check, checkmate, stalemate)',
      'Support castling, en passant',
      'Move history and undo'
    ],
    constraints: {
      maxMoves: '500',
      timeLimit: 'Optional'
    },
    expectedComponents: [
      'class',
      'interface',
      'strategy_pattern'
    ]
  },

  vending_machine: {
    id: 'vending_machine',
    title: 'Design Vending Machine',
    type: 'LLD',
    difficulty: 'Medium',
    description: 'Design a vending machine system',
    requirements: [
      'Product selection and inventory management',
      'Payment handling (cash, card)',
      'Return change',
      'Handle out-of-stock scenarios'
    ],
    constraints: {
      maxProducts: 50,
      paymentTypes: 'Cash, Card'
    },
    expectedComponents: [
      'class',
      'interface',
      'state_pattern'
    ]
  },

  ticket_booking: {
    id: 'ticket_booking',
    title: 'Movie Ticket Booking System',
    type: 'LLD',
    difficulty: 'Medium',
    description: 'Design a movie ticket booking system',
    requirements: [
      'Browse movies and showtimes',
      'Seat selection',
      'Booking and payment',
      'Concurrency handling for seat reservation'
    ],
    constraints: {
      maxTheaters: 100,
      maxSeatsPerTheater: 300
    },
    expectedComponents: [
      'class',
      'interface',
      'database'
    ]
  },

  // LLD Questions - Hard
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

  online_auction: {
    id: 'online_auction',
    title: 'Online Auction System',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design an online auction system like eBay',
    requirements: [
      'List items for auction',
      'Bidding mechanism',
      'Automatic bid increment',
      'Auction closing and winner selection',
      'Payment processing'
    ],
    constraints: {
      maxConcurrentAuctions: '10K',
      maxBidsPerAuction: '1000'
    },
    expectedComponents: [
      'class',
      'interface',
      'observer_pattern',
      'database'
    ]
  },

  atm: {
    id: 'atm',
    title: 'ATM System',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design an ATM machine system',
    requirements: [
      'User authentication',
      'Balance inquiry',
      'Cash withdrawal with denomination',
      'Cash deposit',
      'Transaction history',
      'Concurrent transaction handling'
    ],
    constraints: {
      maxWithdrawal: '10000',
      denominations: '20, 50, 100, 500'
    },
    expectedComponents: [
      'class',
      'interface',
      'state_pattern',
      'database'
    ]
  },

  hotel_management: {
    id: 'hotel_management',
    title: 'Hotel Management System',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design a hotel management and booking system',
    requirements: [
      'Room inventory management',
      'Room booking and cancellation',
      'Guest check-in/check-out',
      'Housekeeping management',
      'Billing and payment'
    ],
    constraints: {
      maxRooms: '1000',
      roomTypes: 'Single, Double, Suite',
      maxBookingDuration: '30 days'
    },
    expectedComponents: [
      'class',
      'interface',
      'factory_pattern',
      'database'
    ]
  },

  restaurant_management: {
    id: 'restaurant_management',
    title: 'Restaurant Management System',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design a restaurant ordering and management system',
    requirements: [
      'Table reservation',
      'Order management',
      'Kitchen workflow',
      'Billing and payment',
      'Inventory tracking'
    ],
    constraints: {
      maxTables: 100,
      maxMenuItems: 500
    },
    expectedComponents: [
      'class',
      'interface',
      'observer_pattern',
      'database'
    ]
  },

  splitwise: {
    id: 'splitwise',
    title: 'Design Splitwise',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design an expense sharing application like Splitwise',
    requirements: [
      'Add users and groups',
      'Record expenses',
      'Split expenses (equal, percentage, exact)',
      'Calculate balances and simplify debts',
      'Settlement tracking'
    ],
    constraints: {
      maxUsersPerGroup: 100,
      maxGroups: 1000
    },
    expectedComponents: [
      'class',
      'interface',
      'strategy_pattern',
      'database'
    ]
  },

  snake_and_ladder: {
    id: 'snake_and_ladder',
    title: 'Snake and Ladder Game',
    type: 'LLD',
    difficulty: 'Hard',
    description: 'Design the Snake and Ladder board game',
    requirements: [
      'Multiple players',
      'Board with snakes and ladders',
      'Dice rolling',
      'Win condition',
      'Game state management'
    ],
    constraints: {
      maxPlayers: 4,
      boardSize: '10x10'
    },
    expectedComponents: [
      'class',
      'interface',
      'factory_pattern'
    ]
  }
};