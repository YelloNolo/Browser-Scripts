// ==UserScript==
// @name         Ravenwood Remove Blur
// @description  Removes blur effect on ravenwood.
// @author       YelloNolo
// @version      0.1
// @date         2024-1-24
// @namespace    https://yello.zip
// @homepage     https://github.com/YelloNolo/YouTube-Adblock
// @match        *://vrcdb.ravenwood.dev/*
// @require      file:\\C:\Users\Alecm\My Drive\Coding\Youtube-UnBlock\YouTube-DeBlock.user.js
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function applyModification(element) {
        element.style.backdropFilter = 'none';
    }

    function handleMutations(mutationsList, observer) {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'childList') {
                const newElements = mutation.addedNodes;
                newElements.forEach((element) => {
                    if (element.nodeType === Node.ELEMENT_NODE) {
                        const divElement = element.querySelector('div[style*="backdrop-filter: blur(5px) grayscale(0%)"]');
                        if (divElement) {
                            applyModification(divElement);
                        }
                    }
                });
            }
        });
    }

    const observer = new MutationObserver(handleMutations);

    observer.observe(document, { childList: true, subtree: true });

    
})();
