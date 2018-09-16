# hw-4 readme
Tiffany Gross
09/16/18

["Monster" Sketch](https://jolenetiffanyg.github.io/course-work/hw-4/monster/)

### Work I Did This Homework Cycle
  I absolutely LOVED this project.  And I am now completely in love with Daniel Schiffman, he's such a genius.  I spent a lot of time watching his tutorials and checking out his book, which is so clear and well-written.  I finally started making use of the reference pages available on the **p5.js** website, and they are so incredibly helpful.  Those three things combined made a huge difference in my understanding of the library and ways it can be used, and I had an amazing time playing around with the project.  So now this is my favorite class.  The most valuable specific new thing I learned this week was how to make use of `push();` and `pop();`.  It made everything a million times easier and I'm going to confidently project that those functions will prove invaluable on future projects.

### Steps Taken to Complete **hw-4** Assignment

- To start, I copied the entire folder `hw-3` and then renamed everything and replaced the contents.  It made the process quicker.
- I opened the copy of `sketch.js` in **Atom** and:
  - created a canvas using `createCanvas()`
  - specified the background using the `background()` function
  - emptied the content still in the sketch from copying the `hw-3` folder
  - declared a `draw()` function
  - started playing around with commands I learned on the **p5** reference pages
  - got some graph paper and played around with `translate()` to make sure I understood how changing the point of origin works and when it will be helpful
  - commented each line as I went using `//` so I could more easily orient myself when I wanted to go back and make changes
  - kept the `index.html` open in my browser so I could refresh the page after each change to see how it looked
  - - Took a screenshot of my image with my signature on it using `if (mouseIsPressed === true) { line(mouseX, mouseY, pmouseX, pmouseY); }` for my own private pleasure
- Committed changes to the repository and pushed to **GitHub**
- Navigated to my `120-work` repository on **GitHub** and made sure GitHub Pages Source Settings were set to **master branch** to go live
- Added directory `/hw-4/monster` to the end of the url to navigate to my `index.html`
- Wrote my `hw-4` **readme** after removing the content left from copying `hw-3` **readme**
- Committed and pushed changes to repository
- Submitted links to Moodle homework submission forum

### Problems and Issues
  For the first time, I actually didn't have any issues with this assignment.  I had a great time doing it.  I'm sure this is a brief reprieve, and it was easier to get done since there wasn't *officially* any new material this week, and we had such flexibility with the assignment.  I did have one issue, but it didn't affect my ability to do the assignment so it didn't quite qualify as a problem.  I discovered that using `if (mouseIsPressed === true) { line(mouseX, mouseY, pmouseX, pmouseY); }` does not lend itself well to being used with a touch screen.  I searched and found the workaround that seems to be working for some people is to use:
  ```
  function touchMoved(){
    stroke(255, 0, 0);
    line(touchX, touchY, ptouchX, ptouchY);
    returnfalse;
  } ```
  
  However, this was no more effective than using what I originally had, so I stuck with the `mouse` command rather than `touch`. According to what I gathered from forum postings where others were running into this difficulty, it seems to stem from the fact that **JS** uses the same variables for `touch(x)` or `mouse(x)`.  There were some who seemed to think that this was an OS-specific issue, but the overall concensus was that the results varied *somewhat* depending on which browser was used, though the issue will persist regardless.  It sounds like this is a bug that needs fixed, but I'm sure there is someone out there who has found a perfect workaround and I'm hoping soon I will understand enough to be able to find a fix for this and make use of it.

### To Discuss further

  I made sure I had a good grip on the specific use I had for the variables I used in my project, but I know there are many other functions that can make use of variables, and I'm looking forward to learning more of them and finding out exactly how much more detailed variable-use can get.


### Helping Classmates

For the first time, I'm the first one to finish the homework!  So I haven't helped anyone yet but I'm keeping an eye out and really hoping this will be the week I finally have something to offer.  I *did* make a post on **GitHub Issues Forum** to make moves to set up an in-person study group, and I'm hoping that will end up being a significant help for anyone who chooses to join.  I also explored and played with a lot of functions that I didn't end up using for my project, so even though the parameters are loose on this one, I think there should be *something* that will overlap and I will have knowledge pertaining to an issue a classmate will have this week.
