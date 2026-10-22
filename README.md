# Employee Dashboard - React Application 

A responsive, modern Employee Management Dashboard built using **React**, **React Router**, and **Bootstrap 5**, integrated with the **JSONPlaceholder REST API**.

---

## 📋 Assignment Requirements & Implementation

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **React Library** | Built with React 19 and Vite for fast performance and modern modular architecture. | ✅ Done |
| **Navbar with Links** | Fixed responsive Navbar with **Home** (`/`) and **Employee Form** (`/employee-form`) navigation links with active state indicator. | ✅ Done |
| **API Data Integration** | Data accessed directly from external API: `https://jsonplaceholder.typicode.com/users`. | ✅ Done |
| **Dashboard Display** | Shows **id**, **name**, and **email** prominently with both **Tabular View** and **Card View** toggle options. | ✅ Done |
| **Employee Form** | Form containing **Name**, **Designation**, **Location**, and **Salary** with validation and submission feedback. | ✅ Done |
| **Routing** | Client-side routing implemented using `react-router-dom` with fallback 404 handling. | ✅ Done |
| **CSS Library** | Styled with **Bootstrap 5**, **Bootstrap Icons**, and custom modern CSS accents. | ✅ Done |
| **No Frontend POST** | Frontend validation and state feedback displayed without unnecessary POST calls, conforming to the note. | ✅ Done |

---

## 🚀 Key Features

1. **Dashboard / Home (`/`)**:
   - Fetches and displays real-time employee directory from `https://jsonplaceholder.typicode.com/users`.
   - **Fields displayed**: `id`, `name`, and `email` (along with username and company details).
   - **View Toggle**: Switch seamlessly between **Tabular View** and **Card Grid View**.
   - **Search & Filter**: Real-time filtering by employee name, email, or ID.
   - **Loading & Error Handling**: Animated loading spinner and graceful error alert with retry functionality.

2. **Employee Form (`/employee-form`)**:
   - Input fields:
     - **Name**: Text input with minimum character validation.
     - **Designation**: Input with datalist recommendations for common tech & corporate titles.
     - **Location**: Text input for city/office location.
     - **Salary**: Numeric input with validation for positive values.
   - Form validation with inline feedback messages.
   - Interactive submission confirmation banner with option to reset or submit another employee.

3. **Navigation & Responsiveness**:
   - Fully responsive layout for desktop, tablet, and mobile screens.
   - Clean mobile hamburger drawer navigation.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Typography**: Plus Jakarta Sans via Google Fonts
- **External API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)

### Installation Steps

1. **Clone or extract the repository**:
   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd employee-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
employee-dashboard/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVG icons
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Navigation bar with Home and Employee Form links
│   │   ├── Footer.jsx      # Application footer
│   │   ├── LoadingSpinner.jsx # Loading indicator
│   │   └── ErrorMessage.jsx   # Error alert with retry button
│   ├── pages/              # Application views/routes
│   │   ├── Dashboard.jsx   # Home / Employee Dashboard (API data & table/card view)
│   │   ├── EmployeeForm.jsx# Employee Registration Form (Name, Designation, Location, Salary)
│   │   └── NotFound.jsx    # 404 fallback page
│   ├── App.jsx             # Route definitions and main layout
│   ├── index.css           # Global modern styling
│   └── main.jsx            # React root mount and Bootstrap imports
├── index.html              # HTML entry point
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## 📤 Submitting to GitHub

To submit your assignment GitHub repository link:

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `employee-dashboard`).
2. Run the following commands in the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete Assignment 2 Employee Dashboard"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   git push -u origin main
   ```
3. Copy your GitHub repository link (e.g. `https://github.com/your-username/employee-dashboard`) and submit it.
