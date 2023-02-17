import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Landing,
  ListingDetail,
  Register,
  CreateListing,
  Login,
} from "../pages";
import { TopNav, Footer } from "../components";
import {
  StoreContext,
  useStateContext,
} from "../../src/contexts/ContextProvider";
// import { logOut } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";

function App() {
  const { setAuthorizationToken, isAuthenticated } = useStateContext();

  return (
    <>
      <TopNav />
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="listing-detail" element={<ListingDetail />} />
        <Route path="create-listing" element={<CreateListing />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      <Footer />
    </>
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
