import mainFactory from '../assets/mainFactory.jpg';
import mainWarehouse from '../assets/mainWarehouse.jpg';
import vandelayTeam from '../assets/vandelayTeam.jpg';

const CardsData = {
  data: [
    {
      imageSrc: vandelayTeam,
      imageAlt: 'about image',
      title: 'Do you want to learn more about the  Vandelay Industries?',
      subtitle:
        'It is known both for the quality of its product as well as its aggressive salesperson recruiting program.',
      link: 'Learn more',
      linkRef: '/about',
    },
    {
      imageSrc: mainFactory,
      imageAlt: 'factory image',
      title: 'Come checkout our factories',
      subtitle:
        "We have top notch factories, with the latest machinery.  Don't worry we are environment friendly too.",
      link: 'Learn more',
      linkRef: '/factories',
    },
    {
      imageSrc: mainWarehouse,
      imageAlt: 'factory image',
      title: 'Now how about our warehouses',
      subtitle:
        'We have the best two warehouses in the country, stocked with all the inventory of latex and bobbleheads you could image.',
      link: 'Learn more',
      linkRef: '/warehouses',
    },
  ],
};

export { CardsData };
