import './init';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(require.context('./', true, /\.js$/));
importAll(require.context('./', true, /\.scss$/));
importAll(require.context('./assets/img/gallery', true, /\.(jpe?g|png|gif|JPG)$/));
