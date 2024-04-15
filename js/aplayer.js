!(function () {
    var oldLoadAp = window.onload;
    window.onload = function () {
        oldLoadAp && oldLoadAp();

        new APlayer({
            container: document.getElementById('aplayer'),
            listFolded: true,
            listMaxHeight: 90,
            lrcType: 3,
            fixed: true,
            autoplay: true,
            mutex: true,
            loop: 'all',
            order: 'random',
            theme: '#b7daff',
            preload: 'auto',
            audio: [
                {
                    name: '晴天',
                    artist: '周杰伦',
                    url: '/songs/晴天.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/晴天.lrc',
                    theme: '#ebd0c2'
                },
                {
                    name: '告白气球',
                    artist: '周杰伦',
                    url: '/songs/告白气球.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/告白气球.lrc',
                    theme: '#46718b'
                },
                {
                    name: '稻香',
                    artist: '周杰伦',
                    url: '/songs/稻香.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/稻香.lrc',
                    theme: '#46718b'
                },
                {
                    name: '最伟大的作品',
                    artist: '周杰伦',
                    url: '/songs/最伟大的作品.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/最伟大的作品.lrc',
                    theme: '#46718b'
                },
                {
                    name: '七里香',
                    artist: '周杰伦',
                    url: '/songs/七里香-周杰伦.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/七里香-周杰伦.lrc',
                    theme: '#46718b'
                },
                {
                    name: '突然的自我',
                    artist: '伍佰',
                    url: '/songs/突然的自我-伍佰.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/突然的自我-伍佰.lrc',
                    theme: '#46718b'
                },
                {
                    name: '挪威的森林',
                    artist: '伍佰',
                    url: '/songs/挪威的森林-伍佰.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/挪威的森林-伍佰.lrc',
                    theme: '#46718b'
                },
                {
                    name: '爱你一万年',
                    artist: '伍佰',
                    url: '/songs/爱你一万年-伍佰.mp3',
                    cover: '/img/avatar.png',
                    lrc: '/songs/爱你一万年-伍佰.lrc',
                    theme: '#46718b'
                }
            ]
        });
    }
})();