const list = document.querySelectorAll('.item');
console.log('Number of categories: ' + list.length);

list.forEach(element =>{
    console.log(`Category: ${element.firstElementChild.textContent}`);
    const secondChild = element.lastElementChild.children;
    console.log(`Elements: ${secondChild.length}`);
    })
    
