import type React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"
import RoleBasedRoute from "./components/RoleBasedRoute"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import ParentDashboard from "./pages/ParentDashboard"
import HousemasterDashboard from "./pages/HousemasterDashboard"
import SeniorHousemasterDashboard from "./pages/SeniorHousemasterDashboard"
import ExeatRequestForm from "./pages/ExeatRequestForm"
import Notifications from "./pages/Notifications"
import StudentRegistration from "./pages/StudentRegistration"
import AnalyticsDashboard from "./pages/AnalyticsDashboard"
import Unauthorized from "./pages/Unauthorized"
import StudentProfile from "./pages/StudentProfile"
import StudentList from "./pages/StudentList"
import Home from "pages/Home"

// const App: React.FC = () => {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           {/* Home page with Layout */}
//           <Route
//             path="/"
//             element={
//               <Layout>
//                 <Home />
//               </Layout>
//             }
//           />

//           {/* Other routes without Layout */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/unauthorized" element={<Unauthorized />} />

//           {/* Protected routes for parent */}
//           <Route element={<RoleBasedRoute allowedRoles={["parent"]} />}>
//             <Route path="/parent" element={<ParentDashboard />} />
//             <Route path="/exeat/request" element={<ExeatRequestForm />} />
//           </Route>

//           {/* Protected routes for housemaster and senior housemaster */}
//           <Route element={<RoleBasedRoute allowedRoles={["housemaster", "seniorHousemaster"]} />}>
//             <Route path="/housemaster" element={<HousemasterDashboard />} />
//             <Route path="/students" element={<StudentList />} />
//             <Route path="/student/:id" element={<StudentProfile />} />
//             <Route path="/notifications" element={<Notifications />} />
//             <Route path="/analytics" element={<AnalyticsDashboard />} />
//             <Route path="/student-registration" element={<StudentRegistration />} />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

// export default App




const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/exeat/request" element={<ExeatRequestForm />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentProfile />} />
          <Route path="/housemaster" element={<HousemasterDashboard />} />
          <Route path="/senior-housemaster" element={<SeniorHousemasterDashboard />} />
    
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App