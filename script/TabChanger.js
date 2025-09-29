function changeContent(contentId) {
    document.getElementById('main').style.display = 'none';
    document.getElementById('community-vids').style.display = 'none';
    document.getElementById('donate').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('serverlist').style.display = 'none';

    if (contentId === 'main') {
        document.getElementById('main').style.display = 'block';
    } else if (contentId === 'community-vids') {
        document.getElementById('community-vids').style.display = 'block';
    } else if (contentId === 'donate') {
        document.getElementById('donate').style.display = 'block';
    } else if (contentId === 'contact') {
        document.getElementById('contact').style.display = 'block';
    } else if (contentId === 'serverlist') {
        document.getElementById('serverlist').style.display = 'block';
    }
}
