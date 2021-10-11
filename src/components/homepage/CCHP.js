import CCHPSearchAndSort from "./CCHPSearchAndSort";
import CCHPCampaignList from "./CCHPCampaignList";

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


function CCHP() {
  const dispatch = useDispatch();

  const campaignArr = useSelector((state) => state.campaignReducer.campaignArr)
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const [arrWithRepitition, arrWithRepititionSetter] = useState([])
  const [checkedBox, checkBoxSetter] = useState(0)
  const [filteredCampaignArr, filteredCampaignArrSetter] = useState([])
  const [isEmpty, isEmptySetter] = useState(false)

  useEffect(()=>{
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
    if (filteredCampaignArr.length > 0 && checkedBox > 0) {
      isEmptySetter(false)
      dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: filteredCampaignArr})
    } else if (filteredCampaignArr.length === 0 && checkedBox > 0) {
      isEmptySetter(true)
      dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: filteredCampaignArr})
    } else {
      dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: campaignArr})
      isEmptySetter(false)
    }
  },[filteredCampaignArr, checkedBox])


  const handleSearch = (e,input) => {
    e.preventDefault();
 
    let convertedInput = input.toLowerCase().replace(" ","_");

    async function fetchCCWithSearch(){
      // const res = await fetch (`https://spaesthetic.herokuapp.com/campaigns?search=${convertedInput}`)
      const res = await fetch (`/campaigns?search=${convertedInput}`)
      const data = await res.json()
      if (res.ok){

          dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: data}) 

      } else {
        alert(data.errors)
      }
    };
    fetchCCWithSearch();
  }

  

  const handleSort = (e) => {
    async function sort(){
      // const res = await fetch (`https://spaesthetic.herokuapp.com/campaigns?sort=${e.target.value}`)
      const res = await fetch (`/campaigns?sort=${e.target.value}`)
      const data = await res.json()
      if (res.ok){
          dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: data}) 
      } else {
        alert(data.errors)
      }
    };
    sort();
  }

  let tempObj = {}

  //filter everything in the frontend
  const handleFilter = (type, e) => {
    let filterKeyWord = e.target.value; //str
    if (e.target.checked) {  
      if (type==="compensation") {
        tempObj[filterKeyWord] = campaignArr.filter(c => c.compensation_type.toLowerCase() === e.target.value)

      } else if (type==="qualification") {
        let no_follower_requirement_campaigns = campaignArr.filter(c => c.require_following_minimum === null || c.require_following_minimum === "")
        let fitting_follower_requirement_campaigns = campaignArr.filter(c => 
          typeof(c.require_following_minimum) === "number" ? 
          currentUser.platform_user.instagram_follower >= c.require_following_minimum : null
        )
        let followerNumberFiltered = [...new Set([...no_follower_requirement_campaigns, ...fitting_follower_requirement_campaigns])]

        

        let femaleRatioFiltered = [];
        if (currentUser.platform_user.instagram_female_follower_ratio && currentUser.platform_user.instagram_female_follower_ratio !== "") {
          let no_female_ratio_requirement_campaigns = followerNumberFiltered.filter(c => c.require_following_female_ratio === null || c.require_following_female_ratio === "")
          let fitting_female_ratio_requirement_campaigns = followerNumberFiltered.filter(c => 
            typeof(c.require_following_female_ratio) === "number" ? 
            currentUser.platform_user.instagram_female_follower_ratio >= c.require_following_female_ratio : null
          )
          femaleRatioFiltered = [...new Set([...no_female_ratio_requirement_campaigns, ...fitting_female_ratio_requirement_campaigns])]
        } else {
          femaleRatioFiltered = followerNumberFiltered
        }


        let qualified = [];
        let genderArr = ['female', 'male', 'lgbtq and others']
        if (genderArr.includes(currentUser.platform_user.gender.toLowerCase())) {
          let no_gender_requirement_campaigns = femaleRatioFiltered.filter(c => genderArr.includes(c.require_gender.toLowerCase()) === false)
          let fitting_gender_requirement_campaigns = femaleRatioFiltered.filter(c => c.require_gender.toLowerCase() === currentUser.platform_user.gender.toLowerCase())
          qualified = [...new Set([...no_gender_requirement_campaigns, ...fitting_gender_requirement_campaigns])]
        } else {
          qualified = femaleRatioFiltered
        }

 
        tempObj[filterKeyWord] = qualified
      } 
      arrWithRepititionSetter([...arrWithRepitition, tempObj])
      // set the items on display by getting rid of duplicates
      filteredCampaignArrSetter( [...new Set([...filteredCampaignArr, tempObj[filterKeyWord]].flat())] )
      //keep track of how many checkboxs are checked
      checkBoxSetter(checkedBox+1)

      // when the checkbox is uncheck,but there are still other checkboxes are checked
    } else if (!e.target.checked && checkedBox !==1){
      //cross out the arr in filteredCampaignArrWithRepetition
      let x = arrWithRepitition.filter(a => Object.keys(a)[0] !== e.target.value)
      arrWithRepititionSetter(x)
      // get all the values from filteredCampaignArrWithRepetition after geting rid of that unselected one, 
      //flat it and get rid of duplicates and display
      filteredCampaignArrSetter( [...new Set(x.map(o=>Object.values(o)).flat().flat())] )
      checkBoxSetter(checkedBox-1)
    } else {
      filteredCampaignArrSetter( [] )
      checkBoxSetter(0)
    }
  }


  const handleSwitchChangeCompensation = (e) => {
    handleFilter("compensation", e)
  }

  const handleSwitchChangeQualification = (e) => {
    handleFilter("qualification", e)
  }


    return (
      <div className="cchp">
        <CCHPSearchAndSort handleSearch={handleSearch} 
                            handleSort={handleSort} 
                            handleSwitchChangeCompensation={handleSwitchChangeCompensation} 
                            handleSwitchChangeQualification={handleSwitchChangeQualification} 
        />
        <h1 style={{ display: isEmpty ? "" : "none" }} >😔 Sorry, there isn't any campaign that fits</h1>
        <CCHPCampaignList />
      </div>
    );
  }
  
  export default CCHP;