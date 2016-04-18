app.factory('DATA', function($http, productServer, testServer, user, admin){
  var data = {
    productServer: productServer,
    testServer: testServer,
    autoServer: productServer,
    user: user,
    admin: admin,
    autoUser: user,
    sectionParams: {
      admin: {
        prex: 'http://admin',
        interface: [
          {
            method: 'GET',
            text: 'get article',
            url: '/session/article',
            data: {
              id:"570b731cee0ca6d859c58427"
            }
          },
          {
            method: 'POST',
            text: 'create a article',
            url: '/session/article',
            data: {
              coverImageId: "56e7e654a18005100099f6e4",
              content: "{\"content\":\"this is content \"}",
              title: "testtesdffasfs",
              abstract: "sfdsfdfsdfdsd！",
              voiceId: "voiceId",
              showEmotionButtons: false,
              published: false
            }
          },
          {
            method: 'PUT',
            text: 'update article',
            url: '/session/article',
            data: {
              _id: "570b731cee0ca6d859c58427",
              coverImageId: "56e7e654a18005100099f6e4",
              content: "{\"content\":\"this is content \"}",
              title: "safdsaafdad",
              abstract: "dsfdsf，dsfasda。\sdfd，sdfsda！",
              voiceId: "voiceId",
              showEmotionButtons: false,
              published: false
            }
          },
          {
            method: 'DELETE',
            text: 'delete article',
            url: '/session/article',
            data: {
              id : "570b731cee0ca6d859c58427"
            }
          },
          {
            method: 'GET',
            text: 'get article',
            url: '/session/admin/articles',
            data: {
              skip: 0,
              limit: 10,
              published: true
            }
          },
          {
            method: 'GET',
            text: 'get evenings',
            url: '/session/evenings',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get funs',
            url: '/session/funs',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get games',
            url: '/session/games',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get interactions',
            url: '/session/interactions',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get statisticsmaterial',
            url: '/session/statisticsmaterial',
            data: {
              
            }
          },
          {
            method: 'GET',
            text: 'get materialUsingtime',
            url: '/session/materialUsingtime',
            data: {
              days: 1
            }
          },
          {
            method: 'GET',
            text: 'get publicationTime',
            url: '/session/default/publicationTime',
            data: {
              
            }
          },
          {
            method: 'PUT',
            text: 'set publicationTime',
            url: '/session/default/publicationTime',
            data: {
              am: {hour:7,minute:13},
              pm: {hour:17,minute:0}
            }
          },
          {
            method: 'POST',
            text: 'insert material',
            url: '/session/material',
            data: {
              publicationTime: 1459408430341,
              type: 1,
              section: [
                {
                  "type":1,
                  "data":{
                    "remind":"asfsada，sadfasd！",
                    "dailyTipGood":"sdfddf sdfd asdffd dfdsds",
                    "dailyTipBad":"sdss ssss sss sss"
                  }
                },
                {
                  "type":2,
                  "data":{
                    "_id":"56f0d82fc49fea16003c46d9"
                  }
                },
                {
                  "type":2,
                  "data":{
                    "_id":"56f0d8b0c49fea16003c46da"
                  }
                },
                {
                  "type":3,
                  "data":{
                    "title":"#test",
                    "content":"test、test，test，test、test，test。",
                    "coverImageId":"56f1147970971a1000330224"
                  }
                },
                {
                  "type":4,
                  "data":{
                    "imageId":"56ef649956df1c1000fd9b9c",
                    "word":"test"
                  }
                },
                {
                  "type":5,
                  "data":{
                    "choices": [
                      {
                        "title":"test，test！"
                      },
                      {
                        "title":"test"
                      }
                    ],
                    "imageId":"56f0ef7b70971a100033020e",
                    "result":1,
                    "resultDescription":"，tes！"
                  }
                },
                {
                  "type":6,
                  "data":{
                    "title":"test",
                    "content":"test。",
                    "extra":{
                      "id":"56f0f83f70971a1000330214",
                      "type":1
                    }
                  }
                },
                {
                  "type":7,
                  "data":{
                    "title":"test",
                    "content":"test。",
                    "extra":{
                      "id":"56f0f91570971a1000330216",
                      "type":1
                    }
                  }
                },
                {
                  "type":7,
                  "data":{
                    "title":"test",
                    "content":"",
                    "extra":{
                      "id":"56f4ac3a3807da1000b93ea9",
                      "type":2
                    }
                  }
                },
                {
                  "type":7,
                  "data":{
                    "title":"test",
                    "content":"test。",
                    "extra":{
                      "id":"http://v.qq.com/iframe/player.html?vid=u0191z0smvy",
                      "videoCoverId":"56f0f91570971a1000330216",
                      "type":3
                    }
                  }
                },
                {
                  "type":8,
                  "data":{
                    "extra":[
                      {
                        "id":"56f0d82fc49fea16003c46d9",
                        "introduction":"test"
                      },
                      {
                        "id":"56f0d8b0c49fea16003c46da",
                        "introduction":"test"
                      }
                    ]
                  }
                },
                {
                  "type":9,
                  "data":{
                    "imageId":"56e6356e91c57e1100bdb004"
                  }
                }
              ]
            }
          },
          {
            method: 'PUT',
            text: 'update material',
            pushMessage: "this is a pushMessage",
            url: '/session/material',
            data: {
              _id: "56f4e8d3d3df7d1600be8d8d",
              type: 1,
              section: [],
              published: false,
              deleted: false,
              publicationTime: 1459408430341,
            }
            
          },
          {
            method: 'DELETE',
            text: 'delete material',
            url: '/session/material',
            data: {
              id: "56f4e8d3d3df7d1600be8d8d"
            }
          },
          {
            method: 'GET',
            text: 'get materials',
            url: '/session/materials',
            data: {
              skip: 0,
              limit: 10,
              published: true
            }
          },
          {
            method: 'GET',
            text: 'get material',
            url: '/session/material',
            data: {
              id: "56f4e8d3d3df7d1600be8d8d"
            }
          },
          {
            method: 'GET',
            text: 'get dailyMaterial',
            url: '/session/dailyMaterial',
            data: {
              latitude: 31.213000,
              longitude: 121.445000,
              offset: 0,
              district: "上海"
            }
          },
          {
            method: 'POST',
            text: 'insert channel',
            url: '/session/channel',
            data: {
              name : "test",
              description: "test",
              imageId: "56e7e917a18005100099f6ec",
              deleted: false,
              published: false
            }
          },
          {
            method: 'POST',
            text: 'insert music',
            url: '/session/music',
            data: {
              name :"music1",
              singer: "singer1",
              imageId: '56e7e917a18005100099f6ec',
              fileId: "56d696c4a6f1781300ee45b0",
              lyric: "[ti:人质(Live)]",
              duration: 300000,
              channelId: "56d7bb18ce4a351100dca6e8"    
            }
          },
          {
            method: 'GET',
            text: 'get channels',
            url: '/session/channels',
            data: {
              skip: 0,
              limit: 10,
              published: true
            }
          },
          {
            method: 'GET',
            text: 'get simple channel',
            url: '/session/channel',
            data: {
              "id": "56fb4501909d21100082cce9",
            }
          },
          {
            method: 'PUT',
            text: 'update channel',
            url: '/session/channel',
            data: {
              id: "56fb4501909d21100082cce9",
              name: 'test',
              description: 'test test',
              imageId: '',
              published: '',
              deleted: false
            }
          },
          {
            method: 'PUT',
            text: 'update music',
            url: '/session/music',
            data: {
              id: "56d7dabfce4a351100dca6f3",
              name :"music1",
              singer: "singer1",
              imageId: '56e7e917a18005100099f6ec',
              fileId: "56d696c4a6f1781300ee45b0",
              lyric: "[ti:人质(Live)]",
              duration: 300000,
              channelId: "56d7bb18ce4a351100dca6e8",
              deleted: null,
              published: false
            }
          },
          {
            method: 'POST',
            text: 'insert product',
            url: '/session/product',
            data: {
              name: "iPhone70+",
              content: "hi, I wannt get information for"
            }
          },
          {
            method: 'PUT',
            text: 'update product',
            url: '/session/product',
            data: {
              id: "56fcbd11adeb5f122e909f12",
              name: "productccc+",
              content: "hi, I wannt get information for",
              published: true
            }
          },
          {
            method: 'DELETE',
            text: 'delete product',
            url: '/session/product',
            data: {
              id: "56fcbd11adeb5f122e909f12"
            }
          },
          {
            method: 'GET',
            text: 'get products',
            url: '/session/products',
            data: {
              
            }
          },
          {
            method: 'GET',
            text: 'get radioAction',
            url: '/session/radioAction',
            data: {
              userId: "56de51e6b5d76c110018415e",
              musicId: "56d7bb27ce4a351100dca6ea",
              channelId: "56d7bb18ce4a351100dca6e8",
              startDate: "1456978627067",
              endDate: "1457579618060",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get radioChannel',
            url: '/session/radioChannel',
            data: {
              
            }
          },
          {
            method: 'GET',
            text: 'get radioMusic',
            url: '/session/radioMusic',
            data: {
              
            }
          },
          {
            method: 'POST',
            text: 'insert tag',
            url: '/session/tag',
            data: {
              name: "this is a tag",
              type: 3
            }
          },
          {
            method: 'DELETE',
            text: 'delete tag',
            url: '/session/tag',
            data: {
              id: "56f8c62c04ac1c902892a3a4"
            }
          },
          {
            method: 'GET',
            text: 'get tags',
            url: '/session/tags',
            data: {
              type: 1,
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get tips',
            url: '/session/tips',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get userlogins',
            url: '/session/userlogins',
            data: {
              userId: "56de51e6b5d76c110018415e",
              startDate: "1457410534364",
              endDate: "1457410534364",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get userrequests',
            url: '/session/userrequests',
            data: {
              userId: "56de51e6b5d76c110018415e",
              startDate: "1457410534364",
              endDate: "1457410534364",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get remarks',
            url: '/session/user/remarks',
            data: {
              userId: "56de51e6b5d76c110018415e",
            }
          },
          {
            method: 'GET',
            text: 'get user remark tags',
            url: '/session/user/remarks/tags',
            data: {
              userId: "56de51e6b5d76c110018415e",
            }
          },
          {
            method: 'GET',
            text: 'get user remark notes',
            url: '/session/user/remarks/notes',
            data: {
              userId: "56de51e6b5d76c110018415e",
            }
          },
          {
            method: 'GET',
            text: 'get user remark keyinfos',
            url: '/session/user/remarks/keyinfos',
            data: {
              userId: "56de51e6b5d76c110018415e",
            }
          },
          {
            method: 'DELETE',
            text: 'delete user remark keyinfos',
            url: '/session/user/remarks/keyinfos',
            data: {
              userId: "56de51e6b5d76c110018415e",
              id: "56e76bed08e6e65035421be9"
            }
          },
          {
            method: 'PUT',
            text: 'update user remark tags',
            url: '/session/user/remarks/tags',
            data: {
              userId: "56de51e6b5d76c110018415e",
              tags: ["56e90f35c7267f78e2322ab3", "56e90f89121f18f9e2d9a40c"]
            }
          },
          {
            method: 'PUT',
            text: 'update user remark notes',
            url: '/session/user/remarks/notes',
            data: {
              userId: "56de51e6b5d76c110018415e",
              userNotes: {
                family:{
                  notes:["notes1","notes2"]
                }
              }
            }
          },
          {
            method: 'PUT',
            text: 'update user remark keyinfos',
            url: '/session/user/remarks/keyinfos',
            data: {
              userId: "56de51e6b5d76c110018415e",
              content: "this is a keyinfos"
            }
          },
          {
            method: 'POST',
            text: 'insert userActionDefine',
            url: '/session/userActionDefine',
            data: {
              type:19,
              description:"this is a test type"
            }
          },
          {
            method: 'PUT',
            text: 'update userActionDefine',
            url: '/session/userActionDefine',
            data: {
              id: "56e13dbef6cd6494339d7032",
              description:"this is a test type"
            }
          },
          {
            method: 'DELETE',
            text: 'delete userActionDefine',
            url: '/session/userActionDefine',
            data: {
              id: "56e13dbef6cd6494339d7032"
            }
          },
          {
            method: 'GET',
            text: 'get userActionDefine',
            url: '/session/userActionDefine',
            data: {
              type: 10,
              description: "USER_ACTION_RECORD_TYPE_EVENING",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get userActionRecords',
            url: '/session/userActionRecords',
            data: {
              userId: "56de51e6b5d76c110018415e",
              recordType: 1,
              startDate: "1457410534364",
              endDate: "1457410534364",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get userActionPredayTimeRecords',
            url: '/session/userActionPredayTimeRecords',
            data: {
              startDate: "1457410534364",
              endDate: "1457410534364",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get userActionRecordDuration',
            url: '/session/userActionRecordDuration',
            data: {
              startDate: "1457410534364",
              endDate: "1457410534364",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get userActionFuntionRecords',
            url: '/session/userActionFuntionRecords',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get registerNumber',
            url: '/session/registerNumber',
            data: {
              startDate: "1457410534364",
              endDate: "1457410534364",
            }
          },
          {
            method: 'GET',
            text: 'get usingTime',
            url: '/session/usingTime',
            data: {
              startDate: "1457410534364",
              endDate: "1457410534364",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get userActionInfo',
            url: '/session/userActionInfo',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get voiceLength',
            url: '/session/voiceLength',
            data: {
              startDate: "1457410534364",
              endDate: "1457410534364",
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get originalData',
            url: '/session/originalData',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get originalAnalysisData',
            url: '/session/originalAnalysisData',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get weathers',
            url: '/session/weathers',
            data: {
              skip: 0,
              limit: 10
            }
          },
          {
            method: 'GET',
            text: 'get dailyWeather',
            url: '/session/dailyWeather',
            data: {
              latitude: 31.213000,
              longitude: 121.445000,
              district: '上海'
            }
          },
          {
            method: 'POST',
            text: 'create push history',
            url: '/session/pushHistory',
            data: {
              pushTime: 1460533411787,
              pushType: 1,
              notificationText: "test",
              fk: ""
            }
          },
          {
            method: 'DELETE',
            text: 'delete push history',
            url: '/session/pushHistory',
            data: {
              id: '570dfaac71827b4e4cd02496'
            }
          },
          {
            method: 'PUT',
            text: 'update push history',
            url: '/session/pushHistory',
            data: {
              id: '',
              pushTime: 1460533411787,
              pushType: 1,
              notificationText: "test",
              fk: ""
            }
          },
          {
            method: 'GET',
            text: 'get push history by id',
            url: '/session/pushHistory',
            data: {
              id: '570dfaac71827b4e4cd02496'
            }
          },
          {
            method: 'GET',
            text: 'get push history by params',
            url: '/session/pushHistories',
            data: {
              pushTime: 1460533411787,
              pushType: 1,
              skip: 0,
              limit: 50,
              deleted: false
            }
          }
        ]
      },
      user: {
        prex: 'http://user',
        interface: [
          {
            id: 'u_1',
            method: 'GET',
            text: 'send sms',
            url: '/nosession/sms',
            data: {
              phone: ""
            }
          },
          {
            id: 'u_2',
            method: 'GET',
            text: 'get all avatars',
            url: '/session/avatars',
            data: {
            }
          },
          {
            id: 'u_3',
            method: 'PUT',
            text: 'update user info',
            url: '/session/user',
            data: {
              id: "56e7cfd19d06941100cded51",
              nickName: '',
              gender: '',
              birthday: '',
              avatarId: '',
              avatarType: '',
              jpushToken: '',
              phone: "",
              smsCode: "",
            }
          },
          {
            id: 'u_4',
            method: 'GET',
            text: 'get user info',
            url: '/session/user',
            data: {
              id: '56de51e6b5d76c110018415e'
            }
          },
          {
            id: 'u_5',
            method: 'POST',
            text: '[admin] insert system avatars',
            url: '/session/avatar',
            data: {
              "id": "570477d7c36ffcc16d100cb7",
              "description": "默认15"
            }
          },
          {
            id: 'u_6',
            method: 'DELETE',
            text: 'delete system avatar',
            url: '/session/avatar',
            data: {
              id: '56de51e6b5d76c110018415e'
            }
          }
        ]
      },
      material: {
        prex: 'http://material',
        interface: [
          {
            id: 'm_1',
            method: 'GET',
            text: 'get today material',
            url: '/session/dailyMaterial',
            data: {
              latitude: 31.213000,
              longitude: 121.445000,
              offset: 0
            }
          },
          {
            id: 'm_2',
            method: 'GET',
            text: 'get weather info',
            url: '/session/dailyWeather',
            data: {
              latitude: 31.213000,
              longitude: 121.445000,
              district: '上海'
            }
          },
          {
            id: 'm_3',
            method: 'POST',
            text: 'follow module of material',
            url: '/session/like',
            data: {
              "dataId":"56d7b13acadf2bbb6382e2d8",
              "type":"1"
            }
          },
          {
            id: 'm_6',
            method: 'POST',
            text: 'vote for interaction',
            url: '/session/voteInteraction',
            data: {
              "interactionId":"56d7dcd993eabc877092c00a",
              "choice":2
            }
          },
          {
            id: 'm_7',
            method: 'POST',
            text: 'follow one article',
            url: '/session/followArticle',
            data: {
              "articleId":"56d7dca293eabc877092c006"
            }
          },
          // {
          //   id: 'm_8',
          //   method: 'GET',
          //   text: 'get article list',
          //   url: '/session/followedArticles',
          //   data: {
          //     deleted: false
          //   }
          // },
          {
            id: 'm_9',
            method: 'POST',
            text: 'record user game info',
            url: '/session/userGame',
            data: {
              "gameId":"56d7dcd993eabc877092c009"
            }
          },
          {
            id: 'm_10',
            method: 'POST',
            text: 'record article moods',
            url: '/session/articleMoods',
            data: {
              "articleId":"56d94f2165addae6a1eac80d",
              "moods":{
                "happy":true
              }
            }
          },
          {
            id: 'm_11',
            method: 'POST',
            text: 'record article tips',
            url: '/session/articleTips',
            data: {
              "id": "56f3619a3cf622180091419e",
              "tips": [7, 9]
            }
          }
        ]
      },
      radio: {
        prex: 'http://radio',
        interface: [
          {
            id: 'r_1',
            method: 'GET',
            text: 'get channle list',
            url: '/session/channels',
            data: {
              skip: 0,
              limit: 10,
              published: true
            }
          }
        ]
      },
      chat: {
        prex: 'http://chat',
        interface: [
          {
            id: 'c_1',
            method: 'GET',
            text: 'get chat history',
            url: '/session/chathistorys',
            data: {
              id: '',
              createDate: '',
              contentType: '',
              limit: 0
            }
          },
          {
            id: 'c_2',
            method: 'DELETE',
            text: 'delete chat history by id',
            url: '/session/chathistory',
            data: {
              id: ''
            }
          },
          {
            id: 'c_3',
            method: 'PUT',
            text: 'update csr',
            url: '/session/csr',
            data: {
              id: '',
              password: '',
              nickName: '',
              userType: '',
              avatar: ''
            }
          },
          {
            id: 'c_4',
            method: 'get',
            text: 'get auto replys',
            url: '/session/autoreplys',
            data: {
            }
          },
          {
            id: 'c_5',
            method: 'POST',
            text: 'add new quickly reply',
            url: '/session/quickreply',
            data: {
              "content": "test阿姨您好~！"
            }
          },
          {
            id: 'c_6',
            method: 'DELETE',
            text: 'delete reply by id',
            url: '/session/autoreply',
            data: {
              id: ''
            }
          },
          {
            id: 'c_7',
            method: 'POST',
            text: 'add new auto reply',
            url: '/session/autoreply',
            data: {
              "content": "不在线啦3"
            }
          },
          {
            id: 'c_8',
            method: 'GET',
            text: 'get all quickly reply',
            url: '/session/quickreplys',
            data: {
            }
          },
          {
            id: 'c_9',
            method: 'DELETE',
            text: 'delete csr',
            url: '/session/csr',
            data: {
              id: ''
            }
          },
          {
            id: 'c_10',
            method: 'GET',
            text: 'search csr by name',
            url: '/session/csr/name',
            data: {
              name: '',
              skip: 0,
              limit: 10
            }
          },
          {
            id: 'c_11',
            method: 'PUT',
            text: 'update user service status',
            url: '/session/customerservice',
            data: {
              id: "56e63a4a21fdc310008d4b1c",
              status: 1
            }
          },
          {
            id: 'c_12',
            method: 'POST',
            text: 'register new csr',
            url: '/session/csr',
            data: {
              account: "csr2@vocinno.com",
              password: "1",
              nickName: "lvshun",
              userType: 10,
              avatar: "wefieowfhiofh"
            }
          },
          {
            id: 'c_13',
            method: 'GET',
            text: 'get all csr',
            url: '/session/csrs',
            data: {
              skip: 0,
              limit: 50
            }
          },
          {
            id: 'c_16',
            method: 'PUT',
            text: 'update chat status by csr',
            url: '/session/customerservice',
            data: {
              id: "56e63a4a21fdc310008d4b1c",
              status: 2
            }
          }
        ]
      }
    }
  }

  if(window.localStorage && localStorage.data){
    data = JSON.parse(localStorage.data);
  }

  return data;
})
  .factory('DATAS', function($http, DATA){
    var data = DATA;
    data.changeAutoServer = function (url) {
      this.autoServer = url;
      this.getToken();
    },
    data.changeAutoUser = function (type) {
      if(type == this.user.type)
        this.autoUser = this.user;
      else
        this.autoUser = this.admin;
      this.getToken();
    },
    data.getToken = function (argument) {
      var url = this.autoUser.prex + '.' + this.autoServer + this.autoUser.url;
      var req = {};
      req.url = url;
      req.method = this.autoUser.method;
      if(req.method === 'GET')
        req.params = this.autoUser.data;
      else
        req.data = this.autoUser.data;
      var that = this;
      $http(req).then(function(result) {
        that.token = result.data.token
      }, function(result) {
        that.token = 'server error';
      })
    },
    data.setToken = function (token) {
      this.token = token;
    }
    return data;
  })
