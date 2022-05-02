
export default {
  name: 'banner',
  title: 'Bannière',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'buttonText',
          title: 'Text du bouton',
          type: 'string',
      },
      {
          name: 'product',
          title: 'Produit',
          type: 'string',
      },
      {
          name: 'desc',
          title: 'Description',
          type: 'string',
      },
      {
          name: 'smallText',
          title: 'Text petit',
          type: 'string',
      },
      {
          name: 'midText',
          title: 'Text milieu',
          type: 'string',
      },
      {
          name: 'largeText1',
          title: 'Text large 1',
          type: 'string',
      },
      {
          name: 'largeText2',
          title: 'Text large 2',
          type: 'string',
      },
      {
          name: 'discount',
          title: 'Remise',
          type: 'string',
      },
      {
          name: 'saleTime',
          title: 'Temps de vente',
          type: 'string',
      },
  ],
};