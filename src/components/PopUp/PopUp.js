import React from "react";
import Popup from "reactjs-popup";
import PostCard from '../PostCard/PostCard';


export default (props) => (
    <Popup trigger={<img className="dog-image" src={props.pic} alt='Dog'></img>} position="center center">
        <div>
            <PostCard
                user={props.user_id}
                post_id={props.post_id}
                pic={props.pic}
                post_name={props.post_name}
                breed={props.breed}
                age={props.age}
                gender={props.gender}
                fixed={props.fixed}
                rating={props.rating}
                org_name={props.org_name}
                bio={props.bio}
                isAdmin={props.isAdmin}
            />
        </div>
    </Popup>
);
