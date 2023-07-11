

function show() {
    const modal = document.createElement("form");
    modal.className = "modal__form";
  
    const modalHeader = document.createElement("h3");
    modalHeader.className = "modal__header";
    modalHeader.textContent = "Information about you";
  
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
  
    const modalTexts = document.createElement("div");
    modalTexts.className = "modal__texts";
  
    const nameInput = document.createElement("input");
    nameInput.className = "modal__input";
    nameInput.type = "text";
    nameInput.placeholder = "Your name";
  
    const surnameInput = document.createElement("input");
    surnameInput.className = "modal__input";
    surnameInput.type = "text";
    surnameInput.placeholder = "Your surname";
  
    const emailInput = document.createElement("input");
    emailInput.className = "modal__input";
    emailInput.type = "text";
    emailInput.placeholder = "Your E-mail";
  
    const languageDiv = document.createElement("div");
    languageDiv.className = "language-select";
  
    const languageHeader = document.createElement("h4");
    languageHeader.className = "language__header";
    languageHeader.textContent = "Choose the language";
  
    const languageSelect = document.createElement("select");
    languageSelect.name = "language";
    languageSelect.className = "choices__inner";
  
    const englishOption = document.createElement("option");
    englishOption.value = "English";
    englishOption.textContent = "English";
  
    const spanishOption = document.createElement("option");
    spanishOption.value = "Spanish";
    spanishOption.textContent = "Spanish";
  
    const russianOption = document.createElement("option");
    russianOption.value = "Russian";
    russianOption.textContent = "Русский";
  
    languageSelect.appendChild(englishOption);
    languageSelect.appendChild(spanishOption);
    languageSelect.appendChild(russianOption);
  
    languageDiv.appendChild(languageHeader);
    languageDiv.appendChild(languageSelect);
  
    modalTexts.appendChild(nameInput);
    modalTexts.appendChild(surnameInput);
    modalTexts.appendChild(emailInput);
    modalTexts.appendChild(languageDiv);
  
    const modalBooking = document.createElement("div");
    modalBooking.className = "modal__booking";
  
    const wishesTextarea = document.createElement("textarea");
    wishesTextarea.name = "wishes";
    wishesTextarea.id = "textarea";
    wishesTextarea.cols = "30";
    wishesTextarea.rows = "5";
    wishesTextarea.placeholder = "Add your wishes:";
  
    
  const calendarDiv = document.createElement("div");
  calendarDiv.className = "calendar";

  const dateInputDiv = document.createElement("div");
  dateInputDiv.className = "date-input";

  const dateInput = document.createElement("input");
  dateInput.type = "text";
  dateInput.id = "date-input";
  dateInput.placeholder = "Выберите дату";

  const openCalendarBtn = document.createElement("button");
  openCalendarBtn.className = "calendar-btn";
  openCalendarBtn.id = "open-calendar-btn";

  dateInputDiv.appendChild(dateInput);
  dateInputDiv.appendChild(openCalendarBtn);

  calendarDiv.appendChild(dateInputDiv);

  const calendarPopupDiv = document.createElement("div");
  calendarPopupDiv.id = "calendar-popup";
  calendarPopupDiv.className = "calendar-popup";

  const calendarContainerDiv = document.createElement("div");
  calendarContainerDiv.id = "calendarContainer";
  calendarContainerDiv.className = "calendar-container";

  const calendarHeaderDiv = document.createElement("div");
  calendarHeaderDiv.className = "calendar-header";

  const prevMonthBtn = document.createElement("button");
  prevMonthBtn.className = "prev-month-btn";
  prevMonthBtn.textContent = "<";

  const currentMonthYearDiv = document.createElement("div");
  currentMonthYearDiv.className = "current-month-year";

  const nextMonthBtn = document.createElement("button");
  nextMonthBtn.className = "next-month-btn";
  nextMonthBtn.textContent = ">";

  calendarHeaderDiv.appendChild(prevMonthBtn);
  calendarHeaderDiv.appendChild(currentMonthYearDiv);
  calendarHeaderDiv.appendChild(nextMonthBtn);

  const calendarBodyDiv = document.createElement("div");
  calendarBodyDiv.className = "calendar-body";

  const weekdaysDiv = document.createElement("div");
  weekdaysDiv.className = "weekdays";

  const weekdayDivs = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map(day => {
    const weekdayDiv = document.createElement("div");
    weekdayDiv.className = "weekday";
    weekdayDiv.textContent = day;
    return weekdayDiv;
  });

  const datesDiv = document.createElement("div");
  datesDiv.className = "dates";

  weekdaysDiv.append(...weekdayDivs);
  calendarBodyDiv.appendChild(weekdaysDiv);
  calendarBodyDiv.appendChild(datesDiv);
  calendarContainerDiv.appendChild(calendarHeaderDiv);
  calendarContainerDiv.appendChild(calendarBodyDiv);
  calendarPopupDiv.appendChild(calendarContainerDiv);  
    const sendButton = document.createElement("button");
    sendButton.className = "send-btn";
    sendButton.type = "submit";
    sendButton.textContent = "Send!";
  
    modalBooking.appendChild(wishesTextarea);
    modalBooking.appendChild(calendarDiv);
    modalBooking.appendChild(sendButton);
  
    wrapper.appendChild(modalTexts);
    wrapper.appendChild(modalBooking);
  
    modal.appendChild(modalHeader);
    modal.appendChild(wrapper);
  
    document.body.appendChild(modal);
  }
  
  const signUpButton = document.querySelector('.sign');
  
  signUpButton.addEventListener('click', function() {
    show();
  });

  openCalendarBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    generateCalendar(); // Открываем календарь
  });
  
  