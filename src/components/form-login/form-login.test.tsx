import React from 'react';
import renderer from 'react-test-renderer';
import FormLogin from "./form-login";
import {BrowserRouter} from 'react-router-dom'

describe('render form-login', () => {
    it('render error', () => {
        const three = renderer
            .create(
                <BrowserRouter>
                    <FormLogin errorMessage="Произошла ошибка"
                               onFormSubmit={() => null}/>
                </BrowserRouter>
            )
            .toJSON()
        expect(three).toMatchSnapshot()
    })
    it('render no error', () => {
        const three = renderer
            .create(
                <BrowserRouter>
                    <FormLogin onFormSubmit={() => null}/>
                </BrowserRouter>
            )
            .toJSON()
        expect(three).toMatchSnapshot()
    })
})
