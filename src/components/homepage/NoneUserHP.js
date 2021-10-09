import { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function NoneUserHP() {
  const history = useHistory();
  const dispatch = useDispatch();

  //set state to keep track of hover
  const [hovered1, hovered1Setter] = useState(false)
  const [hovered2, hovered2Setter] = useState(false)
  const [hovered3, hovered3Setter] = useState(false)
  const [hovered4, hovered4Setter] = useState(false)

  const content = [
    {'h':'Connections', 'p':'Connecting Local business with local influence to grow together!'},
    {'h':'Influence', 'p':'Influence local people to go out and enjoy our amazing city more!'},
    {'h':'Space', 'p':`Space and experience. Social media marketing isn't online only!`},
    {'h':'Aesthetics', 'p':'Inspiring and promoting more beauty, arts and fun!'},
  ]

  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: true})
  },[])

  const handleLoginClick = () =>{
    history.push('/login')
  }

  const handleBusinessSignUpClick = (e) => {
    e.stopPropagation();
    console.log('click')
    history.push("/businesssignup")
  }

  const handleCCSignUpClick = (e) => {
    e.stopPropagation();
    console.log('click')
    history.push("/ccsignup")
  }

  //for mobile
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

    return (
      <div className="none-user-HP">     
        <div className="none-user-HP-container">
          
          <p className="none-user-HP-login" onClick={handleLoginClick}>Login</p>
          

          <h1 className="none-user-HP-logo">Spaesthetic</h1>
          <h3 className="none-user-HP-subtitle">Connecting Local Business to Local Influencers</h3>



          <>
            <div className="none-user-HP-column" onMouseEnter={()=>{hovered1Setter(true)}} onMouseLeave={()=>{hovered1Setter(false)}}>
              
              <div className="none-user-HP-content">
                <div className="none-user-HP-h1-box">
                  <h1>Connections</h1>
                </div>
                <div className={hovered1 ? "none-user-HP-box" : ""}>
                  <h2 style={{display: hovered1 ? "" : "none" }}>Connecting Local business with local influence to grow together!</h2>
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
                <h2 style={{display: hovered4 ? "" : "none" }}>Inspiring and promoting more beauty, arts and fun!</h2>
              </div>
            </div>

            <div className={hovered4 ? "none-user-HP-bg bg4" : "none-user-HP-bg"}></div>
          </div>
          </> 

          <div className="none-user-HP-btn-group">
            <button onClick={handleBusinessSignUpClick}>Sign Up as Business</button>
            <button onClick={handleCCSignUpClick}>Sign Up as Influencer</button>
          </div>
        
          <div className="none-user-HP-mobile-grid-container">
          <Grid container spacing={2}  >
            {content.map(c => 
              <Grid item xs={12} sm={6} key={c.h}>
                <div className="none-user-HP-mobile-grid">
                  <h2>{c.h}</h2> 
                  <br></br>
                  <p>{c.p}</p>
                </div>
              </Grid>
            )}
              <Grid item xs={12} className="none-user-HP-mobile-btn-container">
                <button onClick={handleBusinessSignUpClick} className="none-user-HP-mobile-btn1">Sign Up as Business</button>
                <button onClick={handleCCSignUpClick}>Sign Up as Influencer</button>
              </Grid>
          </Grid>
          </div>

        </div>

      </div>
 
    );
  }
