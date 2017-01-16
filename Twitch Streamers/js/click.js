$(document).ready(function() {
  var tempId = document.getElementById("All");
  $('.button').on('click', function(id) {
    if (this != tempId) {
      $(tempId).removeClass('active');
      $(this).addClass('active');
    }
    tempId = this;
  });
  $('#On').on('click', function() {
    $('.online').show();
    $('.offline').hide();
  });
  $('#Off').on('click', function() {
    $('.offline').show();
    $('.online').hide();
  });
  $('#All').on('click', function() {
    $('.offline, .online').show();
  });
  users.forEach(addUser);
});

var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  function addUser(user) {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.twitch.tv/kraken/users/' + user;
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Client-ID', 'x3sh71p3tiabt55rsq1duvjssoz3w2');
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          var data = JSON.parse(this.responseText);
          var div = document.createElement('div');
          var div1 = document.createElement('div');
          div.appendChild(div1);
          div1.className = 'info';
          div1.innerHTML = '<img src="' +
                    data["logo"] + '"/> <p>' +
                    data["display_name"] +
                    '</p> <p class="bio">' + data["bio"]  + '</p>';
          search.appendChild(div);
          online(user, div);
        } else {
          console.log(this.status + ': ' + this.statusText);
        }
      }
    }
    xhr.send(null);
  }
  function online(user, div) {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.twitch.tv/kraken/streams/' + user;
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Client-ID', 'x3sh71p3tiabt55rsq1duvjssoz3w2');
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status >= 200 && this.status < 400) {
          var data = JSON.parse(this.responseText);
          if (data["stream"] === null) {
            div.className += "offline";
          } else {
            div.className += "online";

            var div2 = document.createElement('div');
            div.appendChild(div2);
            div2.className = 'stream';
            div2.innerHTML = '<p class="game">GAME: ' + data["stream"]["game"] + '</p>' +
            '<p> Viewers: ' + data["stream"]["viewers"] + '</p>' +
            '<a target="_blank" href="' + data["stream"]["channel"]["url"] + '">SEE NOW</a>';
          }
        } else {
          console.log(this.status + ': ' + this.statusText);
        }
      }
    }
    xhr.send();
  }
  /*
  function error(user) {
    var div = document.createElement('div');
    div.className = 'info';
    div.innerHTML = '<p>' + user + '</p>';
  }
*/
/*
channels JSON
------------------
{"mature":false,
"status":"RERUN: iAsonu vs. Solar [ZvZ] - Group D Elimination - IEM Gyeonggi 2016",
"broadcaster_language":"en",
"display_name":"ESL_SC2",
"game":"StarCraft II",
"language":"en",
"_id":30220059,
"name":"esl_sc2",
"created_at":"2012-05-02T09:59:20Z",
"updated_at":"2016-12-21T00:30:11Z",
"delay":null,
"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
"banner":null,
"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
"background":null,
"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
"profile_banner_background_color":"#050506",
"partner":true,
"url":"https://www.twitch.tv/esl_sc2",
"views":62235660,
"followers":142326,
"_links":{"self":"https://api.twitch.tv/kraken/channels/esl_sc2",
          "follows":"https://api.twitch.tv/kraken/channels/esl_sc2/follows",
          "commercial":"https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
          "stream_key":"https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
          "chat":"https://api.twitch.tv/kraken/chat/esl_sc2",
          "subscriptions":"https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
          "editors":"https://api.twitch.tv/kraken/channels/esl_sc2/editors",
          "teams":"https://api.twitch.tv/kraken/channels/esl_sc2/teams",
          "videos":"https://api.twitch.tv/kraken/channels/esl_sc2/videos"}
}
--------------------
users JSON
---------------------
{"display_name":"ESL_SC2",
"_id":30220059,
"name":"esl_sc2",
"type":"user",
"bio":"For standings, schedule, and results, visit http://www.intelextrememasters.com/",
"created_at":"2012-05-02T09:59:20Z",
"updated_at":"2016-12-19T20:30:12Z",
"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
"_links":{"self":"https://api.twitch.tv/kraken/users/esl_sc2"}}
----------------------
streams JSON
----------------------
{"stream":{"
    _id":23964082880,
    "game":"StarCraft II",
    "viewers":431,
    "video_height":720,
    "average_fps":50,
    "delay":0,
    "created_at":"2016-12-18T06:30:10Z",
    "is_playlist":false,
    "preview":{"small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-80x45.jpg",
               "medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-320x180.jpg",
               "large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-640x360.jpg",
               "template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg"},
    "channel":{"mature":false,
               "partner":true,
               "status":"RERUN: Dark vs. jjakji [ZvT] - Group C Match 1 - IEM Gyeonggi 2016",
               "broadcaster_language":"en",
               "display_name":"ESL_SC2",
               "game":"StarCraft II",
               "language":"en",
               "_id":30220059,
               "name":"esl_sc2",
               "created_at":"2012-05-02T09:59:20Z",
               "updated_at":"2016-12-19T20:30:12Z",
               "delay":null,
               "logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
               "banner":null,
               "video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
               "background":null,
               "profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
               "profile_banner_background_color":"#050506",
               "url":"https://www.twitch.tv/esl_sc2",
               "views":62226436,
               "followers":142309,
               "_links":{"self":"https://api.twitch.tv/kraken/channels/esl_sc2",
                         "follows":"https://api.twitch.tv/kraken/channels/esl_sc2/follows",
                         "commercial":"https://api.twitch.tv/kraken/channels/esl_sc2/commercial",
                         "stream_key":"https://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
                         "chat":"https://api.twitch.tv/kraken/chat/esl_sc2",
                         "features":"https://api.twitch.tv/kraken/channels/esl_sc2/features",
                         "subscriptions":"https://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
                         "editors":"https://api.twitch.tv/kraken/channels/esl_sc2/editors",
                         "teams":"https://api.twitch.tv/kraken/channels/esl_sc2/teams",
                         "videos":"https://api.twitch.tv/kraken/channels/esl_sc2/videos"}
                },
    "_links":{"self":"https://api.twitch.tv/kraken/streams/esl_sc2"}
    },
"_links":{"self":"https://api.twitch.tv/kraken/streams/ESL_SC2",
          "channel":"https://api.twitch.tv/kraken/channels/ESL_SC2"}
}
*/
