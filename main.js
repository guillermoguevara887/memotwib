import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input');
const btn = document.getElementById('btn');
const feed = document.getElementById('feed');

btn.addEventListener('click', function () {
    console.log(tweetInput.value);
})

function renderTweet() {
    let feedTweet = ``;
    tweetsData.forEach(function (tweet) {
        feedTweet += `
        <div class="tweet">
            <div class="tweet-header">
                <img src="${tweet.profilePic}"  class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class=""tweet-detail">${tweet.replies.length}
                        </span>
                        <span class=""tweet-detail">${tweet.likes}
                        </span>
                        <span class=""tweet-detail">${tweet.retweets}
                        </span>
                    </div>
                </div>
            </div>
        </div>`;
    })
    return feedTweet;
}

function render() {
    feed.innerHTML += renderTweet();

}

render();