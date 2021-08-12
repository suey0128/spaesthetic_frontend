import CCProfileEditForm from "./CCProfileEditForm";
import NewProfilePicForm from "../forms_and_cards/NewProfilePicForm";
import CCPastCollabList from "./CCPastCollabList"
import CCProfileApplied from "./CCProfileApplied"
import CCProfileInviteList from './CCProfileInviteList'
import CollabReviewsOnCC from './CollabReviewsOnCC'
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