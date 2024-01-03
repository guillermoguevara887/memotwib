import { tweetsData } from './data.js'

const tweetInput = document.getElementById('tweet-input');
const btn = document.getElementById('btn');
const feed = document.getElementById('feed');


document.addEventListener('click', function (event) {
    if (event.target.dataset.likes) {
        likeClick(event.target.dataset.likes);


    } else if (event.target.dataset.retweet) {
        retweetClick(event.target.dataset.retweet);
    } else if (event.target.dataset.replies) {
        repliesClick(event.target.dataset.replies);
    }
})

function likeClick(tweetId) {
    const tweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId;

    })[0];

    if (tweetObj.isLiked) {
        tweetObj.likes--;

    } else {
        tweetObj.likes++;


    }
    tweetObj.isLiked = !tweetObj.isLiked;

    render();

}

function retweetClick(tweetId) {
    const tweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId;
    })[0];
    if (tweetObj.isRetweeted) {
        tweetObj.retweets--;
    }
    else {
        tweetObj.retweets++;
    }
    tweetObj.isRetweeted = !tweetObj.isRetweeted;
    render();
}

function repliesClick(tweetId) {
    document.getElementById(`replies-${tweetId}`).classList.toggle('hidden')
}



btn.addEventListener('click', function () {
    console.log(tweetInput.value);
})

function renderTweet() {
    let feedTweet = ``;



    tweetsData.forEach(function (tweet) {
        let likedClass = '';
        let retweetClass = '';
        let repliesHtml = '';
        if (tweet.isLiked) {
            likedClass = 'liked';
        }

        if (tweet.isRetweeted) {
            retweetClass = 'retweeted';
        }

        if (tweet.replies.length > 0) {
            tweet.replies.forEach(function (reply) {
                repliesHtml += `
                <div class="tweet-reply">
                    <div class="tweet-inner">
                        <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
                </div>
                `;

            })
        }




        feedTweet += `
        <div class="tweet">
            <div class="tweet-header">
                <img src="${tweet.profilePic}"  class="profile-pic">
                <div>
                    <p class="handle">${tweet.handle}</p>
                    <p class="tweet-text">${tweet.tweetText}</p>
                    <div class="tweet-details">
                        <span class=""tweet-detail">
                        <i class="fa-regular fa-comment-dots"  data-replies="${tweet.uuid}"></i>
                        ${tweet.replies.length}
                        </span>
                        
                        <span class=""tweet-detail">
                        <i class="fa-solid fa-heart ${likedClass} "data-likes="${tweet.uuid}"></i>
                        ${tweet.likes}
                        </span>

                        <span class=""tweet-detail">
                        <i class="fa-solid fa-retweet ${retweetClass}" data-retweet="${tweet.uuid}"></i>
                        ${tweet.retweets}
                        </span>
                    </div>
                </div>
            </div>
            <div  class="hidden" id="replies-${tweet.uuid}">
            ${repliesHtml}
            </div> 
        </div>
        `;
    })
    return feedTweet;
}

function render() {
    feed.innerHTML = renderTweet();

}

render();