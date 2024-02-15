function key() {
    let admin = localStorage.getItem('admin');
    if (!admin) {
        window.location.href = 'file:///C:/Users/123/Desktop/riwi-filtro-final%20-%20copia/login.html';
    }
}

key()
 