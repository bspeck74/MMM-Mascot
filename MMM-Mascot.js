/* MagicMirror²
 * Module: MMM-Mascot
 *
 * A simple module to display a static mascot image.
 */
Module.register("MMM-Mascot", {
    // Default module config.
    defaults: {
        // No config needed
    },

    // Override dom generator.
    getDom: function() {
        const wrapper = document.createElement("div");
        wrapper.className = "mascot-wrapper";

        const mascotImage = document.createElement("img");
        // This tells it to look for the image inside this module's folder
        mascotImage.src = this.file("MiamiU.png");
        mascotImage.className = "mascot-image";

        wrapper.appendChild(mascotImage);
        return wrapper;
    },

    // Load the CSS file
    getStyles: function() {
        return ["MMM-Mascot.css"];
    }
});
