import axios from 'axios';
import React, { useState } from 'react'
import "../css/Post.css"

export default function Post() {
  const [question, setQuestion] = useState("");
  const [optA, setOptA] = useState("");
  const [optB, setOptB] = useState("");
  const [optC, setOptC] = useState("");
  const [optD, setOptD] = useState("");
  const [checkA, setCheckA] = useState(false);
  const [checkB, setCheckB] = useState(false);
  const [checkC, setCheckC] = useState(false);
  const [checkD, setCheckD] = useState(false);
  const [data, setData] = useState("")
  window.title = "u"
  const handleSubmit = (e) => {
    setQuestion(""); setOptA(""); setOptB(""); setOptC(""); setOptD("");
    setCheckA(false); setCheckB(false); setCheckC(false); setCheckD(false);
    e.preventDefault();
    axios.post('http://localhost:4000/upload', { question, optA, optB, optC, optD, checkA, checkB, checkC, checkD })
      .then((response) => {
        console.log('Data successfully posted', response);
        setData(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
    // setState({name:""})
    // console.log(input)
  }
  const handleCheckBox = (index) => {
    switch (index) {
      case 1:
        if (!checkA) {
          setCheckA(true)
          setCheckB(false)
          setCheckC(false)
          setCheckD(false)

        } else if (checkA) {
          setCheckA(false)
          setCheckB(false)
          setCheckC(false)
          setCheckD(false)
        }
        break;
      case 2:
        if (!checkB) {
          setCheckA(false)
          setCheckB(true)
          setCheckC(false)
          setCheckD(false)
        } else if (checkB) {
          setCheckA(false)
          setCheckB(false)
          setCheckC(false)
          setCheckD(false)
        }
        break;
      case 3:
        if (!checkC) {
          setCheckA(false)
          setCheckB(false)
          setCheckC(true)
          setCheckD(false)
        } else if (checkC) {
          setCheckA(false)
          setCheckB(false)
          setCheckC(false)
          setCheckD(false)
        }
        break;
      case 4:
        if (!checkD) {
          setCheckA(false)
          setCheckB(false)
          setCheckC(false)
          setCheckD(true)
        } else if (checkD) {
          setCheckA(false)
          setCheckB(false)
          setCheckC(false)
          setCheckD(false)
        }
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div>
        {data ? data : ""}{" "}
        {checkA && " correct a"}
        {checkB && "correct b"}
        {checkC && "correct c"}
        {checkD && "correct d"}
        <form onSubmit={handleSubmit} className="m-lg-4 m-md-3 m-sm-1">
          <div className='submit__mcq'>

            <input type="text" name="question" className='form-control' value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" />
            <div>
              <input type="checkbox" checked={checkA} onChange={() => handleCheckBox(1)} />
              <input type="text" name="a" className='form-control' value={optA} onChange={(e) => setOptA(e.target.value)} placeholder="Option A" />
            </div>
            <div>
              <input type="checkbox" checked={checkB} onChange={() => handleCheckBox(2)} />
              <input type="text" name="b" className='form-control' value={optB} onChange={(e) => setOptB(e.target.value)} placeholder="Option B" />
            </div>
            <div>
              <input type="checkbox" checked={checkC} onChange={() => handleCheckBox(3)} />
              <input type="text" name="c" className='form-control' value={optC} onChange={(e) => setOptC(e.target.value)} placeholder="Option C" />
            </div>
            <div>
              <input type="checkbox" checked={checkD} onChange={() => handleCheckBox(4)} />
              <input type="text" name="d" className='form-control' value={optD} onChange={(e) => setOptD(e.target.value)} placeholder="Option D" />
            </div>
          </div>
          <div>
            <button type="submit" className='btn btn-info px-4'>send</button>
          </div>
        </form>
      </div>
    </>)
}
