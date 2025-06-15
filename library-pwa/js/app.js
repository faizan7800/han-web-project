class LibraryApp {
  constructor() {
    this.initializeData()
    this.setupEventListeners()
    this.showLoginPage()
  }

  initializeData() {
    // Load data from localStorage or use default data
    this.currentUser = null
    this.users = JSON.parse(localStorage.getItem("users")) || this.getDefaultUsers()
    this.books = JSON.parse(localStorage.getItem("books")) || this.getDefaultBooks()
    this.borrowedBooks = JSON.parse(localStorage.getItem("borrowedBooks")) || []
    this.borrowRequests = JSON.parse(localStorage.getItem("borrowRequests")) || []
    this.roomReservations = JSON.parse(localStorage.getItem("roomReservations")) || []
    this.rooms = JSON.parse(localStorage.getItem("rooms")) || this.getDefaultRooms()
    this.notifications = JSON.parse(localStorage.getItem("notifications")) || []
  }

  getDefaultUsers() {
    return [
      {
        id: 1,
        username: "haneen",
        password: "password",
        name: "Haneen",
        email: "student@example.com",
        role: "student",
        contact: "+1234567890",
        joinDate: "2023-01-15",
      },
      {
        id: 2,
        username: "mariam",
        password: "password",
        name: "Mariam Mohammad",
        email: "librarian@example.com",
        role: "librarian",
        contact: "+1987654321",
        joinDate: "2022-11-10",
      },
      {
        id: 3,
        username: "naem",
        password: "password",
        name: "Admin Naem",
        email: "admin@example.com",
        role: "admin",
        contact: "+1122334455",
        joinDate: "2022-10-05",
      },
    ]
  }

  getDefaultBooks() {
    return [
      // Database Books (25 books)
      {
        id: 1,
        title: "Database System: Approach to Design, Implementation, and Management",
        author: "Thomas M. Connolly",
        year: "2019",
        rating: 5,
        category: "database",
        availability: "available",
        description: "Comprehensive guide to database systems design and implementation.",
        isbn: "978-0132943260",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 2,
        title: "Fundamentals of Database Systems",
        author: "Ramez Elmasri & Shamkant B. Navathe",
        year: "2020",
        rating: 4.5,
        category: "database",
        availability: "borrowed",
        description: "Fundamental concepts and principles of database systems.",
        isbn: "978-0133970777",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 3,
        title: "An Introduction to Database Systems",
        author: "C.J. Date",
        year: "2018",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Classic introduction to database systems and theory.",
        isbn: "978-0321197849",
        format: "hardcopy",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 4,
        title: "Database System Concepts",
        author: "Abraham Silberschatz, Henry Korth, S. Sudarshan",
        year: "2019",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Comprehensive coverage of database system concepts.",
        isbn: "978-0078022159",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 5,
        title: "Seven Databases in Seven Weeks",
        author: "Eric Redmond, Jim R. Wilson",
        year: "2018",
        rating: 5,
        category: "database",
        availability: "available",
        description: "A guide to modern databases and NoSQL.",
        isbn: "978-1934356920",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 6,
        title: "SQL in 10 Minutes, Sams Teach Yourself",
        author: "Ben Forta",
        year: "2020",
        rating: 4,
        category: "database",
        availability: "available",
        description: "Quick and practical SQL learning guide.",
        isbn: "978-0672336072",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 7,
        title: "Learning SQL: Master SQL Fundamentals",
        author: "Alan Beaulieu",
        year: "2020",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Comprehensive guide to SQL programming.",
        isbn: "978-0596520830",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 8,
        title: "MongoDB: The Definitive Guide",
        author: "Kristina Chodorow",
        year: "2019",
        rating: 4,
        category: "database",
        availability: "available",
        description: "Complete guide to MongoDB NoSQL database.",
        isbn: "978-1449344689",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 9,
        title: "Redis in Action",
        author: "Josiah L. Carlson",
        year: "2018",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Practical guide to Redis database.",
        isbn: "978-1617290855",
        format: "ebook",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 10,
        title: "PostgreSQL: Up and Running",
        author: "Regina Obe, Leo Hsu",
        year: "2020",
        rating: 4,
        category: "database",
        availability: "available",
        description: "Practical guide to PostgreSQL database.",
        isbn: "978-1449373191",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 11,
        title: "MySQL Cookbook",
        author: "Paul DuBois",
        year: "2019",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Solutions for MySQL database problems.",
        isbn: "978-1449374020",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 12,
        title: "Cassandra: The Definitive Guide",
        author: "Jeff Carpenter, Eben Hewitt",
        year: "2020",
        rating: 4,
        category: "database",
        availability: "available",
        description: "Complete guide to Apache Cassandra.",
        isbn: "978-1491933664",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 13,
        title: "Graph Databases",
        author: "Ian Robinson, Jim Webber, Emil Eifrem",
        year: "2018",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Introduction to graph database concepts.",
        isbn: "978-1449356262",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 14,
        title: "Database Design for Mere Mortals",
        author: "Michael J. Hernandez",
        year: "2019",
        rating: 4,
        category: "database",
        availability: "available",
        description: "Practical approach to database design.",
        isbn: "978-0321884497",
        format: "hardcopy",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 15,
        title: "NoSQL Distilled",
        author: "Pramod J. Sadalage, Martin Fowler",
        year: "2018",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Brief guide to the emerging world of NoSQL databases.",
        isbn: "978-0321826626",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 56,
        title: "Data Modeling Essentials",
        author: "Graeme Simsion",
        year: "2007",
        rating: 4,
        category: "database",
        availability: "available",
        description: "Techniques for data modeling.",
        isbn: "978-0123735685",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 57,
        title: "Data Architecture: A Primer for the Data Scientist",
        author: "William McKnight",
        year: "2020",
        rating: 4.2,
        category: "database",
        availability: "available",
        description: "Understanding data architecture for data science.",
        isbn: "978-0128183411",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 58,
        title: "Building the Data Warehouse",
        author: "W.H. Inmon",
        year: "2005",
        rating: 4.5,
        category: "database",
        availability: "available",
        description: "Classic guide to data warehousing.",
        isbn: "978-0471081302",
        format: "hardcopy",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 59,
        title: "The Data Warehouse Toolkit",
        author: "Ralph Kimball, Margy Ross",
        year: "2013",
        rating: 4.7,
        category: "database",
        availability: "available",
        description: "Dimensional modeling techniques.",
        isbn: "978-1118530915",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 60,
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        year: "2017",
        rating: 4.9,
        category: "database",
        availability: "available",
        description: "Scalable and reliable systems.",
        isbn: "978-1449373320",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 61,
        title: "Data Governance: The Definitive Guide",
        author: "Robert S. Seiner",
        year: "2014",
        rating: 4.3,
        category: "database",
        availability: "available",
        description: "Implementing effective data governance.",
        isbn: "978-1555526478",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 62,
        title: "Stream Data Processing",
        author: "Tyler Akidau, Slava Chernyak, Reuven Lax",
        year: "2015",
        rating: 4.6,
        category: "database",
        availability: "available",
        description: "Real-time analytics.",
        isbn: "978-1492076244",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 63,
        title: "Database Internals",
        author: "Alex Petrov",
        year: "2019",
        rating: 4.8,
        category: "database",
        availability: "available",
        description: "In-depth look at database architecture.",
        isbn: "978-1492040344",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 64,
        title: "SQL Performance Explained",
        author: "Markus Winand",
        year: "2012",
        rating: 4.4,
        category: "database",
        availability: "available",
        description: "Optimizing SQL queries.",
        isbn: "978-3864900241",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 65,
        title: "Cloud Native Data Management",
        author: "Pethuru Raj, Jitendra Pathak",
        year: "2021",
        rating: 4.1,
        category: "database",
        availability: "available",
        description: "Data management in cloud environments.",
        isbn: "978-1484273224",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },

      // Programming Books (10 books)
      {
        id: 16,
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        year: "2020",
        rating: 5,
        category: "programming",
        availability: "available",
        description: "Best practices for writing clean, maintainable code.",
        isbn: "978-0132350884",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 17,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        year: "2019",
        rating: 4.5,
        category: "programming",
        availability: "available",
        description: "Essential JavaScript programming concepts.",
        isbn: "978-0596517748",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 18,
        title: "Python Crash Course",
        author: "Eric Matthes",
        year: "2020",
        rating: 4.5,
        category: "programming",
        availability: "available",
        description: "Hands-on introduction to Python programming.",
        isbn: "978-1593279288",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 19,
        title: "The Pragmatic Programmer",
        author: "David Thomas, Andrew Hunt",
        year: "2019",
        rating: 5,
        category: "programming",
        availability: "available",
        description: "Your journey to mastery in software development.",
        isbn: "978-0135957059",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 20,
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Gang of Four",
        year: "2018",
        rating: 4.5,
        category: "programming",
        availability: "available",
        description: "Classic book on software design patterns.",
        isbn: "978-0201633612",
        format: "hardcopy",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 21,
        title: "You Don't Know JS: Scope & Closures",
        author: "Kyle Simpson",
        year: "2020",
        rating: 4,
        category: "programming",
        availability: "available",
        description: "Deep dive into JavaScript scope and closures.",
        isbn: "978-1449335588",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 22,
        title: "Effective Java",
        author: "Joshua Bloch",
        year: "2019",
        rating: 4.5,
        category: "programming",
        availability: "available",
        description: "Best practices for Java programming.",
        isbn: "978-0134685991",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 23,
        title: "Automate the Boring Stuff with Python",
        author: "Al Sweigart",
        year: "2020",
        rating: 4.5,
        category: "programming",
        availability: "available",
        description: "Practical programming for total beginners.",
        isbn: "978-1593279929",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 24,
        title: "Head First Design Patterns",
        author: "Eric Freeman, Elisabeth Robson",
        year: "2019",
        rating: 4,
        category: "programming",
        availability: "available",
        description: "Brain-friendly guide to design patterns.",
        isbn: "978-0596007126",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 25,
        title: "Refactoring: Improving the Design of Existing Code",
        author: "Martin Fowler",
        year: "2020",
        rating: 4.5,
        category: "programming",
        availability: "available",
        description: "Techniques for improving code structure.",
        isbn: "978-0134757599",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },

      // Trending Books (6 books)
      {
        id: 34,
        title: "Atomic Habits",
        author: "James Clear",
        year: "2020",
        rating: 5,
        category: "trending",
        availability: "available",
        description: "An easy & proven way to build good habits & break bad ones.",
        isbn: "978-0735211292",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 35,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        year: "2019",
        rating: 4.5,
        category: "trending",
        availability: "available",
        description: "Powerful lessons in personal change.",
        isbn: "978-1982137274",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 36,
        title: "Educated",
        author: "Tara Westover",
        year: "2020",
        rating: 4.5,
        category: "trending",
        availability: "available",
        description: "A memoir about education and transformation.",
        isbn: "978-0399590504",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 37,
        title: "Becoming",
        author: "Michelle Obama",
        year: "2019",
        rating: 5,
        category: "trending",
        availability: "available",
        description: "Memoir of the former First Lady.",
        isbn: "978-1524763138",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 38,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        year: "2020",
        rating: 4,
        category: "trending",
        availability: "available",
        description: "A counterintuitive approach to living a good life.",
        isbn: "978-0062457714",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 39,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        year: "2019",
        rating: 4.5,
        category: "trending",
        availability: "available",
        description: "A mystery and coming-of-age story.",
        isbn: "978-0735219090",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },

      // Fiction Books (6 books)
      {
        id: 40,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: "2018",
        rating: 5,
        category: "fiction",
        availability: "available",
        description: "Classic American novel about racial injustice.",
        isbn: "978-0061120084",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 41,
        title: "1984",
        author: "George Orwell",
        year: "2019",
        rating: 5,
        category: "fiction",
        availability: "available",
        description: "Dystopian social science fiction novel.",
        isbn: "978-0452284234",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 42,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: "2018",
        rating: 4.5,
        category: "fiction",
        availability: "available",
        description: "Classic romance novel.",
        isbn: "978-0141439518",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 43,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: "2019",
        rating: 4,
        category: "fiction",
        availability: "available",
        description: "American classic about the Jazz Age.",
        isbn: "978-0743273565",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 44,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: "2018",
        rating: 4,
        category: "fiction",
        availability: "available",
        description: "Coming-of-age story in New York.",
        isbn: "978-0316769174",
        format: "hardcopy",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 45,
        title: "Lord of the Flies",
        author: "William Golding",
        year: "2019",
        rating: 4.5,
        category: "fiction",
        availability: "available",
        description: "Allegorical novel about human nature.",
        isbn: "978-0571056866",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },

      // Textbooks (5 books)
      {
        id: 46,
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        year: "2020",
        rating: 5,
        category: "textbook",
        availability: "available",
        description: "Comprehensive introduction to algorithms.",
        isbn: "978-0262033848",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 47,
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        year: "2019",
        rating: 4.5,
        category: "textbook",
        availability: "available",
        description: "Comprehensive guide to computer networking.",
        isbn: "978-0132126953",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 48,
        title: "Operating System Concepts",
        author: "Abraham Silberschatz",
        year: "2020",
        rating: 4.5,
        category: "textbook",
        availability: "available",
        description: "Fundamental concepts of operating systems.",
        isbn: "978-1118063330",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 49,
        title: "Computer Organization and Design",
        author: "David A. Patterson, John L. Hennessy",
        year: "2019",
        rating: 4,
        category: "textbook",
        availability: "available",
        description: "Hardware/software interface.",
        isbn: "978-0124077263",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 50,
        title: "Discrete Mathematics and Its Applications",
        author: "Kenneth H. Rosen",
        year: "2020",
        rating: 4,
        category: "textbook",
        availability: "available",
        description: "Comprehensive discrete mathematics textbook.",
        isbn: "978-0073383095",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },

      // Kids Books (5 books)
      {
        id: 51,
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        year: "2018",
        rating: 5,
        category: "kids",
        availability: "available",
        description: "The boy who lived begins his magical journey.",
        isbn: "978-0439708180",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 52,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        year: "2019",
        rating: 4.5,
        category: "kids",
        availability: "available",
        description: "Magical adventures in Narnia.",
        isbn: "978-0066238500",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XQwvzK8QL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 53,
        title: "Charlotte's Web",
        author: "E.B. White",
        year: "2018",
        rating: 4.5,
        category: "kids",
        availability: "available",
        description: "The story of Wilbur the pig and Charlotte the spider.",
        isbn: "978-0064400558",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51XvdKvUakL._SX398_BO1,204,203,200_.jpg",
      },
      {
        id: 54,
        title: "Matilda",
        author: "Roald Dahl",
        year: "2019",
        rating: 4.5,
        category: "kids",
        availability: "available",
        description: "The story of a girl with extraordinary powers.",
        isbn: "978-0142410370",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/51rQlz7WJQL._SX402_BO1,204,203,200_.jpg",
      },
      {
        id: 55,
        title: "The Giving Tree",
        author: "Shel Silverstein",
        year: "2018",
        rating: 4,
        category: "kids",
        availability: "available",
        description: "A tree's unconditional love for a boy.",
        isbn: "978-0060256654",
        format: "both",
        coverUrl: "https://images-na.ssl-images-amazon.com/images/I/41QxQzB8NFL._SX331_BO1,204,203,200_.jpg",
      },
    ]
  }

  getDefaultRooms() {
    return [
      {
        id: 1,
        name: "Study Room A",
        capacity: "4 people",
        features: "Whiteboard, Wi-Fi, Power outlets",
        image: "https://via.placeholder.com/300x200?text=Study+Room+A",
      },
      {
        id: 2,
        name: "Conference Room B",
        capacity: "10 people",
        features: "Projector, Wi-Fi, Video conferencing",
        image: "https://via.placeholder.com/300x200?text=Conference+Room+B",
      },
      {
        id: 3,
        name: "Quiet Study Room C",
        capacity: "2 people",
        features: "Wi-Fi, Power outlets, Sound insulation",
        image: "https://via.placeholder.com/300x200?text=Quiet+Study+Room+C",
      },
      {
        id: 4,
        name: "Group Study Room D",
        capacity: "6 people",
        features: "Whiteboard, Wi-Fi, Power outlets, Large table",
        image: "https://via.placeholder.com/300x200?text=Group+Study+Room+D",
      },
    ]
  }

  setupEventListeners() {
    document.addEventListener("click", (event) => {
      const target = event.target

      // Login form submission
      if (target.closest("#login-form")) {
        const form = target.closest("#login-form")
        if (form && event.type === "submit") {
          event.preventDefault()
          this.handleLogin()
        }
      }

      // Tab switching
      if (target.classList.contains("tab")) {
        this.switchTab(target)
      }

      // Toggle password visibility
      if (target.closest(".toggle-password")) {
        this.togglePassword(target.closest(".toggle-password"))
      }

      // Book card click
      if (target.closest(".book-card")) {
        const bookCard = target.closest(".book-card")
        const bookId = bookCard.dataset.bookId
        this.showBookDetail(bookId)
      }

      // Back button in book detail
      if (target.closest(".btn-back")) {
        this.showPage("search-books")
      }

      // Borrow button in book detail
      if (target.classList.contains("btn-borrow")) {
        const bookId = target.dataset.bookId
        this.borrowBook(bookId)
      }

      // Room reservation
      if (target.classList.contains("reserve-btn")) {
        const roomId = target.dataset.roomId
        this.showReservationForm(roomId)
      }

      // Add book button
      if (target.id === "add-book-btn") {
        this.showPage("add-book")
      }

      // Add user button
      if (target.id === "add-user-btn") {
        this.showPage("add-user")
      }

      // Return book button
      if (target.classList.contains("return-btn")) {
        const bookId = target.dataset.bookId
        this.returnBook(bookId)
      }

      // Renew book button
      if (target.classList.contains("renew-btn")) {
        const bookId = target.dataset.bookId
        this.renewBook(bookId)
      }

      // Approve borrow request
      if (target.classList.contains("approve-btn")) {
        const requestId = target.dataset.requestId
        this.approveBorrowRequest(requestId)
      }

      // Reject borrow request
      if (target.classList.contains("reject-btn")) {
        const requestId = target.dataset.requestId
        this.rejectBorrowRequest(requestId)
      }

      // View reservations button
      if (target.classList.contains("view-reservations-btn")) {
        this.showPage("dashboard")
      }
    })

    document.addEventListener("submit", (event) => {
      // Login form submission
      if (event.target.id === "login-form") {
        event.preventDefault()
        this.handleLogin()
      }

      // Registration form submission
      if (event.target.id === "register-form") {
        event.preventDefault()
        this.handleRegistration()
      }

      // Reservation form submission
      if (event.target.id === "reservation-form") {
        event.preventDefault()
        this.handleReservation()
      }

      // Profile form submission
      if (event.target.id === "profile-form") {
        event.preventDefault()
        this.handleProfileUpdate()
      }

      // Add book form submission
      if (event.target.id === "add-book-form") {
        event.preventDefault()
        this.handleAddBook()
      }

      // Add user form submission
      if (event.target.id === "add-user-form") {
        event.preventDefault()
        this.handleAddUser()
      }
    })

    // Search input event listener
    document.addEventListener("input", (event) => {
      if (event.target.id === "search-input") {
        const query = event.target.value
        this.handleSearch(query)
      }
    })

    // Search dropdown event listener
    document.addEventListener("change", (event) => {
      if (event.target.closest(".search-dropdown select")) {
        const searchType = event.target.value
        const searchInput = document.getElementById("search-input")
        if (searchInput) {
          this.handleSearchWithFilter(searchInput.value, searchType)
        }
      }
    })
  }

  showLoginPage() {
    const app = document.getElementById("app")
    app.innerHTML = ""

    const template = document.getElementById("login-template")
    app.appendChild(template.content.cloneNode(true))

    // Hide loader
    document.getElementById("loader").classList.add("hidden")
  }

  handleLogin() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const user = this.users.find((u) => u.username === username && u.password === password)

    if (user) {
      this.currentUser = user
      this.showMainApp()
    } else {
      alert("Invalid username or password")
    }
  }

  handleRegistration() {
    const name = document.getElementById("reg-name").value
    const email = document.getElementById("reg-email").value
    const username = document.getElementById("reg-username").value
    const password = document.getElementById("reg-password").value

    if (!name || !email || !username || !password) {
      alert("Please fill all fields")
      return
    }

    // Check if username already exists
    if (this.users.some((user) => user.username === username)) {
      alert("Username already exists")
      return
    }

    const newUser = {
      id: this.users.length + 1,
      name,
      email,
      username,
      password,
      role: "student",
      contact: "",
      joinDate: new Date().toLocaleDateString(),
    }

    this.users.push(newUser)
    localStorage.setItem("users", JSON.stringify(this.users))

    alert("Registration successful! You can now login.")

    // Switch to login tab
    const loginTab = document.querySelector('[data-tab="login"]')
    if (loginTab) {
      this.switchTab(loginTab)
    }
  }

  showMainApp() {
    const app = document.getElementById("app")
    app.innerHTML = ""

    // Add sidebar
    const sidebarTemplate = document.getElementById("sidebar-template")
    app.appendChild(sidebarTemplate.content.cloneNode(true))

    // Create main content container
    const mainContent = document.createElement("div")
    mainContent.id = "main-content"
    mainContent.className = "main-content"
    app.appendChild(mainContent)

    // Update sidebar based on user role
    this.updateSidebar()

    // Show dashboard by default
    this.showPage("dashboard")
  }

  updateSidebar() {
    const sidebar = document.querySelector(".sidebar-nav ul")
    if (!sidebar) return

    // Clear existing items
    sidebar.innerHTML = ""

    // Common items for all users
    const commonItems = [
      { page: "dashboard", icon: "fas fa-tachometer-alt", text: "Dashboard" },
      { page: "update-profile", icon: "fas fa-user-edit", text: "Update Profile" },
      { page: "logout", icon: "fas fa-sign-out-alt", text: "Log out" },
    ]

    // Role-specific items
    let roleItems = []

    if (this.currentUser.role === "student") {
      roleItems = [
        { page: "search-books", icon: "fas fa-search", text: "Search Books" },
        { page: "return-book", icon: "fas fa-undo", text: "Return Book" },
        { page: "reserve-room", icon: "fas fa-calendar-plus", text: "Reserve Room" },
      ]
    } else if (this.currentUser.role === "librarian") {
      roleItems = [
        { page: "total-books", icon: "fas fa-book", text: "Total Books" },
        { page: "borrow-requests", icon: "fas fa-clipboard-list", text: "Borrow Requests" },
        { page: "members", icon: "fas fa-users", text: "Members" },
      ]
    } else if (this.currentUser.role === "admin") {
      roleItems = [
        { page: "total-books", icon: "fas fa-book", text: "Total Books" },
        { page: "members", icon: "fas fa-users", text: "Members" },
        { page: "settings", icon: "fas fa-cog", text: "Settings" },
      ]
    }

    // Combine and add items to sidebar
    const allItems = [...roleItems, ...commonItems]

    allItems.forEach((item) => {
      const li = document.createElement("li")
      li.className = "nav-item"
      li.dataset.page = item.page
      li.innerHTML = `
                <i class="${item.icon}"></i>
                <span>${item.text}</span>
            `
      li.addEventListener("click", () => this.showPage(item.page))
      sidebar.appendChild(li)
    })
  }

  showPage(pageName) {
    if (pageName === "logout") {
      this.currentUser = null
      this.showLoginPage()
      return
    }

    const mainContent = document.getElementById("main-content")
    if (!mainContent) return

    mainContent.innerHTML = ""

    // Update active nav item
    this.updateActiveNavItem(pageName)

    // Show the requested page
    switch (pageName) {
      case "dashboard":
        this.renderDashboard(mainContent)
        break
      case "search-books":
        this.renderSearchBooks(mainContent)
        break
      case "return-book":
        this.renderReturnBook(mainContent)
        break
      case "reserve-room":
        this.renderReservation(mainContent)
        break
      case "update-profile":
        this.renderUpdateProfile(mainContent)
        break
      case "settings":
        // Placeholder for settings page
        mainContent.innerHTML = "<h1>Settings</h1>"
        break
      case "total-books":
        this.renderTotalBooks(mainContent)
        break
      case "add-book":
        this.renderAddBook(mainContent)
        break
      case "members":
        this.renderMembers(mainContent)
        break
      case "add-user":
        this.renderAddUser(mainContent)
        break
      case "borrow-requests":
        this.renderBorrowRequests(mainContent)
        break
      default:
        mainContent.innerHTML = "<h1>Page not found</h1>"
    }
  }

  renderDashboard(container) {
    if (this.currentUser.role === "student") {
      const template = document.getElementById("student-dashboard-template")
      container.appendChild(template.content.cloneNode(true))

      // Update user name
      const userNameElement = container.querySelector("#user-name")
      if (userNameElement) {
        userNameElement.textContent = this.currentUser.name
      }

      // Populate borrowed books
      const borrowedBooksContainer = container.querySelector("#borrowed-books-container")
      if (borrowedBooksContainer) {
        const userBorrowedBooks = this.borrowedBooks.filter((book) => book.userId === this.currentUser.id)

        if (userBorrowedBooks.length === 0) {
          borrowedBooksContainer.innerHTML = '<p class="no-books-message">You have no borrowed books.</p>'
        } else {
          userBorrowedBooks.forEach((borrowedBook) => {
            const book = this.books.find((b) => b.id == borrowedBook.bookId)
            if (book) {
              const bookItem = document.createElement("div")
              bookItem.className = "due-book"

              const dueDate = new Date(borrowedBook.dueDate)
              const today = new Date()
              const isOverdue = dueDate < today

              bookItem.innerHTML = `
                                <span>${book.title}</span>
                                <span class="due-time ${isOverdue ? "overdue-indicator" : ""}">${isOverdue ? "Overdue" : "Due"}: ${borrowedBook.dueDate}</span>
                            `

              borrowedBooksContainer.appendChild(bookItem)
            }
          })
        }
      }

      // Populate room reservations
      const roomReservationsContainer = container.querySelector("#room-reservations-container")
      if (roomReservationsContainer) {
        const userReservations = this.roomReservations.filter((res) => res.userId === this.currentUser.id)

        if (userReservations.length === 0) {
          roomReservationsContainer.innerHTML = '<p class="no-reservations-message">You have no room reservations.</p>'
        } else {
          userReservations.forEach((reservation) => {
            const room = this.rooms.find((r) => r.id == reservation.roomId)
            if (room) {
              const reservationItem = document.createElement("div")
              reservationItem.className = "due-book"

              const reservationDate = new Date(reservation.date)
              const today = new Date()
              const isPast = reservationDate < today

              reservationItem.innerHTML = `
                                <span>${room.name}</span>
                                <span class="due-time ${isPast ? "overdue-indicator" : ""}">${reservation.date} at ${reservation.time}</span>
                            `

              roomReservationsContainer.appendChild(reservationItem)
            }
          })
        }
      }

      // Generate calendar
      this.generateCalendar()
    } else if (this.currentUser.role === "librarian" || this.currentUser.role === "admin") {
      const template = document.getElementById("librarian-dashboard-template")
      container.appendChild(template.content.cloneNode(true))

      // Update stats
      const totalBooksCount = container.querySelector("#total-books-count")
      if (totalBooksCount) {
        totalBooksCount.textContent = this.books.length
      }

      const borrowedBooksCount = container.querySelector("#borrowed-books-count")
      if (borrowedBooksCount) {
        borrowedBooksCount.textContent = this.borrowedBooks.length
      }

      const pendingRequestsCount = container.querySelector("#pending-requests-count")
      if (pendingRequestsCount) {
        const pendingCount = this.borrowRequests.filter((req) => req.status === "pending").length
        pendingRequestsCount.textContent = pendingCount
      }

      const totalMembersCount = container.querySelector("#total-members-count")
      if (totalMembersCount) {
        const studentsCount = this.users.filter((user) => user.role === "student").length
        totalMembersCount.textContent = studentsCount
      }

      // Populate members list
      const membersList = container.querySelector(".members-list")
      if (membersList) {
        const recentMembers = this.users
          .filter((user) => user.role === "student")
          .sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate))
          .slice(0, 5)

        if (recentMembers.length === 0) {
          membersList.innerHTML = '<p class="no-members-message">No members found.</p>'
        } else {
          recentMembers.forEach((member) => {
            const memberItem = document.createElement("div")
            memberItem.className = "member-item"

            memberItem.innerHTML = `
                            <div class="member-avatar">👤</div>
                            <div class="member-info">
                                <h4>${member.name}</h4>
                                <p>${member.email}</p>
                                <p>Joined: ${member.joinDate}</p>
                            </div>
                        `

            membersList.appendChild(memberItem)
          })
        }
      }

      // Populate requests list
      const requestsList = container.querySelector(".requests-list")
      if (requestsList) {
        const recentRequests = this.borrowRequests
          .filter((req) => req.status === "pending")
          .sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate))
          .slice(0, 5)

        if (recentRequests.length === 0) {
          requestsList.innerHTML = '<p class="no-requests-message">No pending requests.</p>'
        } else {
          recentRequests.forEach((request) => {
            const book = this.books.find((b) => b.id == request.bookId)
            const user = this.users.find((u) => u.id == request.userId)

            if (book && user) {
              const requestItem = document.createElement("div")
              requestItem.className = "request-item"

              requestItem.innerHTML = `
                                <div class="request-book-cover" style="background-image: url('${book.coverUrl}'); background-size: cover; background-position: center;"></div>
                                <div class="request-info">
                                    <h4>${book.title}</h4>
                                    <p>Requested by: ${user.name}</p>
                                    <p>Date: ${request.requestDate}</p>
                                </div>
                                <div class="request-actions">
                                    <button class="btn btn-success approve-btn" data-request-id="${request.id}">Approve</button>
                                    <button class="btn btn-danger reject-btn" data-request-id="${request.id}">Reject</button>
                                </div>
                            `

              requestsList.appendChild(requestItem)
            }
          })
        }
      }

      // Initialize chart placeholder (since Chart.js might not be available)
      setTimeout(() => {
        const chartContainer = document.querySelector(".chart-container")
        if (chartContainer) {
          // Create a simple chart placeholder
          chartContainer.innerHTML = `
            <div style="display: flex; align-items: end; justify-content: space-around; height: 250px; padding: 20px;">
              <div style="background: var(--primary-color); width: 40px; height: 120px; border-radius: 4px 4px 0 0; margin: 0 10px; position: relative;">
                <span style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 12px;">Jan</span>
              </div>
              <div style="background: var(--primary-color); width: 40px; height: 190px; border-radius: 4px 4px 0 0; margin: 0 10px; position: relative;">
                <span style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 12px;">Feb</span>
              </div>
              <div style="background: var(--primary-color); width: 40px; height: 30px; border-radius: 4px 4px 0 0; margin: 0 10px; position: relative;">
                <span style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 12px;">Mar</span>
              </div>
              <div style="background: var(--primary-color); width: 40px; height: 50px; border-radius: 4px 4px 0 0; margin: 0 10px; position: relative;">
                <span style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 12px;">Apr</span>
              </div>
              <div style="background: var(--primary-color); width: 40px; height: 20px; border-radius: 4px 4px 0 0; margin: 0 10px; position: relative;">
                <span style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 12px;">May</span>
              </div>
              <div style="background: var(--primary-color); width: 40px; height: 70px; border-radius: 4px 4px 0 0; margin: 0 10px; position: relative;">
                <span style="position: absolute; bottom: -25px; left: 50%; transform: translateX(-50%); font-size: 12px;">Jun</span>
              </div>
            </div>
            <p style="text-align: center; margin-top: 10px; color: var(--text-secondary);">Books Borrowed per Month</p>
          `
        }
      }, 100)
    }
  }

  renderSearchBooks(container) {
    const template = document.getElementById("search-books-template")
    container.appendChild(template.content.cloneNode(true))

    // Populate books
    this.populateBooks()

    // Add event listener for search
    const searchInput = container.querySelector("#search-input")
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const searchType = container.querySelector(".search-dropdown select").value
        this.handleSearchWithFilter(e.target.value, searchType)
      })
    }

    // Add event listener for search dropdown
    const searchDropdown = container.querySelector(".search-dropdown select")
    if (searchDropdown) {
      searchDropdown.addEventListener("change", (e) => {
        const searchInput = container.querySelector("#search-input")
        this.handleSearchWithFilter(searchInput.value, e.target.value)
      })
    }
  }

  populateBooks() {
    const categories = ["trending", "kids", "textbook", "fiction", "programming", "database"]

    categories.forEach((category) => {
      const gridId = category === "textbook" ? "text-books" : `${category}-books`
      const grid = document.getElementById(gridId)

      if (grid) {
        grid.innerHTML = ""
        const categoryBooks = this.books.filter((book) => book.category === category)

        categoryBooks.forEach((book) => {
          const bookCard = this.createBookCard(book)
          grid.appendChild(bookCard)
        })
      }
    })
  }

  createBookCard(book) {
    const bookCard = document.createElement("div")
    bookCard.className = "book-card"
    bookCard.dataset.bookId = book.id

    let coverHtml
    if (book.coverUrl) {
      coverHtml = `<div class="book-cover" style="background-image: url('${book.coverUrl}'); background-size: cover; background-position: center;"></div>`
    } else {
      coverHtml = `<div class="book-cover">📚</div>`
    }

    bookCard.innerHTML = `
            ${coverHtml}
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-rating">
                    <div class="stars">
                        ${this.generateStars(book.rating)}
                    </div>
                    <span class="rating-value">${book.rating}</span>
                </div>
            </div>
        `

    return bookCard
  }

  generateStars(rating) {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    let starsHtml = ""

    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<span class="star">★</span>'
    }

    if (halfStar) {
      starsHtml += '<span class="star">★</span>'
    }

    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<span class="star">☆</span>'
    }

    return starsHtml
  }

  showBookDetail(bookId) {
    const book = this.books.find((b) => b.id == bookId)
    if (!book) return

    const mainContent = document.getElementById("main-content")
    if (!mainContent) return

    mainContent.innerHTML = ""

    const template = document.getElementById("book-detail-template")
    mainContent.appendChild(template.content.cloneNode(true))

    // Update book details
    const titleElement = mainContent.querySelector(".book-detail-title")
    if (titleElement) {
      titleElement.textContent = book.title
    }

    const authorsElement = mainContent.querySelector(".book-detail-authors")
    if (authorsElement) {
      authorsElement.textContent = `By ${book.author}`
    }

    const yearElement = mainContent.querySelector(".book-detail-year")
    if (yearElement) {
      yearElement.textContent = `Published: ${book.year}`
    }

    const starsElement = mainContent.querySelector(".stars")
    if (starsElement) {
      starsElement.innerHTML = this.generateStars(book.rating)
    }

    const ratingsCountElement = mainContent.querySelector(".ratings-count")
    if (ratingsCountElement) {
      ratingsCountElement.textContent = `${book.rating} (${Math.floor(Math.random() * 200) + 50} ratings)`
    }

    const statusIndicator = mainContent.querySelector(".status-indicator")
    if (statusIndicator) {
      if (book.availability === "available") {
        statusIndicator.textContent = "In Shelf"
        statusIndicator.className = "status-indicator in-shelf"
      } else {
        statusIndicator.textContent = "Not Available"
        statusIndicator.className = "status-indicator not-available"
      }
    }

    const borrowButton = mainContent.querySelector(".btn-borrow")
    if (borrowButton) {
      borrowButton.dataset.bookId = book.id

      // Check if user has already borrowed this book
      const alreadyBorrowed = this.borrowedBooks.some((b) => b.bookId == book.id && b.userId == this.currentUser.id)

      // Check if user has already requested this book
      const alreadyRequested = this.borrowRequests.some(
        (r) => r.bookId == book.id && r.userId == this.currentUser.id && r.status === "pending",
      )

      if (alreadyBorrowed) {
        borrowButton.textContent = "ALREADY BORROWED"
        borrowButton.disabled = true
        borrowButton.classList.add("btn-secondary")
        borrowButton.classList.remove("btn-primary")
      } else if (alreadyRequested) {
        borrowButton.textContent = "REQUEST PENDING"
        borrowButton.disabled = true
        borrowButton.classList.add("btn-secondary")
        borrowButton.classList.remove("btn-primary")
      } else if (book.availability !== "available") {
        borrowButton.textContent = "NOT AVAILABLE"
        borrowButton.disabled = true
        borrowButton.classList.add("btn-secondary")
        borrowButton.classList.remove("btn-primary")
      }
    }

    const bookCover = mainContent.querySelector(".book-detail-cover")
    if (bookCover && book.coverUrl) {
      bookCover.style.backgroundImage = `url('${book.coverUrl}')`
      bookCover.style.backgroundSize = "cover"
      bookCover.style.backgroundPosition = "center"
      bookCover.innerHTML = ""
    }

    const bookDescription = mainContent.querySelector(".book-description")
    if (bookDescription) {
      bookDescription.textContent = book.description || "No description available."
    }

    // Set up tab switching
    const tabs = mainContent.querySelectorAll(".tab")
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        this.switchTab(tab)
      })
    })
  }

  borrowBook(bookId) {
    const book = this.books.find((b) => b.id == bookId)
    if (!book) return

    // Create a borrow request
    const request = {
      id: Date.now(),
      userId: this.currentUser.id,
      userName: this.currentUser.name,
      bookId: book.id,
      bookTitle: book.title,
      bookCover: book.coverUrl || "",
      requestDate: new Date().toLocaleDateString(),
      status: "pending",
    }

    this.borrowRequests.push(request)
    localStorage.setItem("borrowRequests", JSON.stringify(this.borrowRequests))

    alert("Your borrow request has been submitted and is pending approval.")

    // Update the borrow button
    const borrowButton = document.querySelector(".btn-borrow")
    if (borrowButton) {
      borrowButton.textContent = "REQUEST PENDING"
      borrowButton.disabled = true
      borrowButton.classList.add("btn-secondary")
      borrowButton.classList.remove("btn-primary")
    }
  }

  approveBorrowRequest(requestId) {
    const request = this.borrowRequests.find((r) => r.id == requestId)
    if (!request) return

    // Update request status
    request.status = "approved"

    // Add to borrowed books
    const borrowDate = new Date()
    const dueDate = new Date()
    dueDate.setDate(dueDate.getDate() + 14) // 2 weeks from now

    const borrowedBook = {
      id: Date.now(),
      userId: request.userId,
      bookId: request.bookId,
      borrowDate: borrowDate.toLocaleDateString(),
      dueDate: dueDate.toLocaleDateString(),
    }

    this.borrowedBooks.push(borrowedBook)

    // Update book availability
    const book = this.books.find((b) => b.id == request.bookId)
    if (book) {
      book.availability = "borrowed"
    }

    // Save to localStorage
    localStorage.setItem("borrowRequests", JSON.stringify(this.borrowRequests))
    localStorage.setItem("borrowedBooks", JSON.stringify(this.borrowedBooks))
    localStorage.setItem("books", JSON.stringify(this.books))

    alert("Borrow request approved.")

    // Refresh the current page
    const currentPage = document.querySelector(".nav-item.active")?.dataset.page
    if (currentPage) {
      this.showPage(currentPage)
    }
  }

  rejectBorrowRequest(requestId) {
    const request = this.borrowRequests.find((r) => r.id == requestId)
    if (!request) return

    // Update request status
    request.status = "rejected"

    // Save to localStorage
    localStorage.setItem("borrowRequests", JSON.stringify(this.borrowRequests))

    alert("Borrow request rejected.")

    // Refresh the current page
    const currentPage = document.querySelector(".nav-item.active")?.dataset.page
    if (currentPage) {
      this.showPage(currentPage)
    }
  }

  renderReturnBook(container) {
    const template = document.getElementById("return-book-template")
    container.appendChild(template.content.cloneNode(true))

    const bookCardsContainer = container.querySelector(".book-cards-container")
    if (!bookCardsContainer) return

    // Get user's borrowed books
    const userBorrowedBooks = this.borrowedBooks.filter((book) => book.userId === this.currentUser.id)

    if (userBorrowedBooks.length === 0) {
      bookCardsContainer.innerHTML = '<p class="no-books-message">You have no borrowed books to return.</p>'
      return
    }

    // Create a card for each borrowed book
    userBorrowedBooks.forEach((borrowedBook) => {
      const book = this.books.find((b) => b.id == borrowedBook.bookId)
      if (!book) return

      const borrowedTemplate = document.getElementById("borrowed-book-template")
      const borrowedBookItem = borrowedTemplate.content.cloneNode(true)

      // Update book details
      const titleElement = borrowedBookItem.querySelector(".book-title")
      if (titleElement) {
        titleElement.textContent = book.title
      }

      const authorElement = borrowedBookItem.querySelector(".book-author")
      if (authorElement) {
        authorElement.textContent = book.author
      }

      const borrowDateElement = borrowedBookItem.querySelector(".borrow-date .date")
      if (borrowDateElement) {
        borrowDateElement.textContent = borrowedBook.borrowDate
      }

      const dueDateElement = borrowedBookItem.querySelector(".due-date .date")
      if (dueDateElement) {
        dueDateElement.textContent = borrowedBook.dueDate

        // Check if overdue
        const dueDate = new Date(borrowedBook.dueDate)
        const today = new Date()
        if (dueDate < today) {
          dueDateElement.classList.add("overdue-indicator")
        }
      }

      const returnBtn = borrowedBookItem.querySelector(".return-btn")
      if (returnBtn) {
        returnBtn.dataset.bookId = borrowedBook.id
      }

      const renewBtn = borrowedBookItem.querySelector(".renew-btn")
      if (renewBtn) {
        renewBtn.dataset.bookId = borrowedBook.id
      }

      const bookCover = borrowedBookItem.querySelector(".book-cover")
      if (bookCover && book.coverUrl) {
        bookCover.style.backgroundImage = `url('${book.coverUrl}')`
        bookCover.style.backgroundSize = "cover"
        bookCover.style.backgroundPosition = "center"
        bookCover.innerHTML = ""
      }

      bookCardsContainer.appendChild(borrowedBookItem)
    })
  }

  returnBook(borrowedBookId) {
    const borrowedBook = this.borrowedBooks.find((b) => b.id == borrowedBookId)
    if (!borrowedBook) return

    // Remove from borrowed books
    this.borrowedBooks = this.borrowedBooks.filter((b) => b.id != borrowedBookId)

    // Update book availability
    const book = this.books.find((b) => b.id == borrowedBook.bookId)
    if (book) {
      book.availability = "available"
    }

    // Save to localStorage
    localStorage.setItem("borrowedBooks", JSON.stringify(this.borrowedBooks))
    localStorage.setItem("books", JSON.stringify(this.books))

    alert("Book returned successfully.")

    // Refresh the return book page
    this.showPage("return-book")
  }

  renewBook(borrowedBookId) {
    const borrowedBook = this.borrowedBooks.find((b) => b.id == borrowedBookId)
    if (!borrowedBook) return

    // Extend due date by 7 days
    const dueDate = new Date(borrowedBook.dueDate)
    dueDate.setDate(dueDate.getDate() + 7)
    borrowedBook.dueDate = dueDate.toLocaleDateString()

    // Save to localStorage
    localStorage.setItem("borrowedBooks", JSON.stringify(this.borrowedBooks))

    alert("Book renewed successfully. Due date extended by 7 days.")

    // Refresh the return book page
    this.showPage("return-book")
  }

  renderReservation(container) {
    const template = document.getElementById("reservation-template")
    container.appendChild(template.content.cloneNode(true))

    const roomsGrid = container.querySelector(".rooms-grid")
    if (!roomsGrid) return

    // Populate rooms
    this.rooms.forEach((room) => {
      const roomTemplate = document.getElementById("room-card-template")
      const roomCard = roomTemplate.content.cloneNode(true)

      const roomName = roomCard.querySelector(".room-name")
      if (roomName) {
        roomName.textContent = room.name
      }

      const roomCapacity = roomCard.querySelector(".room-capacity")
      if (roomCapacity) {
        roomCapacity.textContent = `Capacity: ${room.capacity}`
      }

      const roomFeatures = roomCard.querySelector(".room-features")
      if (roomFeatures) {
        roomFeatures.textContent = `Features: ${room.features}`
      }

      const reserveBtn = roomCard.querySelector(".reserve-btn")
      if (reserveBtn) {
        reserveBtn.dataset.roomId = room.id
      }

      const roomImage = roomCard.querySelector(".room-image")
      if (roomImage && room.image) {
        roomImage.style.backgroundImage = `url('${room.image}')`
      }

      roomsGrid.appendChild(roomCard)
    })
  }

  showReservationForm(roomId) {
    const room = this.rooms.find((r) => r.id == roomId)
    if (!room) return

    const formContainer = document.getElementById("reservation-form-container")
    if (!formContainer) return

    formContainer.classList.remove("hidden")

    const roomNameElement = document.getElementById("selected-room-name")
    if (roomNameElement) {
      roomNameElement.textContent = room.name
    }

    const roomIdInput = document.getElementById("room-id")
    if (roomIdInput) {
      roomIdInput.value = room.id
    }

    // Set min date to today
    const dateInput = document.getElementById("reservation-date")
    if (dateInput) {
      const today = new Date()
      const yyyy = today.getFullYear()
      const mm = String(today.getMonth() + 1).padStart(2, "0")
      const dd = String(today.getDate()).padStart(2, "0")
      dateInput.min = `${yyyy}-${mm}-${dd}`
    }

    // Add event listener for form submission
    const form = document.getElementById("reservation-form")
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        this.handleReservation()
      })
    }
  }

  handleReservation() {
    const roomId = document.getElementById("room-id").value
    const date = document.getElementById("reservation-date").value
    const time = document.getElementById("reservation-time").value
    const duration = document.getElementById("duration").value
    const purpose = document.getElementById("purpose").value

    if (!roomId || !date || !time || !duration || !purpose) {
      alert("Please fill all fields")
      return
    }

    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString()

    // Format time for display
    const formattedTime = new Date(`2000-01-01T${time}`).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    // Create reservation
    const reservation = {
      id: Date.now(),
      userId: this.currentUser.id,
      roomId,
      date: formattedDate,
      time: formattedTime,
      duration,
      purpose,
    }

    this.roomReservations.push(reservation)
    localStorage.setItem("roomReservations", JSON.stringify(this.roomReservations))

    // Show confirmation
    const mainContent = document.getElementById("main-content")
    if (!mainContent) return

    mainContent.innerHTML = ""

    const template = document.getElementById("confirmation-template")
    mainContent.appendChild(template.content.cloneNode(true))

    const room = this.rooms.find((r) => r.id == roomId)

    const confirmedRoom = document.getElementById("confirmed-room")
    if (confirmedRoom && room) {
      confirmedRoom.textContent = room.name
    }

    const confirmedDate = document.getElementById("confirmed-date")
    if (confirmedDate) {
      confirmedDate.textContent = formattedDate
    }

    const confirmedTime = document.getElementById("confirmed-time")
    if (confirmedTime) {
      confirmedTime.textContent = formattedTime
    }
  }

  renderUpdateProfile(container) {
    const template = document.getElementById("update-profile-template")
    container.appendChild(template.content.cloneNode(true))

    // Fill form with user data
    const emailInput = document.getElementById("profile-email")
    if (emailInput) {
      emailInput.value = this.currentUser.email || ""
    }

    const nameInput = document.getElementById("profile-name")
    if (nameInput) {
      nameInput.value = this.currentUser.name || ""
    }

    const contactInput = document.getElementById("profile-contact")
    if (contactInput) {
      contactInput.value = this.currentUser.contact || ""
    }
  }

  handleProfileUpdate() {
    const email = document.getElementById("profile-email").value
    const name = document.getElementById("profile-name").value
    const password = document.getElementById("profile-password").value
    const contact = document.getElementById("profile-contact").value

    if (!email || !name || !password) {
      alert("Please fill all required fields")
      return
    }

    // Update user data
    this.currentUser.email = email
    this.currentUser.name = name
    this.currentUser.password = password
    this.currentUser.contact = contact

    // Update in users array
    const userIndex = this.users.findIndex((u) => u.id === this.currentUser.id)
    if (userIndex !== -1) {
      this.users[userIndex] = this.currentUser
    }

    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(this.users))

    // Show confirmation
    const mainContent = document.getElementById("main-content")
    if (!mainContent) return

    mainContent.innerHTML = ""

    const template = document.getElementById("profile-updated-template")
    mainContent.appendChild(template.content.cloneNode(true))
  }

  renderBorrowRequests(container) {
    container.innerHTML = `
            <div class="borrow-requests-container">
                <h1>Borrow Requests</h1>
                
                <div class="tabs">
                    <button class="tab active" data-tab="pending">Pending</button>
                    <button class="tab" data-tab="approved">Approved</button>
                    <button class="tab" data-tab="rejected">Rejected</button>
                </div>
                
                <div class="tab-content" id="pending-content">
                    <h2>Pending Requests</h2>
                    <div class="pending-requests"></div>
                </div>
                
                <div class="tab-content hidden" id="approved-content">
                    <h2>Approved Requests</h2>
                    <div class="approved-requests"></div>
                </div>
                
                <div class="tab-content hidden" id="rejected-content">
                    <h2>Rejected Requests</h2>
                    <div class="rejected-requests"></div>
                </div>
            </div>
        `

    // Populate pending requests
    const pendingList = container.querySelector(".pending-requests")
    const pendingRequests = this.borrowRequests.filter((req) => req.status === "pending")

    if (pendingRequests.length === 0) {
      pendingList.innerHTML = '<p class="no-requests-message">No pending borrow requests.</p>'
    } else {
      pendingRequests.forEach((request) => {
        const requestItem = document.createElement("div")
        requestItem.className = "request-item"

        const book = this.books.find((b) => b.id == request.bookId)
        const user = this.users.find((u) => u.id == request.userId)

        requestItem.innerHTML = `
                    <div class="request-book-cover" style="background-image: url('${request.bookCover}'); background-size: cover; background-position: center;"></div>
                    <div class="request-info">
                        <h3>${request.bookTitle}</h3>
                        <p>Requested by: ${request.userName}</p>
                        <p>Date: ${request.requestDate}</p>
                    </div>
                    <div class="request-actions">
                        <button class="btn btn-success approve-btn" data-request-id="${request.id}">Approve</button>
                        <button class="btn btn-danger reject-btn" data-request-id="${request.id}">Reject</button>
                    </div>
                `

        pendingList.appendChild(requestItem)
      })
    }

    // Populate approved requests
    const approvedList = container.querySelector(".approved-requests")
    const approvedRequests = this.borrowRequests.filter((req) => req.status === "approved")

    if (approvedRequests.length === 0) {
      approvedList.innerHTML = '<p class="no-requests-message">No approved borrow requests.</p>'
    } else {
      approvedRequests.forEach((request) => {
        const requestItem = document.createElement("div")
        requestItem.className = "request-item"

        requestItem.innerHTML = `
                    <div class="request-book-cover" style="background-image: url('${request.bookCover}'); background-size: cover; background-position: center;"></div>
                    <div class="request-info">
                        <h3>${request.bookTitle}</h3>
                        <p>Requested by: ${request.userName}</p>
                        <p>Date: ${request.requestDate}</p>
                        <p class="request-status approved">Approved</p>
                    </div>
                `

        approvedList.appendChild(requestItem)
      })
    }

    // Populate rejected requests
    const rejectedList = container.querySelector(".rejected-requests")
    const rejectedRequests = this.borrowRequests.filter((req) => req.status === "rejected")

    if (rejectedRequests.length === 0) {
      rejectedList.innerHTML = '<p class="no-requests-message">No rejected borrow requests.</p>'
    } else {
      rejectedRequests.forEach((request) => {
        const requestItem = document.createElement("div")
        requestItem.className = "request-item"

        requestItem.innerHTML = `
                    <div class="request-book-cover" style="background-image: url('${request.bookCover}'); background-size: cover; background-position: center;"></div>
                    <div class="request-info">
                        <h3>${request.bookTitle}</h3>
                        <p>Requested by: ${request.userName}</p>
                        <p>Date: ${request.requestDate}</p>
                        <p class="request-status rejected">Rejected</p>
                    </div>
                `

        rejectedList.appendChild(requestItem)
      })
    }
  }

  renderTotalBooks(container) {
    const template = document.getElementById("total-books-template")
    container.appendChild(template.content.cloneNode(true))

    const booksGrid = container.querySelector("#all-books-grid")
    if (booksGrid) {
      this.books.forEach((book) => {
        const bookCard = this.createBookCard(book)
        booksGrid.appendChild(bookCard)
      })
    }

    // Add event listener for add book button
    const addBookBtn = container.querySelector("#add-book-btn")
    if (addBookBtn) {
      addBookBtn.addEventListener("click", () => {
        this.showPage("add-book")
      })
    }
  }

  renderAddBook(container) {
    const template = document.getElementById("add-book-template")
    container.appendChild(template.content.cloneNode(true))

    // Add event listener for form submission
    const form = container.querySelector("#add-book-form")
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        this.handleAddBook()
      })
    }
  }

  handleAddBook() {
    const title = document.getElementById("book-title").value
    const author = document.getElementById("book-author").value
    const isbn = document.getElementById("book-isbn").value
    const format = document.getElementById("book-format").value
    const category = document.getElementById("book-category").value
    const coverUrl =
      document.getElementById("book-cover-url").value || "https://via.placeholder.com/150x200?text=No+Cover"
    const description = document.getElementById("book-description").value || ""

    if (!title || !author || !isbn || !format || !category) {
      alert("Please fill all required fields")
      return
    }

    const newBook = {
      id: this.books.length + 1,
      title,
      author,
      year: new Date().getFullYear().toString(),
      rating: 0,
      category,
      availability: "available",
      description,
      isbn,
      format,
      coverUrl,
    }

    this.books.push(newBook)
    localStorage.setItem("books", JSON.stringify(this.books))

    // Add notification
    this.notifications.push({
      id: Date.now(),
      type: "new-book",
      message: `New book added: "${title}"`,
      date: new Date().toLocaleDateString(),
      read: false,
    })
    localStorage.setItem("notifications", JSON.stringify(this.notifications))

    alert("Book added successfully!")
    this.showPage("total-books")
  }

  renderMembers(container) {
    container.innerHTML = `
            <div class="members-container">
                <div class="page-header">
                    <h1>Members</h1>
                    ${this.currentUser.role === "admin" ? '<button class="btn btn-primary" id="add-user-btn">+ Add User</button>' : ""}
                </div>
                <div class="members-grid"></div>
            </div>
        `

    const membersGrid = container.querySelector(".members-grid")
    const students = this.users.filter((user) => user.role === "student")

    if (students.length === 0) {
      membersGrid.innerHTML = '<p class="no-members-message">No members found.</p>'
    } else {
      students.forEach((user) => {
        const memberCard = document.createElement("div")
        memberCard.className = "member-card"

        const borrowedCount = this.borrowedBooks.filter((book) => book.userId === user.id).length

        memberCard.innerHTML = `
                    <div class="member-avatar">👤</div>
                    <div class="member-info">
                        <h3>${user.name}</h3>
                        <p>${user.email}</p>
                        <p>${user.contact}</p>
                        <p>Joined: ${user.joinDate}</p>
                        <p>Books borrowed: ${borrowedCount}</p>
                    </div>
                `

        membersGrid.appendChild(memberCard)
      })
    }

    // Add event listener for add user button
    const addUserBtn = container.querySelector("#add-user-btn")
    if (addUserBtn) {
      addUserBtn.addEventListener("click", () => {
        this.showPage("add-user")
      })
    }
  }

  renderAddUser(container) {
    container.innerHTML = `
            <div class="add-user-container">
                <h1>Add User</h1>
                
                <form id="add-user-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="user-name">Name</label>
                            <input type="text" id="user-name" placeholder="Enter full name" required>
                        </div>
                        <div class="form-group">
                            <label for="user-username">Username</label>
                            <input type="text" id="user-username" placeholder="Enter username" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="user-email">Email</label>
                            <input type="email" id="user-email" placeholder="Enter email" required>
                        </div>
                        <div class="form-group">
                            <label for="user-contact">Contact</label>
                            <input type="tel" id="user-contact" placeholder="Enter contact number" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="user-password">Password</label>
                            <input type="password" id="user-password" placeholder="Enter password" required>
                        </div>
                        <div class="form-group">
                            <label for="user-role">Role</label>
                            <select id="user-role" required>
                                <option value="student">Student</option>
                                <option value="librarian">Librarian</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Add User</button>
                </form>
            </div>
        `

    // Add event listener for form submission
    const form = container.querySelector("#add-user-form")
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        this.handleAddUser()
      })
    }
  }

  handleAddUser() {
    const name = document.getElementById("user-name").value
    const username = document.getElementById("user-username").value
    const email = document.getElementById("user-email").value
    const contact = document.getElementById("user-contact").value
    const password = document.getElementById("user-password").value
    const role = document.getElementById("user-role").value

    if (!name || !username || !email || !contact || !password || !role) {
      alert("Please fill all required fields")
      return
    }

    // Check if username already exists
    if (this.users.some((user) => user.username === username)) {
      alert("Username already exists. Please choose a different username.")
      return
    }

    const newUser = {
      id: this.users.length + 1,
      username,
      password,
      name,
      email,
      role,
      contact,
      joinDate: new Date().toLocaleDateString(),
    }

    this.users.push(newUser)
    localStorage.setItem("users", JSON.stringify(this.users))

    alert("User added successfully!")
    this.showPage("members")
  }

  updateActiveNavItem(pageName) {
    document.querySelectorAll(".nav-item").forEach((item) => {
      item.classList.remove("active")
    })

    const activeItem = document.querySelector(`[data-page="${pageName}"]`)
    if (activeItem) {
      activeItem.classList.add("active")
    }
  }

  togglePassword(button) {
    const input = button.parentElement.querySelector("input")
    if (input.type === "password") {
      input.type = "text"
      button.innerHTML = '<i class="fas fa-eye-slash"></i>'
    } else {
      input.type = "password"
      button.innerHTML = '<i class="fas fa-eye"></i>'
    }
  }

  switchTab(tabButton) {
    const tabsContainer = tabButton.parentElement
    const tabContentsContainer = tabButton.closest(".borrow-requests-container") || tabButton.closest(".book-tabs")

    // Remove active class from all tabs
    tabsContainer.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("active")
    })

    // Add active class to clicked tab
    tabButton.classList.add("active")

    // Hide all tab contents
    if (tabContentsContainer) {
      tabContentsContainer.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden")
      })

      // Show selected tab content
      const targetTab = tabButton.dataset.tab
      const targetContent = tabContentsContainer.querySelector(`#${targetTab}-content`)
      if (targetContent) {
        targetContent.classList.remove("hidden")
      }
    }
  }

  handleSearch(query) {
    this.handleSearchWithFilter(query, "all")
  }

  handleSearchWithFilter(query, searchType) {
    if (!query.trim()) {
      this.populateBooks()
      return
    }

    let filteredBooks = []

    if (searchType === "all") {
      filteredBooks = this.books.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()) ||
          book.category.toLowerCase().includes(query.toLowerCase()),
      )
    } else if (searchType === "title") {
      filteredBooks = this.books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
    } else if (searchType === "author") {
      filteredBooks = this.books.filter((book) => book.author.toLowerCase().includes(query.toLowerCase()))
    } else if (searchType === "subject") {
      filteredBooks = this.books.filter((book) => book.category.toLowerCase().includes(query.toLowerCase()))
    }

    const categories = ["trending", "kids", "textbook", "fiction", "programming", "database"]

    categories.forEach((category) => {
      const gridId = category === "textbook" ? "text-books" : `${category}-books`
      const grid = document.getElementById(gridId)

      if (grid) {
        grid.innerHTML = ""
        const categoryBooks = filteredBooks.filter((book) => book.category === category)

        categoryBooks.forEach((book) => {
          const bookCard = this.createBookCard(book)
          grid.appendChild(bookCard)
        })
      }
    })
  }

  generateCalendar() {
    // This will be called after the dashboard is rendered
    setTimeout(() => {
      const calendarGrid = document.getElementById("calendar-grid")
      if (!calendarGrid) return

      const today = new Date()
      const currentMonth = today.getMonth()
      const currentYear = today.getFullYear()
      const firstDay = new Date(currentYear, currentMonth, 1).getDay()
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

      calendarGrid.innerHTML = ""

      // Add month and year header
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]
      const monthYearHeader = document.getElementById("calendar-month-year")
      if (monthYearHeader) {
        monthYearHeader.textContent = `${monthNames[currentMonth]} ${currentYear}`
      }

      // Add day headers
      const dayHeaders = ["S", "M", "T", "W", "T", "F", "S"]
      dayHeaders.forEach((day) => {
        const dayHeader = document.createElement("div")
        dayHeader.textContent = day
        dayHeader.style.fontWeight = "bold"
        dayHeader.style.textAlign = "center"
        calendarGrid.appendChild(dayHeader)
      })

      // Add empty cells for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div")
        calendarGrid.appendChild(emptyDay)
      }

      // Add days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div")
        dayElement.textContent = day
        dayElement.className = "calendar-day"

        // Check if this day has any events (room reservations or book due dates)
        const currentDate = new Date(currentYear, currentMonth, day)
        const dateString = currentDate.toLocaleDateString()

        // Check room reservations
        const hasReservation = this.roomReservations.some(
          (res) => res.userId === this.currentUser.id && new Date(res.date).toLocaleDateString() === dateString,
        )

        // Check book due dates
        const hasDueBook = this.borrowedBooks.some(
          (book) => book.userId === this.currentUser.id && new Date(book.dueDate).toLocaleDateString() === dateString,
        )

        if (hasReservation || hasDueBook) {
          dayElement.classList.add("has-event")
        }

        if (day === today.getDate()) {
          dayElement.classList.add("today")
        }

        calendarGrid.appendChild(dayElement)
      }
    }, 100)
  }
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.libraryApp = new LibraryApp()
})

// Global functions for template onclick handlers
function showPage(pageName) {
  if (window.libraryApp) {
    window.libraryApp.showPage(pageName)
  }
}
