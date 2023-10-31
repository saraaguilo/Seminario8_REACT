import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(""); // Nuevo campo para el teléfono
    const navigate = useNavigate();

    const Submit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:9090/", { username, email, password, phone }) // Asegúrate de enviar el campo 'phone' en la solicitud
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className='mb-2'>
                        <label htmlFor="username">Name</label>
                        <input type="text" id="username" placeholder="Enter username" className="form-control"
                        onChange={(e: any) => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter email" className="form-control"
                        onChange={(e: any) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" className="form-control"
                        onChange={(e: any) => setPassword(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" placeholder="Enter phone" className="form-control"
                        onChange={(e: any) => setPhone(e.target.value)} /> {/* Nuevo campo de teléfono */}
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
