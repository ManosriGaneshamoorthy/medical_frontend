import React from 'react'
import Apporitments from '../Apporitments'
import DashboardMenu from '../DashboardMenu'
import TopMenu from '../TopMenu'

function ApporitmentPage() {
    return (
        <div className="dashboard-container">
            <TopMenu/>
            <div className="dashboard-row">
                <DashboardMenu/>
                <Apporitments/>
            </div>
        </div>
    )
}

export default ApporitmentPage
