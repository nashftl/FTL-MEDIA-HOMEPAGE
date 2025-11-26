// --- discography.js ---

// --- Discography Data ---
// Added Asaiowe - Far Away, assuming year 24. Please verify year/genre/image filename.
const discographyData = [
  // {
  //   year: 19,
  //   artist: "2AM",
  //   title: "feelings off (single)",
  //   genre: "rnb",
  //   roles: ["Mix/Master"],
  //   links: { spotify: "https://open.spotify.com/track/2P7fdhNrYrLyl3G5hgVopc" },
  //   imageUrl: "images/covers/2am-feelings-off-single-19.jpg",
  // },
  // {
  //   year: 20,
  //   artist: "2AM",
  //   title: "pov (single)",
  //   genre: "rnb",
  //   roles: ["Recording Engineer", "Mix/Master"],
  //   links: { spotify: "https://open.spotify.com/track/1XUcYvNH36qO6EqIX7mnAT" },
  //   imageUrl: "images/covers/2am-pov-single-20.jpg",
  // },
  // {
  //   year: 21,
  //   artist: "sandrahhh",
  //   title: "for real this time",
  //   genre: "rnb",
  //   roles: ["Recording Engineer", "Mix/Master", "Executive Producer/Engineer"],
  //   links: { spotify: "https://open.spotify.com/album/1XjE3Omo1HZVBidyJ9pvXt" },
  //   imageUrl: "images/covers/sandrahhh-for-real-this-time-21.jpg",
  // },
  {
    year: 22,
    artist: "fentse, wolffisdead",
    title: "blunt knife (single)",
    genre: "rnb",
    roles: ["Recording Engineer", "Mix/Master"],
    links: { spotify: "https://open.spotify.com/track/26YZeiQiwSdnRsxfr7n3v8" },
    imageUrl: "images/covers/fentse-wolffisdead-blunt-knife-single-22.jpg",
  },
  // {
  //   year: 22,
  //   artist: "2AM",
  //   title: "close enough",
  //   genre: "rnb",
  //   roles: ["Recording Engineer", "Mix/Master", "Executive Producer/Engineer"],
  //   links: { spotify: "https://open.spotify.com/album/1NOyQ73sOIQFBf35IfVue4" },
  //   imageUrl: "images/covers/2am-close-enough-22.jpg",
  // },
  {
    year: 22,
    artist: "keeme",
    title: "hi, i'm keeme",
    genre: "rnb",
    roles: ["Recording Engineer", "Mix/Master", "Executive Producer/Engineer"],
    links: { spotify: "https://open.spotify.com/album/0xTRfpqqI4AjMuwAWq9jpb" },
    imageUrl: "images/covers/keeme-hi-im-keeme-22.jpg",
  },
  // {
  //   year: 22,
  //   artist: "sandrahhh",
  //   title: "eating good",
  //   genre: "hiphop/rap",
  //   roles: [
  //     "Producer",
  //     "Recording Engineer",
  //     "Mix/Master",
  //     "Executive Producer/Engineer",
  //   ],
  //   links: { spotify: "https://open.spotify.com/album/7p5rncAGaqO9YbPImrHZUT" },
  //   imageUrl: "images/covers/sandrahhh-eating-good-22.jpg",
  // },
  // {
  //   year: 23,
  //   artist: "sandrahhh",
  //   title: "keep the peace",
  //   genre: "rnb/soul",
  //   roles: ["Recording Engineer", "Mix/Master", "Executive Producer/Engineer"],
  //   links: { spotify: "https://open.spotify.com/album/53hNXBU157GHjS6r0p3qhD" },
  //   imageUrl: "images/covers/sandrahhh-keep-the-peace-23.jpg",
  // },
  {
    year: 23,
    artist: "fentse",
    title: "therapy is cancelled",
    genre: "rnb/soul",
    roles: ["Recording Engineer", "Mix/Master", "Executive Producer/Engineer"],
    links: { spotify: "https://open.spotify.com/album/4nUOULl5gl3Dr0velwTNFs" },
    imageUrl: "images/covers/fentse-therapy-is-cancelled-23.jpg",
  },
  // {
  //   year: 23,
  //   artist: "sandrahhh",
  //   title: "laws of the jungle",
  //   genre: "hiphop/rap",
  //   roles: ["Recording Engineer", "Mix/Master", "Executive Producer/Engineer"],
  //   links: { spotify: "https://open.spotify.com/album/2H0CNDEOGtIUZygiyeu2dA" },
  //   imageUrl: "images/covers/sandrahhh-laws-of-the-jungle-23.jpg",
  // },
  {
    year: 23,
    artist: "keeme, buzzi lee, money badoo",
    title: "hasta vista single",
    genre: "hiphop/rap",
    roles: ["Recording Engineer", "Mix/Master"],
    links: { spotify: "https://open.spotify.com/track/5emUxCHCcDCWK7VePTMOrR" },
    imageUrl:
      "images/covers/keeme-buzzi-lee-money-badoo-hasta-vista-single-23.jpg",
  },
  {
    year: 23,
    artist: "phiwo",
    title: "things we feel (single)",
    genre: "rnb/soul",
    roles: ["Producer", "Recording Engineer", "Mix/Master"],
    links: { spotify: "https://open.spotify.com/track/1vnnNApbYD6fF0eTTl3dTf" },
    imageUrl: "images/covers/phiwo-things-we-feel-single-23.jpg",
  },
  {
    year: 23,
    artist: "043 ghxst, patrickxxlee",
    title: "the waters",
    genre: "hiphop/rap",
    roles: ["Recording Engineer", "Mix/Master"],
    links: { spotify: "https://open.spotify.com/track/6KCf39vHLddejedOdZWvQO" },
    imageUrl: "images/covers/043-ghxst-patrickxxlee-the-waters-23.jpg",
  },
  // {
  //   year: 24,
  //   artist: "2AM",
  //   title: "for you, forever",
  //   genre: "rnb/soul",
  //   roles: ["Recording Engineer", "Mix/Master", "Executive Producer/Engineer"],
  //   links: { spotify: "https://open.spotify.com/album/6q8rLOzjZMAGt2M1f4syHl" },
  //   imageUrl: "images/covers/2am-for-you-forever-24.jpg",
  // },
  {
    year: 24,
    artist: "nashftl",
    title: "don't get attached",
    genre: "hiphop/rap",
    roles: [
      "Producer",
      "Recording Engineer",
      "Mix/Master",
      "Executive Producer/Engineer",
    ],
    links: { spotify: "https://open.spotify.com/album/70TKBKvVqLR3f5J5MDdS39" },
    imageUrl: "images/covers/nashftl-dont-get-attached-24.jpg",
  },
  {
    year: 24,
    artist: "aquarius jay, whoswylee",
    title: "brat (single)",
    genre: "house",
    roles: ["Recording Engineer", "Mix/Master"],
    links: {
      spotify:
        "https://open.spotify.com/track/4b59b788-5381-4190-a84c-3b5fbfa4ff15",
    },
    imageUrl: "images/covers/aquarius-jay-whoswvlee-brat-single-24.jpg",
  },
  {
    year: 24,
    artist: "sipho",
    title: "move",
    genre: "rnb",
    roles: ["Producer", "Recording Engineer", "Mix/Master"],
    links: { spotify: "https://open.spotify.com/track/5kXMu2qpAZM5JndJxf5faP" },
    imageUrl: "images/covers/sipho-move-24.jpg",
  },
  {
    year: 24,
    artist: "sipho",
    title: "fool for love",
    genre: "rnb",
    roles: ["Producer", "Recording Engineer", "Mix/Master"],
    links: { spotify: "https://open.spotify.com/track/4bb9OkIuKJJtAxE2uxLc4z" },
    imageUrl: "images/covers/sipho-fool-for-love-24.jpg",
  },
  {
    year: 25,
    artist: "just jabba, kgaldrogo",
    title: "say less",
    genre: "hiphop/rap",
    roles: ["Mix/Master", "Executive Producer/Engineer"],
    links: { spotify: "https://open.spotify.com/album/1WzpCA5woiuounnEvLjHqm" },
    imageUrl: "images/covers/just-jabba-kgaldrogo-say-less-25.jpg",
  },
  {
    year: 25,
    artist: "asaiowé",
    title: "far away (single)",
    genre: "RnB/Soul",
    roles: ["Mix/Master"],
    links: { spotify: "https://open.spotify.com/track/6SZremAYMTpoOpdMTWZXUC" },
    imageUrl: "images/covers/asaiowe-far-away-25.jpg",
  }, // Added year 24 assumption
  {
    year: 25,
    artist: "HRTBRKK",
    title: "it will all make sense when we're dead",
    genre: "hiphop/rap",
    roles: ["Mix/Master"],
    links: {
      spotify:
        "https://open.spotify.com/album/159xUTElyKSn3KXUt9TVTu?si=MxYnJFG5QUmb7JCo9pQnfg",
    },
    imageUrl: "images/covers/hrtbrkk-iwamswwd.png",
  }, // Added year 24 assumption
];

