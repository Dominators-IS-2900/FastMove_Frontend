import React from 'react'

export default function RouteBusTable() {
  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Bus Routes Details </h6>
            
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Start Time</th>
                            <th>Bus No</th>
                            <th>Conductor Name</th>
                            <th>End Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2023-01-10 15:23 PM</td>
                            <td>111A</td>
                            <td>Wimal</td>
                            <td>2023-01-10 19:23 PM</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2023-01-10 15:23 PM</td>
                            <td>111A</td>
                            <td>Jagath</td>
                            <td>2023-01-10 19:23 PM</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2023-01-10 15:23 PM</td>
                            <td>111A</td>
                            <td>Kamal</td>
                            <td>2023-01-10 19:23 PM</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2023-01-10 15:23 PM</td>
                            <td>111A</td>
                            <td>Ranil</td>
                            <td>2023-01-10 19:23 PM</td>
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
