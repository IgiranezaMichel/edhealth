import { useMutation } from '@apollo/client';
import { useState, ChangeEvent } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { SAVE_USER } from '../../GraphQl/Mutations';
import { useNavigate } from 'react-router-dom';
export const AddUser_modal = () => {
    const [addUser,SaveUserResult]=useMutation(SAVE_USER);
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [picture, setPicture] = useState('');
    const [dob, setDob] = useState('');
    const [role, setRole] = useState('');
    const navigation=useNavigate();
    const inputUser: inputUser = {
        name: name,
        email: email,
        phoneNumber: tel,
        dob: dob,
        gender: gender,
        role: role,
        profilePicture: picture
    }
    const submitFormHandler = () => {
        inputUser.name == '' ? toast.error('Name is required')
            : inputUser.gender == '' ? toast.error('Please select your Gender')
                : inputUser.email == '' ? toast.error('Email is required')
                    : inputUser.phoneNumber == '' ? toast.error('PhoneNumber is required')
                        : inputUser.profilePicture == '' ? toast.error('Profile picture is required')
                            : inputUser.dob == '' ? toast.error('Date of birth is required')
                                : inputUser.role == '' ? toast.error('User Role is required')
                                    : saveUser();
    }
    const saveUser=()=>{
        addUser({
            variables:{
                input:inputUser
            }
        }).then(
            data=>{toast.success(data.data.saveUser.name +' saved successfully');navigation("/admin/users")}
        ).catch(error=>console.log(error))
    }
    const uploadPicture = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result as string;
                console.log(base64String)
                setPicture(base64String);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="modal fade" id="add-user" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="add-userLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add-userLabel">Add User</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body row container g-1 bg-primary m-auto">
                        <div className="mb-3 col-sm-12">
                            <span className="text-white fw-bold">Name</span>
                            <div className="input-group">
                                <span className="input-group-text bi bi-person-fill"></span>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Enter name.." />
                            </div>
                        </div>
                        <div className="mb-3 col-sm-12">
                            <span className="text-white fw-bold">Gender</span>
                            <div>
                                <select className="form-select" onChange={e => setGender(e.target.value)} aria-label="Default select example">
                                    <option value=''>select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 col-sm-6">
                            <span className="text-white fw-bold">Email</span>
                            <div className="input-group">
                                <span className="input-group-text bi bi-envelope"></span>
                                <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control" placeholder="example@gmail.com" />
                            </div>
                        </div>
                        <div className="mb-3 col-sm-6">
                            <span className="text-white fw-bold">Tel</span>
                            <div className="input-group">
                                <span className="input-group-text bi bi-telephone-fill"></span>
                                <input value={tel} onChange={e => setTel(e.target.value)} type="text" className="form-control" placeholder="+250 788888888" />
                            </div>
                        </div>
                        <div className="mb-3 col-sm-6">
                            <span className="text-white fw-bold">Picture</span>
                            <div className="input-group">
                                <span className="input-group-text bi bi-image-fill"></span>
                                <input onChange={uploadPicture} type="file" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3 col-sm-6">
                            <span className="text-white fw-bold">Date of Birth</span>
                            <div className="input-group">
                                <span className="input-group-text bi bi-calendar-fill"></span>
                                <input type="date" onChange={e => setDob(e.target.value)} className="form-control" />
                            </div>
                        </div>
                        <div className="mb-3 col-sm-12">
                            <span className="text-white fw-bold">Role</span>
                            <div>
                                <select className="form-select" onChange={e => setRole(e.target.value)} aria-label="Default select example">
                                    <option value=''>select Role</option>
                                    <option value="ROLE_ADMIN">ADMIN</option>
                                    <option value="ROLE_NCNM">Ncnm Admin</option>
                                    <option value="ROLE_HOSPITAL">Hospital Admin</option>
                                    <option value="ROLE_SCHOOL">School Admin</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                    <div className="modal-footer bg-info">
                        <button type="button" data-dismiss="modal" className="btn btn-success fw-bold px-3" onClick={submitFormHandler}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}