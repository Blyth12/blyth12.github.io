var started, resetTimeoutHandle, resetTimeout = 1000,
    container = document.getElementById('container'),
    counter = document.getElementById('counter'),
    zone = document.getElementById('zone'),
    clicks = 0;

zone.onseclect = zone.onselectstart = function() {
    return false;
};

function clicksPerSecond(started, clicks) {
    return clicks / ((new Date()) - started) * 1000;
}

function count() {
    clearTimeout(resetTimeoutHandle);
    clicks++;
    counter.innerText = clicksPerSecond(started, clicks);
    resetTimeoutHandle = setTimeout(reset, resetTimeout);
    return false;
}

function start() {
    started = new Date();
    clicks = 0;
    counter.style.opacity = 1;
    this.onmousedown = count;
    this.onmousedown();
    return false;
}

function reset() {
    zone.onmousedown = start;
    counter.style.opacity = 0.3;
}

reset();