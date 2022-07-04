const CANNED_TWEET = {
  created: {
    date: new Date(2015, 7, 8),
    human: 'Aug 8 2015'
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

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#add-tweet').addEventListener('click', function() {
    const newTweet = document.createElement('div');
    newTweet.className = 'tweet';
    newTweet.innerHTML = 'Here is a tweet!';
    document.querySelector('#tweet-container').appendChild(newTweet);
  });
});
