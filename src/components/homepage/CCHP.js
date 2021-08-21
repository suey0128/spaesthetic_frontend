import CCHPSearchAndSort from "./CCHPSearchAndSort";
import CCHPCampaignList from "./CCHPCampaignList";

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


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
          dispatch({ type: "SET_CAMPAIGN_ARR", playload: data}) 
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
          dispatch({ type: "SET_CAMPAIGN_ARR", playload: data}) 
      } else {
        alert(data.errors)
      }
    };
    sort();
  }

  const campaignArr = useSelector((state) => state.campaignReducer.campaignArr)
  const [arrWithRepitition, arrWithRepititionSetter] = useState([])
  const [checkedBox, setCheckBox] = useState(0)
  const [filterArr, filterArrSetter] = useState([])

  let obj = {}
  const handleFilter = (type, e) => {
  //   console.log(type, e.target.checked, e.target.value)

  //   //checked => get the arry from back end, store it in obj with its filterKeyWord as key, the actual campaign arry as value
  //   if (e.target.checked) {
  //     let filterKeyWord = e.target.value //str
  //     console.log(filterKeyWord)
  //     if (type === "compensation") {

  //       // fetch based on filterKeyWord
  //       async function fetchFilterCompensation(){
  //         const res = await fetch (`/campaigns?compensation=${filterKeyWord}`)
  //         const data = await res.json()
  //         if (res.ok){
  //           console.log(data)
  //           obj[filterKeyWord] = data
  //           console.log(obj)
  //         } else {
  //           alert(data.errors)
  //         }
  //       };
  //       fetchFilterCompensation();

  //     } else if (type === "qualification") {
  //       async function fetchFilterQualification(){
  //         const res = await fetch (`/campaigns?qualification=yes`)
  //         const data = await res.json()
  //         if (res.ok){
  //           // dispatch({ type: "SET_CAMPAIGN_ARR", playload: data}) 
  //         } else {
  //           alert(data.errors)
  //         }
  //       };
  //       fetchFilterQualification();
  //     }

  //     arrWithRepititionSetter([...arrWithRepitition, obj])
  //     filterArrSetter([...new Set([...filterArr, obj[filterKeyWord]].flat())])
  //     console.log(filterArr)
  //     dispatch({ type: "SET_CAMPAIGN_ARR", playload: filterArr }) 
  //     setCheckBox(checkedBox+1)

  //   } else if (!e.target.checked && checkedBox !==1) { //uncheck checkbox but not the last one

  //   } else { //uncheck the last checkbox

  //   }
  }
 
  // console.log(arrWithRepitition)

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