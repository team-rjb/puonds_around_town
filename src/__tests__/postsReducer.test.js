import postsReducer from "../redux/reducers/postsReducer";

//Rachael test
const post = {
  pic: "",
  name: "",
  breed: "",
  age: "",
  gender: "",
  fixed: "",
  bio: "",
  rating: ""
}

//Rachael test
const initialState = {
    posts: [],
    loading: false,
    currentPost_id: 0,
    postsByCategory: [],
    postsByUserId: [],
    randPosts: [],
    favorites: [],
    favoritesByUserId: []
  }

  //Rachael test
  describe('post reducer', () => {
    test('should return the initial state', () => {
      expect(postsReducer(undefined, {})).toEqual(initialState);
    });
    
    // Rachael test
    test('should handle ADD_POST', () => {
      const post = {
        pic: "",
        name: "",
        breed: "",
        age: "",
        gender: "",
        fixed: "",
        bio: "",
        rating: ""
      }
      const expectedState = {
        posts: [post],
        loading: false,
        currentPost_id: 0,
        postsByCategory: [],
        postsByUserId: [],
        randPosts: [],
        favorites: [],
        favoritesByUserId: []
      }

      const addedPost = () => ({
        type: "ADD_POST_FULFILLED",
        payload: {
          data: expectedState.posts
        }
      })
   
      expect(postsReducer(initialState, addedPost())).toEqual(expectedState);
    });

//Rachael test
    test('should return all posts', () => {
      const post1 = {
        pic: "",
        name: "Name Test 1",
        breed: "",
        age: "",
        gender: "",
        fixed: "",
        bio: "",
        rating: ""
      }
      const post2 = {
        pic: "",
        name: "Name Test 2",
        breed: "",
        age: "",
        gender: "",
        fixed: "",
        bio: "",
        rating: ""
      }
      const state = {
        posts: [post1, post2],
        loading: false,
        currentPost_id: 0,
        postsByCategory: [],
        postsByUserId: [],
        randPosts: [],
        favorites: [],
        favoritesByUserId: []
      }

      let getAllPosts = () => ({
        type: "GET_ALL_POSTS_FULFILLED",
        payload: {
          data: state.posts
        }
      })

      expect(postsReducer(state, getAllPosts())).toEqual(state);
    });

    //Rachael test
    test('should delete a post', () => {
      const post1 = {
        ...post,
        name: "Name Test 1",
        
      }
      const post2 = {
        ...post,
        name: "Name Test 2",
      }

      const state = {
        posts: [post1, post2],
        loading: false,
        currentPost_id: 0,
        postsByCategory: [],
        postsByUserId: [],
        randPosts: [],
        favorites: [],
        favoritesByUserId: []
      }

      const expectedState ={
        ...state,
        posts: [post1]
      }

      let deletePost = () => ({
        type: "DELETE_POST_FULFILLED",
        payload: {
          data: expectedState.posts
        }
      })

      expect(postsReducer(state, deletePost())).toEqual(expectedState);
    });

    //Rachael test
    test('should edit a post', () => {
      const post1 = {
        ...post,
        name: "rachael",
        
      }
      const post1Edited = {
        ...post,
        name: "linsy",
      }

      const state = {
        posts: [post1],
        loading: false,
        currentPost_id: 0,
        postsByCategory: [],
        postsByUserId: [],
        randPosts: [],
        favorites: [],
        favoritesByUserId: []
      }

      const expectedState ={
        ...state,
        posts: [post1Edited]
      }

      let editPost = () => ({
        type: "EDIT_POST_FULFILLED",
        payload: {
          data: expectedState.posts
        }
      })

      expect(postsReducer(state, editPost())).toEqual(expectedState);
    });
})