document.addEventListener("DOMContentLoaded", () => {
  console.log("Discography page loaded. Initializing...");

  // --- SELECT ELEMENTS ---
  const gridContainer = document.getElementById("discography-grid");
  const loadingMessage = document.getElementById("grid-loading-message"); // <-- Get loading message element
  const modal = document.getElementById("disco-modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalArtist = document.getElementById("modal-artist");
  const modalYearLabel = document.getElementById("modal-year-label");
  const modalRolesList = document.getElementById("modal-roles-list");
  const modalLinks = document.getElementById("modal-links");
  const closeButton = modal ? modal.querySelector(".close-button") : null;

  // --- Robust Check for Essential Elements ---
  if (
    !gridContainer ||
    !modal ||
    !modalOverlay ||
    !closeButton ||
    !modalImg ||
    !modalTitle ||
    !modalArtist ||
    !modalYearLabel ||
    !modalRolesList ||
    !modalLinks
  ) {
    console.error(
      "Essential elements for discography page interaction not found! Cannot proceed. Check IDs in discography.html.",
      {
        /* Log elements */
      }
    );
    if (gridContainer && loadingMessage) {
      // Check BOTH exist before modifying
      loadingMessage.textContent =
        "Error: Page elements missing. Cannot load discography.";
      loadingMessage.style.color = "red";
    } else if (gridContainer) {
      // Fallback if only grid exists
      gridContainer.innerHTML =
        '<p style="color: red; text-align: center; grid-column: 1 / -1;">Error: Page elements missing.</p>';
    }
    return; // Stop script execution
  }
  if (!loadingMessage) {
    // Warn if only loading message missing
    console.warn("Loading message element (#grid-loading-message) not found.");
  }
  console.log("All essential elements found.");

  // --- Populate Grid ---
  console.log(`Found ${discographyData.length} projects. Reversing order...`);
  discographyData.reverse(); // Display most recent first

  // Wrap grid population in try...finally to ensure loading message removal
  try {
    discographyData.forEach((project, index) => {
      const gridItem = document.createElement("div");
      gridItem.className = "disco-item";
      gridItem.dataset.projectIndex = index; // Store index

      const img = document.createElement("img");
      img.src = project.imageUrl || "images/placeholder-cover.png"; // Placeholder image
      img.alt = `${project.title || "Unknown Title"} - ${
        project.artist || "Unknown Artist"
      } Cover Art`;
      img.loading = "lazy"; // Lazy load images

      gridItem.appendChild(img);

      // --- Add Click Listener ---
      gridItem.addEventListener("click", () => {
        console.log(
          `--- Click detected on grid item! Index: ${gridItem.dataset.projectIndex} ---`
        );
        const clickedProjectIndex = parseInt(gridItem.dataset.projectIndex, 10);

        if (isNaN(clickedProjectIndex)) {
          console.error(
            "Could not parse project index:",
            gridItem.dataset.projectIndex
          );
          return;
        }
        const projectData = discographyData[clickedProjectIndex]; // Get data using index

        if (projectData) {
          console.log("Project data found:", projectData);
          console.log("Attempting to call populateAndOpenModal...");
          populateAndOpenModal(projectData);
        } else {
          console.error(
            "Could not find project data for index:",
            clickedProjectIndex
          );
        }
      });
      // --- END CLICK LISTENER ---

      gridContainer.appendChild(gridItem);
    });
  } finally {
    // Remove loading message AFTER loop finishes (or on error)
    if (loadingMessage) {
      loadingMessage.remove();
    }
    // Optional: Add 'loaded' class for fade-in effect
    // gridContainer.classList.add('loaded');
    console.log("Grid populated. Removed loading message.");
  }
  // --- End Populate Grid ---

  // --- Modal Functions (Keep As Is) ---
  function populateAndOpenModal(project) {
    /* ... function content ... */
    console.log("Populating modal for:", project.title);
    modalImg.src = project.imageUrl || "images/placeholder-cover.png";
    modalImg.alt = `${project.title || "Unknown Title"} - ${
      project.artist || "Unknown Artist"
    } Cover Art`;
    modalTitle.textContent = project.title || "No Title";
    modalArtist.textContent = project.artist || "Unknown Artist";
    modalYearLabel.textContent = project.year
      ? `Released: 20${project.year}`
      : "Year Unknown";
    if (project.label) {
      modalYearLabel.textContent += ` / Label: ${project.label}`;
    }
    modalRolesList.innerHTML = "";
    if (
      project.roles &&
      Array.isArray(project.roles) &&
      project.roles.length > 0
    ) {
      project.roles.forEach((role) => {
        const li = document.createElement("li");
        li.textContent = role;
        modalRolesList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "N/A";
      modalRolesList.appendChild(li);
    }
    modalLinks.innerHTML = "";
    let hasLinks = false;
    if (project.links) {
      if (project.links.spotify) {
        modalLinks.appendChild(
          createLinkElement(project.links.spotify, "Spotify")
        );
        hasLinks = true;
      }
      if (project.links.youtube) {
        modalLinks.appendChild(
          createLinkElement(project.links.youtube, "YouTube")
        );
        hasLinks = true;
      }
      if (project.links.apple) {
        modalLinks.appendChild(
          createLinkElement(project.links.apple, "Apple Music")
        );
        hasLinks = true;
      }
    }
    if (!hasLinks && project.link) {
      if (project.link.includes("spotify.com")) {
        modalLinks.appendChild(createLinkElement(project.link, "Spotify"));
        hasLinks = true;
      } else {
        modalLinks.appendChild(createLinkElement(project.link, "Listen/View"));
        hasLinks = true;
      }
    }
    if (!hasLinks) {
      modalLinks.innerHTML =
        '<p style="font-size: 0.85rem; color: #888; margin:0;">No streaming links provided.</p>';
    }
    openModal();
  }
  function createLinkElement(url, text) {
    /* ... function content ... */
    const link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }
  function openModal() {
    /* ... function content ... */
    console.log("Executing openModal function...");
    if (modal && modalOverlay) {
      modalOverlay.classList.add("visible");
      modal.classList.add("visible");
      console.log("Added .visible to modal and overlay.");
    } else {
      console.error(
        "Cannot open modal - Modal or Overlay element missing from function scope."
      );
    }
  }
  function closeModal() {
    /* ... function content ... */
    console.log("Executing closeModal function...");
    if (modal && modalOverlay) {
      modalOverlay.classList.remove("visible");
      modal.classList.remove("visible");
      console.log("Removed .visible from modal and overlay.");
    } else {
      console.error(
        "Cannot close modal - Modal or Overlay element missing from function scope."
      );
    }
  }
  // --- Add Modal Close Listeners (Keep As Is) ---
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }
  document.addEventListener("keydown", (event) => {
    /* ... escape key code ... */
  });
  console.log("Discography page initialization complete.");
}); // End DOMContentLoaded
