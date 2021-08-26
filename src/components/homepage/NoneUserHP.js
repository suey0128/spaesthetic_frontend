import { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function NoneUserHP() {
  const history = useHistory();
  const dispatch = useDispatch();

  //set state to keep track of hover
  const [hovered1, hovered1Setter] = useState(false)
  const [hovered2, hovered2Setter] = useState(false)
  const [hovered3, hovered3Setter] = useState(false)
  const [hovered4, hovered4Setter] = useState(false)


  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: true})
  },[])

  const handleLoginClick = () =>{
    history.push('/login')
    // dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  }

  const handleBusinessSignUpClick = (e) => {
    e.stopPropagation();
    console.log('click')
    history.push("/businesssignup")
    // dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  }

  const handleCCSignUpClick = (e) => {
    e.stopPropagation();
    console.log('click')
    history.push("/ccsignup")
    // dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  }

    return (
      <div className="none-user-HP">     
        <div className="none-user-HP-container">
          
          <p className="none-user-HP-login" onClick={handleLoginClick}>Login</p>
          

          <h1 className="none-user-HP-logo">Spaesthetic</h1>
          <h3 className="none-user-HP-subtitle">Connecting Local Business to Local Influencers</h3>

          <div className="none-user-HP-btn-group">
            <button onClick={handleBusinessSignUpClick}>Sign Up as Business</button>
            <button onClick={handleCCSignUpClick}>Sign Up as Influencer</button>
          </div>

          <div className="none-user-HP-column" onMouseEnter={()=>{hovered1Setter(true)}} onMouseLeave={()=>{hovered1Setter(false)}}>
            
            <div className="none-user-HP-content">
              <div className="none-user-HP-h1-box">
                <h1>Connections</h1>
              </div>
              <div className={hovered1 ? "none-user-HP-box" : ""}>
                <h2 style={{display: hovered1 ? "" : "none" }}>Connecting Local business with local influence to grow together!</h2>
                {/* <p style={{display: hovered1 ? "" : "none" }}> Social media marketing is never easy when your business is local. Growing influence can be tough when you only post local content as well. But we are always stronger when sticking together!</p> */}
              </div>
            </div>

            <div className="none-user-HP-bg bg1"></div>
          </div>



          <div className="none-user-HP-column" onMouseEnter={()=>{hovered2Setter(true)}} onMouseLeave={()=>{hovered2Setter(false)}}>
            
            <div className="none-user-HP-content">
              <div className="none-user-HP-h1-box">
                <h1>Influence</h1>
              </div>

              <div className={hovered2 ? "none-user-HP-box" : ""}>
                <h2 style={{display: hovered2 ? "" : "none" }}>Influence local people to go out and enjoy our amazing city more! </h2>
                {/* <p style={{display: hovered2 ? "" : "none" }}> let’s make people love our city more by inspiring them to go out and explore! </p> */}
              </div>
            </div>

            <div className={hovered2 ? "none-user-HP-bg bg2" : "none-user-HP-bg"}></div>
          </div>



          <div className="none-user-HP-column" onMouseEnter={()=>{hovered3Setter(true)}} onMouseLeave={()=>{hovered3Setter(false)}}>
            
            <div className="none-user-HP-content">
              <div className="none-user-HP-h1-box">
                <h1>Space</h1>
              </div>

              <div className={hovered3 ? "none-user-HP-box" : ""}>
                <h2 style={{display: hovered3 ? "" : "none" }}>Space and experience. Social media marketing isn't online only!</h2>
                {/* <p style={{display: hovered3 ? "" : "none" }}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
              </div>
            </div>

            <div className={hovered3 ? "none-user-HP-bg bg3" : "none-user-HP-bg"}></div>
          </div>



          <div className="none-user-HP-column" onMouseEnter={()=>{hovered4Setter(true)}} onMouseLeave={()=>{hovered4Setter(false)}}>
            
            <div className="none-user-HP-content">
              <div className="none-user-HP-h1-box">
                <h1>Aesthetics</h1>
              </div>

              <div className={hovered4 ? "none-user-HP-box" : ""}>
                <h2 style={{display: hovered4 ? "" : "none" }}>Make our city better by inspiring and promoting more beauty, arts and fun</h2>
                {/* <p style={{display: hovered4 ? "" : "none" }}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
              </div>
            </div>

            <div className={hovered4 ? "none-user-HP-bg bg4" : "none-user-HP-bg"}></div>
          </div>


        </div>

      </div>
 
    );
  }
