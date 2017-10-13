$('.spoiler span').hide(); // hide the element (<p> in this case) with the class 'spoiler' that contains a child <span> element

$('.spoiler').append('<button>Reveal Spoiler!</button>'); // add a <button> element to the element (<p> in this case) with the class 'spoiler'

$('.spoiler button').click(function () // when the user clicks on the previously created <button> element...
                                    {
                                        $(this).prev().show(); // ...show the previous element (<span> element with the class 'spoiler' in this case) of the selected specific object (previously created <button> element in this case)
    
                                        $(this).remove(); // remove the selected specific object (previously created <button> element in this case) from the page
                                    }
                          );