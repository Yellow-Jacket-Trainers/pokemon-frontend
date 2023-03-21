import React from 'react';

class TeamMember extends React.Component {
  render() {
    const { name, role, bio, image } = this.props;
    return (
      <div>
        <img src={image} alt={name} />
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
        bio: "👋 Hi, im Mohammed Abubakar, a full stack developer at CodeFellows. I have experience in sound design and audio engineering. I am new to the tech world but im loving every minute of it.💜",
        image: 'https://example.com/john.jpg',
      },
      {
        name: 'Arturo Valdez ',
        role: ' ',
        bio: ' ',
        image: 'https://example.com/jane.jpg',
      },
      {
        name: 'Kyle Freemantle ',
        role: ' ',
        bio: ' ',
        image: 'https://example.com/jane.jpg',
      },
      {
        name: 'Miranda Lu ',
        role: ' ',
        bio: ' ',
        image: 'https://example.com/jane.jpg',
      },
      // Add more team members here...
    ];

    return (
      <div>
        <h2>About Us</h2>
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
          />
        ))}
      </div>
    );
  }
}

export default About;
