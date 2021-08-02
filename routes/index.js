var express = require('express');
var router = express.Router();

// Mapping for root pages
router.get('/', function(req, res, next) {
  res.render('home', { 
    my_heading: 'I am Parikshit Murria',
    my_role: ' Backend Developer',
    my_designation: 'Senior Engineer @ Expedia Group',

    my_skills: 'My Skills',
    java: 'Java',
    mobile_dev: 'Mobile App Development',
    frontend: 'Frontend',
    agile: 'Agile',

    work_ex: 'Work Experience',
    expedia: 'Expedia Group',
    expedia_dates: 'Apr 2018 - Present',
    expedia_role: 'Senior Engineer',
    expedia_location: 'Gurgaon, IN',

    calient: 'Calient Tech.',
    calient_dates: 'Nov 2015 - Apr 2018',
    calient_role: 'Software Engineer',
    calient_location: 'Bangalore, IN',

    hp: 'Hewlett Packard',
    hp_dates: 'Jan 2014 - Nov 2015',
    hp_role: 'Software Engineer',
    hp_location: 'Bangalore, IN',

    seasia: 'Seasia',
    seasia_dates: 'Jul 2013 - Jan 2014',
    seasia_role: 'Intern',
    seasia_location: 'Mohali, IN',

    my_projects: 'My Projects',

    vap: 'Virtual Agent Platform',
    vap_1: 'Led Design/Development of a company-wide solution for Identity Access management across all tools and service',
    vap_2: 'Functioned on multiple identities providers and SSO solutions using Okta, AWS Cognito, and ADFS',
    vap_3: 'Implemented OAuth 2.0 flows - Auth Code and Client credentials',
    vap_4: 'Worked on a single solution for auditing change events in services using the dynamic Kafka streams',
    vap_5: 'Implemented generic resource versioning state machine for rules framework',
    vap_6: 'Implemented various monitoring tools for the productionization of IAM applications',

    labm: 'Lab Manager',
    labm_1: 'Working on Lab Manager, this is a smart solution to manage various devices to connect devices through the optical switch layer',
    labm_2: 'Designed and implemented the resource allocation (RA) subsystem and algorithm to assess user request and allocate resources (OCS ports) to facilitate user topology request',
    labm_3: 'Built a scheduling system to activate and deactivate topologies at a specified time intervals leveraging REDIS and PostgreSQL',
    labm_4: 'Defined the UI to draw topologies on a canvas with draggable components and connections using angular JS. Integrated with an existing framework to activate and deactivate relevant cross-connects on the optical switch',
     
    voy: 'Voyager',
    voy_details: '<ul><li>Voyager, this is one of the agent tools made available to agents working in various call centers for Expedia to help customers with their bookings.</li><li>Implemented Email functionality with custom templates for various bank partners depending on their needs</li><li>Worked on various production issues and implemented ad-hoc functionalities within very tight deadlines</li><li>Visited multiple call centers for the launch support of bank partners like AMEX and RBC</li></ul>',

    sapp: 'Single Access Partner Portal (SAPP)',
    sapp_details: '<ul><li>Working on Single Access Partner Portal (SAPP), this provides a simple, unified, and consolidated interface that allows a single-entry point for all Vodafone’s local markets and Indirect Partners</li><li>Implemented Single Sign-On and Logout for the portal on Oracle IDM. Built users provisioning service to provision user in Oracle Internet Directory (OID) integrated LDAP</li><li>Built DSML service and various Rest based Webservices. Also Integrated LDAP APIs</li></ul>',


    full_name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone',
    company: 'Company',
    message: 'Message',
    contact_form_btn: 'Send',

    social_fb_url: 'https://www.facebook.com/Pprike',
    soical_twitter_url: 'https://twitter.com/ParikshitMurria',
    social_linkedin_url: 'https://www.linkedin.com/in/pmurria/',
    social_instagram_url: 'https://www.instagram.com/pprike/',
    social_github_url: 'https://github.com/priked',

    potfolio_link: 'https://parikshit-portfolio.herokuapp.com'
  });
});

// Mapping for about me
router.get('/about-me', function(req, res, next) {
  res.render('about-me', { 
    initials: 'PMurria',
    tab_home: 'Home',
    tab_skills: 'Skills',
    tab_projects: 'Projects',
    tab_contact: 'Contact Me',
    tab_about: 'About Me',
    about_me_content: 'An Accomplished Web Application Developer with 7+ years of experience specializing in Backend development. A clear understanding of REST-based Micro-service architecture. Understanding of MVC Architecture and DesignPatterns.<br><br>Hands-on Experience in database systems. Worked Extensively on Amazon Web Services. Proficient with Datastructures and algorithms. Worked in SCRUM Agile development environment.<br><br>An Enterprise Champion, technically sophisticated, presentable, good orator, team leader & a solutions expertwith documented strength in building sustainable executive relations at the client-side.<br>An Engaging communicator skilled in building trust & relationships. An Impassioned leader who mentors with apurpose & understands that strong working relationships create great teams and produce exceptional results</p>',
  });
});

module.exports = router;