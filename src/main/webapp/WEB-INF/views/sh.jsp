<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>$Title$</title>
</head>
<link rel="stylesheet" href="/css/bootstrap.css"></html>
<body>
    <div class="container">
        <!-- 최상단 이미지(전화) -->
        <div class="row">
            <a href="tel:02-420-0233"><img src="https://img.braincube.kr/event/550/img/img_02.png" class="img-fluid" alt=""></a>
        </div>
        <!-- 2번째 이미지 -->
        <div class="row">
            <img src="/image/common/20190710_084458.jpg" class="img-fluid" alt="">
        </div>
        <!-- 3번째 이미지(전화) -->
        <div class="row">
            <a href="tel:02-420-0233"><img src="https://img.braincube.kr/event/550/img/img_02.png" class="img-fluid" alt=""></a>
        </div>
        <!-- 4번째 이미지 -->
        <div class="row">
            <img src="/image/common/20190710_084511.jpg" class="img-fluid" alt="">
        </div>
        <!-- 신청 폼 -->
        <div id="reqForm" name="reqForm">
            <form>
                <p class="text-right"><i class="text-danger">*</i> 표시 필수사항</p>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label"><i class="text-danger">*</i> 신청자 성함</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="inputEmail3" placeholder="신청자 성함">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label"><i class="text-danger">*</i> 휴대폰 번호</label>
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-3">
                                <select class="form-control" id="hphone1" name="hphone1">
                                    <option value="010" selected="">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="018">018</option>
                                    <option value="019">019</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <input type="text" class="form-control" name="hphone2" id="hphone2" title="텍스트 입력" placeholder="입력">
                            </div>
                            <div class="col-3">
                                <input type="text" class="form-control" name="hphone3" id="hphone3" title="텍스트 입력" placeholder="입력">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label"><i class="text-danger">*</i> 주소 or 메일</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" id="etc" name="etc" placeholder="주소 혹은 이메일을 적어주세요">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label"><i class="text-danger">*</i> 약관동의</label>
                    <div class="col-sm-9">
                        <input class="check" id="agree" name="agree" type="checkbox" title="체크 선택" value="">
                        <a href="/policy" target="_blank" style="cursor: pointer">개인정보수집 및 이용에 관한 동의</a>
                    </div>
                </div>
                <button id="submitBtn">크크클릭</button>
                <input type="hidden" id="type" value="kb"/>
            </form>
        </div>
        <!-- 5번째 이미지 -->
        <div class="row">
            <img src="/image/common/20190713_055834.jpg" class="img-fluid" alt="">
        </div>
        <!-- 6번재 이미지 -->
        <div class="row">
            <img src="/image/common/20190713_061511.jpg" class="img-fluid" alt="">
        </div>
        <!-- 6번재 이미지 -->
        <div class="row" style="padding-bottom: 16%;">
            <img src="/image/common/bottom_up.png" class="img-fluid" alt="">
        </div>
        <!-- 하단 고정 이미지 -->
        <div class="row">
            <a href="#reqForm">
                <img src="/image/common/bottom.png" class="img-fluid" style="position: fixed; width: 100%; bottom: 0; z-index: 9999; " alt="">
            </a>
        </div>
    </div>
</body>
<jsp:include page="../footer/footer.jsp"></jsp:include>
<script src="/js/user/shUserAction.js"></script>
<!-- 페이지 별 스크립트 짜서 넣기 -->
<%--<script src="/js/common/common.js"></script>--%>
</html>