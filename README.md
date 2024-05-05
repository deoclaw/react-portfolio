# React Portfolio

A portfolio website done in React. Themed to look like Windows XP, this site features icons that when clicked pop up windows with a description, links to code, and even live previews where applicable.

## Takeaways

I think that in many ways, this would be better off as an Astro site that maybe uses react as a front-end framework. Or, rather, if I were to create a portfolio site, it would make more sense to have write-ups using markdown rather than a JSON file holding an array of objects -- and Astro handles markdown a bit better. I also think, perhaps, using XP.CSS did limit me in that I found myself struggling with what I was locked in with -- forcing scrollbars inside of the body was a nightmare (and I wish it could have just been on the paragraph bits!) I am really struggling with wrapping my mind around state and hook

### Ways To Improve

For starters, I feel like I still duplicated a bit of code. The goal was replicating the 'desktop icons' with essentially an ever-changing window area -- on / (the portfolio) the windows are what you click! But when you click some of the special icons for mailing, I still wanted the desktop icons to show while the window area becomes the result of the new route. That said, it became just easier to use useNavigation to route to pages that would just ahve a big window take over. It still gives the illusion of a maximized window. In trying to make the routes work, I was able to abstrack out some of my components to do the layout but the pages still felt a bit repetitive code-wise.

On the flip side, I found that perhaps my components got a little too unwieldly? Like icon I just kept adding properties to test for... which feels weird. Perhaps if there was a way to do inheritance? Like a subtype of icon could extend big icon.
