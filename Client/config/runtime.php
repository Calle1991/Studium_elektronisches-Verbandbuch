<?php if (! isset($_GET['page']))
    {
        include('./pages/landingpage.php');

    } else {    
        $page = $_GET['page'];  
        switch($page)
        {
            case 'mainmenu':
                include('./pages/mainmenu.php');
                break;  
            case 'eintrag':
                include('./pages/eintrag.php');
                break;
            case 'hm':
                include('./pages/formular_hm.php');
                break;
            case 'guest':
                include('./pages/formular_guest.php');
                break;
            case 'ersthelfer':
                include('./pages/ersthelfer.php');
                break;
            case 'hergang':
                include('./pages/hergang.php');
                break;
            case 'materialabfrage':
                include('./pages/materialabfrage.php');
                break;  
            case 'material':
                include('./pages/material.php');
                break;
            case 'submit':
                include('./pages/submit.php');
                break;
            case 'verbandhilfe':
                include('./pages/verbandhilfe.php');
                break;
            case 'feedback':
                include('./pages/feedback.php');
                break;    
            case 'telefonnummer':
                include('./pages/telefonnummer.php');
                break;
            case 'hilfe':
                include('./pages/hilfe.php');
                break;  
            default:
                include('./pages/mainmenu.php');
            break;
        }
    }
?>