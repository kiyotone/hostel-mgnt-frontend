import React from 'react'
import SideBar from './SideBar'
import { Route, Routes } from 'react-router-dom'
import Settings from './Settings'
import { useSelector } from 'react-redux'
import DashHome from './DashHome'
import Rules from './Rules'
import HostelImages from './HostelImages'
import HostelLocation from './HostelLocation'
import FoodRoutine from './FoodRoutine'

const AdminDashboard = () => {
  const usetId = useSelector((state)=>state.auth.userId);
  

  
  return (
    <div className='text-black'>
          <SideBar />
        
        <div className='ml-[20rem]'>

        <Routes>
        <Route path={`/${usetId}`} element={<DashHome />}  />
          <Route path={`/${usetId}/location`} element={<HostelLocation />}  />
          <Route path={`/${usetId}/food-routine`} element={<FoodRoutine />}  />
          <Route path={`/${usetId}/faq`} element={<Settings />}  />
          <Route path={`/${usetId}/rules`} element={<Rules />}  />
          <Route path={`/${usetId}/hostel-images`} element={<HostelImages />}  />
          <Route path={`/${usetId}/logout`} element={<Settings />}  />
        
        </Routes>
        </div>
    </div>
  );
};

export default AdminDashboard;
