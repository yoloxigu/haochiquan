'use strict';
angular.module('haochiquanApp')
    .controller('SubjectCtl', function ($scope) {
        $scope.subjects = [
            {
                playerUserName: 'UserName one',
                playerUserPhoto: 'uploads/users/u140.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 one',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u73.jpg'},{url:'uploads/contents/u75.jpg'},{url:'uploads/contents/u77.jpg'},{url:'uploads/contents/u79.jpg'},{url:'uploads/contents/u81.jpg'},{url:'uploads/contents/u83.jpg'}],
                playerPublishDateTime: '2014-07-10 12:10',
                playerFromGroup: '圈子名称 noe',
                playerSubjectCommentCount: '7',
                playerSubjectRelayCount: '7',
                playerSubjectCollectionCount: '7',
                playerSubjectLaudCount: '7'
            },
            {
                playerUserName: 'UserName two',
                playerUserPhoto: 'uploads/users/u155.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 two',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u79.jpg'},{url:'uploads/contents/u81.jpg'},{url:'uploads/contents/u83.jpg'}],
                playerPublishDateTime: '2014-07-10 11:10',
                playerFromGroup: '圈子名称 two',
                playerSubjectCommentCount: '8',
                playerSubjectRelayCount: '8',
                playerSubjectCollectionCount: '8',
                playerSubjectLaudCount: '8'
            },
            {
                playerUserName: 'UserName three',
                playerUserPhoto: 'uploads/users/u533.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 three',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u199.jpg'},{url:'uploads/contents/u277.jpg'},{url:'uploads/contents/u279.jpg'},{url:'uploads/contents/u281.jpg'}],
                playerPublishDateTime: '2014-07-10 10:10',
                playerFromGroup: '圈子名称 three',
                playerSubjectCommentCount: '9',
                playerSubjectRelayCount: '9',
                playerSubjectCollectionCount: '9',
                playerSubjectLaudCount: '9'
            },
            {
                playerUserName: 'UserName four',
                playerUserPhoto: 'uploads/users/u473.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 four',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 09:10',
                playerFromGroup: '圈子名称 four',
                playerSubjectCommentCount: '11',
                playerSubjectRelayCount: '11',
                playerSubjectCollectionCount: '11',
                playerSubjectLaudCount: '11'
            },
            {
                playerUserName: 'UserName five',
                playerUserPhoto: 'uploads/users/u475.png',
                playerUserIcon: 'uploads/small-icon.png',
                playerSubjectTitle: '话题标题 five',
                playerSubjectContent: '话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文话题内容正文',
                playerSubjectPhoto: [{url:'uploads/contents/u283.jpg'},{url:'uploads/contents/u437.jpg'},{url:'uploads/contents/u495.jpg'}],
                playerPublishDateTime: '2014-07-10 08:10',
                playerFromGroup: '圈子名称 five',
                playerSubjectCommentCount: '22',
                playerSubjectRelayCount: '22',
                playerSubjectCollectionCount: '22',
                playerSubjectLaudCount: '22'
            }
        ];
    });