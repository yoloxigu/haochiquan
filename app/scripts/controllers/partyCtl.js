'use strict';
angular.module('haochiquanApp')
    .controller('PartyCtl', function ($scope) {
        $scope.Parties = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 one',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                playerPartyCommentCount: '7',
                playerPartyRelayCount: '7',
                playerPartyCollectionCount: '7',
                playerPartyLaudCount: '7'
            },
            {
                playerUserName: 'UserName two',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 two',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 11:10',
                playerPartyCommentCount: '8',
                playerPartyRelayCount: '8',
                playerPartyCollectionCount: '8',
                playerPartyLaudCount: '8'
            },
            {
                playerUserName: 'UserName three',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 three',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 10:10',
                playerPartyCommentCount: '9',
                playerPartyRelayCount: '9',
                playerPartyCollectionCount: '9',
                playerPartyLaudCount: '9'
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 four',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 09:10',
                playerPartyCommentCount: '11',
                playerPartyRelayCount: '11',
                playerPartyCollectionCount: '11',
                playerPartyLaudCount: '11'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/player-photo.png',
                playerFromGroup: '圈子名称 noe',
                playerPartyTitle: '饭局活动主题 five',
                playerPartyFunction: ['美容', '养颜'],
                playerPartyHelfth: ['维生素', '蛋白质'],
                playerPartyComment: '饭局活动说明饭局活动说明饭局活动说明饭局活动说明饭局活动说明',
                playerPublishDateTime: '2014-07-10 08:10',
                playerPartyCommentCount: '22',
                playerPartyRelayCount: '22',
                playerPartyCollectionCount: '22',
                playerPartyLaudCount: '22'
            }
        ];
    });