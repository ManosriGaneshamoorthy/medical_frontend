import React from 'react'
import Branches from '../Branches'
import DashboardMenu from '../DashboardMenu'
import TopMenu from '../TopMenu'

function BranchesPage() {
    return (
        <div className="dashboard-container">
            <TopMenu/>
            <div className="dashboard-row">
                <DashboardMenu/>
                <Branches/>
            </div>
        </div>
    )
}

export default BranchesPage
