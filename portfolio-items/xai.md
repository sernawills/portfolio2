---
cover:
    title: UXAI - Explainable AI 
    description: An interface to empower users during the usage of AI technologies. A research and design project made for my application to my university. 
    cover_image: /images/xai/xai_cover.png
    tags: 
        - UXAI 
        - Research
        - Algorithmic Biases

overview: 
    box:
        box_items:  
            - heading: CONTEXT
              content: Application Project for Interface Design Bachelor
            - heading: DURATION
              content: 8 weeks
            - heading: CHALLENGE
              content: Design an interface with either AI as a topic, using the approach of problem solving, speculating, design research or artistic practice.  
            - heading: IDEA 
              content: Interface that makes any AI modell explainable and provides the user with the possibility to understand the decisions, and also to proof, give feedback, and get explanations.
    overview_text:
---
## — RESEARCH

Even today, a lot of the details of how AI programs work remains a black box, even for the most talented engineers. However, bringing the available information to the user in a processable way to improve the understanding and judge the decision of the tool is crucial, especially in fields where the AI decisions have high consequences for humans like medicine, law inforcement, etc. At the end of my project I presented an interface for AI programs, that allows the user to understand, judge, change, and correct the AI decision, in an intuitive, user friendly way. For the explanation of the concept I focused on **two use cases - [a skin cancer diagnose tool](https://www.figma.com/proto/Y2j3vL5AQ0YHCHpXDh5krQ/medicine-Copy?page-id=0%3A1&node-id=123%3A385&viewport=325%2C48%2C0.04&scaling=scale-down&starting-point-node-id=123%3A385&show-proto-sidebar=1), and a [social media app](https://www.figma.com/proto/fayNazn9WiG2msZdxPuFfx/instagram-Copy?page-id=0%3A1&node-id=188%3A1307&viewport=325%2C48%2C0.11&scaling=scale-down&starting-point-node-id=188%3A1307)**.

### Defining The Problem

I started off by reading, watching, and listening as much as I could about AI for a couple of days. After this I made a list of the topics I learnt about and I was most interested in. I realized from my research the topic that was the most interesting and I found the most relevant was the topic *Algorithmic Biases* which can be defined as **the lack of fairness that emerges from a computer system**. This can privilege a certain group while affecting other and can come in form of racism, sexism, ageism, ableism, etc. Algorithmic biases can emerge in different ways like the design of the code itself, or the way the data was collected, processed, and allocated.

### Gathering quantitative and qualitative data

After having gathered so much information about AI in general and Biases in AI and realizing how of a dangerous problematic this impose, I was curious about how the people around me perceive this topic. So I conducted some informal interviews and created a survey to gather some insights.

![surveydata](/images/xai/xai_survey.png)

What I found out was that:

- Most survey participants think that AI is going to be better than humans, however they won't be able to do social work.
- A majority think AI will take over people's jobs.
- Whereas most participants acknowledge the use of AI in Marketing, less than half know that it is used for humanity higher-impact areas like law inforcement, loan access and evaluation of teachers.
- Most agree that it is important to understand better the decisions and predictions made by AI.
- The trust for AI is pretty moderate with an avarage of 6.4 in a scale from 0 to 10, bearing in mind how widely AI programs are used.
- Most participants haven't heard about algorithmic biases before.

## — CONVERGING

### Finding the focus in the sea of information

Thanks to the interviews, survey, and desktop research, I validated that this is an important topic. However in this point I felt a little bit hopeless because it seemed that it is not a problem that can be solved by one tool or program but rather a much deeper, rooted and spreaded issue and at this point it wasn't clear how I as a designer could address it, and which was the right point of view to start from.

To help gain some clarity and finally **get into the doing** after days of intense research I did some brainstorming with myself focusing on two insights from my research: It is important to **understand** better the decisions and predictions made by AI and the **trust** for AI is moderate.

![brainstorming](/images/xai/xai_brainstorming.png)

So I realized that improving those aspects would have a good impact in algorithmic biases by giving the user the tools to identify them in the applications they use daily. This helped me reframe and solidify my next steps. I conceptualized what I wanted to design: **a tool that lets the user hover over any AI-given result and provides insights about the why.**

### UXAI: What I was looking for

After having this idea and a more focused point to work from, I was curious to know how others have approached this in the past, and I found that there's a field called Explainable AI (XAI) that focuses on exactly that: making AI programs understandable for humans. And UXAI is the intersection between UX Design and XAI. With help of the principles found on [this website](https://www.uxai.design/) I created my concept and designs.

## — CONCEPT & WIREFRAMES

### The Concept

A Framework that would make any AI modell explainable and provides the user with the possibility to understand the decisions, and also to proof, give feedback, and get explanations.

The concept sounds ambitious (for this project we didn't have limits on how feasable it is at this moment), so I decided to choose two cases to showcase the concept: **Social Media App** and a **Tool To Diagnose Skin Cancer**. Also decided for a speculative and problem solving approach.

### Wireframes

It was important that the tool is intuitive, and graphic. So that the user can grasp as much information as possible in as little time as possible. The tool should also provide as much real data as possible through data visualizations.

![wireframes](/images/xai/xai_paperwireframesmed.png)
![wireframes](/images/xai/xai_paperwireframessm.png)

After having a basic structure through paper wireframes, I went ahead and created Figma wireframes for each of the use cases. 

![figmawireframes-sm](/images/xai/xai_wireframessm.png)
![figmawireframes-med](/images/xai/xai_wireframesmed.png)

## — USE CASES & UI

To create empathy, prototype and also to explain the concept to my audience I created personas Britney and Md.Rodriguez
![personas](/public/images/xai/personas.png)

### Social Media App: Why am I seeing this?
 
Brittney is scrolling trhough social media when she sees an add about a laser device to remove body hair from home. She feels a little bit freaked out because she was talking about this with her friends a couple days ago and she has been researching about it in the web. She then taps on the ad once and sees a graphic interface that shows her more information about why she is seeing that ad. She realizes it's mostly because of her websearch and location.

[**Link to Prototype**](https://www.figma.com/proto/fayNazn9WiG2msZdxPuFfx/instagram-Copy?page-id=0%3A1&node-id=188%3A1307&viewport=325%2C48%2C0.11&scaling=scale-down&starting-point-node-id=188%3A1307)

### Skin Cancer Diagnostic Tool

Md. Rodriguez has a patient Juana, who comes to her concerned about some stains in her skin. Md. Rodriguez uses an AI tool to help her diagnose skin cancer, so she uses it because the stains seem concerning to her. Md. Rodriguez is surprised to see that the tool suggested a low risk of cancer, and asks herself why the tool made that prediction. She tabs on the results and sees a graphic interface that shows her information about why. She quickly realizes that most the data used to train that AI tool was from US americans, and was collected in a period of time were it was hard to get accurate and diverse data.

[**Link to Prototype**](https://www.figma.com/proto/Y2j3vL5AQ0YHCHpXDh5krQ/medicine-Copy?page-id=0%3A1&node-id=123%3A385&viewport=325%2C48%2C0.04&scaling=scale-down&starting-point-node-id=123%3A385&show-proto-sidebar=1)

## — LEARNINGS

### Final Thoughts & Learnings

During this project I learnt a lot about Prototyping in Figma, Algorithmic Biases, Artificial Intelligence and also discovered the UXAI field. I also got some new insights about skin cancer, how social media ads work, and much more. I got accepted at my current university thanks to this project and I am glad I was able to work on this.