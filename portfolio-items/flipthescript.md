---
cover: 
    title: Flip The Script
    description: An online platform that allows the user to get a gender neutral or gender flipped version of any text input.
    cover_image: /images/fts/logofinal.png
    tags: 
        - User Research
        - Logo Design
        - Figma

overview: 
    box:
        box_items: 
            - heading: CONTEXT
              content:  UX Design Bootcamp project at TechLabs Berlin
            - heading: TEAM
              content: Three other participants from TechLabs from Web Development and Data Science
            - heading: DURATION 
              content: 1 month 
            - heading: CHALLENGE
              content: Participants pitched different project ideas to choose from. This was one of the ideas from a participant and I voted for this one 
            - heading: IDEA
              content: A tool that allows users to translate any given text into gender neutral, or to flip the pronouns of the text. 

---
## PROCESS

### The Problem

The written information in the internet can be heavily male gendered and/or biased and it can become harmful for some individuals. Other pain points include the lack of a reliable and easy to use platform where to find resources on the topic.

### The Solution

Offering the user a platform with a tool to input text, and get a version that is neutral or with the pronouns flipped. Also a predictor to know how gender biased an article might be based on the source, author, etc.

## Building Empathy

### Survey Findings

The questions I asked were based on my research on the topic: readings, videos, academical papers, etc. The survey helped me to improve the personas and create new scenarios.
The main insights we got are:

- Our target group will be young people in their 20s and early 30s.
  
- About 78% of the participants agree that how texts are written in a binary way, also often mostly using male pronouns as the standard, affect the way we perceive gender.
  
- Most participants would like to have a tool that autmoatically neutralizes the pronouns used in online resources.
  
- There is a high preference for a web extension that translates every resource on the internet.

![survey1](/images/fts/survey1.png)
![survey2](/images/fts/survey2.png)
![survey3](/images/fts/survey3.png)
![survey4](/images/fts/survey4.png)
![survey5](/images/fts/survey5.png)
![survey6](/images/fts/survey6.png)

### Personas

 Alex, Louisa, and Jeff were the personas I referred to during the whole process. I realized creating personas is a powerful tool, it allowed me to empathize with the user, stimulate my creativity, and consider other aspects I didn't before.

With help of the personas I also created scenarios. Same as with the personas, I created them at first to help me articulate the questions of the survey and interview. And after the findings, I created new scenarios. I can say, the user research phase was definitely an iterative process.

![persona1](/images/fts/persona1.png)
![persona2](/images/fts/persona2.png)
![persona3](/images/fts/persona3.png)

### Creating requirements and strategy

In the **strategy board** I stated all different possible requirements, based on the user research, and organized it by **what is the most important for the user**, and what is **feasible** for my team bearing in mind constraints like time and skills.

![opportunities](/images/fts/opportunities.png)

As we see although the web extension had the highest importance for our user, the feasibility was low. That's how we decided to implement the option to input text and get a gender translation, the information and statistics.

Knowing which requirements we have and also what's the most and least important for the user and what Flip The Script's goal is, I started thinking about the information architecture.

### Information Architecture

Based on the information gathered during the user research phase and our opportunity board, I started to prioritize. For example the **pronoun convertor** is of big importance for the user, as well as for us. Therefore this is going to be our main feature and it needed to be present in a way that caught the attention of the user, and **give them a call to action**, at all times.

%%maybe creenshot of the button up where there is the call to action.

During the process, I asked myself the following guiding questions:

- What is the visitor most interested in? What is the most important/relevant of the project and also for the participants of the survey?
  *The flipping the pronouns of the texts.*

- What would the content be?
  *The flipping feature (translator), the statistics, information about why this is important, and about us.*

- How long is it? How and where can it be presented?
  *Progressive disclosure. So start with the z layout, in the home page you have as little information as possible that allows you to take the action that the user is most interested in: so the flipping feature.*

- How do you structure it?

For this answer I tried doing a decision path diagram.

![arquitecture](/images/fts/arquitecture.png)

### Making UI Decisions

I started to do fast, low fidelity, paper wireframes. I didn't use a pencil to not be tempted to erase anything, and went for quantity over quality.

I also created an information architecture plan, as well as the user paths which helped me make some decisions:

- Modified **Z Layout** for the landing page, **calling the user to action** (in this case to our convertor, which is an essential feature).
  
- There's in total two call to action in the landing page, one in the top right corner, and one in the center of the page.
  
- I knew before the call to action, we needed to add some **convincing and persuadable text** first.
  
- The **order of the menu items** needed to be based on the **priority features for the user**. The least relevant ones were placed in the middle of the menu bar, since elements in the middle don't get as much attention.

%%some sketch of what i mean

- The convertor needed to be simple, yet functional. The user needed to be able to use it fast, yet the other options should be easy to discover.

- For the predictor page, that we decided as an add on to our project, I decided to use progressive disclosure.

- The final design has a "default" option (flip the pronouns to opposite gender) for the user to just start using it right away, and in case they want to change it to neutral pronouns they can. So no thinking, just using.

![sketch1](/images/fts/s1.png)
![sketch2](/images/fts/s2.png)
![sketch3](/images/fts/s3.png)
![sketch4](/images/fts/s4.png)

### Wireframes

I then started working on low fidelity wireframes with Figma. This was useful to organize a bit better my thoughts and solidify our decisions until then. This was useful to identify better the user paths, and layout.

![wireframes](/images/fts/wireframes.png)

### Logo

 The logo needed to represent gender binarity and non binarity at the same time. I needed to represent gender in a way that is still familiar and recognizable to the potential user of our application, but that at the same time make them feel like something is different, intriguing and slightly uncomfortable.

With those thoughts in mind I looked for inspiration. After many iterations I chose 10 that I later draw again in Figma. I asked my team to vote for their favorite. And that's how we chose our logo.

![logos](/images/fts/logosketches.png)
![voting](/images/fts/logovoting.png)

The circular part I knew the logo needed to have represents fluidity. The final logo then means flexibility, yet inspires trust, and gives a sense of security, of being safe, since it has an abstraction of the gender symbols, which make it recognizable, yet different and intriguing due to its fluty.

![logofinal](/images/fts/logofinal.png)

### UI Design

The data visualizations were challenging, but I am happy I tried it out. I created our own style, with the multiple objects like the bubbles by trying new things out and orienting me every time with the personas and our goals as Flip The Script.

Our application changes colors every time the user ends up in a new page. This simbolizes change and fluidity. Yet the design elements are consistent, giving this feeling of trust and familiarity to the user. This is just another example on how the whole design reflects our goals and vision as Flip The Script.

%%video of the website?

check the Figma prototype:

### Challenges & Learnings

- Communication is more important than we actually think it is.
  
- Although the design process can get messy, finding organization in the disorganization is key for success.
  
- Testing is important.
  
- Iteration is an incredible tool. Don't get in love with any idea or design.
  
- Knowing which questions to ask isn't as easy as it seems.
  
- Most of the user decisions are influenced by a lot of factors we wouldn't think they would. Being good at this means being aware of those little details.
  
- Learnt a lot on how to make better surveys.
