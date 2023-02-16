import { Route, Routes } from "react-router-dom";
import {
  Landing,
  ListingDetail,
  Register,
  CreateListing,
  Login,
} from "../pages";
import { TopNav, Footer } from "../components";

// import { TopNav } from "../components";

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="listing-detail" element={<ListingDetail />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="create-listing" element={<CreateListing />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// <Route path="create-listing" element={<CreateListing />} />

// <Route
//         path="view-listing-detail"
//         element={
//           <BaseRoute title="main-app" isAuthenticatedRoute={true}>
//             <AppRoutes />
//           </BaseRoute>
//         }
//       />
