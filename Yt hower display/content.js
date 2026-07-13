(() => {
    'use strict';

    const isThumbnail = (el) =>
        el &&
        el.closest &&
        el.closest(
            'ytd-thumbnail, a#thumbnail, ytd-rich-item-renderer, ytd-video-renderer'
        );

    const stop = (e) => {
        if (isThumbnail(e.target)) {
            e.stopImmediatePropagation();
        }
    };

    window.addEventListener('mouseover', stop, true);
    window.addEventListener('mouseenter', stop, true);
    window.addEventListener('mousemove', stop, true);
})();