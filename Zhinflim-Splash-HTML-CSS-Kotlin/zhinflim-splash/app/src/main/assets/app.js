(() => {
    "use strict";

    const SPLASH_DURATION_MS = 5000;
    const image = document.getElementById("splashImage");
    const endScreen = document.getElementById("endScreen");
    let hasStarted = false;

    document.documentElement.style.setProperty(
        "--splash-duration",
        `${SPLASH_DURATION_MS}ms`
    );

    const startSplash = () => {
        if (hasStarted) return;
        hasStarted = true;

        requestAnimationFrame(() => {
            document.body.classList.add("is-running");

            window.setTimeout(() => {
                document.body.classList.add("is-finished");
                endScreen.setAttribute("aria-hidden", "false");
            }, SPLASH_DURATION_MS);
        });
    };

    if (image.complete) {
        startSplash();
    } else {
        image.addEventListener("load", startSplash, { once: true });
        image.addEventListener("error", startSplash, { once: true });
    }
})();

