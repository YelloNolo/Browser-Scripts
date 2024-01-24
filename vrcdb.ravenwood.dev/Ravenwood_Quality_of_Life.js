// ==UserScript==
// @name         Ravenwood Quality of Life
// @description  Small changes to make the experience of using "vrcdb.ravenwood.dev" a little better.
// @author       YelloNolo
// @version      0.2
// @date         2024-1-24
// @namespace    https://yello.zip
// @homepage     https://github.com/YelloNolo/YouTube-Adblock
// @match        *://vrcdb.ravenwood.dev/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    const imageSelector =
        "div.d-flex.flex-column.justify-content-end.justify-content-sm-end.justify-content-md-end.justify-content-xxl-end.align-items-xxl-start";

    function removeBlur(element) {
        element.style.backdropFilter = "none";
    }
    function imageExpand(element) {
        element.style.height = "100%";
    }

    function handleMutations(mutationsList, observer) {
        mutationsList.forEach((mutation) => {
            if (mutation.type === "childList") {
                const newElements = mutation.addedNodes;
                newElements.forEach((element) => {
                    if (element.nodeType === Node.ELEMENT_NODE) {
                        const blurElement = element.querySelector(
                            'div[style*="backdrop-filter: blur(5px) grayscale(0%)"]'
                        );
                        const imageElement =
                            element.querySelector(imageSelector);
                        if (blurElement) {
                            removeBlur(blurElement);
                        }
                        if (imageElement) {
                            imageExpand(imageElement);
                        }
                    }
                });
            }
        });
    }

    const observer = new MutationObserver(handleMutations);

    observer.observe(document, { childList: true, subtree: true });
})();
