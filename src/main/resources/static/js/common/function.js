function SubmitConfirm(frm) {
    if(frm.agree.checked == false) {
        alert("개인정보 수집 이용에 대해 동의하여주세요.");
        frm.agree.focus();
        return false;
    }
    else if (frm.name.value == "" || frm.name.value.indexOf(" ") == 0) {
        alert("신청자 이름을 입력 해주세요.");
        frm.name.focus();
        return false;
    }
    else if (frm.hphone.value == "" || frm.hphone.value.indexOf(" ") == 0) {
        alert("필수항목 : 핸드폰번호를 입력해주세요.");
        frm.hphone.value = "";
        frm.hphone.focus();
        return false;
    }
    else if(!Check_Num(frm.hphone.value)) {
        alert("핸드폰 번호는 숫자만 입력가능합니다.");
        frm.hphone.value='';
        frm.hphone.focus();
        return false;
    }
    else if(frm.hphone.value.substr(0,1)!='0' || frm.hphone.value.length != 3) {
        console.log(frm.hphone.value);
        alert("핸드폰 번호가 올바르지 않습니다.1");
        frm.hphone.value='';
        frm.hphone.focus();
        return false;
    }
    else if (frm.hphone2.value == "" || frm.hphone2.value.indexOf(" ") == 0) {
        alert("필수항목 : 핸드폰번호를 입력해주세요.2");
        frm.hphone2.value = "";
        frm.hphone2.focus();
        return false;
    }
    else if(!Check_Num(frm.hphone2.value)) {
        alert("핸드폰 번호는 숫자만 입력가능합니다.3");
        frm.hphone2.value='';
        frm.hphone2.focus();
        return false;
    }
    else if(frm.hphone2.value.length != 3 && frm.hphone2.value.length != 4) {
        alert("핸드폰 번호가 올바르지 않습니다.4");
        frm.hphone2.value='';
        frm.hphone2.focus();
        return false;
    }
    else if (frm.hphone3.value == "" || frm.hphone3.value.indexOf(" ") == 0) {
        alert("필수항목 : 핸드폰번호를 입력해주세요.5");
        frm.hphone3.value = "";
        frm.hphone3.focus();
        return false;
    }
    else if(!Check_Num(frm.hphone3.value)) {
        alert("핸드폰 번호는 숫자만 입력가능합니다.6");
        frm.hphone3.value='';
        frm.hphone3.focus();
        return false;
    }
    else if(frm.hphone3.value.length != 3 && frm.hphone3.value.length != 4) {
        alert("핸드폰 번호가 올바르지 않습니다.7");
        frm.hphone3.value='';
        frm.hphone3.focus();
        return false;
    }
    else if (frm.etc_1.value == "" || frm.etc_1.value.indexOf(" ") == 0) {
        alert("주소 혹은 이메일을 입력 해주세요.");
        frm.etc_1.focus();
        return false;
    }
    else {
        frm.submit();
    }
}
