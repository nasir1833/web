import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { generalKnowledge } from '../categorySelect/GeneralKnowledgeSelect';
import { computerCategory } from '../categorySelect/ComputerSelect';
import { nineth } from '../categorySelect/NinethSelect';
import { tenthSelect } from '../categorySelect/tenthSelect';
import { eleventhSelect } from '../categorySelect/eleventhSelect';
import { twelvethSelect } from '../categorySelect/twelveSelect';
export default function Post() {
    const [categorySelection, setCategorySelection] = useState("");
    // const [data, setData] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!categorySelection) {
            return
        }
        axios.post('http://localhost:4000/selectCategory', { categorySelection })
            .then((response) => {
                console.log('Selection success posted');
            }).then(()=>{
                navigate("/upload");
            })
            .catch((error) => {
                if (error.response) {
                    console.error(error.response.status);
                }
            });
    }
     
    return (
        <>
            <div className='container'>
                {/* {data ? data : ""}, */}
                <form onSubmit={handleSubmit} className="m-lg-4 m-md-3 m-sm-1">
                    <div className='submit__mcq'>
                        {categorySelection}


                        <select className="form-select" onChange={(e) => setCategorySelection(e.target.value)}>
                                <option selected value="">Select Category</option>
                            <optgroup label='General Knowledge'>
                                {generalKnowledge.map((item, i) =>
                                <>
                                        <option key={i} value={item.value}>
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </option>
                                    </>
                                )}
                            </optgroup>
                            <optgroup label='Computer'>

                                {computerCategory.map((item, i) =>
                                    <>
                                        <option key={i} value={item.value}>
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </option>
                                    </>
                                )}
                            </optgroup>
                            <optgroup label='Everyday Science'>
<option value="everydayScience">Everyday Science</option>
                            </optgroup>
                            <optgroup label='9th'>
                            {nineth.map((item, i) =>
                                    <>
                                        <option key={i} value={item.value}>
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </option>
                                    </>
                                )}
                            </optgroup>
                            <optgroup label='10th'>
                            {tenthSelect.map((item, i) =>
                                    <>
                                        <option key={i} value={item.value}>
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </option>
                                    </>
                                )}
                            </optgroup>
                            <optgroup label='11th'>
                            {eleventhSelect.map((item, i) =>
                                    <>
                                        <option key={i} value={item.value}>
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </option>
                                    </>
                                )}
                            </optgroup>
                            <optgroup label='12th'>
                            {twelvethSelect.map((item, i) =>
                                    <>
                                        <option key={i} value={item.value}>
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </option>
                                    </>
                                )}
                            </optgroup>
                        </select>
                        {/* </select> */}
                        <button type="submit" className='btn btn-info my-3'>Next</button>
                    </div>
                </form>
            </div>
        </>)
}
