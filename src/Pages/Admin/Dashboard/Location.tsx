import { useMutation, useQuery } from "@apollo/client"
import { SAVE_LOCATION } from "../../../GraphQl/Mutations";
import { useState, useEffect, ChangeEvent } from 'react'
import { GET_ALL_LOCATION } from "../../../GraphQl/Queries";
import {toast,ToastContainer} from 'react-toastify'
import { useSignal } from "@preact/signals-react";
export const Location = () => {
    const [addLocation] = useMutation(SAVE_LOCATION);
    const { data, loading} = useQuery(GET_ALL_LOCATION,{
        fetchPolicy:'no-cache'
    });
    const [name, setName] = useState('');
    const [type, setType] = useState('PROVINCE');
    const [id, setId] = useState(0);
    const provinceId= useSignal(0);
    const [province,setProvince]=useState([]);
    const [districtId, setDistrictId] = useState(0);
    const [locationId, setLocationId] = useState(0);
    const [location,setLocation]=useState([]);
    const locationIdentity=useSignal(0);
    const addedData=useSignal(0);
    const [selectedLocation,setSelectedLocation]=useState('index');
    const [selectedIndex,setSelectedIndex]=useState(-1);
    const prevPage = () => {
    }
    useEffect(
        () => {
            const fetch=async() => {
                setLocation(data.getAllLocations)
                console.log(location)
                setLocationId(0);
                console.log(location)
            }
            fetch();
        }, [data,loading,addedData,selectedLocation]
    )
    const nextPage = () => {

    }
    const saveLocation = async() => {
        const inputLocation = {id:id,name: name, type:type,locationId:locationIdentity}
      const result= await addLocation({ variables: { input: inputLocation } });
      if(result.data){
        addedData.value=result.data.saveLocation.id;
        setLocation([]);
        console.log(location)
        setSelectedLocation('index')
        toast.success(result.data.saveLocation.name+' Location saved successfully');
      }
    }
    const addLocationId=(e:any)=>{
        locationIdentity.value=Number(e.target.value)
        console.log(locationIdentity.value)
    }
    const selectedProvince=(id:number)=>{
        provinceId.value=id;
        location.map((data:any)=>{
            if(data.id==id)
            setProvince(data.locationList)
        })
    }
    return (
        <main>
            <div className="mt-3">
            <button className="fw-bold border border-primary bg-primary-subtle" onClick={()=>setSelectedLocation('index')}><i className="bi bi-house-fill"></i></button>
                <button className="fw-bold border border-primary bg-primary-subtle" onClick={()=>setSelectedLocation('province')}>Province <i className="bi bi-plus-circle-fill"></i></button>
                <button className="fw-bold border border-primary bg-primary-subtle mx-2" data-bs-toggle="modal" data-bs-target="#add_district" onClick={()=>setType('DISTRICT')}>District <i className="bi bi-plus-circle-fill"></i></button>
                <button className="fw-bold border border-primary bg-primary-subtle" onClick={()=>{setSelectedLocation('sector'),setType('SECTOR')}}>Sector <i className="bi bi-plus-circle-fill"></i></button>
            </div>
            {selectedLocation=='index'&&<div className="table-responsive rounded-3 p-2 mt-4 border border-dark">
                <table className="table table-white table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading?
                                <tr className="mt-5 text-center">
                                    <td colSpan={3} className="text-center">
                                    <div className="spinner-grow text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    </td>
                                    </tr> :
                                location.map((data:any,index)=>{
                                    return(
                                <tr className="table-borderless" key={index}>
                                    <td scope="row">
                                        <i className="bi bi-geo-fill"></i> {data.name}
                                    </td>
                                    <td>
                                        <i className="bi bi-geo-fill"></i> {data.type}
                                    </td>
                                    <td>
                                        <i className="bi bi-trash-fill"></i>
                                    </td>
                                </tr>
                                    )
                                })
                        }
                        <tr className="">
                            <td colSpan={3} scope="row">
                                <div className="float-end">
                                    <nav aria-label="Page navigation">
                                        <ul
                                            className="pagination">
                                            <li className="page-item border-0" aria-current="page">
                                                <a className="page-link">page out of </a>
                                            </li>
                                            <li className="page-item">
                                                <button onClick={prevPage} className="page-link" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </button>
                                            </li>

                                            <li className="page-item">
                                                <button className="page-link" aria-label="Next" onClick={nextPage}>
                                                    <span aria-hidden="true">&raquo;</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            }
            {
                selectedLocation=='province'&&<section>
                    <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Add Province</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <span>Name</span>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control border border-dark rounded-0" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={saveLocation} className="btn btn-success fw-bold">Submit</button>
                        </div>
                </section>
                
            }
                {
                    selectedLocation=='sector'&&<section>
                          <div className="modal-body">
                            <div className="mb-3">
                                <span>Name</span>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control border border-dark rounded-0" />
                            </div>
                        </div>
                        <div className="mb-3">
                          <select onChange={(e)=>selectedProvince(Number(e.target.value))} className="form-select" aria-label="Default select example">
                            <option >select province</option>
                            {location.map((data:any,index)=>{
                                return(
                                    <option  key={index} value={data.id}>{data.name}</option>
                                )
                            })}
                          </select>
                        </div>
                       {provinceId.value!=0&&<div className="mb-3">
                          <select onChange={(e)=>locationIdentity.value=Number(e.target.value)} className="form-select" aria-label="Default select example">
                            <option value={0}>select District</option>
                            {province.map((data:any,index)=>{
                                return(
                                    <option key={index} value={data.id}>{data.name}</option>
                                )
                            })}
                          </select>
                        </div>
                        }
                        <div className="modal-footer">
                            <button type="button" onClick={saveLocation} className="btn btn-success fw-bold">Submit</button>
                        </div>
                    </section>
                }        
               
            <div className="modal fade" id="add_district" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel" >Add District </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <span>Name</span>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control border border-dark rounded-0" />
                            </div>
                        </div>
                        <div className="mb-3">
                          <select onChange={addLocationId} className="form-select" aria-label="Default select example">
                            <option >select province</option>
                            {location.map((data:any,index)=>{
                                return(
                                    <option key={index} value={data.id}>{data.name}</option>
                                )
                            })}
                          </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={saveLocation} className="btn btn-success fw-bold">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </main>
    )
}