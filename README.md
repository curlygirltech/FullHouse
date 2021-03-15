### Project Name 
FullHouse

### Description

FullHouse is frontend react app that focuses on connecting beginner coders with industry leaders who specialize in their coding language. Members are able to sign up and are brought to a page to connect. On the connection page, you can post a message as a mentor or mentee, languages you specialize in and contact information.(PostMVP) Mentees can enter rooms based on their language of choice and contribute to the blog to help other curious learners.     
<br>

### Wireframes

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

- home page with clickable links to navigate through app
- use airtable to get data of mentors and mentees
- route mentors or mentees to specific connection page with rendered info
<br>

#### PostMVP

- "Contribute to blog" feature
- Create "rooms" for each language 
- CSS animations to home page
- update/delete data using airtable 

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
| Footer                    |    H     |      1hrs      |      hr       |    hrs     |
| Mentee Form               |    H     |      3hrs      |      hr       |    hr      |
| Mentor Form               |    H     |      3hrs      |      hr       |    hr      |
| Data creation/update      |    H     |      3hrs      |      hr       |    hrs     |
| Delete Data               |    H     |      2hrs      |      hr       |     hr     |
| Post Data                 |    H     |      3hrs      |      hr       |     hr     |
| Navbar                    |    H     |      3hrs      |      hr       |     hr     |
| Component CSS             |    H     |      3hrs      |      hr       |    hrs     |
| Media quieries/RD         |    H     |      3hrs      |      hr       |    hrs     |
| Total                     |    H     |      37hrs     |               |            |

<br>

#### MVP API

Mentee Table: https://airtable.com/tblg824rvqCKcqOFF/viwKdP0GMWsvMElqd?blocks=hide
Mentor Table: https://airtable.com/tblRFUJ6pMxFMFDW0/viw89pyqjieI1Ei9M?blocks=hide

Sample Query Results:

```json
{
    "records": [
        {
            "id": "recFH8m8MOHYp99oE",
            "fields": {
                "contact": "@AnitaBakerson on IG",
                "name": "Anita Bakerson",
                "aboutMe": "Polished professional looking to help beginners master Java",
                "language": [
                    "Java"
                ],
                "relationship": "mentor"
            },
            "createdTime": "2021-03-14T23:16:45.000Z"
        },
        {
            "id": "recMLsWbYAHxijTDF",
            "fields": {
                "contact": "@FeliciaG on twitter\n",
                "name": "Felicia Gerard",
                "aboutMe": "Expert in c++ with 10 years experience looking to help others learn",
                "language": [
                    "c++"
                ],
                "relationship": "mentor"
            },
            "createdTime": "2021-03-14T23:16:45.000Z"
        },
        {
            "id": "rec4YsxLBVpafuAx9",
            "fields": {},
            "createdTime": "2021-03-14T23:16:45.000Z"
        }
    ],
    "offset": "rec4YsxLBVpafuAx9"
}

```

<br>

#### MVP Components

```

 App
  |
 src
  |_Home -------|__ components/
                 |__ Navbar/Footer
                 |__ MentorForm.jsx (/new)
                 |__ MenteeForm.jsx (/new)
                 |__ ConnectionPage.jsx (List of Mentors with Language experience)
                 |__ About.jsx (Info about FullHouse)
                 

  
```

<br>

***

## Project Delivery

### Strengths

-I'm confident on my ability to use airtable and work with the API

### Weaknesses

-My main weakness is connecting my components to my app and making sure they are rendered properly.

### Opportunities

-Since this projects allows me to use everything I learned in the past unit, it's a great opportunity to solidify concepts I was shacky on.

### Threats

Im in the process of managing my time better as it pertains to running into errors and unexpected issues. When I get stuck, it's really hard to move on or at least handle another part of the project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
