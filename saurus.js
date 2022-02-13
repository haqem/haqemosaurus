; (function () {

    var icon = '<svg class="sg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 90"><path d="M392.05,234.62c0-8.42.3-8-7-12.16L372,214.93l-13-7.54c-7.28-4.22-6.72-4.22-14,0l-13.06,7.54-13,7.51c-7.31,4.21-7.05,3.74-7.05,12.16v30.11c0,8.43-.3,8,7,12.18l13.08,7.53,13,7.53c7.31,4.21,6.73,4.21,14,0L372,284.42l13-7.53c7.33-4.21,7.05-3.73,7.05-12.14Zm-34.52,42.73c0,1.78-.12,2.22-1.62,3.1-4,2.31-4,2.29-8.57-.36-3.23-1.88-6.49-3.76-9.74-5.61L328.14,269c-4.92-2.83-4.86-2.43-4.86-8.08V238.73c0-5.65-.3-5.41,4.58-8.24l3.59-2.06c1.54-.9,1.68.2,2.14,1.42v24c0,4.45,0,5.13,3,6.77.14.06.28.16.44.24,2.32,1.26,4.65,2.51,7,3.79,1.82,1,2.32,0,2.32-1.58v-7.18c0-1.76,1.29-1.54,2.31-1L356,259.2a3.17,3.17,0,0,1,1.58,3.08ZM376,268.86c-1.2.68-2.4,1.36-3.6,2.06-1.54.88-1.68-.22-2.11-1.44v-24c0-4.45,0-5.11-3-6.75l-.46-.23c-2.31-1.26-4.65-2.54-7-3.8-1.81-1-2.31,0-2.31,1.56v7.21c0,1.73-1.3,1.53-2.32,1l-7.31-4.26a3.16,3.16,0,0,1-1.57-3.07V222c0-1.79.12-2.21,1.61-3.09,4-2.34,4-2.3,8.57.36,3.25,1.85,6.49,3.73,9.74,5.61s6.31,3.63,9.47,5.47c4.91,2.81,4.85,2.43,4.85,8.09V260.6C380.57,266.27,380.87,266,376,268.86Z" transform="translate(-311.8 -204.23)"></path></svg>';

    document.head.insertAdjacentHTML('beforeend', '<style>.sg { width: 35px; height: 35px; position: fixed; bottom: 10px; right: 10px; } .sg .eye { -webkit-transform: translateX(0px);   transform: translateX(0px); } .sg:hover .eye { -webkit-transition: -webkit-transform 0.3s ease; transition: -webkit-transform 0.3s ease; transition: transform 0.3s ease; transition: transform 0.3s ease, -webkit-transform 0.3s ease; -webkit-transform: translateX(12px);   transform: translateX(12px); }</style>');

    var a = document.createElement('a');
    a.setAttribute('href', 'https://twitter.com/iamhaqem');
    a.setAttribute('target', '_blank');
    a.innerHTML = icon;

    document.body.appendChild(a);
})();