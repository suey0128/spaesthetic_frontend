import BusinessHPSearchAndSort from "./BusinessHPSearchAndSort";
import BusinessHPCCList from "./BusinessHPCCList";

import { useDispatch } from 'react-redux';
import { useState } from 'react';

function BusinessHP() {
  const dispatch = useDispatch();

  const [isSearchComeBackEmpty, isSearchComeBackEmptySetter] =useState(false)

  const handleSearch = (e,input) => {
    e.preventDefault();
 
    let convertedInput = input.toLowerCase().replace(" ","_");

    async function fetchCCWithSearch(){
      const res = await fetch (`/content_creators?search=${convertedInput}`)
      const data = await res.json()
      if (res.ok){
        // if (data.length === 0) { 
        //   isSearchComeBackEmptySetter(true)
        // } else {
          dispatch({ type: "SET_CONTENT_CREATOR_ARR", playload: data}) 
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
      const res = await fetch (`/content_creators?sort=${e.target.value}`)
      const data = await res.json()
      if (res.ok){
          dispatch({ type: "SET_CONTENT_CREATOR_ARR", playload: data}) 
      } else {
        alert(data.errors)
      }
    };
    sort();
  }

    return (
      <div className="BusinessHP">
        <h2>BusinessHP</h2>
        <BusinessHPSearchAndSort handleSearch={handleSearch} handleSort={handleSort}/>
        <BusinessHPCCList />
      </div>
    );
  }
  
  export default BusinessHP;