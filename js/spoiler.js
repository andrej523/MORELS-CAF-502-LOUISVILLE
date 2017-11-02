$('.spoiler span').hide(); // hide the element (<p> in this case) with the class 'spoiler' that contains a child <span> element

$('.spoiler').append("<button class='spoiler-btn'>Reveal Spoiler!</button>"); // add a <button> element to the element (<p> in this case) with the class 'spoiler-btn'

$('.spoiler button').click(function () // when the user clicks on the previously created <button> element...
{
    $(this).prev().show(); // ...show the previous element (<span> element with the class 'spoiler-btn' in this case) of the selected specific object (previously created <button> element in this case)
    $(this).remove(); // remove the selected specific object (previously created <button> element in this case) from the page
});