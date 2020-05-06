$('#pass2').on('input',async (e)=>
{
    e.preventDefault();
    if($('#pass2').val() === "")
        $('#err').html('');
    else if($('#pass2').val() !== $('#pass1').val())
        $('#err').html('Passwords dont match!');
    else
        $('#err').html('');
});

$('#pass1').on('input',async (e)=>
{
    e.preventDefault();
    if($('#pass1').val() === "")
        $('#err').html('');
    else if($('#pass2').val() !== $('#pass1').val())
        $('#err').html('Passwords dont match!');
    else
        $('#err').html('');
});

$('#login').on('input',async (e)=>
{
    e.preventDefault();
    if($('#login').val() !== "")
    {
        const answer = await fetch('/api/v1/users/unique/'+$('#login').val()).then(x => x.json());
        console.log(answer);
        if(!answer.unique)
        {
            console.log('error');
            $('#loginerr').html('Sorry, this login is already taken'); 
        } else
        {
            $('#loginerr').html('');
        }
    }
});


$("#register_form").submit((e)=> 
{
    if(($('#pass2').val() === $('#pass1').val()) && ($('#loginerr').html() === ""))
    { 
        $("#register_form").submit();
    } else
    {
        e.preventDefault();
    } 
});