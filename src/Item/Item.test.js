import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Item from './Item'

const testJson = {
    "name": "testName",
    "email": "testEmail@us.af.mil",
    "description": "test description",
    "documents": [
        {
            "name": "temp good name",
            "path": "training slides.pptx"
        },
        {
            "name": "temp bad name",
            "path": "bad file.pdf"
        }
    ],
    "link": [
        {
            "name": "temp link",
            "path": "https://www.google.com"
        }
    ]

}

describe('<Item>', function() {
    it('Should display the name of the section', function() {
        render(<Item name={testJson.name}/>)
        let content = screen.queryByText(testJson.name)
        expect(content).not.toBeNull()
    })
    it('Should not display the name of the section', function() {
        render(<Item name={null}/>)
        let content = screen.queryByText(testJson.name)
        expect(content).toBeNull()
    })
    it('Should display the description of the section', function() {
        render(<Item description ={testJson.description}/>)
        let content = screen.queryByText(testJson.description)
        expect(content).not.toBeNull()
    })
    it('Should not display the description of the section', function() {
        render(<Item description={null}/>)
        let content = screen.queryByText(testJson.description)
        expect(content).toBeNull()
    })
    it('Should display the email of the section', function() {
        render(<Item email={testJson.email}/>)
        let content = screen.queryByText(testJson.email)
        expect(content).not.toBeNull()
    })
    it('Should not display the email of the section', function() {
        render(<Item email={null}/>)
        let content = screen.queryByText(testJson.email)
        expect(content).toBeNull()
    })
    it('Should display the email of the section', function() {
        render(<Item email={testJson.email}/>)
        let content = screen.queryByText(testJson.email)
        expect(content).not.toBeNull()
    })
    it('Should display the links of the section', function() {
        render(<Item links={testJson.link}/>)
        let content = screen.findAllByRole('li')
        waitFor(() => expect(content).toHaveLength(1))
    })
    it('Should display the link of the link if it is good', function() {
        render(<Item documents={testJson.link}/>)
        let content = screen.getByRole('link', { name: testJson.link[0].name })
        expect(content).toHaveAttribute('href', testJson.link[0].path)
    })
    it('Should not display the links of the section', function() {
        render(<Item links={null}/>)
        let content = screen.findAllByRole('li')
        waitFor(() => expect(content).toHaveLength(0))
    })
    it('Should not include a link if the link is bad', function() {
        render(<Item links={testJson.documents}/>)
        let content = screen.queryByText(testJson.documents[1].name)
        waitFor(() => expect(content).toHaveAttribute('href', null))
    })
    it('Should display the documents of the section', function() {
        render(<Item documents={testJson.documents}/>)
        let content = screen.findAllByRole('li')
        waitFor(() => expect(content).toHaveLength(1))
    })
    it('Should display the link of the document if it is good', function() {
        render(<Item documents={testJson.documents}/>)
        let content = screen.getByRole('link', { name: testJson.documents[0].name })
        expect(content).toHaveAttribute('href', '/documents/'+testJson.documents[0].path)
    })
    it('Should not include a documents if the link is bad', function() {
        render(<Item documents={testJson.documents}/>)
        let content = screen.queryByText(testJson.documents[1].name)
        waitFor(() => expect(content).toHaveAttribute('href', null))
    })
    it('Should not display the documents of the section', function() {
        render(<Item documents={null}/>)
        let content = screen.findAllByRole('li')
        waitFor(() => expect(content).toHaveLength(0))
    })
})