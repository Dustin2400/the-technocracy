const { Post } = require('../models');

const postData = [
    {
        title: 'Cryptocurrencies Endure',
        content: 'Many impetuous investors back cryptocurrencies when they trend up but are quick to drop them at the sligtest sign of fracture. Long-term investors of crypto who ride the peaks and valleys of the market see gains in the long run if they stay focused on delayed gratification.',
        user_id: 1
    },
    {
        title: 'Metaverse Announced',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti illo nemo obcaecati sit dolorum in laboriosam recusandae, hic quae, id deserunt fugit rerum. Totam doloremque esse expedita obcaecati. Magnam.',
        user_id: 1
    },
    {
        title: 'Oculus Rift Crashes',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti illo nemo obcaecati sit dolorum in laboriosam recusandae, hic quae, id deserunt fugit rerum. Totam doloremque esse expedita obcaecati. Magnam.',
        user_id: 2
    },
    {
        title: 'Tesla Plummets',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti illo nemo obcaecati sit dolorum in laboriosam recusandae, hic quae, id deserunt fugit rerum. Totam doloremque esse expedita obcaecati. Magnam.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;