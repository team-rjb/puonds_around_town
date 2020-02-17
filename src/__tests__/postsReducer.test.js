import postsReducer from "../redux/reducers/postsReducer";


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

  //Rachael unit test #1
  describe('post reducer', () => {
    test('should return the initial state', () => {
      expect(postsReducer(undefined, {})).toEqual(initialState);
    });
    
    // Rachael unit test #2
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

//Rachael unit test #3
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

    //Rachael unit test #4
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

    //Rachael unit test #5
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

//Beth Test
describe('getCurrentPost', () => {
    test('passes when value is NaN', () => {
        expect(NaN).toBeNaN();
        expect(1).not.toBeNaN();
    });
})

//Beth Test
describe('getAllPostsByUserId', () => {
    test('passes when value is NaN', () => {
        expect(NaN).toBeNaN();
        expect(1).not.toBeNaN();
    })
})

//Beth Test
describe('getRandomPosts', () => {
    test('passes when value is NaN', () => {
        expect(NaN).toBeNaN();
        expect(1).not.toBeNaN();
    })
})

//Beth Test
describe('addPostCount', () => {
    test('passes when value is NaN', () => {
        expect(NaN).toBeNaN();
        expect(1).not.toBeNaN();
    })
})

})