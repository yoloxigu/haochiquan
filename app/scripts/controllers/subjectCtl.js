'use strict';
angular.module('haochiquanApp')
    .controller('SubjectCtl', function ($scope) {
        $scope.subjects = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/player-photo.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 one',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'}],
                playerPublishDateTime: '2014-07-10 12:10',
                playerFromGroup: '圈子名称 noe',
                playerSubjectCommentCount: '7',
                playerSubjectRelayCount: '7',
                playerSubjectCollectionCount: '7',
                playerSubjectLaudCount: '7'
            },
            {
                playerUserName: 'UserName two',
                playerUserPhoto: 'uploads/player-photo.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 two',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'}],
                playerPublishDateTime: '2014-07-10 11:10',
                playerFromGroup: '圈子名称 two',
                playerSubjectCommentCount: '8',
                playerSubjectRelayCount: '8',
                playerSubjectCollectionCount: '8',
                playerSubjectLaudCount: '8'
            },
            {
                playerUserName: 'UserName three',
                playerUserPhoto: 'uploads/player-photo.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 three',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'}],
                playerPublishDateTime: '2014-07-10 10:10',
                playerFromGroup: '圈子名称 three',
                playerSubjectCommentCount: '9',
                playerSubjectRelayCount: '9',
                playerSubjectCollectionCount: '9',
                playerSubjectLaudCount: '9'
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/player-photo.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 four',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'}],
                playerPublishDateTime: '2014-07-10 09:10',
                playerFromGroup: '圈子名称 four',
                playerSubjectCommentCount: '11',
                playerSubjectRelayCount: '11',
                playerSubjectCollectionCount: '11',
                playerSubjectLaudCount: '11'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/player-photo.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'},{url:'uploads/player-content-photo.png'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectRelayCount: '22',
                playerSubjectCollectionCount: '22',
                playerSubjectLaudCount: '22'
            }
        ];
    });