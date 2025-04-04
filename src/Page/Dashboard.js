import React from 'react'
import Sidebar from '../components/Sidebar'
import TransactionDetails from '../components/TransactionDetails'
import '../styles/dashboard.css'
import Card from '../components/Card'
import PieChartComponent from '../components/PieChartComponent'
import Category from '../components/Category'
import LineChartComponent from '../components/LineChartComponent'

function Dashboard() {
  return (
    <>
    <div className='dashboard-container'>
        <Sidebar/>
        <div className='middle-div'>
            <div className='heading'>
                <h1>Overview</h1>
                
                <div className='search'>
                <input placeholder='Search "Waste-in"'/>
                <img src='https://cdn-icons-png.flaticon.com/128/7168/7168043.png' alt='search'/>

                </div>
            </div>
            <div className="cards-container">
                <div className="card-item">
                    <Card icon={<img src='https://cdn-icons-png.flaticon.com/128/15430/15430330.png' alt='icon'/>} label="Customers" value="1,300" />
                </div>
                <div className="card-item">
                    <Card icon={<img src='https://cdn-icons-png.flaticon.com/128/2805/2805649.png' alt='icon'/>} label="Employees" value="42" />
                </div>
                <div className="card-item">
                    <Card icon={<img src='https://cdn-icons-png.flaticon.com/128/10024/10024302.png' alt='icon'/>} label="Requests" value="128" />
                </div>
            </div>
            <div className="pie-chart">
                <div className="pie">
                    <PieChartComponent />
                </div>
                <div className="category">
                    <Category/>
                </div>
            </div>
            <div className='line-chart'>
                <LineChartComponent />
            </div>
        </div>
    <TransactionDetails />
    </div>
   
    </>
  )
}

export default Dashboard
