import React from 'react';
import renderer from 'react-test-renderer';
import FormRegister from "./form-register";
import {BrowserRouter} from "react-router-dom";

describe('render form register', () => {
    it('render error', () => {
        const three = renderer
            .create(
                <BrowserRouter>
                    <FormRegister onFormSubmit={() => null}
                                  errorMessage='Error!!!'/>
                </BrowserRouter>)
            .toJSON()
        expect(three).toMatchSnapshot()
    })
    it('render no error', () => {
        const three = renderer
            .create(
                <BrowserRouter>
                    <FormRegister onFormSubmit={() => null}/>
                </BrowserRouter>)
            .toJSON()
        expect(three).toMatchSnapshot()
    })
})