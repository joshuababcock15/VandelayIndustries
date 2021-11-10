import george from '../assets/george.png';
import judge from '../assets/judge.png';
import jerry from '../assets/jerry.png';
import importExport from '../assets/importExport.png';

const AboutData = {
  data: [
    {
      imageSrc: judge,
      imageAlt: 'judge',
      title: 'CEO: Arthur Vandelay',
      subtitle:
        'Arthur started this company from the ground up, not cutting any corners.  Fun fact he is a judge in his spare time.',
      link: 'Learn more',
    },
    {
      imageSrc: george,
      imageAlt: 'george',
      title: 'Lead Salesman: George Costanza',
      subtitle:
        'George is a man of the people, he eats and sleeps Vandelay Industries. He can sell anything and brings a positive attitude to life.',
      link: 'Learn more',
      linkRef: '/about',
    },
    {
      imageSrc: jerry,
      imageAlt: 'jerry',
      title: 'Head of Customer Relations: Jerry Seinfeld',
      subtitle:
        'Jerry is an extremely friendly guy and if you give us a call he will sure to leave you with a smile.  He is also comedian in his spare time.',
      link: 'Learn more',
      linkRef: '/about',
    },
  ],

  info: {
    title:
      'Vandelay Industries is a vertically integrated chemical manufaturing, import/export, and sales enterprise headquartered in the Upper West Side, NYC. It was founded by Arthur Vandely in 1990.',
    subtitle:
      'The Vandelay Industries API platform, documented here, represents a unified view of its ERP and CRM systems for use by both internal applications and 3rd-party strategic partner system integrations.',
    listTitle: 'Company Values',
    lists: [
      {
        list: 'Integrity',
      },
      {
        list: 'Cheapness',
      },
      {
        list: 'Did I mention being cheap',
      },
      {
        list: 'Latex',
      },
    ],
    imageSrc: importExport,
    imageAlt: 'about image',
  },
};

export { AboutData };
