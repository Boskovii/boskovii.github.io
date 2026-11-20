// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Research and course projects in robotics, biomechanics, and mechanical design.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Academic and professional experience in mechanical engineering, robotics, and biomechanics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-awarded-the-president-s-undergraduate-research-award-pura-for-summer-2024",
          title: 'Awarded the President’s Undergraduate Research Award (PURA) for Summer 2024.',
          description: "",
          section: "News",},{id: "news-started-a-process-development-internship-at-boston-scientific",
          title: 'Started a Process Development Internship at Boston Scientific.',
          description: "",
          section: "News",},{id: "news-completed-a-process-development-internship-at-boston-scientific-presenting-final-work-on-optimizing-a-robotic-laser-ablation-system",
          title: 'Completed a Process Development Internship at Boston Scientific, presenting final work on optimizing...',
          description: "",
          section: "News",},{id: "news-awarded-the-chair-s-ambassadors-in-leadership-and-service-fellowship",
          title: 'Awarded the Chair’s Ambassadors in Leadership and Service Fellowship.',
          description: "",
          section: "News",},{id: "news-presented-a-planar-mobility-mechanism-for-secure-and-comfortable-exoskeleton-thigh-interfaces-at-the-gulf-coast-undergraduate-research-symposium-gcurs-rice-university-and-received-a-travel-award-pdf",
          title: 'Presented “A Planar Mobility Mechanism for Secure and Comfortable Exoskeleton Thigh Interfaces” at...',
          description: "",
          section: "News",},{id: "news-submitted-the-thesis-proposal-a-framework-for-evaluating-physical-human-robot-interface-design-to-the-georgia-tech-undergraduate-research-opportunities-program-gt-urop-pdf",
          title: 'Submitted the thesis proposal “A Framework for Evaluating Physical Human-Robot Interface Design” to...',
          description: "",
          section: "News",},{id: "news-awarded-the-nsf-graduate-research-fellowship-grfp-for-the-proposal-adaptive-neck-shoulder-exoskeleton-for-reducing-surgeon-fatigue-pdf-unfortunately-i-had-to-decline-the-award-because-i-was-not-enrolling-in-a-phd-program-in-fall-2026-and-was-not-able-to-defer-it-i-chose-to-take-a-gap-year-to-thru-hike-the-pacific-crest-trail-and-complete-a-research-fellowship-at-the-harvard-biodesign-lab-to-better-define-my-research-goals-and-interests-before-starting-a-phd",
          title: 'Awarded the NSF Graduate Research Fellowship (GRFP) for the proposal “Adaptive Neck-Shoulder Exoskeleton...',
          description: "",
          section: "News",},{id: "news-awarded-the-george-w-woodruff-school-of-mechanical-engineering-outstanding-scholar-award-at-the-georgia-tech-student-honors-celebration-georgia-tech-news",
          title: 'Awarded the George W. Woodruff School of Mechanical Engineering Outstanding Scholar Award at...',
          description: "",
          section: "News",},{id: "news-graduated-from-georgia-tech-with-a-b-s-in-mechanical-engineering-highest-honors-and-completed-the-undergraduate-thesis-a-device-agnostic-framework-for-evaluating-physical-human-robot-interface-design-in-wearable-robotics-pdf",
          title: 'Graduated from Georgia Tech with a B.S. in Mechanical Engineering (Highest Honors) and...',
          description: "",
          section: "News",},{id: "news-submitted-the-paper-many-legged-morphology-enables-dynamic-robotic-climbing-to-the-ieee-international-conference-on-robotics-and-automation-icra-2027",
          title: 'Submitted the paper “Many-Legged Morphology Enables Dynamic Robotic Climbing” to the IEEE International...',
          description: "",
          section: "News",},{id: "news-joined-the-harvard-biodesign-lab-as-a-research-fellow-in-bioengineering-under-prof-conor-walsh-working-on-ankle-exoskeletons-for-post-stroke-users",
          title: 'Joined the Harvard Biodesign Lab as a Research Fellow in Bioengineering under Prof....',
          description: "",
          section: "News",},{id: "news-resubmitted-an-application-to-the-nsf-graduate-research-fellowship-program-grfp-with-the-proposal-adaptive-neck-shoulder-exoskeleton-for-reducing-surgeon-fatigue-pdf",
          title: 'Resubmitted an application to the NSF Graduate Research Fellowship Program (GRFP) with the...',
          description: "",
          section: "News",},{id: "news-submitted-an-application-to-the-dod-national-defense-science-and-engineering-graduate-ndseg-fellowship-with-the-proposal-adaptive-shoulder-exoskeleton-control-for-precision-critical-maintenance-tasks-pdf",
          title: 'Submitted an application to the DoD National Defense Science and Engineering Graduate (NDSEG)...',
          description: "",
          section: "News",},{id: "projects-robotic-ankle-exoskeleton",
          title: 'Robotic Ankle Exoskeleton',
          description: "Hardware reliability improvements and working toward home and community use of an ankle exoskeleton",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_project/";
            },},{id: "projects-interface-design-evaluation-framework",
          title: 'Interface Design Evaluation Framework',
          description: "A device-agnostic framework for evaluating physical human-robot interface design in wearable robotics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-robotic-hip-exoskeleton",
          title: 'Robotic Hip Exoskeleton',
          description: "Development of a hip exoskeleton from conceptual design through prototyping and clinical testing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-robotic-dynamometer",
          title: 'Robotic Dynamometer',
          description: "Robotic ankle dynamometer for measuring muscle work loops and characterizing human sensorimotor control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-dynamic-simulation-of-hip-knee-joint-mechanics",
          title: 'Dynamic Simulation of Hip-Knee Joint Mechanics',
          description: "Double-pendulum model for analyzing human lower-limb dynamics and stability",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-design-and-control-of-an-autonomous-robot",
          title: 'Design and Control of an Autonomous Robot',
          description: "Autonomous robot with scissor lift mechanism and obstacle clearing capabilities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%6B%73%61%6E%64%61%72_%62%6F%73%6B%6F%76%69%63@%73%65%61%73.%68%61%72%76%61%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/aboskovic3", "_blank");
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
