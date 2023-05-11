import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Homepage from './Homepage'

const testJson = {
    "name": "testName"
}

describe('<Homepage>', function() {
    it('Should display the name of the section', function() {
        render(<Homepage sections={[testJson]}/>)
        let content = screen.queryByText(testJson.name)
        expect(content).not.toBeNull()
    })
})