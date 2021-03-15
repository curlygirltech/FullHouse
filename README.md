### Project Name 
FullHouse

### Description

FullHouse is a mentoring app for beginner coders connect with industry leaders who specialize in your coding language. Post a message as a mentor or mentee, best times to chat, and languages you specialize in. Members can enter rooms based on their language of choice and contribute to the blog.     
<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

Mobile Home screen: https://wireframe.cc/hx00vJ
Mobile Mentor/Mentee screen: https://wireframe.cc/5nrgFn

- Desktop Landing

![Dummy Link](url)

- Desktop Body

![Dummy Link](url)

- Desktop Resource Index

![Dummy Link](url)

- Desktop Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

<br>

### MVP Goals
-home page with clickable links to navigate through app
-use airtable to get data of mentors and mentees
-update/delete data using airtable 
<br>

#### PostMVP

- "Contribute to blog" feature
- Create rooms for each language 

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
| Proposal                  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Styling Homepage          |    H     |      2hrs      |     2hrs      |    2hrs     |
| Component Setup           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Airtable setup            |    H     |      3hrs      |      1hr      |     1hr     |
| Clickable links           |    H     |      3hrs      |      1hr      |     1hr     |
| Footer                    |    H     |      3hrs      |     3hrs      |    3hrs     |
| Mentee Form               |    H     |      3hrs      |     1 hr      |    1 hr     |
| Mentor Form               |    H     |      3hrs      |     1 hr      |     1hr     |
| Data creation/update      |    H     |      3hrs      |     3hrs      |    3hrs     |
| Delete Data               |    H     |      2hrs      |      1hr      |     1hr     |
| Post Data                 |    H     |      3hrs      |      1hr      |     1hr     |
| Navbar                    |    H     |      3hrs      |      1hr      |     1hr     |
| Component CSS             |    H     |      3hrs      |     4hrs      |    4hrs     |
| Total                     |    H     |      36hrs     |     35hrs     |    35hrs    |

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
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
