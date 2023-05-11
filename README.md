# Security Forces Website Documentation

## Overview
This is a hand-off document to explain the development and design choices made within the Security Forces website to future developers and project managers.

This application was orignally developed by SrA Zachery Soles from Project Arc. If there are any questions on the development, or design choices, please contact at zachery.soles@us.af.mil or zacsoles@gmail.com.

#### Languages and Frameworks
This website has been developed in React.js in Javascript using Create-React-App along with Material UI to design all of the components within the application.

## Updating Website

#### Add and Update forms
All forms **must** be placed within the data/documents folder, and the name can be added to the forms or training json files within the data folder. The path for each file/form is just the name of the file, along with the file extention

```
documents: [
    {
        "name": "example file",
        "path: "example file.pdf"
    }
]
```

#### Update contact, training, and websitegit  information and
All information can be changed/updated within their respective json files within the data folder.

Tests have been developed to see if json files are the correct format, so please follow the format below.

## Sections

This website is broken up into different sections:
1. Intro
2. Training
3. Form
4. Contact

Each section has a corresponsing JSON file that can be edited to change content on the website, while following the format displayed below.

If someone wants to add another section, you have to add a JSON file within the **data** folder, and add an import to the Homepage.js file.

```
import example from '../data/example.json'

if (!sections) sections = [info, training, form, contact, example]
```

After importing the file, just add the name of the file to the sections array.


## Form JSON Format
All of the JSON formatting is similar, but requires specific names to be used to add sections to the website.

None of the following attributes will be required but nothing will be displayed is there are none of them within the JSON file.

```
{
    "name": "testName",
    "email": "testEmail@us.af.mil",
    "description": "test description",
    "documents": [
        {
            "name": "temp good name",
            "path": "training slides.pptx"
        }
    ],
    "link": [
        {
            "name": "temp link",
            "path": "https://www.google.com"
        }
    ]
}
```

The name is the text that will displayed in bold letters at the start of each section, must be a string.

Email, and Description will only be displayed if given, **must** be a string.

Documents and Link have similar structures to if they are not given, then they will not display anything.

Documents and Links **must** be a list of json objects

```
"link": [
    {
        "name": "temp good name",
        "path": "training slides.pptx"
    }
]
```

Each json object will have the following attributes name, and path, and they **must** be a string. The path attribute can be either an outside link to a website, or to a document within the **data/documents** folder.

If the path is to a website, the website must include **https://** or the link will not work.


