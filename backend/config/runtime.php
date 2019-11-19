<?php if (! isset($_GET['page']))
    {
        include('./pages/login.php');

    } else {    
        $page = $_GET['page'];  
        switch($page)
        {
            case 'mainmenu':
                include('./pages/dashboard.php');
                break;  
            default:
                include('./pages/login.php');
            break;
        }
    }
?>