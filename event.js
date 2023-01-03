
    let btn=document.getElementById('btn');
    let paragraph=document.getElementById('paragraphid');
    let pretag=document.getElementById('pretag');
    let heading=document.getElementById('headingid');

    btn.addEventListener('click', myfunction )

    function myfunction(){
        paragraph.style.color='white';
        paragraph.style.backgroundColor='black';
        paragraph.style.border='3px solid black';

        pretag.style.color='blue';
        pretag.style.fontSize='20px';
        pretag.style.backgroundColor='red';
        pretag.style.borderRadius='5px';

        heading.style.backgroundColor='lightyellow';
        heading.style.width='100px'
        heading.style.border='4px solid black';
        heading.style.borderRadius='5px';

        btn.style.color='white';
        btn.style.backgroundColor='green';
    }
