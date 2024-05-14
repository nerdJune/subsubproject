// 이메일 체크
function Email_Check(email)
{
    var email_1 = "";
    var email_2 = "";
    var check_point = 0;

    if (email.indexOf("@") < 0 ) {
        //alert("e-mail에 @ 가 빠져있습니다.");
        return false;
    }
    if (email.indexOf(".") < 0 ) {
        //alert("e-mail에 . 가 빠져있습니다.");
        return false;
    }

    if (email.indexOf("'") >= 0 ) {
        //alert("e-mail에 ' 는 포함할수 없습니다..");
        return false;
    }
    if (email.indexOf("|") >= 0 ) {
        //alert("e-mail에 | 는 포함할수 없습니다..");
        return false;
    }
    if (email.indexOf(">") >= 0 ) {
        //alert("e-mail에 > 는 포함할수 없습니다..");
        return false;
    }
    if (email.indexOf("<") >= 0 ) {
        //alert("e-mail에 < 는 포함할수 없습니다..");
        return false;
    }
    if (email.indexOf(" ") >= 0 ) {
        //alert("e-mail에 스페이스는 포함할수 없습니다..");
        return false;
    }

    for (var j = 0 ; j < email.length; j++)
    {
        if ( email.substring(j, j + 1) != "@"  && check_point == 0 ) {
            email_1 = email_1 + email.substring(j, j + 1)
        } else if ( email.substring(j, j + 1) == "@" )  {
            check_point = check_point + 1;
        } else {
            email_2 = email_2 + email.substring(j, j + 1);
        }
    }

    //if (email_1.length < 3 ) {
    //	alert("e-mail에 @ 앞자리는 3자리이상 입력하셔야합니다.");
    //	form1.email.focus();
    //	return false;
    //}

    //if (email_2.length < 2 ) {
    //	alert("e-mail에 @ 뒷자리는 2자리이상 입력하셔야합니다.");
    //	form1.email.focus();
    //	return false;
    //}

    if (check_point > 1 ) {
        alert("e-mail에 @ 는 1번이상 들어갈수 없습니다.");
        return false;
    }

    if (email_2.indexOf("(") >= 0 ) {
        alert("e-mail에 ( 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf("(") >= 0 ) {
        alert("e-mail에 ( 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf(")") >= 0 ) {
        alert("e-mail에 ) 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf(",") >= 0 ) {
        alert("e-mail에 , 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf(";") >= 0 ) {
        alert("e-mail에 ; 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf(":") >= 0 ) {
        alert("e-mail에 : 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf("/") >= 0 ) {
        alert("e-mail에 / 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf("[") >= 0 ) {
        alert("e-mail에 [ 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf("]") >= 0 ) {
        alert("e-mail에 ] 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf("{") >= 0 ) {
        alert("e-mail에 { 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf("}") >= 0 ) {
        alert("e-mail에 } 는 포함할수 없습니다..");
        return false;
    }
    if (email_2.indexOf(" ") >= 0 ) {
        alert("e-mail에 스페이스는 포함할수 없습니다..");
        return false;
    }
    return true;

}

// 숫자 체크
function Check_Num(tocheck)
{
    var isnum = true;

    if (tocheck == null || tocheck == "")
    {
        isnum = false;
        return isnum;
    }

    for (var j = 0 ; j < tocheck.length; j++)
    {
        if (      tocheck.substring(j, j + 1) != "0"
            &&   tocheck.substring(j, j + 1) != "1"
            &&   tocheck.substring(j, j + 1) != "2"
            &&   tocheck.substring(j, j + 1) != "3"
            &&   tocheck.substring(j, j + 1) != "4"
            &&   tocheck.substring(j, j + 1) != "5"
            &&   tocheck.substring(j, j + 1) != "6"
            &&   tocheck.substring(j, j + 1) != "7"
            &&   tocheck.substring(j, j + 1) != "8"
            &&   tocheck.substring(j, j + 1) != "9" )
        {
            isnum = false;
        }
    }
    return isnum;
}