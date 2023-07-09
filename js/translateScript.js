const languageSelect = document.getElementById('language-select');
const translate = () => {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (element.tagName === 'INPUT') {
      if (element.type === 'submit') {
        element.value = translations[currentLanguage][key];
      } else if (element.type === 'checkbox' || element.type === 'radio') {
        const label = element.parentNode;
        if (label.tagName === 'LABEL') {
          label.innerHTML = `<input type="${element.type}" id="${element.id}" name="${element.name}" data-translate="${key}"> ${translations[currentLanguage][key]}`;
        }
      }
    } else {
      element.innerHTML = translations[currentLanguage][key];
    }
  });
};

const translations = {
  en: {
    about_container: 'Elena - a specialist in multidimensional medicine, psychology and psychosomatics.',
    heatlhcare_container: 'Health care',
    health_section: 'Together we can find out which vitamins are more suitable for you and many other things!',
    health_header: 'You will find a lot of knowlegde about your health: ',
    health_button: 'Learn more',
    health_text1: 'You can find out what micro and macro elements in your body enough or not enough',
    health_text2: 'Find the best place to sleep/rest/work in the house',
    lifestyle_container: 'Lifestyle',
    lifestyle_section: 'You have a great opportunity to change your lifestyle and moreover - to change the space around you!',
    lifestyle_header: 'We will be able to:',
    lifestyle_button: 'Learn more',
    lifestyle_text: 'To improve your condition, your level of vitality, to remove the causes of loss of energy, lethargy, dissatisfaction with oneself and/or others',
    astrology_container: 'Astrology',
    astrology_section: 'Astrology is a great science about future and past. Wanna know your future?',
    astrology_header: 'Together we can:',
    astrology_button: 'Learn more',
    astrology_text1: 'Resolve karmic debts with other people, remove the reasons why we "found each other", correct our mistakes from previous incarnations.',
    astrology_text2: 'Maximize and eliminate the causes of damage to our channels of communication with the Higher',
    astrology_text3: 'Remove negative energy formations, connection to low vibrations, destructive ego.',
    sns_container: 'Still not sure?',
    sns_section: 'If you are not ready - you can be sure that I can guarantee you the best results!',
    sns_header: 'Trust me:',
    sns_button: 'Learn more',
    sns_text1: '100% safe, impossible to harm in any way;',
    sns_text2: 'Not painful, not long, not scary - fast and body sensations are visible quickly;',
    sns_text3: 'The results are pleasing in every way.',
    rights_content: 'All rights reserved - 2023',
    sign_up_button: 'Sign up',
    footer_question: 'Want to know more?'
  },  
  esp: {
    about_container: 'Elena - a specialist in multidimensional medicine, psychology and psychosomatics.',
    heatlhcare_container: 'Cuidado de la salud',
    health_section: 'Juntos podemos descubrir qué vitaminas son más adecuadas para usted y muchas otras cosas!',
    health_header: 'Encontrarás mucho conocimiento sobre tu salud: ',
    health_button: 'Aprender más',
    health_text1: 'Puede averiguar qué elementos micro y macro en su cuerpo son suficientes o insuficientes',
    health_text2: 'Encuentra el mejor lugar para dormir/descansar/trabajar en la casa',
    lifestyle_container: 'Estilo de Vida',
    lifestyle_section: 'Tienes una gran oportunidad para cambiar tu estilo de vida y, además, para cambiar el espacio que te rodea.',
    lifestyle_header: 'Seremos capaces de:',
    lifestyle_button: 'Aprender más',
    lifestyle_text: 'Para mejorar su condición, su nivel de vitalidad, para eliminar las causas de pérdida de energía, letargo, insatisfacción con uno mismo y/o con los demás',
    astrology_container: 'Astrología',
    astrology_section: 'La astrología es una gran ciencia sobre el futuro y el pasado. ¿Quieres saber tu futuro?',
    astrology_header: 'Juntos podemos:',
    astrology_button: 'Aprender más',
    astrology_text1: 'Resuelva las deudas kármicas con otras personas, elimine las razones por las que "nos encontramos", corrija nuestros errores de encarnaciones anteriores.',
    astrology_text2: 'Maximizar y eliminar las causas de daño a nuestros canales de comunicación con el Superior',
    astrology_text3: 'Para eliminar las formaciones de energía negativa, la conexión con bajas vibraciones, el ego destructivo.',
    sns_container: '¿Aún no estás seguro?',
    sns_section: 'Si no está listo, puede estar seguro de que puedo garantizarle los mejores resultados!',
    sns_header: 'Confía en mí:',
    sns_button: 'Aprender más',
    sns_text1: '100% seguro, imposible de dañar de ninguna manera;',
    sns_text2: 'No es doloroso, no es largo, no da miedo: las sensaciones rápidas y corporales son visibles rápidamente;',
    sns_text3: 'Los resultados son agradables en todos los sentidos.',
    rights_content: 'Todos los derechos reservados - 2023',
    sign_up_button: 'Regístrese para una sesión',
    footer_question: '¿Quieres saber más?'
  },
  rus: {
    about_container: 'Елена, специалист многомерной медицины, психологии и психосоматики.',
    heatlhcare_container: 'Забота о здоровье',
    health_section: 'Вместе мы сможем выяснить, какие витамины вам больше подходят, а также многое другое!',
    health_header: 'Вы узнаете много нового о своем здоровье',
    health_button: 'Узнать больше',
    health_text1: 'Сможете узнать, каких микро- и макроэлементов в вашем организме достаточно или не хватает',
    health_text2: 'Сможете найти лучшее место для сна/отдыха/работы в доме',
    lifestyle_container: 'Образ жизни',
    lifestyle_section: 'У вас есть прекрасная возможность изменить свой образ жизни и более того - изменить пространство вокруг вас!',
    lifestyle_header: 'Мы сможем:',
    lifestyle_button: 'Узнать больше', 
    lifestyle_text: 'Улучшить свое состояние, свой уровень жизненного тонуса, устранить причины потери энергии, вялости, неудовлетворенности собой и/или другими',
    astrology_container: 'Астрология',
    astrology_section: 'Астрология - великая наука о будущем и прошлом. Хотите знать свое будущее?',
    astrology_header: 'Вместе мы сможем:',
    astrology_button: 'Узнать больше',
    astrology_text1: 'Решить кармические долги с определенными людьми, устранить причины, по которым мы "нашли друг друга", исправить наши ошибки из предыдущих воплощений.',
    astrology_text2: 'Максимально активизировать и устранить причины повреждения наших каналов связи с Богом',
    astrology_text3: 'Убрать негативные энэргетические формирования, связь с низкими вибрациями, деструктивным Эго',
    sns_container: 'Все еще не уверены?',
    sns_section: 'Если вы не готовы - будьте уверены, что я могу гарантировать вам наилучшие результаты!',
    sns_header: 'Доверьтесь мне:',
    sns_button: 'Узнать больше',
    sns_text1: '100% безопасно, невозможно навредить ни в каком случае;',
    sns_text2: 'Не больно, не долго, не страшно - быстро и ощущения тела видны быстро;',
    sns_text3: 'Результаты приятные во всех отношениях.',
    rights_content: 'Все права защищены - 2023',
    sign_up_button: 'Записаться',
    footer_question: 'Хотите узнать больше?'
  }
};

let currentLanguage = 'en';
translate();
languageSelect.addEventListener('click', (event) => {
  if (event.target && event.target.matches('.lang__link')) {
    currentLanguage = event.target.getAttribute('data-lang');
    translate();
  }
});
