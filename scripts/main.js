const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome, and thank you for visiting and viewing my profile!");
  await delay(700);
  createText("Starting the server...");
  await delay(1400);
  createText("You can run several commands:");

  createCode("whois jared", "A bit about me.");
  createCode("coverletter", "A brief coverletter");
  createCode("ls -resume", "My professional Resume");
  createCode("skills -a", "Professional Skills");
  createCode("attributes", "Graduate attributes");
  createCode("transcripts -du", "Certificate and educational transcripts");
  createCode("mkdir projects", "Project's I've participated in");
  createCode("goals -short OR goals -long", "Short & long-term goals");
  createCode("manpages", "List of commands");
  createCode("clear", "Clean the terminal.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/jared-stark";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "manpages"){
    trueValue(value);
    
    createCode("whois jared", "A bit about me.");
    createCode("coverletter", "A brief coverletter");
    createCode("ls -resume", "My professional Resume");
    createCode("skills -a", "Professional Skills");
    createCode("attributes", "Graduate attributes");
    createCode("transcripts -du", "Certificate and educational transcripts");
    createCode("mkdir projects", "Project's I've participated in");
    createCode("goals -short OR goals -long", "Short & long-term goals");
    createCode("manpages", "List of commands");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "whois jared"){
    trueValue(value);
    createText("Hi, I'm Jared Stark. I am a recent graduate of the University of Southern Queensland and currently based in the United States. I spent my early years out of school as a Police Dispatcher for the Queensland Police, and later in Jefferson County Colorado. I started work towards my goal of obtaining a computer science degree to level up my skills, and was fortunate to gain opportunities at Ninja One as a Support Engineer, and more recently with Axon Enterprise as a Software Support Engineer, combining my passion for community safety and technology. I am a dog-dad to a fun loving, albeit stubbon, dalmatian, and in my free time, enjoy working on home improvement projects, catching up on movies, and up-cycling furniture. Looking forward to getting to know one another better and talking soon!")
  }
  else if(value === "coverletter"){
    trueValue(value);
    createText("Thank you for viewing my profile! I am currently seeking an entry level backend software engineer role to build an amazing future together. With a solid background in software support and a Bachelor's degree in Information Technology, majoring in Applied Computer Science & Network Security, I am confident in my ability to contribute to your team and help drive success.<br><br>Throughout my career, I have actively sought opportunities to enhance customer satisfaction and improve operational efficiency. At Axon Enterprise, I proactively monitored the support queue, promptly resolving client issues and improving overall sentiment. By collaborating effectively across teams, I successfully resolved complex issues and contributed to major incident resolution. Moreover, I constantly sought feedback and built strong inter-organizational relationships, fostering an environment of continuous learning and knowledge sharing.<br><br>During my tenure at NinjaOne, I honed my troubleshooting skills while providing exceptional support to a diverse international customer base. Through root-cause analysis and log evaluation, I successfully resolved tickets and achieved an overall 88% CSAT rating. I also played a key role in updating internal procedures and the customer knowledge base, ensuring the availability of accurate and up-to-date information for both customers and coworkers.<br><br>Beyond my technical expertise, I have demonstrated strong leadership and communication skills throughout my career. As a Queensland Police 000 dispatcher I managed police communications during the Gold Coast 2018 Commonwealth Games. This experience required exceptional coordination, speed, and accuracy in handling critical situations. Additionally, my tenure as a store manager at Tile City allowed me to refine my problem-solving abilities, address concerns from both staff and customers, and create exceptional customer experiences.<br><br>My technical skills encompass a wide range of software and coding languages, including VSCode, Slack, Jira, Azure, O365, SalesForce, Git, and more. I am proficient in JSON, Python, Bash, PowerShell, C, C#, SQL, HTML, JavaScript, PHP, and jQuery, allowing me to adapt quickly to new environments and technologies.<br><br>What sets me apart is my passion for programming and my drive to solve real-world problems. I thrive in dynamic and collaborative environments, and I continuously seek opportunities to add value to the team. Whether it's proactively identifying improvements, devising innovative solutions, or contributing to existing projects, I am committed to delivering real results and exceeding expectations.<br><br>I am excited about the possibility of job the future and contributing any software platform. My unique combination of technical expertise, problem-solving skills, and passion for programming make me a valuable asset to any team. My dedication, enthusiasm, and positive attitude will enable me to excel in any entry programmer role.<br><br>Thank you for reading my cover letter and I look forward to discussing how my skills and experience align with business!<br><br>Sincerely,<br>Jared Stark")
    createText("<a href='https://drive.google.com/file/d/17D5HvEuhsMNE94Pi6sRU9u2pMi218MsC/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> download my coverletter</a>")
  }
  else if(value === "ls -resume"){
    trueValue(value);
    createText(" Jared Stark<br>(323) 275-7237  |  jared_stark@icloud.com<br><br>Education<br>Bachelor of Applied Computer Science & Network Security<br>University of Southern Queensland | 2017 - 2023<br><br>Accomplishment<br>- Collaborated to identify and build alerting solutions for major SaaS incidents, aiming to transition from reactive to proactive responses<br>- Teamed up to produce complex 1:3:1 CM proposal that was received positively & under consideration<br>- Took initiative & identified case management improvements at NinjaOne that were implemented, resulting in SLA achievement increasing from 82% to 91% <br>- Selected from across the state to manage all police communications for 2018 Commonwealth Games<br>Experience<br><br>Software Support Engineer - Axon Enterprise | Nov 2022 - Current<br><br>- Sought feedback and built inter-organizational relationships to learn from, and teach others<br>- Actively monitored queue, communicating with clients promptly to resolve issues & improve sentiment<br>- Collaborated effectively across multiple teams to resolve issues or major incidents<br>- Proactively sought opportunities to contribute to solving real problems and add value to the team<br>- Initiated discussions to better support customers with environmental version control and independently devised a solution to present to management<br><br>Software Support Engineer - NinjaOne | May 2022 - November 2022<br><br>- Resolved tickets for SaaS RMM software, serving 7,000+ international customers, achieving 88% CSAT<br>- Evaluated complex customer issues through root cause and log analysis, reproduction and research<br>- Troubleshoot SAML and API issues, along with Firewall/Antivirus Whitelisting and integration problems<br>- Developed and updated internal procedures and customer knowledge base<br><br>911 Emergency Communications Dispatcher - Jeffcom 911 | January 2020 - May 2021 and Queensland Police Service | January 2012 - August 2019<br>-<br> Provided CAD training and developed Ul feedback, leading to new functionality and improved usability<br>- Operated CAD dispatch system with speed and accuracy, appropriately documenting field activity<br>- Maintained and updated criminal, driver's license and warrant information in law databases<br>- Recognized as SME and selected to manage police communications for 2018 Commonwealth Games<br><br>Store Manager - Tile City | June 2008 - January 2012<br><br>- Addressed complaints or concerns from staff & customers in-line with business processes and policies<br>- Provided exceptional customer experiences, and demonstrated service expectations to employees<br>- Reduced productivity, sales, staffing & KPI reporting time by 60% through process improvements<br>- Increased retention by giving realistic expectations and recommending candidates with shared goals<br><br>Software - VSCode, Slack, Jira, ZenDesk, Azure, O365, SalesForce, Git, Ubuntu/Windows/MacOS<br><br>Coding - JSON, Python, Bash, PowerShell, C, C#, SQL, html, JavaScript, PHP, jQuery")
    createText("<a href='https://drive.google.com/file/d/1-o8tgx2kkj8YuBc253m1C5AYxbtDUvvT/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> download my resume</a>")
      }
  else if(value === "skills -a"){
    trueValue(value);
    createText("Some of the key Professional Skills I bring to the table are:<br>- Keen problem-solver who enjoys the challenge of using my analytical skills to understand and resolve complex issues<br>- Refined SQL understand and experience working with big data and complex queries<br>- Effective version control knowledge, having devised and built an automated version control system for customer enviromental forms from the ground up<br>- Experience working in an agile development environment follow CI/CD framework<br>- Most importantly, I strive to remain a humble team-player who actively seeks opportunities to join forces with other team members and tackle highly complex issues, seeing them through to resolution")
  }
  else if(value === "attributes"){
    trueValue(value);
    createText("Throughout my time at UniSQ, I have focused to build and represent the essential graduate attributes that are expected of any IT professional. I have learnt to be resourceful and independent, and consistently sought feedback from teachers and peers, working to have a knowledge that goes beyond just the textbook, but finding ways to be up-to-date on industry trends and emerging technology. This only helped to become a more critical and creative thinker and allowed me to confidently take on complex problems and build unique with innovative solutions.<br>Working collaboratively has been encourage throughout my studies, and has been a major contributor to my success. It provided an environment to develop a wide range of positive communication skills and styles that I can use throughout my professional career. I also gained a thorough insight into ethical practices and responsibilities that helped define me as someone who has great respect for integrity and social responsibility.<br><br>I enjoyed opportunities to apply my knowledge in my workplace in projects, as well complete a capstone industry projects for a real client as part of my final semester studies. These experiences also helped provide an appreciation for diversity and championing inclusivity and understanding for all cultures and communities.<br><br>My time as UniSQ has developed key graduate attributes that have helped me become a versatile and valuable employee. I feel confident in my knowledge and abilities, and have an excitement to share them and contribute to building an exciting future for everyone.")
  }
  else if(value === "transcripts -du"){
    trueValue(value);
    createText("<a href='https://drive.google.com/file/d/1wwG-ZzNl2gNbgHzQ4gOHdhjxZPGYquJC/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> download my unofficial transcript</a>")
    createText("<a href='https://drive.google.com/file/d/1N-ONFoP4iLoUZpT2CPrlkozAXmieYr5y/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> json essentials certificate</a>")
    createText("<a href='https://drive.google.com/file/d/1A_HIN2iB-K0_ZbH49GhUE8K9G6yU55g4/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> network forensics certificate</a>")
    createText("<a href='https://drive.google.com/file/d/14D-g6TtnI2A8anmM0xQzjUK6g0V-UA55/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> advanced scrum certificate</a>")
    createText("<a href='https://drive.google.com/file/d/1qBpCnjltnkxWl3Q79p7SEJUarxuSwlP-/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> learning splunk certificate</a>")

  }
  else if(value === "mkdir projects"){
    trueValue(value);
    createText("<a href='https://drive.google.com/file/d/1-o8tgx2kkj8YuBc253m1C5AYxbtDUvvT/view?usp=sharing' target='_blank' style='color: #2daccf; text-decoration: underline;'><i class='fab fa-github white'></i> download my resume</a>")
  }
  else if(value === "goals -short"){
    trueValue(value);
    createText("My short-term goal is to gain leadership experience and transition from my current role within the team by apply for the software support engineer lead position. To do this, I am always looking for opportunities to take on extra responsibilities, which I am currently doing as a mentor for new engineers, as well as starting two projects to improve processes and our SLA times. I have been expressing an interest intaking on some leadership responsibilities so I can show my abilities and get feedback from co-workers and other supervisors. I consistently ensure my technical and problem-solving skills are above average, and always to be as collaborative as possible within the team and organization.")
  }
  else if(value === "goals -long"){
    trueValue(value);
    createText("As a current software support engineer, my long term aspiration is to become a product manager. I plan for my career to transition from a technical role to a strategic and customer-centric leadership position. Building upon my strong foundation in software support, I aim to use my technical knowledge and understanding of the customer’s needs to drive product development and shape it’s future. I would like to lead a cross-functional team and collaborating with other departments to make our products grow into the the leading industry standard. I believe by using data-driven insights to develop and create product strategies we can exceed the expectations of our customers.<br><br>To achieve this growth, I plan to actively seek opportunities to increase my knowledge in product management methodologies and gain a better understanding of UX design. I also want to improve upon my leadership skills and start to think more strategically. I have a strong passion for innovation and am always looking for opportunities for improvement, which will help me be successful in achieving those goals.")
  }
  else if(value === "whois" || value === "jared"){
    trueValue(value);
    createText("Did you mean: whois jared?")
  }
  else if(value === "ls" || value === "resume" || value === "-resume"){
    trueValue(value);
    createText("Did you mean: ls -resume?")
  }
  else if(value === "skills"){
    trueValue(value);
    createText("Did you mean: skills -a?")
  }
  else if(value === "transcripts"){
    trueValue(value);
    createText("Did you mean: transcripts -du?")
  }
  else if(value === "mkdir" || value === "projects"){
    trueValue(value);
    createText("Did you mean: mkdir projects?")
  }
  else if(value === "goals"){
    trueValue(value);
    createText("Did you mean: goals -R?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();