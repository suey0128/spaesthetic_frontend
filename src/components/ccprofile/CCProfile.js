import CCProfileEditForm from "./CCProfileEditForm";
import NewProfilePicForm from "../shared_components/NewProfilePicForm";
import CCPastCollabList from "../shared_components/CCPastCollabList"
import CCProfileApplied from "./CCProfileApplied"
import CCProfileInviteList from './CCProfileInviteList'
import CollabReviewsOnCC from '../shared_components/CollabReviewsOnCC'
import CollabReviewsWroteByCC from './CollabReviewsWroteByCC'


function CCProfile() {
    return (
      <div className="CCProfile">
        <h2>CCProfile</h2>
        <CCProfileEditForm />
        <NewProfilePicForm />
        <CCPastCollabList />
        <CCProfileApplied />
        <CCProfileInviteList />
        <CollabReviewsOnCC />
        <CollabReviewsWroteByCC />
      </div>
    );
  }
  
  export default CCProfile;