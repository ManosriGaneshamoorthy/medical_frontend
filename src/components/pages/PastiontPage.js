import React from 'react'
import DashboardMenu from '../DashboardMenu'
import Patients from '../Patients'
import TopMenu from '../TopMenu'

function PastiontPage() {
    return (
        <div className="dashboard-container">
            <TopMenu/>
            <div className="dashboard-row">
                <DashboardMenu/>
                <Patients/>
            </div>
        </div>
    )
}

export default PastiontPage
