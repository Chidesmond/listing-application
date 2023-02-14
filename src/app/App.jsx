import { Route, Routes } from "react-router-dom";
import { Landing, ListingDetail } from "../pages";
import { TopNav } from "../components/TopNav";

function App() {
  return (
    <div className="bg-[#FFF0F5]">
      <TopNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="listing-detail" element={<ListingDetail />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;

// <Route
//         path="view-listing-detail"
//         element={
//           <BaseRoute title="main-app" isAuthenticatedRoute={true}>
//             <AppRoutes />
//           </BaseRoute>
//         }
//       />
