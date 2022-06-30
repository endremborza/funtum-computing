import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/endremborza/qft-viz.git',
        user: {
            name: 'Endre Márk Borza',
            email: 'endremborza@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);