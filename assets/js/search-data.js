// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/amadou_sangare_cv.pdf";
          },
        },{id: "news-our-paper-a-fused-gromov-wasserstein-approach-to-subgraph-contrastive-learning-has-been-accepted-at-the-transactions-of-machine-learning-research-tmlr",
          title: 'Our paper A Fused Gromov-Wasserstein Approach to Subgraph Contrastive Learning has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-towards-fine-grained-spatial-control-for-soccer-game-image-generation-has-been-accepted-at-cvprw-2025",
          title: 'Our paper Towards fine-grained spatial control for soccer game image generation has been...',
          description: "",
          section: "News",},{id: "news-our-paper-improving-controllable-generation-faster-training-and-better-performance-via-x-0-supervision-has-been-accepted-at-cvpr-2026",
          title: 'Our paper Improving Controllable Generation: Faster Training and Better Performance via $x_0$-Supervision has...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%61%64%6F%75-%73%69%61%6B%61.%73%61%6E%67%61%72%65@%63%65%61.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/sangaram", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amadou-siaka-sangare", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=GMRsymIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
