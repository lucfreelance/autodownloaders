fetch('https://placeimg.com/640/480/any')
          .then(response => response.blob())
          .then(blob => {
            const objectURL = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = objectURL;
            link.download = 'imagen.jpg';
            document.body.appendChild(link);
            link.click();
          });

console.log('Hello, world!')          