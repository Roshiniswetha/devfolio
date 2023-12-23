import React from 'react'
import { WORK } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div className='py-8'>
        <p className="uppercase tracking-widest text-gray-light-1 seq">
          Career
        </p>
        <div className="text-darkTeal-500 m-2">
          <p className="seq text-justify">
            Blending a diverse background, I've actively crafted technical expertise through university studies, intensive coursework, bootcamps, hands-on projects, and self-directed learning, setting the stage for a successful transition into front-end development.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {WORK.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                date={experience.range}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-darkTeal-500 text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-darkTeal-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company}
                  </p>
                  <ul
                    className='text-darkTeal-500 font-medium text-base list-disc"'
                    style={{ margin: 0 }}
                  >

                    {(experience.responsibilities).map(responsibility=>{
                      return(
                      <li>{responsibility}</li>)
                    })}
                  </ul>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
  )
}

export default Experience