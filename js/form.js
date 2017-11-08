// form elements that don't need to be confirmed
var $first = $('#inputFirstName'); // variable to store the value of the element (<input> in this case) with the id 'inputFirstName'
var $last = $('#inputLastName'); // variable to store the value of the element (<input> in this case) with the id 'inputLastName'
var $email = $('#inputEmail'); // variable to store the value of the element (<input> in this case) with the id 'inputEmail'
// form elements that need to be confirmed
var $password = $('#inputPassword'); // variable to store the value of the element (<input> in this case) with the id 'inputPassword'
var $confirmPassword = $('#confirmPassword'); // variable to store the value of the element (<input> in this case) with the id 'confirmPassword'

$("form span").hide(); // hide all <span> elements under the <form> element

$("form input").focus(function() // focus event on any <input> element under the <form> element
{
    $(this).next().show(); // when an <input> element is focused on, show the next element (<span) in this case)
});

$("form input").focusout(function() // focus out event on any <input> element under the <form> element
{
    $(this).next().hide(); // when an <input> element is not focused on, hide the next element (<span) in this case)
});

function isValid() // function to check password length
{
    return $password.val().length > 6; // return boolean value of whether or not the password is at least 7 characters long
}

function isMatching() // function to check values of both password fields
{
    return $password.val() === $confirmPassword.val(); // return boolean value of whether or not the password and confirm password fields match
}

function canSubmit() // function to allow user to submit the form
{
    return isValid() && isMatching(); // return boolen value of whether or not both isValid() and isMatching are true
}

function passwordEvent() // function to either display or hide the password tip
{
    if (isValid()) // conditional statement to check if function isValid() returns true...
    {
        $password.next().hide(); // ...hide password hint
    } else // conditional statement to check if function isValid() returns false...
      {
          $password.next().show(); // ...show password hint
      }
}

function confirmPasswordEvent() // function to either display or hide the confirm password tip
{
    if (isMatching()) // conditional statement to check if function isMatching() returns true...
    {
        $confirmPassword.next().hide(); // ...hide confirm password hint
    } else // conditional statement to check if function isMatching() returns false...
      {
          $confirmPassword.next().show(); // ...show confirm password hint
      }
}

function enableSubmitEvent() // function to either enable or disable [Sign Up] button
{
    // disable ability to press [Sign Up] button if canSubmit() returns false
    $('#submit').prop('disabled', !canSubmit()); // modify property value of either true or false
    //  user will be unable to click the button unless criteria is met
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent); // event on password input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent); // event on confirmaton input

enableSubmitEvent(); // call function to handle clickability of [Sign Up] button