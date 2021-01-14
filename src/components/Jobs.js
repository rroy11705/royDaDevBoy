import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiExperiences(sort: {order: DESC, fields: strapiId}) {
      nodes {
        strapiId
        company_name
        date
        position
        description {
          id
          name
        }
        tag_line
      }
    }
  }
`

  const Jobs = () => {
    const data = useStaticQuery(query)
    const {
      allStrapiExperiences: { 
        nodes: jobs
      },
    } = data
    const [value, setValue] = React.useState(0)
    const { company_name, date, description, tag_line } = jobs[value]
  
    return (
      <section className="section jobs">
        <Title title="expierence" />
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.strapiId}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                >
                  <svg width="22" height="28" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="hexagon" d="M0.542601 2.82341L4.95388 0.155213C5.29212 -0.0517378 5.70788 -0.0517378 6.04612 0.155213L10.4574 2.82341C10.7956 3.03036 11 3.40731 11 3.81382V9.63063C11 10.0371 10.7886 10.4215 10.4574 10.621L6.04612 13.2892C5.70788 13.4962 5.29212 13.4962 4.95388 13.2892L0.542601 10.6284C0.211403 10.4215 0 10.0445 0 9.63063V3.81382C0 3.40731 0.211403 3.03036 0.542601 2.82341Z" fill="#8c5af2"/>
                  </svg>
                  <span>{item.company_name}</span>
                </button>
              )
            })}
          </div>
          {/* job info */}
          <article className="job-info">
            <h3>{company_name}</h3>
            <small className="job-date">{date}</small><br />
            <h4>{tag_line}</h4>
            {description.map(item => {
              return (
                <div key={item.id} className="job-desc">
                  <svg width="16" height="16" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="#776CE1"/>
                  </svg>
                  <p>{item.name}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    )
  }

export default Jobs
