import React from 'react'
import {Doughnut,Line} from 'react-chartjs-2';

function DashboardBody() {
    const state = {
        labels: ['Doctores', 'Staff', 'Current Petionts'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000'
            ],
            data: [40,30,35]
          }
        ]
      }
    return (
        <div className="dashboard-body">
            <div className="dashboard-graph-row">
                <div className="graph">
                    <Doughnut
                        data={state}
                        options={{
                        title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                        }}
                    />
                </div>
                <div className="graph">
                    <Line
                        data={state}
                        options={{
                        title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                        }}
                />
                </div>
            </div>
        </div>
    )
}

export default DashboardBody
