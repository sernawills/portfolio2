---
cover:
    title: UXAI - Explainable AI 
    description: An interface to empower users during the usage of AI technologies. A research and design project made for my application to my current university. 
    cover_image: xai_cover.png
    tags: 
        - XUAI 
        - Research
        - Algorithmic Biases

overview: 
    box:
        box_items:  
            - heading: ROLE
              content: UX Designer, Researcher
            - heading: DURATION
              content: Three months
            - heading: TOPICS 
              content: UXAI, Algorithmic Biases
    overview_text: For the application process we were asked to choose one of the two topics they offered that year - New Normal or Artificial Intelligence. I chose AI, which later on during my research I deppened and focused on XAI - Explainable AI. Even today, a lot of the details of how AI programs work remains a black box, even for the most talented engineers. However, bringing the available information to the user in a processable way to help them understand and better judge the decision of the tool is crucial, otherwise can be really dangerous, especially in fields like medicine, law inforcement, and in general all fields were the consequences of the AI tools are high for humans. At the end of my project I presented an interface for AI programs, that allows the user to understand, judge, change, and correct the AI decision, in an intuitive, user friendly way. For the explanation of the concept I focused on two user cases - a skin cancer diagnose tool, and a social media app. 
---

## — RESEARCH 
### Defining the...problem? 
For the application project we were given complete freedom as soon as the outcome first was related to the topic to study and secondly that it was related to the topic we chose. On one side this was fun because I got to explore a lot of different spaces and topics regarding AI at first. On the other side it was challenging to narrow it down when the topic was so wide.

I started off by reading, watching, and listening as much as I could about AI for a couple of days. After this I made a list of the topics I learnt about and I was most interested in. I realized from my research the topic that was the most interesting and I found the most relevant was the topic *Algorithmic Biases* which can be defined as the lack of fairness that emerges from a computer system. This can privilege a certain group while affecting other and can come in form of racism, sexism, ageism, ableism, etc. Algorithmic biases can emerge in different ways like the design of the code itself, the way the data was collected, processed, and allocated.

### Gathering quantitative and qualitative data

After having gathered so much information about AI in general and Biases in AI and realizing how of a dangerous problematic this impose and how relatively little it is talked/worked about, I was curious about how the people around me perceive this topic. So I conducted some informal interviews and created a survey to gather some insights.

![surveydata](/images/xai_survey.png)

What I found out was that: 
- Most survey participants think that AI is going to be better than humans, however they won't be able to do social work. 
- A majority think AI will take over people's jobs. 
- Whereas most participants acknowledge the use of AI in Marketing, less than half know that it is used for humanity higher-impact areas like law inforcement, loan access and evaluation of teachers. 
- Most agree that it is important to understand better the decisions and predictions made by AI.
- The trust for AI is pretty moderate with an avarage of 6.4 in a scale from 0 to 10. 
- Most participants haven't heard about algorithmic biases before. 

## — CONVERGING
### Finding the focus in the sea of information

Thanks to the interviews, survey, and desktop research, I validated that this is an important topic. However in this point I felt a little bit lost and hopeless the more I read about it and it wasn't always clear how I as a designer could solve this problem, how I could address it, and which was the right point of view to start from. To help gain some clarity and **get into the doing** I did some brainstorming with myself focusing on two insights from my research: It is important to **understand** better the decisions and predictions made by AI and the **trust** for AI is moderate. 

![brainstorming](/images/xai_brainstorming.png)

So I realized that for this project it was more impactful to focus more on those aspects, rather than reducing the Algorithmic Biases directly. At the end of the day a big problem that also contributes to Algorithmic Biases is users not understanding how the AI program makes their decisions and predictions, what it is based on, and which type of data is used. This helped me reframe and solidify my next steps. At the end of this stage I decided what I was going to design: a tool that lets the user hover over any AI-given result and provides insights about the why. 

### UXAI: What I was looking for

After having this idea and a more focused point to work from, I was curious to know how others have approached this in the past, and I found that there's a field called Explainable AI that focuses on exactly that: making AI programs understandable for humans. And UXAI focuses on making AI programs understandable not only for a few humans, but designing interfaces that are understandable for the actual users of the tools.  

## — CONCEPT & WIREFRAMES 
### The Concept
A Framework that would make any AI modell explainable and provides the user with the possibility to understand the decisions, and also to proof, give feedback, and get explanations. The concept sounds ambitious (for this project we didn't have limits on how feasable it is at this moment), so I decided to choose two cases to showcase the concept: **Social Media App** and a **Tool To Diagnose Skin Cancer**.

### Wireframes 
It was important that the tool is intuitive, and graphic. So that the user can grasp as much information as possible in as little time as possible. Especially for the Diagnose Tool it was important, since the user group would likely dispose of little time. The tool should also provide as much real data as possible through data visualizations. Especially the Diagnose Tool was challenging since

![wireframes](/images/xai_paperwireframesmed.png)
![wireframes](/images/xai_paperwireframessm.png)

After having a basic structure through paper wireframes, I went ahead and created Figma wireframes for each of the use cases. 

![figmawireframes-sm](/images/xai_wireframessm.png)
![figmawireframes-med](/images/xai_wireframesmed.png)


## — USE CASES & UI
### Social Media App: Why am I seeing this? 
Brittney is scrolling trhough social media when she sees an add about a laser device to remove body hair from home. She feels a little bit freaked out because she was talking about this with her friends a couple days ago and she has been researching about it in the web. She then taps on the ad once and sees a graphic interface that shows her more information about why she is seeing that ad. She realizes it's mostly because of her websearch and location. 
- images 
- link to prototype
### Skin Cancer Diagnostic Tool 
Md. Rodriguez has a patient Juana, who comes to her concerned about some stains in her skin. Md. Rodriguez uses an AI tool to help her diagnose skin cancer, so she uses it because the stains seem concerning to her. Md. Rodriguez is surprised to see that the tool suggested a low risk of cancer, and asks herself why the tool made that prediction. She tabs on the results and sees a graphic interface that shows her information about why. She quickly realizes that most the data used to train that AI tool was from US americans, and was also from a period of time were most.......
- images 
- link to prototype







