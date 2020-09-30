describe("formatTimeLeft", function () {
  it("Formatted time with seconds should be readable", function () {
    // Given
    let time = 20;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("0:20");
  });

  it("Formatted time with minutes should be readable", function () {
    // Given
    let time = 300;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("5:00");
  });

  it("Formatted time with 0 should be readable", function () {
    // Given
    let time = 0;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("0:00");
  });

  it("Formatted time with minus should return 0", function () {
    // Given
    let time = -1;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("0:00");
  });
});

describe("setRemainingPathColor", function () {
  it("TimeLeft more than 10 should return info color", function () {
    // Given
    $("#base-timer-path-remaining").css(COLOR_CODES.info.color);
    let timeLeft = 20;

    // When
    setRemainingPathColor(timeLeft);

    // Then
    expect($("#base-timer-path-remaining").attr('class')).toBe(COLOR_CODES.info.color);
  });

  it("TimeLeft between 10 and 5 should return warning color", function () {
    // Given
    $("#base-timer-path-remaining").css(COLOR_CODES.info.color);
    let timeLeft = 10;

    // When
    setRemainingPathColor(timeLeft);

    // Then
    expect($("#base-timer-path-remaining").attr('class')).toBe(COLOR_CODES.warning.color);
  });

  it("TimeLeft less or equal to 5 should return alert color", function () {
    // Given
    $("#base-timer-path-remaining").css(COLOR_CODES.warning.color);
    let timeLeft = 5;

    // When
    setRemainingPathColor(timeLeft);

    // Then
    expect($("#base-timer-path-remaining").attr('class')).toBe(COLOR_CODES.alert.color);
  });
});

describe("resetTime", function () {
  it("should show time left in timer label", function () {
    // Given
    let timeLeft = 20;
    
    // When 
    resetTimer(timeLeft);

    // Then
    expect($("#base-timer-label").text()).toBe('0:20'); 
  });

  it("should get countDown=true when limit is 20", function () {
    // Given
    let limit = 20;
    
    // When 
    resetTimer(limit);

    // Then
    expect(countDown).toBe(true); 
  });

  it("should get countDown=false when limit is 0", function () {
    // Given
    let limit = 0;
    
    // When 
    resetTimer(limit);

    // Then
    expect(countDown).toBe(false); 
  });
});
