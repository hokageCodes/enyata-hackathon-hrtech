import React from 'react'
import UserStats from './UserStats'
import Activities from './Activities'
import EmployeesTable from './EmployeesTable'

const HrDashboard = () => {
  return (
    <div>
      <div className='lg:flex lg:gap-4 py-3'>
        <div>
          <div>
            <UserStats />
          </div>
        </div>

        <div>
          <Activities />
        </div>
      </div>

      <div>
        <EmployeesTable />
      </div>
    </div>
  )
}

export default HrDashboard