### Project Name 
FullHouse

### Description

FullHouse is frontend react app that focuses on connecting beginner coders with industry leaders who specialize in their coding language. Members are able to sign up and are brought to a page to connect. On the connection page, you can post a message as a mentor or mentee, languages you specialize in and contact information.(PostMVP) Mentees can enter rooms based on their language of choice and contribute to the blog to help other curious learners.     
<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

Mobile Home screen:

https://wireframe.cc/hx00vJ

Mobile Mentor/Mentee screen:
https://wireframe.cc/5nrgFn

Desktop:
https://wireframe.cc/cQ3Nwi

Tablet Home Screen:
https://wireframe.cc/LHUjxU

Tablet connect screen:
https://wireframe.cc/a5TyB4

<br>

### MVP Goals
-home page with clickable links to navigate through app
-use airtable to get data of mentors and mentees
-update/delete data using airtable 
<br>

#### PostMVP

- "Contribute to blog" feature
- Create "rooms" for each language 
- CSS animations to home page 

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
| Monday   | Proposal Approval / Airtable Setup         | Incomplete |
| Tuesday  | Component Creation / Get, Set Data         | Incomplete |
| Wednesday| Form Creation/ Delete Data                 | Incomplete |
| Thursday | Debug/ MVP                                 | Incomplete |
| Friday   | Advanced CSS                               | Incomplete |
| Monday   | Presentations                              | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |      hr       |    hrs     |
| Styling Homepage          |    H     |      2hrs      |      hr       |    hrs     |
| Component Setup           |    H     |      3hrs      |      hr       |    hrs     |
| Airtable setup            |    H     |      3hrs      |      hr       |     hr     |
| Clickable links           |    H     |      3hrs      |      hr       |     hr     |
| Footer                    |    H     |      3hrs      |      hr       |    hrs     |
| Mentee Form               |    H     |      3hrs      |      hr       |    hr      |
| Mentor Form               |    H     |      3hrs      |      hr       |    hr      |
| Data creation/update      |    H     |      3hrs      |      hr       |    hrs     |
| Delete Data               |    H     |      2hrs      |      hr       |     hr     |
| Post Data                 |    H     |      3hrs      |      hr       |     hr     |
| Navbar                    |    H     |      3hrs      |      hr       |     hr     |
| Component CSS             |    H     |      3hrs      |      hr       |    hrs     |
| Total                     |    H     |      36hrs     |               |            |

<br>

#### MVP API

Mentee Table: https://airtable.com/tblg824rvqCKcqOFF/viwKdP0GMWsvMElqd?blocks=hide
Mentor Table: https://airtable.com/tblRFUJ6pMxFMFDW0/viw89pyqjieI1Ei9M?blocks=hide

Sample Query Results:

```json
{
    "records": [
        {
            "id": "recLEZD9hBaV2ibaW",
            "fields": {
                "name": "Joanna Brown",
                "aboutMe": "New coder looking to learn Javascript",
                "language": "Javascript",
                "contact": "Joanna Brown"
            },
            "createdTime": "2021-03-14T23:27:11.000Z"
        },
        {
            "id": "recDu10k2kttdQ3cN",
            "fields": {
                "name": "Joshua  Kingston",
                "language": "Python",
                "aboutMe": "Enthusiastic Student looking to learn Python ",
                "contact": "Joshua Kingston on IG"
            },
            "createdTime": "2021-03-14T23:27:11.000Z"
        },
        {
            "id": "recBVptsebbnXC3TV",
            "fields": {},
            "createdTime": "2021-03-14T23:27:11.000Z"
        }
    ],
    "offset": "recBVptsebbnXC3TV"
}

```

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
        App
       /    \ 
 Home -------|__ components/
   |              |__ Navbar.jsx
 Navbar           |__ MentorForm.jsx (/new)
 Footer           |__ MenteeForm.jsx (/new)
                  |__ ConnectionPage.jsx (List of Mentors with Language experience)
                  |__ About.jsx (Info about FullHouse)
                  |__ Footer.jsx  (Contact Info)

  
```

<br>

***

## Project Delivery

###Strengths
-I'm confident on my ability to use airtable and work with the API
###Weaknesses
-My main weakness is connecting my components to my app and making sure they are rendered properly.
###Opportunities
-Since this projects allows me to use everything I learned in the past unit, it's a great opportunity to solidify concepts I was shacky on.
###Threats
Im in the process of managing my time better as it pertains to running into errors and unexpected issues. When I get stuck, it's really hard to move on or at least handle another part of the project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
