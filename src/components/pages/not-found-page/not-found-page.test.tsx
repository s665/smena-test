import React from 'react'
import renderer from 'react-test-renderer'
import NotFoundPage from "./not-found-page";
import {BrowserRouter} from "react-router-dom";

it('render page 404', () => {
    const three = renderer
        .create(
            <BrowserRouter>
                <NotFoundPage/>
            </BrowserRouter>
        )
        .toJSON()
    expect(three).toMatchSnapshot()
})