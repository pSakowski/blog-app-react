const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title II',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('03-03-2022'),
      category: 'Movies',
      author: 'Marry Jo'
    },
    {
      id: '3',
      title: 'Article title III',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04-04-2022'),
      category: 'Sport',
      author: 'Garry Wo'
    }
  ],

  categories : [
    'Sport', 
    'News', 
    'Movies'
  ]
};
  
  export default initialState;