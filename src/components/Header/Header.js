import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../css/Header.css"

export default function Header() {
  const [offline, setOffline] = useState("")
  const [active, setActive] = useState("home")
  const [headerClass, setHeaderClass] = useState("")
  const [homeLink, setHomeLink] = useState(true)
  const [navigators, setNavigators] = useState(true)
  const [responsive, setResponsive] = useState(true)
  const headerRef=useRef(null)
  const handleActive = (i) => {
    switch (i) {
      case 1:
        setActive("home")
        handleIcon()
        break;
      case 2:
        setActive("general__knowledge")
        handleIcon()
        break;
      case 3:
        setActive("everyday__science")
        handleIcon()
        break;
      case 4:
        setActive("upload__mcq")
        handleIcon()
        break;

      default:
        break;
    }
  }
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      setHeaderClass("header__container")
    } else if (window.screenY === 0) {
      setHeaderClass("")
    }
  })
  window.addEventListener("offline", () => {
    setOffline("No internet connection")
  })
  window.addEventListener("online", () => {
    setOffline("")
  })
  const handleIcon = () => {
    if (window.innerWidth < 992) {
      if (!homeLink) {
        setHomeLink(true)
        setNavigators(true)
        setResponsive(true)
      } else if (homeLink) {
        setHomeLink(false)
        setNavigators(false)
        setResponsive(false)
      }
    }
  }
 
  
  window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
      setHomeLink(false)
      setNavigators(false)
      setResponsive(false)
    }
    if (window.innerWidth > 991) {
      setHomeLink(true)
      setNavigators(true)
      setResponsive(true)
    }
  });
  return (
    <>
      <div className={`navbar__brainteach ${headerClass === "header__container" && "header__container"}`}>
        <div className='responsive__icon' onClick={handleIcon}><i class="fa-solid fa-bars"></i></div>
        <div className={`home__link__container ${responsive ? "home__link__res__1" : "home__link__res__0"}`}><Link to="/" className='home__link' onClick={handleIcon}>Brain Teach</Link></div>
        {navigators && <ul className={`navigation ${responsive ? "home__navigators__res__1" : "home__navigators__res__0"}`}>
          <li className="navigator__item"><Link to="/" className={`navigator__link ${active === "home" && "home"}`} onClick={() => handleActive(1)}>Home</Link></li>
          <li className="navigator__item"><Link to="/generalKnowledge" className={`navigator__link ${active === "general__knowledge" && "general__knowledge"}`} onClick={() => handleActive(2)}>General Knowledge</Link></li>
          <li className="navigator__item"><Link to="/everydayScience" className={`navigator__link ${active === "everyday__science" && "everyday__science"}`} onClick={() => handleActive(3)}>Everyday Science</Link></li>
          <li className="navigator__item"><Link to="/selectCategory" className={`navigator__link ${active === "upload__mcq" && "upload__mcq"}`} onClick={() => handleActive(4)}>Upload MCQ</Link></li>
        </ul>}
      </div>
      {offline && <div className='internet__status'>{<strong>{offline}</strong>}</div>}
    </>
  )
}
