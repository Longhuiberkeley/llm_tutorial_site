I want to write a LLM tutorial website that is either on Github or easily hosted on a raspberry pi. 

I want the site covers many important and yet useful concepts for people who can use LLM to improve their businesses, from regular web LLM use or to explain how agentic works, to to-automate or not-to-automate and introduce RPA, to some advanced topic: RAG, what really is RAG, How to learn more: just by chatting with LLM

I primarily want the website to be lightweight, interactive, and at the end of each page, it should come with a quiz, with explaination.

I am thinking chapter one, we should either display a screenshot a keyboard that LLM is very similar to a keyboard suggestion, then maybe we do simple interactive thing where we let user choose the *similar word, given 4 words, lion, dog, cat, turkey. While that's maybe a tricky question since one might think turkey is the not similar one because it's a bird, another person might guess it's lion since it's dangerous. Here we want to imple why context matters, and soft intro what embeddings are 

we move onto "I am hungry" "let's go eat chicken and rice" "I want to go eat soon" "let's go to disney" as a thing just to give the users some more intuition

Then I think we should introduce concept of tokenization, and draw how in a sentence how the attnetion is trying to collect words into a sentence, just draw arrows and anime how "I related to" "i am a boy" then anime a paragraph, then i think it's time we introduce context window, where we help users visualize what it means to have 200k and 1m token.

moving on I think we can go onto talk about LLM as a black box (where we should visualize it), it's that we feed some input, then it outputs. We then encourse them to think what might be hidden, system prompt, how Google GEM and certain SPACES are basically a user's customized system prompt.


from the visualization, we should indicate on a end-user interface, the user often see his chat bubble, then AI *reasoning* then say something, and when user send again, we should tell the user what was sent was actaully the chain. here we also talk about WHY LLM doesn't know what your previous convos are, and why you really should close the chat, here and there, and why sometimes it becomes dumb. and some example of /compact mechanism

We then also introduce the concept of like tool use, and what it means to be a good agentic thing, characteristics and interactive examples, etc

then RAG, context engineering, and 2026 harness engineering

2026, memory: what companies are trying to do to have a thing where it knows how to automatically know what context to fetch so it will have your memory. and why I think it is not there yet.

2026: to agentic or not, where we talk about what are out there, what RPA is. i am thining a venn diagram. Here I want to talk about how AGile/ V models like things work as well, as there are spec kits, BMAD, superpower, etc, like spec/ requirements driven modeling, why? so instead of talking LLM, talk about how to do a project, for effectively software changes, how do we do it? (so maybe a bit more like a business school course a bit); for LLM development, 
here we recommend something more like create a cheatsheet, checklist, like practices; why project management skill and a AI-driven review process is more important than ever 
when to RPA, when to hybrid it, 
exmaple of ASK (agentic SDK), mock use case, 


somewhere in these, we should talk about why llm fails how many a in banana, 1+1+1+1... like things, and why without deep research on a "give me some numbers in fashion industry" like why the numbers would be wrong, why "deep research" is a tool, how come some models generate something that's not there, like prompt: "write a dairy about an athlete life", it might make up something like "my name is alex" while it's not really wrong, but somtimes it's not what the user wrong as user's name isn't alex. then we introduce "right vs wrong" in llm, like theres no wrong in a child's essay, but if a piece of code has the wrong understandnig it might not run or match user's demand

---

technical requirement: logical order, if possible, host on github, use simple css to do animation; have a about us session where it talks about why this tutorial, and who I am (promote my consultact services)

you shuold help me first expand the circulum (and help me determine how we can structure them), like indicate how many chatpers we should have now, and how to present the interactive learning, and some times we have a quick quiz; 

then how we should organize the content, and the code, where we can add or edit the content if a chapter is missing, or need improvment

--- 