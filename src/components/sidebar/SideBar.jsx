import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function SideBar() {

    const [route, setRoute] = useState("");
  return (

    <div>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <Link to='/' class="nav-link" style={{color: "white"}}>
                <div class="mx-3">OLINOQ</div>
            </Link>
            
        </a>

        
        <hr class="sidebar-divider my-0"/>

        
        <li class="nav-item active">
            
                <Link to='/' class="nav-link">
                    <span>Dashboard</span>
                </Link>
            
                
        </li>
        
        <hr class="sidebar-divider"/>
        <div class="sidebar-heading">
            Time Keeper
        </div>

        {/* Nav Item - Pages Collapse Menu  */}
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Time Tables</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">All Routes:</h6>
                    <a class="collapse-item" href="/route">Colombo-Kandy</a>
                    <a class="collapse-item" href="/route_1">Colombo-Kalutara</a>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-cog"></i>
                <span>Time Keeping</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Actions:</h6>
                    <a class="collapse-item" href="/arrival">Arrival</a>
                    <a class="collapse-item" href="/depature">Depature</a>
                </div>
            </div>
        </li>

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities1"
                aria-expanded="true" aria-controls="collapseUtilities1">
                <i class="fas fa-fw fa-cog"></i>
                <span>Emergencies</span>
            </a>
            <div id="collapseUtilities1" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Actions:</h6>
                    <a class="collapse-item" href="#">View Location</a>
                    <a class="collapse-item" href="#">Bus No</a>
                    <a class="collapse-item" href="/depo">Depos</a>
                </div>
            </div>
        </li>


        
  </ul>
        
      
    </div>
  )
}
