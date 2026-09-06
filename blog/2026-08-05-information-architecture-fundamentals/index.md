---
slug: information-architecture-fundamentals
title: Information Architecture Fundamentals for UX.
authors: [raghavendra]
tags: [UX, IA, User Experience Design, Information Architecture]
draft: true
---

_"Successful Information Architecture serves as a blueprint for good UX"_

<!-- truncate -->

## What is Information Architecture? (IA)

Typically a textual arrangement or visual representation of content that goes in a system, IA is all about the organization and flow of content that helps users to easily accomplish tasks in a system. It is the skeletal system of the website, app or the system it is being created for. 

▶️ **IA's purpose, strategy, form, and function should revolve around user expectation and user's perspective i.e. It has to be user-centric.**

IA's parts are:
1. _Organizational Structure and Schemes_: <u>how content is structured and categorized</u>
2. _Labelling Systems_: <u>how info is represented in the content</u>
3. _Navigational Systems_: <u>how users move through the the content</u>
4. _Search Systems_: <u>how users can look for info in the content</u>

*Example of an IA*: the Information Architecture in an airport, subway or bus stations to help travelers use it correctly to get to where they need to go.

▶️ _**If UI/UX design and code development proceeds without a clear IA, you open the door for surprises later. It is a source of tremendous loss of time, effort and money. Always get the IA approved by the client before starting the development of the related UI designs or code.**_


## Context of use of the system, website or app

_**External factors influence how people interact with content, its navigation and information structures.**_ At least five types of context for any system maybe considered while building out its IA:
1. Physical 
2. Environmental
3. Preferential
4. Emotional
5. Cognitive

### Content Strategy

1. Content must be relevant to the user
2. Content muse be accurate and appropriate where it appears
3. Content must be useful to the user

### Content Requirements

The following questions need to be be addressed to gather content requirements
  - _what will be the scope of the content? where will it fit in the website/app/system?_
  - _who specifically will it be valuable for?_
  - _how many different kinds of content are there?_
  - _how will it be displayed? what are the form factor restrictions?_
  - _who are the content creators?_
  - _who are the content editors and approvers?_
  - _who are the context managers and updaters?_
  - _what are the competitors doing?_

### Identifying Content Workflows

1. Talk to content stakeholders
2. Define tasks and activities related to the content in question
3. Diagram the process of tasks and activities to the stakeholders
4. Ask questions to the stakeholders as you diagram the process

▶️ **Identify content and socialize the Information Architecture (IA) early in the process of building it out. Share drafts are you develop them from the get go.**
  - determine if people can find things
  - easy to find things vs. backtracking, taking a long way around the nav etc

## Developing the IA from content

***"IA models must ideally adhere to Progressive Disclosure"***

Once content has been amassed and we know how it will created and managed, create *categories* and *labels*. This is to make the content easier to understand, explain, relate to and control. The goal is to communicate value, meet expectations, provide critical clues expected in all aspects when the system in question is being used. 

**The IA is made up of two things:**
1. **content labelling and classification (taxonomy)**
2. **file naming and classification (taxonomy)**

### Content Labelling and Classification

#### Cognitive Effort
- users have a preexisting mental model of how the thing they are using is supposed to work
- good labelling leverages this pre-existing mental model
- <u>the user deciding on what navigation/category/link/tab to pick and choose requires ***cognitive effort***</u>
- the user being wrong causes ***Fatigue & Frustration*** to the user which makes them leave what they are using

#### Industry jargon vs User-centric Labelling
- the end user might not necessarily understand the industry jargon, but the client/business use the jargon by default as iti second nature to them
- it is the IA architect's responsibility to ask questions about labels for categories, sub-categories, links & call-to-actions such as:
  - *"is that what your customers would call it?"*
  - *"what category would the users expect to find it in?"*
  - *"what action are users taking when they click the button?"*

#### Selecting Useful Labels
- clear, descriptive words and phrases
- simple, accurate and clear
- unambiguous 
- don't manufacture words or terms
- distinct &and descriptive -- don't overlap categories
- should make sense to end-user (user-centric)
- don't rely on personal opinions -- always test!

### File-naming and Classification
- file names across UI design files and Code should match IA category labels
- consistency between IA & file structure in UI Design & Code gives the team involved a map for where everything goes and what they are called
- file and directory naming and structure should follow the same scheme that is followed in IA's category naming

### Grouping and Classifying Content

When a lot of content accumulates under one category, then a new issue rises -- *"what order do I put all the content in?"* 

Potential content classification methods include:

1. <u>chronological</u> -- akin to e-mail
2. <u>alphabetical</u> -- akin to index in the back of a book
3. <u>geographical</u> -- related to physical locations
4. <u>most popular</u> -- akin to spotify or youtube
5. <u>process order</u> -- the order of actions in a process like a kanban



## Building Blocks of IA models

![Building Blocks of IA](./Types%20of%20IA.jpg)

Following are the building blocks of UX for a webpage or an app

1. HIERARCHICAL TREE
2. NESTED LIST
3. HUB & SPOKE MODEL
4. BENTO-BOX MODEL
5. FILTERED VIEW 

- choosing the building blocks of IA models and mixing them is all about **reliable way-finding**
- scenarios where combining the building blocks of IA models makes total sense is website/app with public facing content put in a HIERARCHICAL TREE and private login area put in a HUB & SPOKE model

## Tools for IA Creation

- small websites that don't need any other form of documentation and everything fits in 1-2 pages, then textual IA with bullet points and indentation is sufficient
  - eg: word, text-edit, markdown etc.

- for mid-sized to large enterprise or e-commerce websites, it is easier for people to consume a visual diagram instead of novel-length textual outline for the IA
  - eg: visio, omnigraffle, xmind


## Testing and Validation of IA

▶️ ***"People start on a website with a task in hand, not a document to read"***

### Bucket Classification

When the users are asked to sort a pile of content-index cards into predefined buckets (categories), if there is agreement about which cards go in which of these buckets, then those buckets/categories will most likely perform will in the IA.

### Tree Testing

This is the fastest, most reliable and least expensive way to test IA, to understand which parts of the draft IA works well with users and which parts need improvement.

Firstly, model the site structure on index cards. Secondly, assign "find it" scenarios to participants, and lastly record activity during the session, such as, path the user takes through the index cards, whether or not they found the current topic, and where in the structure's flow did they hesitate or backtrack. 

This method can be used to test the efficacy of the IA under construction without actually building out the design wire-frames and code.

