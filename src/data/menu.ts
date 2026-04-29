import { MenuCategory, Review } from '../types';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'burritos',
    title: { fr: 'Burritos', ar: 'بوريتو' },
    items: [
      {
        id: 'b1',
        name: { fr: 'Burrito Mixte', ar: 'بوريتو مشكل' },
        description: { fr: 'Viande hachée, poulet, frites, sauce maison.', ar: 'لحم مفروم، دجاج، فريت، صلصة خاصة.' },
        price: 45,
        image: 'https://images.unsplash.com/photo-1584031036350-39df49cf4f3c?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 'b2',
        name: { fr: 'Burrito Poulet', ar: 'بوريتو بالدجاج' },
        description: { fr: 'Poulet mariné, riz, haricots, salsa.', ar: 'دجاج متبل، أرز، فاصوليا، صلصة.' },
        price: 35,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=400'
      }
    ]
  },
  {
    id: 'shawarma',
    title: { fr: 'Shawarma & Turc', ar: 'شاورما و تركي' },
    items: [
      {
        id: 's1',
        name: { fr: 'Plateau Shawarma', ar: 'طبق شاورما' },
        description: { fr: 'Émincé de viande, salade, houmous, pain libanais.', ar: 'شرائح لحم، سلطة، حمص، خبز لبناني.' },
        price: 50,
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc78a?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 's2',
        name: { fr: 'Iskender Kebab', ar: 'إسكندر كباب' },
        description: { fr: 'Spécialité turque au yaourt et sauce tomate.', ar: 'تخصص تركي بالزبادي وصلصة الطماطم.' },
        price: 48,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400'
      }
    ]
  },
  {
    id: 'snacks',
    title: { fr: 'Accompagnements', ar: 'المقبلات' },
    items: [
      {
        id: 'sn1',
        name: { fr: 'Frites Maison', ar: 'بطاطس مقلية' },
        description: { fr: 'Grand format, croustillantes.', ar: 'حجم كبير، مقرمشة.' },
        price: 15,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 'sn2',
        name: { fr: 'Salade César', ar: 'سلطة سيزر' },
        description: { fr: 'Laitue, croûtons, parmesan, sauce césar.', ar: 'خس، خبز محمص، بارميزان، صلصة سيزر.' },
        price: 25,
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=400'
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Youssef B.',
    rating: 5,
    text: { 
      fr: 'Le meilleur burrito de Kénitra ! Le service est rapide et le personnel très accueillant.', 
      ar: 'أفضل بوريتو في القنيطرة! الخدمة سريعة والموظفون ودودون للغاية.' 
    },
    date: '2024-03-15'
  },
  {
    id: 'r2',
    author: 'Meryem L.',
    rating: 4.8,
    text: { 
      fr: 'Propre, délicieux et très bon rapport qualité-prix. Je recommande le shawarma turc.', 
      ar: 'نظيف ولذيذ وقيمة ممتازة مقابل السعر. أنصح بالشاورما التركية.' 
    },
    date: '2024-03-10'
  },
  {
    id: 'r3',
    author: 'Ahmed K.',
    rating: 5,
    text: { 
      fr: 'Portions généreuses. C\'est devenu mon endroit préféré après le travail.', 
      ar: 'كميات وفيرة. أصبح مكاني المفضل بعد العمل.' 
    },
    date: '2024-02-28'
  }
];
