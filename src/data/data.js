import React from "react";

// Courses images
import network from "../files/svg/network.svg";
import browser5 from "../files/svg/browser-5.svg";
import browser3 from "../files/svg/browser-3.svg";
import folder1 from "../files/svg/folder-1.svg";

// Skills icons
import creativity from "../files/svg/016-creativity.svg";
import analytics from "../files/svg/005-analytics.svg";
import rbg from "../files/svg/022-rgb.svg";
import launch from "../files/svg/018-launch.svg";
import ideas from "../files/svg/041-ideas.svg";
import grid from "../files/svg/013-grid.svg";
import mind from "../files/svg/035-mind.svg";

export const courses = [
  {
    // https://youtu.be/oJbfyzaA2QA?list=PLillGF-Rfqbap2IB6ZS4BBBcYPagAjpjn
    code: "HAAJN",
    name: "PHP Front To Back",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio perspiciatis ab fugiat veritatis reiciendis cumque dolor quibusdam. Suscipit a quae odio reiciendis. Provident, fugit nam debitis est nisi delectus quam perspiciatis nesciunt eligendi impedit sint et, ducimus, aspernatur amet?",
    image: network,
    skills: [100, 600, 300],
    registered: true,
    video: 3,
    lessonsTaken: 5,
    numberLessons: 7,
    tasks: 3,
    hour: 14,
  },
  {
    // https://www.youtube.com/watch?v=vb8xZ-bvxbg&list=PLLAZ4kZ9dFpOFJ9JcVW9u4PlSWO-VFoao
    code: "ZIKGX",
    name: "MongoDB - noSQL Database",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio perspiciatis ab fugiat veritatis reiciendis cumque dolor quibusdam. Suscipit a quae odio reiciendis. Provident, fugit nam debitis est nisi delectus quam perspiciatis nesciunt eligendi impedit sint et, ducimus, aspernatur amet?",
    image: browser5,
    skills: [400, 300],
    registered: false,
    video: 3,
    lessonsTaken: 0,
    numberLessons: 6,
    tasks: 2,
    hour: 13,
  },
  {
    // https://www.youtube.com/watch?v=2nZiB1JItbY&list=PLDyQo7g0_nsX8_gZAB8KD1lL4j4halQBJ
    code: "NJKWE",
    name: "Javascript For Beginners",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio perspiciatis ab fugiat veritatis reiciendis cumque dolor quibusdam. Suscipit a quae odio reiciendis. Provident, fugit nam debitis est nisi delectus quam perspiciatis nesciunt eligendi impedit sint et, ducimus, aspernatur amet?",
    image: browser3,
    skills: [300, 500, 700],
    registered: true,
    video: 2,
    lessonsTaken: 6,
    numberLessons: 7,
    tasks: 3,
    hour: 17,
  },
  {
    // https://www.youtube.com/watch?v=hMIGj1690QA&list=PLD8nQCAhR3tSSFktby1h8htS6QWTTneEr
    code: "XFOIR",
    name: "Redux",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio perspiciatis ab fugiat veritatis reiciendis cumque dolor quibusdam. Suscipit a quae odio reiciendis. Provident, fugit nam debitis est nisi delectus quam perspiciatis nesciunt eligendi impedit sint et, ducimus, aspernatur amet?",
    image: folder1,
    skills: [200, 400, 700],
    registered: false,
    video: 5,
    lessonsTaken: 0,
    numberLessons: 5,
    tasks: 1,
    hour: 9,
  },
];

