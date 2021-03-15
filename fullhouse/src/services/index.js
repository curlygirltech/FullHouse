export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mentorMentee`

export const config = {
  headers: {
    Authorization: `Bearer ${REACT_APP_AIRTABLE_KEY}`
  }
}