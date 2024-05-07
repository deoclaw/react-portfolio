# 'Retro' React Portfolio

A portfolio website done in React. Themed to look like Windows XP, this site features icons that when clicked pop up windows with a description, links to code, and even live previews where applicable. Users use 'desktop' icons to navigate and the X-button on the 'desktop' windows to return to previous pages.

Users can also read a blog and use a form to send messages (connects to Firestore.) Users authenticate anonymously. It also features a working clock.

[Live Preview on Render](https://react-portfolio-m7en.onrender.com)

## Technologies Used

:white_check_mark: React

:white_check_mark: npm

:white_check_mark: [XP.css](https://botoxparty.github.io/XP.css/)

:white_check_mark: Cloud Firestore

:white_check_mark: Firebase authentication

## To Run

1. Download code
2. Install `node`
3. `cd` into the project directory
4. Run `npm install` to install any dependencies
5. Run the app with `npm run dev`

_Note - you must be connected to the internet for this to work properly!_

Or view on [Render](https://react-portfolio-m7en.onrender.com) (because GitHub pages kept building wrong!)

## Takeaways

I think that in many ways, this would be better off as an Astro site that maybe uses React as a front-end framework. Or, rather, if I were to create a portfolio site, it would make more sense to have write-ups using markdown rather than a JSON file holding an array of objects -- and Astro handles markdown a bit better. I also think, perhaps, using XP.CSS did limit me in that I found myself struggling with what I was locked in with -- forcing scrollbars inside of the body was a nightmare.

### Ways To Improve

For starters, I feel like I still duplicated a bit of code. The goal was replicating the 'desktop icons' with essentially an ever-changing window area -- on / (the portfolio) the windows are what you click! But when you click some of the special icons for mailing, I still wanted the desktop icons to show while the window area becomes the result of the new route. That said, it became just easier to use useNavigation to route to pages that would just ahve a big window take over. It still gives the illusion of a maximized window. In trying to make the routes work, I was able to abstrack out some of my components to do the layout but the pages still felt a bit repetitive code-wise.

On the flip side, I found that perhaps my components got a little too unwieldly? Like icon I just kept adding properties to test for... which feels weird. Perhaps if there was a way to do inheritance? Like a subtype of icon could extend big icon.