export const lessons = [
  {
    course: "HAAJN",
    code: "HAAJN-KZL",
    number: 1,
    name: "Series Introduction",
    image: `url(
      "https://www.profocustechnology.com/wp-content/uploads/2018/01/office-team-engineering-1080x675.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/oJbfyzaA2QA",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "TUZIQPR",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },
  {
    course: "HAAJN",
    code: "HAAJN-UQT",
    number: 2,
    name: "PHP7 & Xammp Installation",
    image: `url(
      "https://lyncserve.com/images/design-team.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/6tCWiexc05U",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "BDQGDBW",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },

  {
    course: "HAAJN",
    code: "HAAJN-DDL",
    number: 3,
    name: "Variables, Constants & Data Types",
    image: `url(
      "https://lyncserve.com/images/design-team.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/0Dp7Lt7iT3A",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "36LUIHB",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },
    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },

  {
    course: "ZIKGX",
    code: "ZIKGX-KZL",
    number: 1,
    name: "Introduction",
    image: `url(
      "https://marconet.cl/img/top-developers.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/vb8xZ-bvxbg",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "FKG8X45",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },
  {
    course: "ZIKGX",
    code: "ZIKGX-UQT",
    number: 2,
    name: "Mac Installation",
    image: `url(
      "https://ubiqum.com/assets/uploads/2019/06/developers.jpeg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/E6boH7U5ZlI",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "H2XG2Q1",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },

  {
    course: "ZIKGX",
    code: "ZIKGX-DDL",
    number: 3,
    name: "Windows Installation",
    image: `url(
      "https://technext.ng/wp-content/uploads/2018/10/IN0316LPO03-web_80434-1-e1540453484902-750x354.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/UtV0g_sjOrc",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "PSLCJGE",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },
    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },

  {
    course: "NJKWE",
    code: "NJKWE-KZL",
    number: 1,
    name: "Getting Started With Javascript",
    image: `url(
      "https://cms.qz.com/wp-content/uploads/2017/04/indiaengineerscoding.jpeg?quality=75&strip=all&w=1600&h=900&crop=1"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/2nZiB1JItbY",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "CGM1EAY",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },
  {
    course: "NJKWE",
    code: "NJKWE-UQT",
    number: 2,
    name: "Varaibles & Data Types",
    image: `url(
      "https://lyncserve.com/images/design-team.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/edlFjlzxkSI",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "CFF04I3",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },

  {
    course: "NJKWE",
    code: "NJKWE-DDL",
    number: 3,
    name: "Functions & Parameters",
    image: `url(
      "https://www.profocustechnology.com/wp-content/uploads/2018/01/office-team-engineering-1080x675.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/xjAu2Y2nJ34",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "3WDKWLJ",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },
    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },

  {
    course: "XFOIR",
    code: "XFOIR-KZL",
    number: 1,
    name: "Introduction To Redux",
    image: `url(
      "https://lyncserve.com/images/design-team.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/hMIGj1690QA",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "57QWJ61",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },
  {
    course: "XFOIR",
    code: "XFOIR-UQT",
    number: 2,
    name: "Create Basic Redux Store",
    image: `url(
      "https://cms.qz.com/wp-content/uploads/2017/04/indiaengineerscoding.jpeg?quality=75&strip=all&w=1600&h=900&crop=1"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/A1dGf3pZsjM",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "EP5M2H5",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },

    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },

  {
    course: "XFOIR",
    code: "XFOIR-DDL",
    number: 3,
    name: "Create Multiple Reduces",
    image: `url(
      "https://lyncserve.com/images/design-team.jpg"
    )`,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum debitis nulla natus aut, similique incidunt deserunt dicta nam maiores fuga, necessitatibus unde, ratione corporis.",
    video: {
      url: "https://www.youtube.com/embed/M_xaxck1SVY",
      time: 1,
      number: 4,
    },
    tasks: {
      number: 1,
      tasks: {
        code: "ZITOQ0S",
        question:
          "Which systems can be reported on with Google Analytics tracking code?",
        options: [
          {
            value: "option1",
            answer: "Mobile Applications",
          },
          {
            value: "option2",
            answer: "Online point of sales system",
          },
          {
            value: "option3",
            answer: "Online point of sales system",
          },
          {
            value: "option4",
            answer: "Systems not conected to the internet",
          },
        ],
      },
    },
    lessons: 6,
    hours: 5,
    transcription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium neque enim consequatur perferendis odio alias assumenda vero quibusdam totam incidunt officia quos, illo maiores, obcaecati numquam aliquid fuga eum atque ab? Vitae incidunt commodi iusto fuga dolorum. Maxime velit blanditiis voluptatibus optio nisi mollitia placeat fugiat vitae totam error.",
    ],
  },
];

export const skills = [
  {
    code: 100,
    name: "Problem Solving",
    image: creativity,
  },
  {
    code: 200,
    name: "Testing",
    image: analytics,
  },
  {
    code: 300,
    name: "Logical Thinking",
    image: rbg,
  },
  {
    code: 400,
    name: "Google Analytics",
    image: launch,
  },
  {
    code: 500,
    name: "Control Management",
    image: ideas,
  },
  {
    code: 600,
    name: "Issue Management",
    image: grid,
  },
  {
    code: 700,
    name: "Cloud Platform",
    image: mind,
  },
];
