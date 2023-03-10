import React from 'react'

export default function DepartureTable() {
  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Bus Depature Details </h6>
            
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Deapture Time</th>
                            <th>Bus No</th>
                            <th>Route</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2023-01-10 15:23 PM</td>
                            <td>111A</td>
                            <td>Colombo-Kandy</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2023-01-12 15:30 PM</td>
                            <td>111B</td>
                            <td>Colombo-Kalutara</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2023-05-15 16:29 PM</td>
                            <td>113A</td>
                            <td>Colombo-Mathale</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2023-02-17 7:23 AM</td>
                            <td>118D</td>
                            <td>Colombo-Kandy</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>



                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
