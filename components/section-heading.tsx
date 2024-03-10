import React from 'react'

type SectionHeadingProps = {
    heading: String
};

export default function SectionHeading({heading} : SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8'>{heading}</h2>
  )
}
