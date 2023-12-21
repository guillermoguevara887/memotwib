import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input');
const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    console.log(tweetInput.value);
})

function renderTweet() {
    let feedTweet = ``;
    for (let tweet of tweetsData) {
        feedTweet += `
        <div class="tweet">
            <div class="tweet-header">
                <img scr="${tweet.profilePic}" alt="profile picture" class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-detail">
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
    }
    return feedTweet;
}

let result = renderTweet();
console.log(result);