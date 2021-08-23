import CCHPSearchAndSort from "./CCHPSearchAndSort";
import CCHPCampaignList from "./CCHPCampaignList";

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import yearsToMonths from "date-fns/yearsToMonths";


function CCHP() {
  const dispatch = useDispatch();



  const handleSearch = (e,input) => {
    e.preventDefault();
 
    let convertedInput = input.toLowerCase().replace(" ","_");

    async function fetchCCWithSearch(){
      const res = await fetch (`/campaigns?search=${convertedInput}`)
      const data = await res.json()
      if (res.ok){
        // if (data.length === 0) { 
        //   isSearchComeBackEmptySetter(true)
        // } else {
          dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: data}) 
        // }
      } else {
        alert(data.errors)
      }
    };
    fetchCCWithSearch();
  }

  // if (isSearchComeBackEmpty) return 
  //  <p>Sorry, we can't find any content creator related to your search 😫. <br></br> Please search other key words❤️ 🧡 💛 💚 💙 💜 🖤 🤍.  </p>;

  const handleSort = (e) => {
    console.log(e.target.value)
    let sortBy = e.target.value
    async function sort(){
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

  const campaignArr = useSelector((state) => state.campaignReducer.campaignArr)
  const campaignOnDisplay = useSelector((state) => state.campaignReducer.campaignOnDisplay);
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const [arrWithRepitition, arrWithRepititionSetter] = useState([])
  const [checkedBox, checkBoxSetter] = useState(0)
  const [filteredCampaignArr, filteredCampaignArrSetter] = useState([])

  useEffect(()=>{
    if (filteredCampaignArr.length > 0) {
      dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: filteredCampaignArr})
    } else {
      dispatch({ type: "SET_CAMPAIGN_ON_DISPLAY", playload: campaignArr})
    }
  },[filteredCampaignArr])

  let tempObj = {}
  //filter using frontend and backend
  const handleFilterr = (type, e) => {
    console.log(type, e.target.checked, e.target.value)
    let filterKeyWord = e.target.value //str
    //checked => get the arry from back end, store it in obj with its filterKeyWord as key, the actual campaign arry as value
    if (e.target.checked) {
      console.log(filterKeyWord)
      if (type === "compensation") {
        // fetch based on filterKeyWord
        async function fetchFilterCompensation(){
          const res = await fetch (`/campaigns?compensation=${filterKeyWord}`)
          const data = await res.json() //the ARRAY of campaign that fit the filter
          if (res.ok){
            console.log(data)
            tempObj[filterKeyWord] = data
            // put the array of campaign that comes back from backend into the filteredCampaignArr and remove duplicates, and set it to filteredCampaignArr's new value
            filteredCampaignArrSetter([...new Set([...filteredCampaignArr, data].flat())])
          } else {
            alert(data.errors)
          }
        };
        fetchFilterCompensation();

      } else if (type === "qualification") {
        async function fetchFilterQualification(){
          const res = await fetch (`/campaigns?qualification=${currentUser.platform_user_id}`)
          const data = await res.json()
          if (res.ok){
            console.log(data)
            tempObj[filterKeyWord] = data
            // put the array of campaign that comes back from backend into the filteredCampaignArr and remove duplicates, and set it to filteredCampaignArr's new value
            filteredCampaignArrSetter([...new Set([...filteredCampaignArr, data].flat())])
            // filteredCampaignArrSetter([...filteredCampaignArr, data].flat())
          } else {
            alert(data.errors)
          }
        };
        fetchFilterQualification();
      }
      arrWithRepititionSetter([...arrWithRepitition, tempObj])
      checkBoxSetter(checkedBox+1)

    } else if (!e.target.checked && checkedBox !==1) { //uncheck checkbox but not the last one
      //cross out the arr in filteredCampaignArrWithRepetition
      let campaignLeft = arrWithRepitition.filter(a => Object.keys(a)[0] !== filterKeyWord)
      arrWithRepititionSetter(campaignLeft)
      // get all the values from filteredCampaignArrWithRepetition after geting rid of that unselected one, 
      //flat it and get rid of duplicates and display
      filteredCampaignArrSetter([...new Set(campaignLeft.map(c=>Object.values(c)).flat().flat())])

    } else { //uncheck the last checkbox
      filteredCampaignArrSetter([])
      checkBoxSetter(0)
    }
  }

  //filter everything in the frontend
  const handleFilter = (type, e) => {
    let filterKeyWord = e.target.value; //str
    if (e.target.checked) {  
      if (type==="compensation") {
        tempObj[filterKeyWord] = campaignArr.filter(c => c.compensation_type.toLowerCase() === e.target.value)

      } else if (type==="qualification") {
        let no_follower_requirement_campaigns = campaignArr.filter(c => c.require_following_minimum == null || c.require_following_minimum == "")
        let fitting_follower_requirement_campaigns = campaignArr.filter(c => 
          typeof(c.require_following_minimum) == "number" ? 
          currentUser.platform_user.instagram_follower >= c.require_following_minimum : null
        )
        let followerNumberFiltered = [...new Set([...no_follower_requirement_campaigns, ...fitting_follower_requirement_campaigns])]
        console.log("1",followerNumberFiltered)
        

        let femaleRatioFiltered = [];
        if (currentUser.platform_user.instagram_female_follower_ratio && currentUser.platform_user.instagram_female_follower_ratio !== "") {
          let no_female_ratio_requirement_campaigns = followerNumberFiltered.filter(c => c.require_following_female_ratio === null || c.require_following_female_ratio === "")
          let fitting_female_ratio_requirement_campaigns = followerNumberFiltered.filter(c => 
            typeof(c.require_following_female_ratio) == "number" ? 
            currentUser.platform_user.instagram_female_follower_ratio >= c.require_following_female_ratio : null
          )
          femaleRatioFiltered = [...new Set([...no_female_ratio_requirement_campaigns, ...fitting_female_ratio_requirement_campaigns])]
        } else {
          femaleRatioFiltered = followerNumberFiltered
        }
        console.log("2",femaleRatioFiltered)

        let qualified = [];
        let genderArr = ['female', 'male', 'lgbtq and others']
        if (genderArr.includes(currentUser.platform_user.gender.toLowerCase())) {
          let no_gender_requirement_campaigns = femaleRatioFiltered.filter(c => genderArr.includes(c.require_gender.toLowerCase()) == false)
          let fitting_gender_requirement_campaigns = femaleRatioFiltered.filter(c => c.require_gender.toLowerCase() === currentUser.platform_user.gender.toLowerCase())
          qualified = [...new Set([...no_gender_requirement_campaigns, ...fitting_gender_requirement_campaigns])]
        } else {
          qualified = femaleRatioFiltered
        }

        console.log("3",qualified)
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
    } else {
      filteredCampaignArrSetter( [] )
      checkBoxSetter(0)
    }
  }

  //https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
  // console.log(checkedBox)
  // console.log(arrWithRepitition, filteredCampaignArr)
  // console.log(filteredCampaignArr[0])
  // console.log(filteredCampaignArr[4])
  // console.log(filteredCampaignArr[0] === filteredCampaignArr[4]) //return false 
  // console.log(String(filteredCampaignArr[0]) === String(filteredCampaignArr[4])) //return true

  // if (filteredCampaignArr.length === 0) {
  //   dispatch({  type: "SET_FILTERED_CAMPAIGN_ARR", playload: campaignArr })
  // }

  const handleSwitchChangeCompensation = (e) => {
    handleFilter("compensation", e)
  }

  const handleSwitchChangeQualification = (e) => {
    handleFilter("qualification", e)
  }

  // console.log(arrWithRepitition)





    return (
      <div className="cchp">
        <h2>CCHP</h2>
        <CCHPSearchAndSort handleSearch={handleSearch} 
                            handleSort={handleSort} 
                            handleSwitchChangeCompensation={handleSwitchChangeCompensation} 
                            handleSwitchChangeQualification={handleSwitchChangeQualification} 
        />
        <CCHPCampaignList />
      </div>
    );
  }
  
  export default CCHP;