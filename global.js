function backToStep1()
{
    document.getElementById('step1').classList.toggle('flex');
    document.getElementById('step1').classList.toggle('hidden');
    document.getElementById('step2').classList.toggle('flex');
    document.getElementById('step2').classList.toggle('hidden');
}

function goToStep2()
{
    document.getElementById('step1').classList.toggle('flex');
    document.getElementById('step1').classList.toggle('hidden');
    document.getElementById('step2').classList.toggle('flex');
    document.getElementById('step2').classList.toggle('hidden');
}

function bDropOn(){
            document.getElementById('bDrop').classList.toggle('hidden');
            document.getElementById('bDrop').classList.toggle('flex');
}

function closeLoginWindow()
{
        document.getElementById('bDrop').classList.toggle('hidden');
        document.getElementById('bDrop').classList.toggle('flex');
}