
    console.log(`itswork`)
    

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let hChange = document.querySelectorAll("div   h3");
    console.log(`hChange `,hChange )

    // for (let div of divChange) {
    // div.style.textShadow = `0px 0px 7px ${getRandomColor()}`;
    // }

    for (let h3 of hChange ){
        h3.addEventListener('mouseenter', function(e){ 
        e.target.style.textShadow = `0px 0px 7px ${getRandomColor()}`; 
        console.log(`color`,  e.target.style.textShadow)
      });

      
      
      h3.addEventListener('mouseleave', function(e){ 
        e.target.style.textShadow = ''; 
      });
    }




