import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
    const { id } = useParams();
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(""); // Nuevo campo para el teléfono
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:9090/${id}`)
            .then((result) => {
                console.log(result);
                setName(result.data.username);
                setEmail(result.data.email);
                setPassword(result.data.password);
                setPhone(result.data.phone); // Asigna el valor del campo de teléfono
            })
            .catch((err) => console.log(err));
    }, [id]);

    const Update = (e: any) => {
        e.preventDefault();
        axios
            .put(`http://localhost:9090/${id}`, { username, email, password, phone }) // Asegúrate de enviar el campo 'phone' en la solicitud
            .then((result) => {
                console.log(result);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username"
                            className="form-control"
                            value={username}
                            onChange={(e: any) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Enter email"
                            className="form-control"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="form-control"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Enter phone"
                            className="form-control"
                            value={phone}
                            onChange={(e: any) => setPhone(e.target.value)}
                        /> {/* Nuevo campo de teléfono */}
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;