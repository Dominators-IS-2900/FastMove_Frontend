import React from 'react'
import RouteBusTable from '../../components/routeBusTable/RouteBusTable'
import TopBar from '../../components/topBar/TopBar'
import Footer from '../../components/footer/Footer'


export default function BusRoute(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>
    <TopBar/>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">{props.name}</h1>
        <button type="button" class="btn btn-primary ml-1 mb-3">ADD RECORD</button>
        {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p> */}
        <RouteBusTable/>
    </div>
    <Footer/>

</div>
    
  )
}
