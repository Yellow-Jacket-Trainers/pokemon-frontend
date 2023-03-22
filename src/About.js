import React from 'react';
import './About.css';

class TeamMember extends React.Component {
  render() {
    const { name, role, bio, image, index } = this.props;
    const alignment = index % 2 === 0 ? 'left' : 'right';
    return (
      <div className={`team-member ${alignment}`}>
        <img className="member-image"
        src={process.env.PUBLIC_URL + image} 
        alt={name} />
        <h3>{name}</h3>
        <p><strong>{role}</strong></p>
        <p>{bio}</p>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    const teamMembers = [
      {
        name: 'Mohammed Abubakar',
        role: 'Developer/Arts Department',
        bio: "👋 Hi, I'm Mohammed Abubakar, a full stack developer at CodeFellows. I have experience in sound design and audio engineering. I am new to the tech world but im loving every minute of it.💜",
        image: '/aboutUs/mo.png',
      },
      {
        name: 'Arturo Valdez',
        role: 'Developer/Arts Department',
        bio: "Software developer specializing in front-end development utilizing Javascript, Html, CSS. Navy veteran with a background in client services, engineering, project planning and estimating. Experienced in various fields providing a positive and fresh perspective to the tech industry. Looking to make this world a better place one block of code at a time.",
        image: '/aboutUs/arturo.png',
      },
      {
        name: 'Kyle Freemantle',
        role: 'Developer/Java Department',
        bio: "I'm Kyle, and I am a software developer currently studying at Code Fellows. Prior to this I did my best work in healthcare tech, spending 7 years in increasingly complex analyst and IT support roles.  I would like to use my powers for good and go back into healthcare tech at a small or medium sized company. It is very important to me that the work I do could be helping someone else who is struggling too.",
        image: '/aboutUs/kyle.png',
      },
      {
        name: 'Miranda Lu',
        role: 'Developer/Java Department',
        bio: 'I’m a software developer with experience in finance and scientific analysis. From my past experiences, I discovered how powerful computers can be, as they can automate many monotonous processes and improve workflow efficiency. As a veteran, I enjoy team work and networking; and as a prior scientist, I look forward to starting a career in finance technology, that allows me use coding to enhance my quantitative reasoning skills.',
        image: '/aboutUs/miranda.png',
      },
      // Add more team members here...
    ];

    return (
      <div className="about-container">
        <h2>About Us</h2>
        <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={member.name}
            index={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default About;
