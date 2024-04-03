import React from 'react'
import DashboardMenu from '../DashboardMenu'
import Staff from '../Staff'
import TopMenu from '../TopMenu'

function StaffPage() {
    return (
        <div className="dashboard-container">
            <TopMenu/>
            <div className="dashboard-row">
                <DashboardMenu/>
                <Staff/>
            </div>
        </div>
    )
}

export default StaffPage
