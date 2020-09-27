describe("formatTimeLeft", function() {
  it("Formatted time with seconds should be readable", function() {
    // Given
    let time = 20;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("0:20");
  });

  it("Formatted time with minutes should be readable", function() {
    // Given
    let time = 300;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("5:00");
  });

  it("Formatted time with 0 should be readable", function() {
    // Given
    let time = 0;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("0:00");
  });

  it("Formatted time with minus should return 0", function() {
    // Given
    let time = -1;

    // When
    let formattedTime = formatTimeLeft(time);

    // Then
    expect(formattedTime).toBe("0:00"); 
  });
});

describe("setRemainingPathColor", function() {
  it("TimeLeft more than 10 should return info color", function() {
    // Given
    let mockElement = document.createElement("div");
    mockElement.classList.add(COLOR_CODES.info.color);
    document.getElementById = jasmine.createSpy('Mock Element').and.returnValue(mockElement);

    let timeLeft = 20;

    // When
    setRemainingPathColor(timeLeft);

    // Then
    expect(mockElement.classList).toContain(COLOR_CODES.info.color);
  });

  it("TimeLeft between 10 and 5 should return warning color", function() {
    // Given
    let mockElement = document.createElement("div");
    mockElement.classList.add(COLOR_CODES.info.color);
    document.getElementById = jasmine.createSpy('Mock Element').and.returnValue(mockElement);

    let timeLeft = 10;

    // When
    setRemainingPathColor(timeLeft);

    // Then
    expect(mockElement.classList).toContain(COLOR_CODES.warning.color);
  });

  it("TimeLeft less or equal to 5 should return alert color", function() {
    // Given
    let mockElement = document.createElement("div");
    mockElement.classList.add(COLOR_CODES.warning.color);
    document.getElementById = jasmine.createSpy('Mock Element').and.returnValue(mockElement);

    let timeLeft = 5;

    // When
    setRemainingPathColor(timeLeft);

    // Then
    expect(mockElement.classList).toContain(COLOR_CODES.alert.color);
  });
});
