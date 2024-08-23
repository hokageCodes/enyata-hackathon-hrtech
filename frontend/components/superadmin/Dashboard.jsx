import React from 'react'
import UserStats from './UserStats'
import Activities from './Activities'
import CompaniesTable from './CompaniesTable'

const SuperAdminDashboard = () => {
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
        <CompaniesTable />
      </div>
    </div>
  )
}

export default SuperAdminDashboard