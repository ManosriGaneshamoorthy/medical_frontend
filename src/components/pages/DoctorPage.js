import React from 'react'
import DashboardMenu from '../DashboardMenu'
import Doctors from '../Doctors'
import TopMenu from '../TopMenu'

function DoctorPage() {
    return (
        <div className="dashboard-container">
            <TopMenu/>
            <div className="dashboard-row">
                <DashboardMenu/>
                <Doctors/>
            </div>
        </div>
    )
}

export default DoctorPage
