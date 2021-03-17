export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/mentorMentee`
export const blogURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/blog` 
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}
