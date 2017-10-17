(function($)
         { 
             // activate scrollspy to add active class to navbar items on scroll
             $('body').scrollspy( // Bootstrap plugin to automatically update nav target based on scroll position
                                {
                                    target : '#mainNav', offset : 54 // update nav target when offset is 54px
                                }
                                );

             // collapse the navbar when page is scrolled
             $(window).scroll(function() // jQuery scroll event
                                      {
                                          if ($('#mainNav').offset().top > 100) // conditional statement to check if top offset is greater than 100px...
                                          {
                                              $('#mainNav').addClass('navbar-shrink'); // ...add 'navbar-shrink' class to nav target
                                          } else // conditional statement to check if top offset is anything other than greater than 100px...
                                            {
                                                $('#mainNav').removeClass('navbar-shrink'); // ...remove 'navbar-shrink' class from nav target
                                            }
                                      }
                             );
         }  
)(jQuery); // call this function under jQuery namespace