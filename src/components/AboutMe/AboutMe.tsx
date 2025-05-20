import React from 'react'
import Text from '../Elements/Text'

const AboutMe = () => {
    const backgroundBody = `
    I'm a recent graduate from UT Austin, where I earned my Bachelor’s in 
    Computer Science and Applied Statistical Modeling with High Honors (GPA 3.97). 
    I’ve always been drawn to the intersection of systems, machine learning, and 
    full stack development — whether it's building low-level kernels, 
    experimenting with neural networks, or crafting modern web apps. Before 
    college, I graduated as valedictorian of my high school class. I’ve continued 
    to push myself academically and technically, and I’m especially excited about 
    the future of machine learning. I hope to pursue a master’s degree in the field 
    one day and keep exploring how intelligent systems can be designed, optimized, and 
    scaled in the real world.`
    const skillsBody = ''
    const experiencesBody = ''

    return (
        <>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '16px',
                    padding: '16px'
                }}
            >
                <Text title="Background" body={backgroundBody} center={false} />
                <Text title="Skills & Coursework" body="Hello" center={false} />
                <Text title="Experiences" body="Hello" center={false} />
            </div>
        </>
    )
}

export default AboutMe
