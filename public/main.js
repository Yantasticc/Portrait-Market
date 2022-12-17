const context = {
  title: 'The Space of Creativity',
  body: 'An art gallery is a room or a building in which visual art is displayed. In Western cultures from the mid-15th century, a gallery was any long, narrow covered passage along a wall, first used in the sense of a place for art in the 1590s.',
  instruments: [
    {
      image: 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
      name: 'Mona Lisa',
      description: "The Mona Lisa's fame is the result of many chance circumstances combined with the painting's inherent appeal. There is no doubt that the Mona Lisa is a very good painting.",
      price: '$870 million',
      sale: '$850 million'
    },
    {
      image: 'https://www.leonardodavinci.net/images/gallery/salvator-mundi.jpg',
      name: 'Salvator Mundi',
      description: 'Leonardo paints Salvator Mundi possibly for King Louis XII of France and his consort, Anne of Brittany. It is most likely commissioned soon after the conquests of Milan and Genoa.',
      price: '450.3 million'
    },
    {
      image: 'https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg',
      name: 'Lady with an Ermine',
      description: 'Lady with an Ermine is a painting by Leonardo da Vinci, from around 1489-1490. That stunning picture is 40.3 cm wide and 54.8 cm high, oil on walnut board. Unfortunately, the original background has been overlaid probably in the 17th c.',
      price: '$330 million'
    },
    {
      image: 'https://www.leonardodavinci.net/images/gallery/the-virgin-of-the-rocks-louvre.jpg',
      name: 'The Virgin of the Rocks',
      description: "The Virgin of the Rocks (sometimes The Madonna of the Rocks) is the name used for two Leonardo da Vinci's paintings, of the same subject, and of a composition which is identical except for two significant details.",
      price: '$192 million',
      sale: '$190 million'
    },
    {
      image: 'https://www.leonardodavinci.net/images/gallery/last-supper.jpg',
      name: 'The Last Supper',
      description: "The Last Supper is Leonardo's visual interpretation of an event chronicled in all four of the Gospels (books in the Christian New Testament). The evening before Christ was betrayed by one of his disciples, he gathered them together to eat, tell them he knew what was coming and wash their feet (a gesture symbolizing that all were equal under the eyes of the Lord).",
      price: '$450 million'
    }
  ]
};

const templateElement = document.getElementById('templateHB');

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;
