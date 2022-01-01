{
    // TODO Enum
    // * JS에는 존재하지 않고 TS에만 존재
    // JavaScript -> 고정되어진 값은 대문자로 쓰는 경우 있다.
    var MAX_NUM = 100;
    var DAYS_ENUM = Object.freeze({ 'MONDAY': 0, "TUESDAY": 1 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    // ! TypeScript
    // ? enum은 기본적으로 0부터 시작하고, 특정 수부터 시작하려면 첫번째 값에 index를 할당 해주면 된다.
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 0] = "Monday";
        Days[Days["Tuesday"] = 1] = "Tuesday";
        Days[Days["Wednesday"] = 2] = "Wednesday";
        Days[Days["Thursday"] = 3] = "Thursday";
        Days[Days["Friday"] = 4] = "Friday";
        Days[Days["Satarday"] = 5] = "Satarday";
        Days[Days["Sunday"] = 6] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Thursday);
    // ! enum은 문제점이 있다.
    var day = Days.Friday;
    day = Days.Monday;
    day = 10;
    // ! 숫자를 넣어도 타입에러가 나지 않고, tsc 돌려보면 코드가 이상하게 작성된 것을 알 수 있다.
}
