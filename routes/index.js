var express = require('express');
var router = express.Router();

// Mapping for root pages
router.get('/', function(req, res, next) {
  res.render('home', { 
    my_heading: 'I am Anu Bala',
    my_role: ' Full Stack Developer',
    my_designation: 'Lead Engineer @ HCL Technologies Private Limited<br>Please have a seat, scroll down, and I\'ll get you a coffee!',

    my_skills: 'My Top 4 skills',
    CSTL: 'C++',
    postgres: 'Postgres',
    frontend: 'Frontend',
    mobile_app: 'Mobile Solutions Development',

    work_ex: 'Work Experience',
    Certifications: 'Industrial Trainings',
    hcl: 'HCL Technologies',
    hcl_dates: 'July 2018 - Present',
    hcl_role: 'Lead Engineer',
    hcl_location: 'Noida, IN',

    avissol: 'Avis E Solutions',
    avissol_dates: 'Aug 2015 - July 2018',
    avissol_role: 'Senior Software Engineer',
    avissol_location: 'Noida, IN',

    emblogic: 'Emblogic',
    emblogic_dates: 'Jan 2014 - Aug 2015',
    emblogic_role: 'Embedded Linux with ARM',
    emblogic_location: 'Noida, IN',

    ducat: 'Ducat',
    ducat_dates: 'May 2012 - July 2012',
    ducat_role: 'Embedded System Tech',
    ducat_location: 'Noida, IN',

    my_projects: 'My Projects',

    trinetra: 'Trinetra',
    trinetra_details: '\o Speed up working efficiency while shooting by different models of cameras and adding new features.<br>\
    \o Worked on Model-View-Controller Design Pattern in an Agile environment.<br>\
    \o Handled the View part with a team and communicated with the Model part.<br>\
    \o Defined the UI to draw active and passive widgets, on a canvas with draggable components to make a layout.<br>\
    \o Added soft and hard key trigger events and Integrated with an existing framework for relevant feature action.<br>\
    \o Added UI views and connected for state transition, and guards on a statechart editor with provided menu and connections. Integrated with an existing framework to display active features on the camera.<br>\
    \o Maintained existing camera product by adding new features and resolved JIRAs, verifying existing features, making changes in code, build using Ares and Jenkins.<br>\
    \o Used GIT for version control.<br><br>',

    ngucccloud: 'NGUCC Cloud',
    nguccclouddetails: 'o Design/Development/Integration/Testing of a company-wide modern cloud-based multilingual Next-Generation Unified Call Center(NGUCC) solution for multimedia communication.<br>\
    o Cloud implementation for an agent-centric solution by adding domains.<br>\
    o Multilingual interface implementation for language translation in solution.<br>\
    o Supported VOIP calls using SIP protocol and Asterisk Communication system.<br>\
    o Implemented cost-saving solutions by solving the overgrowing problem of underutilization of servers in the data centers. Implemented load balancing across multiple servers, and configured trunks.<br>\
    o Designed and implemented the resource(trunk) allocation to VOIP calls, algorithm to access the configuration request upon call via java mediator module, completed request and sent response back to mediator.<br>\
    o Built a call scheduling system to activate the call-center agents at specified time intervals and with a better connect ratio leveraging REDIS and PostgreSQL.<br>\
   ',

    ngucc2: 'NGUCC 2.x',
    ngucc2details: 'o Developed/Modified/Integrated/Tested different versions of the product.<br>\
    o Agent high availability and better connect ratio is ensured through dialer with different methods, call types, lead recycling rules, callbacks, campaign call routing, alternate dialing.<br>\
    o Utilized all the channels of communication like Voice(VOIP) Calls, SMS, Email, and Chat(multimedia).<br>\
    o Designing/Development/Integration of software: SMS Dialer, SMS Office, Oliva CRM, and Ticketing System.<br>\
    o Supported multiple call centers for the deployment.<br>\
    o Worked on the following:<br>\
    Communication Techniques: Web Sockets, Microhttpd, AGI Server, Curl (URL Posting), Gateway (Message) APIs, VMIME(Mail).<br>\
    Used: Asterisk-based trunks configuation, C/C++/Html5/CSS/Javascript,JSON/XML,AJAX, Postgresql/Redis,Monit\
    ',

    ticketing: 'Ticketing System',
    ticketingdetails: 'o Development using HTML/CSS/JavaScript/AJAX/XML/C++/POSTGRES.<br>\
    o Test Area - API testing and Web Services (REST, HTTP, JSON).<br>\
    o Built Team Management Module(similar to JIRA) to generate new tickets based on internal and external issues of the organization.<br>\
    o Implemented Email functionality with a mime library for various organization teams depending on their assigned task. Worked on various production issues and implemented ad-hoc functionalities within very tight deadlines.<br>\
    o Implemented Bulk CSV import functionality to reduce setup time and saved data to redis.<br>\
    o Implemented service management system using C/C++/HTML/JS/AJAX/SHELL SCRIPTING/PYTHON/MONIT.<br>\
    o Collaborated with Business Analyst to get business requirements, and designed and implement them.<br><br>',

    full_name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone',
    company: 'Company',
    message: 'Message',
    contact_form_btn: 'Send',

    social_fb_url: 'https://www.facebook.com/anu.kamboj.509',
    soical_twitter_url: 'https://twitter.com/AnuBala22357503',
    social_linkedin_url: 'https://www.linkedin.com/in/anu-bala-8b4a72bb/',
    social_instagram_url: 'https://www.instagram.com/anu.kamboj.509/',
    social_github_url: 'https://github.com/anubala331',

    potfolio_link: 'https://anubala-portfolio.herokuapp.com/'
  });
});

