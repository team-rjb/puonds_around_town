import { getCurrentPost, getAllPostsByUserId, getRandomPosts, addPostCount } from "../redux/reducers/postsReducer";

// import React from "react";
// import ReactDOM from "react-dom";
// import { act, Simulate } from "react-dom/test-utils";
// import Login from "../components/Login/Login";
// import App from "../App";
// import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
// import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

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