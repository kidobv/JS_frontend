const CANNED_TWEET = {
  created: {
    date: new Date(2015, 7, 8),
    human: 'Aug 8, 2015'
  },

  author: {
    name: 'Joe Schmoe',
    handle: '@mrjoeschmoe',
    url: 'http://example.com',
    numFollowers: 1083,
    avatar: 'https://www.computerhope.com/jargon/t/twitter.png'
  },

  tweet: 'Authentic four dollar toast disrupt. Pour-over swag blog, art party stumptown seitan cray. Kickstarter pork belly 3 wolf moon selfies cray'
};

const TweetData = `
  <header class="user-info">
    <div>
      <span class="name"><strong>${CANNED_TWEET["author"]["name"]}</strong></span>
      <span class="handle">${CANNED_TWEET["author"]["handle"]}</span>
      <span class="user-details"> has 3,214 followers </span>
    </div>
  </header>

  <div class="create-date">
   <p>${CANNED_TWEET["created"]["human"]}</p>
  </div>

  <main class="tweet-text">
     <p>${CANNED_TWEET["tweet"]}</p>
  </main>

  <footer class="tweet-footer">
     <p class="expand">Expand details</p>
  </footer>

`;

const removeBtn = document.querySelector('#remove-tweet');

// function checkForTweets(){
//   const tweets = document.querySelectorAll('.tweet');  
//   removeBtn.style.display = tweets.length > 0 ? "inline-block" : "none";  
// }

// checkForTweets();

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#add-tweet').addEventListener('click', function() {
    const newTweet = document.createElement('div');
    newTweet.classList.add('tweet');
    newTweet.innerHTML = TweetData;

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('avatar');
    avatarImg.setAttribute('src', CANNED_TWEET["author"]["avatar"]);

    const userInfo = newTweet.querySelector('.user-info')
    userInfo.prepend(avatarImg)

    removeBtn.style.display = "inline-block";
    document.querySelector('#tweet-container').appendChild(newTweet);
    
  });
  
  document.querySelector('#remove-tweet').addEventListener('click', function () {
    const tweets = document.querySelectorAll('.tweet');
    let count = tweets.length;
    if (count > 0){
      tweets[tweets.length - 1].remove();
      count--;
      if (count === 0){
        removeBtn.style.display = "none"; 
      }        
    }
  })
});
