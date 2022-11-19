function ref() {
    const i = setInterval(() => {
        if (window.location.host == "rentry.co") {
            const path = [ "BEi03C","1y18v1","2eFM7Go","JDvHhU","h2bHrkzK","Ubo3Df9","HmL7a9no","lhCpINBb","aro","RP2q73E","daf","jzN9OX","J1exyUnN","FzLz","jWCd","hHA","30O","XhxsVB","hlo","0iOC","rDdyX5OD","5xd4a","gpBY","zwQ5f7XN","dUx3V","I7Le","p4j","ss7U","1Kf","kFXPbbK",  ],    pathshuffle = shuffle(path),
                random = pathshuffle[Math.floor(Math.random() * pathshuffle.length)];

            function shuffle(h) {
                for (let t = h.length - 1; 0 < t; t--) {
                    var a = Math.floor(Math.random() * (t + 1)),
                        f = h[t];
                    h[t] = h[a], h[a] = f
                }
                return h
            }
            clearInterval(i);
            setTimeout(() => {
                window.location = "http://linkbnao.com/" + random;
            }, 1000);
        }
    }, 500)
}

function scr() {
    const scr = setInterval(() => {
        if (window.location.host == 'ctdbihar.in' || window.location.host == 'doibihar.org') {
            clearInterval(scr);
            setTimeout(() => {
                if (document.querySelectorAll("script")) {
                    document.querySelectorAll("script").forEach(el => {
                        if (el.outerText.replaceAll(' ', '').replaceAll('\n', '').includes('varcount=14') || el.outerText.replaceAll(' ', '').replaceAll('\n', '').includes('varcount=15')) {
                            el.remove();
                            var script = document.createElement('script');
                            var head = document.getElementsByTagName("head")[0];
                            var txt = document.createTextNode(`var count=0,counter=setInterval(timer,0);function timer(){if(--count<=0)return document.getElementById("tp-wait1").style.display="none",document.getElementById("tp-generate").style.display="block",document.getElementById("tp-snp2").style.display="block",void clearInterval(counter);document.getElementById("tp-time").innerHTML=count}`)
                            script.appendChild(txt);
                            head.appendChild(script);
                        }
                    });
                }
            }, 500);
        }
    }, 50);
}

function last_pg() {
    const lpg = setInterval(() => {
        if (document.querySelector('a[class*="btn-success"]')) {
            if (document.querySelector('a[class*="btn-success"]').innerHTML == 'Get Link') {
                clearInterval(lpg);
                setTimeout(() => {
                    document.querySelector('a[class*="btn-success"]').click();
                    setTimeout(() => {
                        window.location = "https://h2244r.github.io/gp/";
                    }, 50);
                }, 50);
            }
        }
    }, 1000);
}

function run() {
    const run = setInterval(() => {
        if (window.location.host == 'www.google.com') {
            if (document.querySelectorAll('span[class][role="text"]')) {
                clearInterval(run);
                document.querySelectorAll('span[class][role="text"]')[0].click()
            }
        }
        if (window.location.host == 'ctdbihar.in') {
            setTimeout(() => {
                if (document.querySelector("#tp-snp2")) {
                    clearInterval(run);
                    setTimeout(() => {
                        document.querySelector("#tp-snp2").click();
                        setTimeout(() => {
                            document.querySelector("#dismiss-button").click();
                        }, 700);
                    }, 500);
                }
            }, 1000);
        }
        if (window.location.host == 'doibihar.org') {
            setTimeout(() => {
                if (document.querySelector("#tp-snp2")) {
                    clearInterval(run);
                    setTimeout(() => {
                        document.querySelector('center a').click();
                    }, 500);
                }
            }, 1000);
        }
    }, 1000);
}

setInterval(() => {
    if (document.querySelector("#mh-mobile > div.mh-container.mh-container-outer")) {
        document.querySelector("#mh-mobile > div.mh-container.mh-container-outer").style.display = 'none'
    }
    if (document.querySelectorAll('br')) {
        document.querySelectorAll('br').forEach(e => {
            e.remove();
        })
    }
    if (document.querySelector("#mh-mobile > div.tp-top.text-center")) {
        document.querySelector("#mh-mobile > div.tp-top.text-center").style.display = 'none'
    }
    if (document.querySelectorAll('ins')) {
        document.querySelectorAll('ins').forEach(e => {
            e.style.display = 'none'
        })
    }
    if (document.querySelector("#mh-mobile > div.mh-wrapper.mh-clearfix")) {
        document.querySelector("#mh-mobile > div.mh-wrapper.mh-clearfix").style.display = 'none'
    }
    if (document.querySelector("#mh-mobile > div.mh-copyright-wrap")) {
        document.querySelector("#mh-mobile > div.mh-copyright-wrap").style.display = 'none'
    }
    if (document.querySelectorAll('div[data-google-query-id]')) {
        document.querySelectorAll('div[data-google-query-id]').forEach(e => {
            e.style.display = 'none'
        })
    }
    if (document.querySelector("#mainNav")) {
        document.querySelector("#mainNav").style.display = 'none'
    }
    if (document.querySelector('footer')) {
        document.querySelector('footer').remove();
    }
}, 10);

setTimeout(() => {
    ref();
    scr();
    run();
    last_pg();
}, 1000);
