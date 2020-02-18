import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import EditProfile from "../components/EditProfile/EditProfile";


let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})
afterEach(() => {
    document.body.removeChild(container);
    container = null;
})


describe('Edit Profile component', () => {
    //Rachael Test #5
    test('H1 Text', () => {
        act(() => {
            ReactDOM.render(<EditProfile />, container)
        })
        const firstH1 = container.querySelector('h1:nth-child(1)');
        expect(firstH1.textContent).toBe('Edit Profile')
    });

})

 //Jason Test 1
describe('Edit Profile component', () => {
   
    test('H2 Text', () => {
        act(() => {
            ReactDOM.render(<EditProfile />, container)
        })
        const firstH2 = container.querySelector('h2:nth-child(2)');
        expect(firstH2.textContent).toBe('Finish Me!')
    });

})
 //Jason Test 2
describe('Edit Profile component', () => {
   
    test('H2 Text', () => {
        act(() => {
            ReactDOM.render(<EditProfile />, container)
        })
        const firstH3 = container.querySelector('h3:nth-child(3)');
        expect(firstH3.textContent).toBe('I do nothing!')
    });

})