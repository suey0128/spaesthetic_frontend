import BusinessHPSearchAndSort from "./BusinessHPSearchAndSort";
import BusinessHPCCList from "./BusinessHPCCList";

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function BusinessHP() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_IS_ON_LANDING_PAGE", playload: false})
  },[])

  const handleSearch = (e,input) => {
    e.preventDefault();
 
    let convertedInput = input.toLowerCase().replace(" ","_");

    async function fetchCCWithSearch(){
      // const res = await fetch (`https://spaesthetic.herokuapp.com/content_creators?search=${convertedInput}`)
      const res = await fetch (`/content_creators?search=${convertedInput}`)
      const data = await res.json()
      if (res.ok){

          dispatch({ type: "SET_CONTENT_CREATOR_ARR", playload: data}) 

      } else {
        alert(data.errors)
      }
    };
    fetchCCWithSearch();
  }

  
  const handleSort = (e) => {
    async function sort(){
      // const res = await fetch (`https://spaesthetic.herokuapp.com/content_creators?sort=${e.target.value}`)
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
        <BusinessHPSearchAndSort handleSearch={handleSearch} handleSort={handleSort}/>
        <BusinessHPCCList />
      </div>
    );
  }
  
  export default BusinessHP;