import CCCurrentCollabList from './CCCurrentCollabList'
import CCPastCollabList from './CCPastCollabList'
import CollabReviewsOnCC from './CollabReviewsOnCC'


function CCDetail() {
    return (
      <div className="CCDetail">
        <h2>CCDetail</h2>
        <CCCurrentCollabList/>
        <CCPastCollabList/>
        <CollabReviewsOnCC/>
      </div>
    );
  }
  
  export default CCDetail;