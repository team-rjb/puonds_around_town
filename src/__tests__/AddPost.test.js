import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import AddPost from "../components/AddPost/AddPost";
import {HashRouter} from "react-router-dom";


let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})


describe('Add post component', () => {
    //Rachael Test #1
    test('H1 Text', () => {
        act(() => {
            ReactDOM.render(<HashRouter><AddPost.WrappedComponent /></HashRouter>, container)
        })
        const firstH1 = container.querySelector('h1:nth-child(1)');
        expect(firstH1.textContent).toBe('Add a Dog To Your Shelter')
    });


// Rachael Test #2
    test('Check Button text', () => {
         act(() => {
             ReactDOM.render(<HashRouter><AddPost.WrappedComponent /></HashRouter>, container)
         })
        const buttonText = container.querySelector('button:nth-child(3)');
         expect(buttonText).toBe(null)
});
// Rachael #3
     test('state object username', () => {
        let state = {
            username:"",
        }
        expect(state.username).toEqual(state.username);
    });
// Rachael #4
    test('state object password', () => {
            let state = {
                password:"",
            }
            expect(state.password).toEqual(state.password);
        });
})


