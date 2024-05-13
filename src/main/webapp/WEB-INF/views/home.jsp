<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
</head>
<body>
$END$
<!-- -->
<div id="reqForm" name="reqForm">
    <form>
        <label>신청자 성함</label><i class="star"></i> : <input type="text" name="rname" placeholder="신청자 성함"><br>
        <label>휴대폰 번호</label><i class="star"></i> :
        <select type="text" name="hphone" id="hphone" title="핸드폰번호" class="select" style="width: 30%; height: 50px; background-color: #fff; color: #000; margin-left: 1%; border: 1px solid #ddd;padding: 0 10px;">
            <option value="010" selected="">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
            <option value="019">019</option>
        </select>
        <span class="split" style="padding: 0 1%;">-</span>
        <input type="text" name="hphone2" id="hphone2" title="텍스트 입력" placeholder="입력" style="width: 26%; height: 50px; background-color: #fff; color: #000; padding: 2%">
        <span class="split" style="padding: 0 1%;">-</span>
        <input type="text" name="hphone3" id="hphone3" title="텍스트 입력" placeholder="입력" style="width: 26%; height: 50px; background-color: #fff; color: #000; padding: 2%">
        <br>
        <label>주소 or 메일</label><i class="star"></i> : <input type="text" id="etc" name="etc_1" placeholder="주소 혹은 이메일을 적어주세요">
        <br>
        <label>약관동의</label><i class="star"></i>
        <input class="check" id="chk" name="agree" type="checkbox" title="체크 선택" value="">
        <a href="policy/policy.jsp" target="_blank" style="cursor: pointer">개인정보수집 및 이용에 관한 동의</a>
    </form>
</div>
</body>
</html>