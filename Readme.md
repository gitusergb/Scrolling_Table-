# Virtual Scrolling Orders Table

A web application implementing a virtual scrolling table with infinite scrolling, column sorting, and efficient data management for a large dataset of orders. The project showcases a smooth and responsive user interface with optimized performance for handling large-scale data.

---

## 🌟 Features
- **Virtual Scrolling**: Displays only visible rows for smooth scrolling and performance.
- **Infinite Scrolling**: Dynamically loads more data as you scroll using React Query.
- **Column Sorting**: Allows sorting by column for already loaded data.
- **Loading and Error States**: User-friendly indicators for data fetching and error handling.
- **Responsive Design**: Ensures usability across different devices.
- **Backend Efficiency**: Cursor-based pagination with fast response times.

---

## 🛠️ Tech Stack
- **Frontend**: React.js, React Query, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Deployment**: Netlify (Frontend), MongoDB Atlas (Database)

---

## 🚀 Live Demo
Check out the live project: [Virtual Scrolling Orders Table on Netlify](https://cool-basbousa-8e3566.netlify.app/)

---

## 📂 Repository
Explore the source code: [GitHub Repository](https://github.com/gitusergb/Scrolling_Table-)

---

## 📸 Preview
![Project Screenshot](https://i.ibb.co/CQGxKPd/scrolling-table.png)

---

## 🧑‍💻 Contributor
- **Gauri Bidwai** - MERN Stack Developer  
  GitHub: [Gauri Bidwai](https://github.com/gitusergb)

---

## 📝 Getting Started
### Prerequisites
- Node.js installed on your system
- MongoDB connection URL (for backend)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gitusergb/Scrolling_Table-
   cd orders-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
Refer to the backend repository to seed the database and run the server.

---

## 🛠 Environment Variables
Create a `.env` file in the root directory with the following:
```env
REACT_APP_BACKEND_URL=<your-backend-api-url>
```

---

## 🖥️ Local Development
1. Ensure your backend is running.
2. Start the frontend with:
   ```bash
   npm start
   ```

---




<!-- Full Stack Developer Take-Home Assignment
Time Frame: 48 hours 
https://i.ibb.co/CQGxKPd/scrolling-table.png
Overview
Create a high-performance full-stack application that implements a virtual scrolling table with cursor-based pagination, handling a large dataset of 10,000 records. Demonstrate your understanding of performance optimization, efficient data fetching, and state management.
Technical Stack

Backend Requirements
1. Data Generation
// sample only, feel free to modify as you see fit 

interface Order {
  id: string;
  customerName: string;
  orderAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  createdAt: string;
}


Create a seeding script that generates 10,000 order records
Ensure realistic data distribution across timestamps and values
Implement proper database indexing for efficient querying
2. API Implementation
// sample only, feel free to modify as you see fit 

// API Response Interface
interface OrdersResponse {
  data: Order[];
  nextCursor: string | null;
  totalCount: number;
}

// Required Endpoint
GET /api/orders
Query Parameters:
  - cursor: string    // Pagination cursor
  - limit: number     // Records per page (default: 50)
  - sort: string      // Field to sort by
  - sortDirection: 'asc' | 'desc'


Requirements:
Implement cursor-based pagination
Support sorting by any field
Include proper error handling
Add request logging
Implement appropriate data validation
Frontend Requirements
1. Virtual Table Implementation
Create a custom virtual scrolling implementation that:
Renders only visible rows
Maintains smooth scrolling performance
Handles dynamic content loading
Preserves scroll position during data updates
2. Data Fetching
Implement infinite scrolling using react-query:
// sample only, feel free to modify as you see fit 

interface UseOrdersQuery {
  data?: {
    pages: OrdersResponse[];
    pageParams: any[];
  };
  fetchNextPage: () => Promise<void>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  isError: boolean;
  error?: Error;
}


Requirements:
Use useInfiniteQuery for data fetching
Implement proper cache management
Handle loading, error, and empty states
Maintain responsive UI during data fetching
3. Table Features
Column sorting (client-side for loaded data)
Loading indicators
Error boundaries
Basic styling (any CSS solution)
Performance Requirements
Backend
Response time < 200ms for pagination queries
Efficient cursor implementation
Proper database indexing
Frontend
Smooth scrolling (60 FPS)
No visible lag when scrolling rapidly
Efficient memory usage
Minimal re-renders
Getting Started
# Backend, if node
npm run seed    # Seed 10,000 records
npm start       # Start API server

# Frontend
npm install
npm run dev


Evaluation Criteria
Technical Implementation (50%)
Virtualization efficiency
Data fetching strategy
API design
Performance optimization
Type safety
Code Quality (30%)
Code organization
Error handling
Performance considerations
TypeScript usage
Documentation (20%)
Setup instructions
Technical decisions explanation
Performance optimization notes
Known limitations
Submission Requirements
GitHub repository containing:
Source code
Seed script
Setup instructions
API documentation
Performance notes
List of potential improvements
Notes
Focus on performance and user experience
Document any technical decisions and tradeoffs
Testing is encouraged but not required
Basic styling is sufficient
The assignment is designed to be completable in 24-48 hours, leaving buffer for unexpected challenges.
 -->
