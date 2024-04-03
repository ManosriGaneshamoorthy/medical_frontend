import React from 'react'
import DashboardBody from '../DashboardBody'
import DashboardMenu from '../DashboardMenu'
import TopMenu from '../TopMenu'

function Dashboard() {
    return (
        <div className="dashboard-container">
            <TopMenu/>
            <div className="dashboard-row">
                <DashboardMenu/>
                <DashboardBody/>
            </div>
        </div>
    )
}

export default Dashboard
