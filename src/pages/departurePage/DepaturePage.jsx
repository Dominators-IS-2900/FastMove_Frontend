import React from 'react'
import TopBar from '../../components/topBar/TopBar'
import Footer from '../../components/footer/Footer'
import DepartureTable from '../../components/departureTable/DepartureTable'

export default function DepaturePage() {
  return (
    <div id="content" style={{width: '1150px'}}>
    <TopBar/>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Bus Depature Records</h1>
        <button type="button" class="btn btn-primary ml-1 mb-3">ADD RECORD</button>
        {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p> */}
        <DepartureTable/>
    </div>
    <Footer/>

</div>
  )
}
