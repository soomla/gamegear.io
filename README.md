# Gamegear.io

Gamegear is a collaborative website created by SOOMLA for the benefit of mobile game developers and studios.  The idea originated from an internal need to study the landscape of companies in the mobile gaming space, and we've decided to let the entire community benefit from our research.

So here you have it:  http://gamegear.io

##

## Contribution Guidelines

SOOMLA appreciates code contributions and encourages the gaming community to evolve this site! Here's what you need to do:

**Fork -> Clone -> Implement -> Test -> Pull-Request**

To complete this process, you have to start from running the website locally:

### Running Gamegear Locally

Gamegear is a static website powered by a Grunt build with Node.js.  To run the site locally:

1. Install Node.js: https://nodejs.org/
2. Install the latest version of Grunt: http://gruntjs.com/getting-started
3. Install the latest version of Bower: http://bower.io/
4. Fork the project on Github to your account.
5. Clone the forked project:

    ```
    git clone git@github.com:<YOUR_USER>/gamegear.io.git
    ```
6. Switch to the project folder:

    ```
    cd gamegear.io
    ```
7. Install all dependecies:

  ```
  npm install
  bower install
  ```

6. Run the website locally:

    ```
    grunt serve
    ```

That's it! Now you have the website up and running.

### Contributing

To add a new company or SDK:
Open `client/app/sdks.js` and add a new entry in the `sdks` array.  Make sure to:

1. Add company info (name, description, year founded, HQ location) and relevant links (website, Github, Crunchbase, downloads page)
2. Adhere to the lexicographic order of company names.
3. Include all the platforms you support in the `platforms` array in your entry.
4. Add all relevant tags, which will be used in the quick search bar. 3-6 tags should do it.
5. Add a data URL with your company's favicon.  We use data URLs to reduce network requests and speed up the site's load time.

> The easiest way to quickly create a data URL from your company's favicon is to:
>
> * Open the favicon in a browser at `http://www.google.com/s2/favicons?domain=soom.la` (Replace `soom.la` with your domain).
> * Right click the image and save it locally.
> * Convert the image to a data URL with http://dataurl.net/

When you're done implementing the changes and testing (including mobile and tablet resolutions!!!), commit your changes and submit a pull request

**WARNING: Do not commit anything in the `dist` folder!**

###Deployment (Only for project maintainers)

1. Run `grunt`.  The project is built into the `dist` folder
2. Commit the changes in the `dist` folder.  In the commit message just write "Deploy"
3. Push changes: `git push origin master`
4. Deploy the `gh-pages` as a subtree:
```
git subtree push --prefix dist/ origin gh-pages
```


## SOOMLA, Elsewhere ...

+ [Website](http://soom.la/)
+ [Knowledge Base](http://know.soom.la/)
+ [Blog](http://blog.soom.la/)


<a href="https://www.facebook.com/pages/The-SOOMLA-Project/389643294427376"><img src="http://know.soom.la/img/tutorial_img/social/Facebook.png"></a><a href="https://twitter.com/Soomla"><img src="http://know.soom.la/img/tutorial_img/social/Twitter.png"></a><a href="https://plus.google.com/+SoomLa/posts"><img src="http://know.soom.la/img/tutorial_img/social/GoogleP.png"></a><a href ="https://www.youtube.com/channel/UCR1-D9GdSRRLD0fiEDkpeyg"><img src="http://know.soom.la/img/tutorial_img/social/Youtube.png"></a>


## Copyright and license

Code and documentation copyright 2015 SOOMLA, Inc. Code released under [the MIT license](https://github.com/soomla/gamegear.io/blob/master/LICENSE).
Happy gaming y'all!