// Mapping for about me
router.get('/about-me', function(req, res, next) {
  res.render('about-me', { 
    initials: 'ABala',
    tab_home: 'Home',
    tab_skills: 'Skills',
    tab_projects: 'Projects',
    tab_contact: 'Contact Me',
    tab_about: 'About Me',
    tab_blog: 'Blog',
    about_me_content: '\• Proficient in Backend: C, C++, C#, NodeJS(JRE V8), Design Patterns, Memoization, Databases.<br>\
    \• Databases: MongoDB, POSTGRES, REDIS and MS SQL.<br>\
    \• Proficient in Frontend: HTML, XAML, Javascript(ES6), CSS.<br>\
    \• Familiar with: Java, PHP, Shell Scripting, Python, Swift, JSON, XML.<br>\
    \• Frameworks: Server centric Ajax, front-end AngularJS10, back-end ExpressJS.<br>\
    \• Platforms: Linux (Ubuntu and Fedora) and Windows, Android, IOS.<br>\
    \• Communication System: Asterisk15.x.<br>\
    \• Cloud computing: Azure Devops.<br>\
    \• CI/CD Tools: Jenkins, Heroku, Ares.<br>\
    \• Designing Tools: Draw.io, Visio, Visual Paradigm and Adobe XD.<br>\
    \• APIs – Google Map, send_sms, query_incoming_sms, REST.<br>\
    \• Libraries: zdb, curl, gnu, pjsip(calling), vmime(mailing).<br>\
    \• Networking Services: http, ssh, scp, telnet, ftp, udp, vsftpd.<br>\
    \• Protocols: tcp, udp, sip, http, pop3, imap, smtp, FTP, https.<br>\
    \• Version Controls: RCS, GitHub, SVN.<br>\
    \• Active Development tools: State Chart Editor, Epseed Conductor.<br>\
    \• Debugging Tools: gdb, valgrind.<br>\
    \• IDE: Netbeans, XCODE, Android Studio, VS Enterprise, VS Code, SSMS.<br>\
    \• Technologies: Websockets, Microhttpd, AGI Server, Gateway, SIP Trunk Configuration.',
   });
});

// Mapping for blog
router.get('/blog', function(req, res, next) {
  res.render('blog', { 
    initials: 'ABala',
    tab_home: 'Home',
    tab_skills: 'Skills',
    tab_projects: 'Projects',
    tab_contact: 'Contact Me',
    tab_about: 'About Me',
    tab_blog: 'Blog',
    about_me_content: 'All
    QueryA PROGRAM TO SEE BEHAVE OF POINTER WHEN PUTTING ITS ADDRESS INTO ANOTHER POINTER',
   });
});
module.exports = router;