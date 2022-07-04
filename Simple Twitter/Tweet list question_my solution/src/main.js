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
    avatar: 'http://s3.amazonaws.com/uifaces/faces/twitter/_everaldo/128.jpg'
  },

  tweet: 'Authentic four dollar toast disrupt. Pour-over swag blog, art party stumptown seitan cray. Kickstarter pork belly 3 wolf moon selfies cray'
};

const TweetData = `
   <p class="user-info">
    <span class="name"><strong>${CANNED_TWEET["author"]["name"]}</strong></span>
    <span class="handle">${CANNED_TWEET["author"]["handle"]}</span>
    <br>
    <span class="user-details">3,214 followers</span>
  </p>

  <p class="create-date">${CANNED_TWEET["created"]["human"]}</p>
  <p class="tweet-text">${CANNED_TWEET["tweet"]}</p>
`;

const removeBtn = document.querySelector('#remove-tweet');

function checkForTweets(){
  const tweets = document.querySelectorAll('.tweet');
  if (tweets.length == 0) {    
    removeBtn.style.display = "none";
  }
}

checkForTweets();

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#add-tweet').addEventListener('click', function() {
    const newTweet = document.createElement('div');
    newTweet.classList.add('tweet');
    newTweet.innerHTML = TweetData;

    const avatarImg = document.createElement('img');
    avatarImg.classList.add('avatar');
    avatarImg.setAttribute('src', CANNED_TWEET["author"]["avatar"]);

    newTweet.prepend(avatarImg)

    removeBtn.style.display = "inline-block";
    document.querySelector('#tweet-container').appendChild(newTweet);
    
  });
  
  document.querySelector('#remove-tweet').addEventListener('click', function () {
    const tweets = document.querySelectorAll('.tweet');

    if(tweets.length > 0){
      let tweetToRemove = tweets[tweets.length - 1];
      tweetToRemove.remove();
    }

    checkForTweets();
    
  })
});
