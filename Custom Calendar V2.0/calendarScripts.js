    const openCalendarBtn = document.getElementById('open-calendar-btn');
    const calendarPopup = document.getElementById('calendar-popup');
    const currentMonthYear = calendarPopup.querySelector('.current-month-year');
    const prevMonthBtn = calendarPopup.querySelector('.prev-month-btn');
    const nextMonthBtn = calendarPopup.querySelector('.next-month-btn');
    const datesContainer = calendarPopup.querySelector('.dates');
    const dateInput = document.getElementById('date-input');
    let currentDate = new Date();
    let selectedDate = null; // Дата, выбранная пользователем
    let timeMenu = null; // Меню промежутков времени   
    const occupiedTimeSlots = {};
    openCalendarBtn.addEventListener('click', function() {
    calendarPopup.style.display = 'block';
    });

    document.addEventListener('click', function(event) {
        if (!calendarPopup.contains(event.target) && event.target !== openCalendarBtn) {
            calendarPopup.style.display = 'none';
        }
    });
  
    function openCalendar() {
      // Скрываем меню временных промежутков перед открытием календаря
      var timeMenu = document.getElementById('timeMenu');
      if (timeMenu) {
        // Скрываем меню временных промежутков перед открытием календаря
        timeMenu.style.display = 'none';
      }
        // const inputType = dateInput.getAttribute('type');
        
        // // Скрываем все графы
        // dateCalendar.style.display = 'none';
        // timeInput.style.display = 'none';
        // datetimeCalendar.style.display = 'none';
    
        // if (inputType === 'date') {
        //     // Отображаем календарь с датами
        //     dateCalendar.style.display = 'block';
        // } else if (inputType === 'time') {
        //     // Отображаем графу с временем
        //     timeInput.style.display = 'block';
        // } else if (inputType === 'datetime-local') {
        //     // Отображаем полный календарь с датами и временем
        //     datetimeCalendar.style.display = 'block';
        // }
    
        calendarPopup.style.display = 'block';
        // Внутри функции openCalendar()
        document.getElementById('selected-time').value = '';

    }
  
    function closeCalendar() {
        calendarPopup.style.display = 'none';
        // Внутри функции closeCalendar()
        document.getElementById('selected-time').value = '';

    }

// Функция для проверки доступности временного слота
function checkAvailability(startTime, endTime, callback) {
  const data = {
    startTime: startTime,
    endTime: endTime
  };

  $.ajax({
    url: 'check_availability.php', // Замените на фактический путь к вашему серверному скрипту
    type: 'POST',
    data: data,
    success: function(response) {
      if (response.available) {
        // Вызываем колбэк с параметром true, если слот доступен
        callback(true);
      } else {
        // Вызываем колбэк с параметром false, если слот занят
        callback(false);
      }
    },
    error: function(xhr, status, error) {
      console.error('Error checking time slot availability:', error);
      // Вызываем колбэк с параметром false в случае ошибки
      callback(false);
    }
  });
}

// Функция для сохранения временного слота и отметки его занятости в календаре
function saveTimeSlot(name, phone, email, startTime, endTime) {
  checkAvailability(startTime, endTime, function(available) {
    if (available) {
      const data = {
        name: name,
        phone: phone,
        email: email,
        startTime: startTime,
        endTime: endTime
      };

      $.ajax({
        url: 'save_time_slot.php', // Замените на фактический путь к вашему серверному скрипту
        type: 'POST',
        data: data,
        success: function(response) {
          // Вызываем функции для отметки занятых слотов и обновления стилей меню
          // markTimeSlotAsOccupied(startTime, endTime);
          // updateMenuStyles();
          console.log('Time slot successfully saved in the database');
        },
        error: function(xhr, status, error) {
          console.error('Error saving time slot:', error);
        }
      });
    } else {
      console.log('Selected time slot is unavailable');
    }
  });
}

