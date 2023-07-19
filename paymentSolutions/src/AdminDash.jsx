import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import loan from './assets/iconsSocial/icons8-loan-64.png'
import paidLoans from './assets/iconsSocial/icons8-pay-30.png'
import members from './assets/iconsSocial/icons8-people-96.png'
import wallet from './assets/iconsSocial/icons8-wallet-50.png'

export default function AdminDash(){
    return(
        <div>
            <Navbar />
            <div className="admin-dashboard">
            <div className="left-sidebar">
            <ul>
            <li>View Group Balance</li>
            <li>Loans Taken</li>
            <li>Group Loan</li>
            <li>View Members</li>
            </ul>
            </div>
            <div className="dashboard-content">
            <div className="dashboard-grid">
            {/* Row 1 */}
            <div className="grid-item">Wallet
            <img src={wallet}/>
            </div>
            <div className="grid-item">Paid Loans
            <img src={paidLoans}/>
            </div>

            {/* Row 2 */}
            <div className="grid-item">Loans Taken
            <img src={loan}/>
            </div>
            <div className="grid-item" id='members-icon'>Total Members
            <img src={members}/>
            </div>

            {/* Add more grid items for the remaining rows */}
            {/* Row 3 */}
            {/* ... */}
            {/* Row 4 */}
            {/* ... */}
            {/* Row 5 */}
            {/* ... */}
            {/* Row 6 */}
            {/* ... */}
        </div>
        </div>
        </div>
                <Footer />
        </div>
        )
}