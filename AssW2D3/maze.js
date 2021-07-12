
document.querySelector('.full').addEventListener('mouseover',function(){
    document.querySelector('#boundary1').style.backgroundColor = '#ff8888';
    document.querySelector('#boundary2').style.backgroundColor = '#ff8888';
    document.querySelector('#boundary3').style.backgroundColor = '#ff8888';
    document.querySelector('#boundary4').style.backgroundColor = '#ff8888';
    document.querySelector('#boundary5').style.backgroundColor = '#ff8888';
    document.querySelector('#status').textContent = "You Lost, start again."
})

function end() {
    document.querySelector('#status').textContent = "You Won!!"
    document.querySelector('#boundary1').style.backgroundColor = '#88ff88';
    document.querySelector('#boundary2').style.backgroundColor = '#88ff88';
    document.querySelector('#boundary3').style.backgroundColor = '#88ff88';
    document.querySelector('#boundary4').style.backgroundColor = '#88ff88';
    document.querySelector('#boundary5').style.backgroundColor = '#88ff88';
}
document.querySelector('#start').addEventListener('mouseover', function () {
    document.querySelector('#status').textContent = "You started the game."
    document.querySelector('#boundary1').style.backgroundColor = '#eeeeee';
    document.querySelector('#boundary2').style.backgroundColor = '#eeeeee';
    document.querySelector('#boundary3').style.backgroundColor = '#eeeeee';
    document.querySelector('#boundary4').style.backgroundColor = '#eeeeee';
    document.querySelector('#boundary5').style.backgroundColor = '#eeeeee';
})
