// --- START OF FILE script.js ---
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded. Setting up loading screen and interactions.");

  // --- Select Elements (including audio) ---
  const loadingScreen = document.getElementById("loading-screen");
  const copyrightYearSpan = document.getElementById("copyright-year");
  const backgroundAudio = document.getElementById("background-music");

  let isLoadingScreenVisible = true; // Flag remains useful
  let musicPausedForBeats = false;

  // --- Loading Screen Logic (REVISED FOR MOBILE TOUCH) ---
  console.log("Setting up Loading Screen listeners...");

  // Set Copyright Year
  if (copyrightYearSpan) {
    copyrightYearSpan.textContent = new Date().getFullYear();
  } else {
    console.warn("Copyright year span not found.");
  }

  // Combined function to handle hiding and playing audio
  function hideLoadingScreenAndPlayAudio() {
    // Double check the flag
    if (!loadingScreen || !isLoadingScreenVisible) {
      return;
    }
    console.log("Interaction detected, hiding loading screen.");
    loadingScreen.classList.add("hidden");
    isLoadingScreenVisible = false; // Mark as hidden

    // --- TRY TO PLAY BACKGROUND MUSIC ---
    if (backgroundAudio) {
      console.log("Attempting to play background audio...");
      backgroundAudio.volume = 0.5; // Example: 50% volume
      const playPromise = backgroundAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then((_) => {
            console.log("Background audio playback started.");
          })
          .catch((error) => {
            console.error("Background audio playback failed:", error);
          });
      }
    } else {
      console.warn("Background audio element not found.");
    }

    // Listeners attached with { once: true } remove themselves automatically.
  }

  // Function just for keydown handling
  function handleKeyDown(event) {
    // Only hide if loading screen is still visible
    if (isLoadingScreenVisible) {
      console.log("Key pressed, hiding loading screen.");
      hideLoadingScreenAndPlayAudio(); // Call the combined function
    }
  }

  // Check if loading screen element exists before adding listeners
  if (loadingScreen) {
    console.log(
      "Adding loading screen listeners (click, touchstart, keydown)."
    );
    // Hide on first click OR first touch (Listeners attached to the screen itself)
    loadingScreen.addEventListener("click", hideLoadingScreenAndPlayAudio, {
      once: true,
    });
    loadingScreen.addEventListener(
      "touchstart",
      hideLoadingScreenAndPlayAudio,
      { once: true }
    );

    // Also listen for keydown on the window for desktop users
    window.addEventListener("keydown", handleKeyDown, { once: true });
  } else {
    console.error("CRITICAL: Loading screen element not found!");
    isLoadingScreenVisible = false; // Ensure rest of site isn't blocked
  }
  // --- End Loading Screen Logic ---

  // --- Modal Interaction Logic (Kept from your version) ---
  console.log("Setting up Modal listeners...");
  const modalTriggers = document.querySelectorAll(
    ".trigger:not(#trigger-blog):not(#trigger-music)"
  );
  const closeButtons = document.querySelectorAll(".modal .close-button");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modals = document.querySelectorAll(".modal");

  if (!modalOverlay) {
    console.error(
      "CRITICAL: Modal overlay element not found! Modals cannot function."
    );
  }
  if (modalTriggers.length === 0) {
    console.warn(
      "Warning: No modal trigger elements found (excluding blog/music)."
    );
  }
  if (modals.length === 0) {
    console.warn("Warning: No modal elements found.");
  }

  function openModal(modalId) {
    if (!modalOverlay) {
      console.error("Cannot open modal - Overlay is missing.");
      return;
    }
    const modalToOpen = document.getElementById(modalId);

    if (modalToOpen) {
      console.log(`Opening modal: #${modalId}`);
      modalOverlay.classList.add("visible");
      modalToOpen.classList.add("visible");

      if (
        modalId === "modal-beats" &&
        backgroundAudio &&
        !backgroundAudio.paused
      ) {
        console.log("Pausing background audio for beats modal.");
        backgroundAudio.pause();
        musicPausedForBeats = true;
      }
    } else {
      console.error(`Modal with ID #${modalId} not found.`);
    }
  }

  // --- UPDATED closeModal function (Don't auto-resume after beats) ---
  function closeModal() {
    if (!modalOverlay) {
      console.error("Cannot close modal - Overlay is missing.");
      return;
    }
    console.log("Closing active modal(s).");
    modalOverlay.classList.remove("visible");
    modals.forEach((modal) => {
      modal.classList.remove("visible");
    });

    // --- RESUME music logic (MODIFIED) ---
    // // Check if the flag is set AND background audio exists
    // if (musicPausedForBeats && backgroundAudio) {
    //     console.log("Resuming background audio after closing modal.");
    //     const playPromise = backgroundAudio.play();
    //      if (playPromise !== undefined) {
    //         playPromise.catch(error => {
    //             console.error("Audio resume failed:", error);
    //         });
    //     }
    // } // <-- Entire block commented out or deleted

    // ALWAYS Reset the flag when ANY modal closes
    musicPausedForBeats = false;
    // --- End RESUME music logic ---
  }

  modalTriggers.forEach((trigger) => {
    if (!trigger.id) {
      console.warn("Found a trigger element without an ID:", trigger);
      return;
    }
    trigger.addEventListener("click", () => {
      const targetModalId = trigger.id.replace("trigger-", "modal-");
      if (targetModalId && targetModalId !== trigger.id) {
        openModal(targetModalId);
      } else {
        console.error(
          `Could not determine target modal ID for trigger: ${trigger.id}`
        );
      }
    });
  });

  if (closeButtons.length > 0) {
    closeButtons.forEach((button) => {
      button.addEventListener("click", closeModal);
    });
  } else {
    console.warn("No close buttons found inside modals.");
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const isModalVisible = document.querySelector(".modal.visible");
      if (isModalVisible) {
        console.log("Escape key pressed, closing modal.");
        closeModal();
      }
    }
  });
  // --- End Modal Interaction Logic ---

  // --- Conditional Form Field Logic (Kept from your version) ---
  console.log("Setting up Conditional Form listeners...");
  const subjectSelect = document.getElementById("subject");
  const mixMasterOptions = document.getElementById("mixmaster-options");
  const postProdOptions = document.getElementById("postprod-options");
  if (subjectSelect && mixMasterOptions && postProdOptions) {
    console.log("Form elements found, adding change listener.");
    subjectSelect.addEventListener("change", () => {
      const selectedValue = subjectSelect.value;
      console.log("Booking Subject changed to:", selectedValue);
      mixMasterOptions.classList.remove("visible");
      postProdOptions.classList.remove("visible");
      if (selectedValue === "Mixing/Mastering") {
        mixMasterOptions.classList.add("visible");
      } else if (selectedValue === "Post Production") {
        postProdOptions.classList.add("visible");
      }
    });
  } else {
    console.error(
      "Could not find all required elements for conditional booking form logic.",
      { subjectSelect, mixMasterOptions, postProdOptions }
    );
  }
  // --- End Conditional Form Field Logic ---
}); // End of DOMContentLoaded
// --- END OF FILE script.js ---
