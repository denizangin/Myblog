document.getElementById("hizmetlerLink").addEventListener("click", function() {
    var newWindow = window.open("", "", "width=400,height=400");
    newWindow.document.write(`
        <html>
        <head>
            <title>Hizmetlerimiz Çok Yakında</title>
            <link rel="stylesheet" href="style.css"> <!-- Harici CSS dosyasını dahil et -->
        </head>
        <body>
            <h1 class="service-message">Hizmetlerimiz Çok Yakında</h1>
        </body>
        </html>
    `);
    newWindow.document.close(); 
});