document.getElementById('sign_Button').addEventListener('submit', function(e) {
  e.preventDefault(); // Отменить стандартное действие отправки формы

  // Получение данных из формы
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  var selectedDate = document.getElementById("date-input").value; // Получаем выбранную дату
  var selectedTime = document.getElementById("selected-time").value; // Получаем выбранный временной промежуток

  var [startTime, endTime] = selectedTime.split('-').map(time => time.trim());

  // Получение часов и минут из startTime и endTime
  var [startHours, startMinutes] = startTime.split(':').map(time => parseInt(time));
  var [endHours, endMinutes] = endTime.split(':').map(time => parseInt(time));
  console.log(selectedDate, selectedDate.split('.'));

  // Получение дня, месяца и года из строки выбранной даты
  var [datePart] = selectedDate.split(' ');
  var [selectedDay, selectedMonth, selectedYear] = datePart.split('.').map(value => parseInt(value.trim()));
  
  // Пример обновления формата при записи в массив occupiedTimeSlots
  var formattedStartTimeString = `${selectedYear}-${selectedMonth.toString().padStart(2, '0')}-${selectedDay.toString().padStart(2, '0')} ${startHours.toString().padStart(2, '0')}:${startMinutes.toString().padStart(2, '0')}:00`;
  var formattedEndTimeString = `${selectedYear}-${selectedMonth.toString().padStart(2, '0')}-${selectedDay.toString().padStart(2, '0')} ${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}:00`;
  console.log(formattedStartTimeString, formattedEndTimeString);
    
  // Вызов функции saveTimeSlot с передачей данных из формы
  saveTimeSlot(name, phone, email, formattedStartTimeString, formattedEndTimeString);
  // markTimeSlotAsOccupied(formattedStartTimeString, formattedEndTimeString);
});    

    function showCalendar() {
      calendarContainer.style.display = 'block';
      generateCalendar();
    }
    
    // В функции hideCalendar()
    function hideCalendar() {
      calendarContainer.style.display = 'none';
      hideTimeMenu();
    }

    openCalendarBtn.addEventListener('click', openCalendar);

    function generateCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
    
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
    
      currentMonthYear.textContent = getMonthName(month) + ' ' + year;
    
      // Очистить предыдущие даты
      datesContainer.innerHTML = '';
    
      // Создать элементы для дат текущего месяца
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(year, month, i);
        const dateElement = document.createElement('div');
        dateElement.textContent = i;
        dateElement.classList.add('date');
    
        // Добавить обработчик события для выбора даты
        dateElement.addEventListener('click', function () {
          if (selectedDate === date) {
            // Если выбранная дата уже активна, скрываем меню
            hideTimeMenu();
          } else {
            // Иначе, устанавливаем новую выбранную дату и пересоздаем меню
            selectedDate = date;
            createTimeMenu();
          }
        });
        datesContainer.appendChild(dateElement);
      }
    }
    
  function createTimeMenu() {
    if (timeMenu) {
      // Если меню уже существует, удаляем его
      timeMenu.parentNode.removeChild(timeMenu);
    }
    timeMenu = document.createElement('div');
    timeMenu.classList.add('time-menu');

    const startTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 7, 30); // Начальное время рабочего дня
    const endTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 19, 30); // Конечное время рабочего дня

    let currentTime = startTime;
    while (currentTime < endTime) {
      const timeElement = document.createElement('div');
      timeElement.textContent = formatTime(currentTime) + '-' + formatTime(addMinutes(currentTime, 90)); // Форматирование времени в виде "ЧЧ:ММ-ЧЧ:ММ"

      // Проверяем, является ли данный временной слот занятым
      const timeRange = timeElement.textContent.split('-');
      const startTime = parseTime(timeRange[0], selectedDate);
      const endTime = parseTime(timeRange[1], selectedDate);
      const formattedDate = formatDate(selectedDate);

      let isOccupied = false;

      if (occupiedTimeSlots[formattedDate]) {
        isOccupied = occupiedTimeSlots[formattedDate].some(slot => {
          const slotStartTime = parseTime(slot.startTime, selectedDate);
          const slotEndTime = parseTime(slot.endTime, selectedDate);
          return (
            (startTime >= slotStartTime && startTime < slotEndTime) || // Перекрытие начала временного слота
            (endTime > slotStartTime && endTime <= slotEndTime) || // Перекрытие конца временного слота
            (startTime <= slotStartTime && endTime >= slotEndTime) // Полное покрытие временного слота
          );
        });
      }

      if (isOccupied) {
        timeElement.classList.add('occupied');
      } else {
        timeElement.classList.remove('occupied');
      }

      // Внутри функции createTimeMenu()
      timeElement.addEventListener('click', function (event) {
        event.stopPropagation();
        if (this.classList.contains('occupied')) {
          // Если временной слот занят, ничего не делаем
          return;
        }
        const timeRange = this.textContent.split('-');
        const startTime = parseTime(timeRange[0]);
        const endTime = parseTime(timeRange[1]);
        const formattedTime = formatTime(startTime) + '-' + formatTime(endTime);
        dateInput.value = formatDate(selectedDate);
        document.getElementById('selected-time').value = formattedTime;
        hideTimeMenu(); // Скрываем меню после выбора времени
      });

      timeMenu.appendChild(timeElement);
      currentTime = addMinutes(currentTime, 90);
    }

    // Располагаем меню рядом с календарем
    const calendarPosition = calendarContainer.getBoundingClientRect();
    const left = calendarPosition.left + calendarPosition.width + 10; // Расстояние от календаря
    const top = calendarPosition.top; // Расстояние от верхней границы календаря

    timeMenu.style.position = 'absolute';
    timeMenu.style.left = left + 'px';
    timeMenu.style.top = top + 'px';

    document.body.appendChild(timeMenu);
    // Добавляем обработчик события клика вне меню для его скрытия
    document.addEventListener('click', handleOutsideClick);
  }
    
    function hideTimeMenu() {
      if (timeMenu && !calendarPopup.contains(document.activeElement)) {
        timeMenu.parentNode.removeChild(timeMenu);
        timeMenu = null;
        selectedDate = null;
        document.removeEventListener('click', handleOutsideClick);
        var selectedDate = document.getElementById("date-input").value; // Получаем выбранную дату из текстового поля
        var selectedTime = document.getElementById("selected-time").value; // Получаем выбранный временной промежуток
        
        var dateTimeRange = selectedDate + ' ' + selectedTime; // Объединяем дату и временной промежуток
        document.getElementById("date-input").value = dateTimeRange;
      }
    }

    function handleOutsideClick(event) {
      const isOutsideMenu = !timeMenu.contains(event.target);
      const isCalendarClicked = calendarContainer.contains(event.target);
      if (isOutsideMenu && !isCalendarClicked) {
        hideTimeMenu();
      }
    }
   
    function addMinutes(date, minutes) {
      return new Date(date.getTime() + minutes * 60000);
    }
    
    function formatTime(date) {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return hours + ':' + minutes;
    }

    generateCalendar();
    
    
    function getMonthName(month) {
        const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        return monthNames[month];
    }

    function formatDate(date) {
      if (!(date instanceof Date)) {
        date = new Date(date);
      }
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${day}.${month}.${year}`;
    }
    
        
    function parseTime(timeString) {
      const [hours, minutes] = timeString.split(':').map(str => parseInt(str, 10));
      // console.log('Parsed time:', hours, minutes);
      return new Date(0, 0, 0, hours, minutes);
    }

    prevMonthBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      generateCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      generateCalendar();
    });
    
    $(document).ready(function() {
      // Получение занятых временных слотов из базы данных и сохранение их в объект occupiedTimeSlots
      $.ajax({
        url: 'get_occupied_time_slots.php',
        dataType: 'json',
        success: function(data) {
          console.log('Occupied Time Slots:', data);
          // occupiedTimeSlots = {};
        
          data.forEach(slot => {
            const startDate = formatDate(new Date(slot.startTime));
            const endDate = formatDate(new Date(slot.endTime));
          
            // console.log('Start Date:', startDate);
            // console.log('End Date:', endDate);
          
            if (!occupiedTimeSlots[startDate]) {
              occupiedTimeSlots[startDate] = [];
            }
          
            occupiedTimeSlots[startDate].push({
              startTime: formatTime(new Date(slot.startTime)),
              endTime: formatTime(new Date(slot.endTime))
            });
          });
        },        
        error: function() {
          console.log('Error fetching occupied time slots');
        }
      });
    });


  
