const questions = {
  ru: [
    {
      question: 'Как работает сервис?',
      answer: 'Вы выбираете услугу, описываете задачу и оставляете заказ. Специалисты видят ваш заказ и отправляют предложения, иногда с ценой и контактами. Искать специалистов также можно самостоятельно. Когда выберете подходящего, свяжитесь с ним по телефону или в чате. Договоритесь о работе. После завершения работ оставьте отзыв о работе специалиста — это поможет сделать выбор другим клиентам.',
    },
    {
      question: 'Как выбрать специалиста?',
      answer: 'Выберите услугу в списке или найдите услугу через поиск. Вы увидите вопросы-подсказки. Они помогут описать детали задачи, необходимые для специалистов. Укажите номер телефона и нажмите "Создать заказ".',
    },
    {
      question: 'Как выбрать специалиста? Процесс.',
      answer: 'Выберите услугу в списке или найдите услугу через поиск. Вы увидите вопросы-подсказки. Они помогут описать детали задачи, необходимые для специалистов. Укажите номер телефона и нажмите "Создать заказ".',
    },
    {
      question: 'Как выбрать специалиста? Отзывы, рейтинги, анкета',
      answer: 'Отзывы принимаем после завершения работы. Убедитесь, что в анкете специалиста есть нужная вам услуга и положительные отзывы именно по этой услуге. Средняя оценка зависит от отзывов. Анкета — визитная карточка специалиста. Обращайте внимание, как специалист описывает себя, есть ли у него профессиональные сертификаты, какие примеры работ показывает. Мы проверяем документы и квалификацию. В анкете показываем статусы: квалификация подтверждена, паспорт проверен, работает по договору, даёт гарантию.',
    },
    {
      question: 'Отвечает ли сервер за специалистов?',
      answer: 'Специалисты работают на себя и сами отвечают за свою работу. Они не являются сотрудниками сервиса. Мы следим за качеством анкет на сайте и подлинностью отзывов, проверяем документы. Если специалист часто получает негативные отзывы, мы удаляем его анкету.',
    },
    {
      question: 'Кто может оставить отзыв?',
      answer: 'Кнопку «Оставить отзыв» вы можете найти в чате со специалистом. Если вы не общались со специалистом, оставить отзыв нельзя. Без заказа оставить отзыв нельзя.',
    },
    {
      question: 'Как оставить отзыв?',
      answer: 'Кнопку «Оставить отзыв» вы можете найти в чате со специалистом. Если вы не общались со специалистом, оставить отзыв нельзя. Без заказа оставить отзыв нельзя.',
    },
    {
      question: 'Какие отзывы не публикуются?',
      answer: ['Не публикуем:',
        '- оскорбления, в том числе мемы;',
        '- высказывания националистического, политического, религиозного характера;',
        '- безосновательные обвинения в преступлениях – если случайно что-то случайное произошло, сразу обращайтесь;',
        '- предположения и домыслы;',
        '- персональные данные;',
        '- отзывы об услуге, запрещенной правилами компании;',
        '- ссылки на другие сайты;',
        '- спам;',
        '- отзывы о ненадежной работе сервиса;',
        '- отзывы о работе с бывшими сотрудниками и так далее.',
      ],
    },
    {
      question: 'Я недоволен работой специалиста, что делать?',
      answer: ['Сообщите в поддержку или на почту. Мы разберёмся с неприятностью.',
        'Выслушаем вашу проблему. Не оставим вас в сложной ситуации.',
        'Изучим доказательства. В спорах помогают договоры, расписки, фотографии.',
        'Свяжемся со специалистом. Спросим его точку зрения.',
        'Попросим специалиста исправить недостатки, если факты на вашей стороне.',
      ],
    },
    {
      question: 'Как отредактировать заказ?',
      answer: 'Перейдите на вкладку «Заказ». В приложении — нажмите на раздел с описанием заказа, который хотите отредактировать; на сайте — нажмите на значок карандаша.',
    },
    {
      question: 'Как отменить заказ?',
      answer: 'Перейдите на вкладку «Заказ». Нажмите кнопку «Отменить заказ» (внизу страницы).',
    },
    {
      question: 'Зачем оставлять номер телефона?',
      answer: 'Чтобы специалист мог вам позвонить, если вы его выберете. Мы не покажем ваш телефон больше никому и не станем слать рекламные СМС.',
    },
  ],
  en: [
    {
      question: 'How does the service work?',
      answer: 'You choose a service, describe your task, and place an order. Specialists see your order and send proposals, sometimes with prices and contacts. You can also search for specialists on your own. When you find a suitable one, contact them by phone or chat. Agree on the work. After completing the work, leave a review about the specialist\'s work - this will help other clients make a choice.',
    },
    {
      question: 'How to choose a specialist?',
      answer: 'Choose a service from the list or find a service through search. You will see prompt questions. They will help describe the task details needed for specialists. Enter your phone number and click "Create Order".',
    },
    {
      question: 'How to choose a specialist? Process.',
      answer: 'Choose a service from the list or find a service through search. You will see prompt questions. They will help describe the task details needed for specialists. Enter your phone number and click "Create Order".',
    },
    {
      question: 'How to choose a specialist? Reviews, ratings, profile',
      answer: 'We accept reviews after work completion. Make sure the specialist\'s profile has the service you need and positive reviews specifically for this service. The average rating depends on reviews. The profile is the specialist\'s business card. Pay attention to how the specialist describes themselves, if they have professional certificates, what work examples they show. We verify documents and qualifications. In the profile, we show statuses: qualification confirmed, passport verified, works under contract, provides warranty.',
    },
    {
      question: 'Is the server responsible for specialists?',
      answer: 'Specialists work for themselves and are responsible for their work. They are not employees of the service. We monitor the quality of profiles on the site and the authenticity of reviews, verify documents. If a specialist frequently receives negative reviews, we delete their profile.',
    },
    {
      question: 'Who can leave a review?',
      answer: 'You can find the "Leave a review" button in the chat with the specialist. If you haven\'t communicated with the specialist, you cannot leave a review. You cannot leave a review without an order.',
    },
    {
      question: 'How to leave a review?',
      answer: 'You can find the "Leave a review" button in the chat with the specialist. If you haven\'t communicated with the specialist, you cannot leave a review. You cannot leave a review without an order.',
    },
    {
      question: 'Which reviews are not published?',
      answer: ['We do not publish:',
        '- insults, including memes;',
        '- nationalist, political, religious statements;',
        '- baseless accusations of crimes - if something happens by accident, contact us immediately;',
        '- assumptions and speculations;',
        '- personal data;',
        '- reviews about services prohibited by company rules;',
        '- links to other websites;',
        '- spam;',
        '- reviews about unreliable service work;',
        '- reviews about work with former employees and so on.',
      ],
    },
    {
      question: 'I am dissatisfied with the specialist\'s work, what should I do?',
      answer: ['Contact support or email. We will deal with the issue.',
        'We will listen to your problem. We won\'t leave you in a difficult situation.',
        'We will examine the evidence. Contracts, receipts, and photos help in disputes.',
        'We will contact the specialist. We will ask for their point of view.',
        'We will ask the specialist to fix the shortcomings if the facts are on your side.',
      ],
    },
    {
      question: 'How to edit an order?',
      answer: 'Go to the "Order" tab. In the app - click on the section with the order description you want to edit; on the website - click the pencil icon.',
    },
    {
      question: 'How to cancel an order?',
      answer: 'Go to the "Order" tab. Click the "Cancel Order" button (at the bottom of the page).',
    },
    {
      question: 'Why leave a phone number?',
      answer: 'So that the specialist can call you if you choose them. We won\'t show your phone to anyone else and won\'t send promotional SMS.',
    },
  ],
  es: [
    {
      question: '¿Cómo funciona el servicio?',
      answer: 'Usted elige un servicio, describe su tarea y realiza un pedido. Los especialistas ven su pedido y envían propuestas, a veces con precios y contactos. También puede buscar especialistas por su cuenta. Cuando encuentre uno adecuado, contáctelo por teléfono o chat. Acuerde el trabajo. Después de completar el trabajo, deje una reseña sobre el trabajo del especialista - esto ayudará a otros clientes a tomar una decisión.',
    },
    {
      question: '¿Cómo elegir un especialista?',
      answer: 'Elija un servicio de la lista o encuentre un servicio a través de la búsqueda. Verá preguntas de ayuda. Le ayudarán a describir los detalles de la tarea necesarios para los especialistas. Ingrese su número de teléfono y haga clic en "Crear Pedido".',
    },
    {
      question: '¿Cómo elegir un especialista? Proceso.',
      answer: 'Elija un servicio de la lista o encuentre un servicio a través de la búsqueda. Verá preguntas de ayuda. Le ayudarán a describir los detalles de la tarea necesarios para los especialistas. Ingrese su número de teléfono y haga clic en "Crear Pedido".',
    },
    {
      question: '¿Cómo elegir un especialista? Reseñas, calificaciones, perfil',
      answer: 'Aceptamos reseñas después de la finalización del trabajo. Asegúrese de que el perfil del especialista tenga el servicio que necesita y reseñas positivas específicamente para este servicio. La calificación promedio depende de las reseñas. El perfil es la tarjeta de presentación del especialista. Preste atención a cómo el especialista se describe, si tiene certificados profesionales, qué ejemplos de trabajo muestra. Verificamos documentos y calificaciones. En el perfil, mostramos estados: calificación confirmada, pasaporte verificado, trabaja bajo contrato, proporciona garantía.',
    },
    {
      question: '¿El servidor es responsable de los especialistas?',
      answer: 'Los especialistas trabajan por su cuenta y son responsables de su trabajo. No son empleados del servicio. Monitoreamos la calidad de los perfiles en el sitio y la autenticidad de las reseñas, verificamos documentos. Si un especialista recibe frecuentemente reseñas negativas, eliminamos su perfil.',
    },
    {
      question: '¿Quién puede dejar una reseña?',
      answer: 'Puede encontrar el botón "Dejar una reseña" en el chat con el especialista. Si no ha comunicado con el especialista, no puede dejar una reseña. No puede dejar una reseña sin un pedido.',
    },
    {
      question: '¿Cómo dejar una reseña?',
      answer: 'Puede encontrar el botón "Dejar una reseña" en el chat con el especialista. Si no ha comunicado con el especialista, no puede dejar una reseña. No puede dejar una reseña sin un pedido.',
    },
    {
      question: '¿Qué reseñas no se publican?',
      answer: ['No publicamos:',
        '- insultos, incluyendo memes;',
        '- declaraciones nacionalistas, políticas, religiosas;',
        '- acusaciones sin fundamento de crímenes - si algo sucede por accidente, contáctenos inmediatamente;',
        '- suposiciones y especulaciones;',
        '- datos personales;',
        '- reseñas sobre servicios prohibidos por las reglas de la empresa;',
        '- enlaces a otros sitios web;',
        '- spam;',
        '- reseñas sobre trabajo poco confiable del servicio;',
        '- reseñas sobre trabajo con ex empleados y así sucesivamente.',
      ],
    },
    {
      question: 'Estoy insatisfecho con el trabajo del especialista, ¿qué debo hacer?',
      answer: ['Contacte a soporte o envíe un correo electrónico. Nos ocuparemos del problema.',
        'Escucharemos su problema. No lo dejaremos en una situación difícil.',
        'Examinaremos la evidencia. Los contratos, recibos y fotos ayudan en las disputas.',
        'Contactaremos al especialista. Preguntaremos su punto de vista.',
        'Pediremos al especialista que corrija las deficiencias si los hechos están de su lado.',
      ],
    },
    {
      question: '¿Cómo editar un pedido?',
      answer: 'Vaya a la pestaña "Pedido". En la aplicación - haga clic en la sección con la descripción del pedido que desea editar; en el sitio web - haga clic en el icono del lápiz.',
    },
    {
      question: '¿Cómo cancelar un pedido?',
      answer: 'Vaya a la pestaña "Pedido". Haga clic en el botón "Cancelar Pedido" (en la parte inferior de la página).',
    },
    {
      question: '¿Por qué dejar un número de teléfono?',
      answer: 'Para que el especialista pueda llamarlo si lo elige. No mostraremos su teléfono a nadie más y no enviaremos SMS promocionales.',
    },
  ],
  de: [
    {
      question: 'Wie funktioniert der Service?',
      answer: 'Sie wählen einen Service, beschreiben Ihre Aufgabe und geben eine Bestellung auf. Spezialisten sehen Ihre Bestellung und senden Vorschläge, manchmal mit Preisen und Kontakten. Sie können auch selbst nach Spezialisten suchen. Wenn Sie einen passenden gefunden haben, kontaktieren Sie ihn per Telefon oder Chat. Vereinbaren Sie die Arbeit. Nach Abschluss der Arbeit hinterlassen Sie eine Bewertung über die Arbeit des Spezialisten - dies hilft anderen Kunden bei der Auswahl.',
    },
    {
      question: 'Wie wähle ich einen Spezialisten?',
      answer: 'Wählen Sie einen Service aus der Liste oder finden Sie einen Service über die Suche. Sie sehen Hilfsfragen. Sie helfen Ihnen, die für Spezialisten erforderlichen Aufgabendetails zu beschreiben. Geben Sie Ihre Telefonnummer ein und klicken Sie auf "Bestellung erstellen".',
    },
    {
      question: 'Wie wähle ich einen Spezialisten? Prozess.',
      answer: 'Wählen Sie einen Service aus der Liste oder finden Sie einen Service über die Suche. Sie sehen Hilfsfragen. Sie helfen Ihnen, die für Spezialisten erforderlichen Aufgabendetails zu beschreiben. Geben Sie Ihre Telefonnummer ein und klicken Sie auf "Bestellung erstellen".',
    },
    {
      question: 'Wie wähle ich einen Spezialisten? Bewertungen, Bewertungen, Profil',
      answer: 'Wir akzeptieren Bewertungen nach Abschluss der Arbeit. Stellen Sie sicher, dass das Profil des Spezialisten den von Ihnen benötigten Service und positive Bewertungen speziell für diesen Service enthält. Die durchschnittliche Bewertung hängt von den Bewertungen ab. Das Profil ist die Visitenkarte des Spezialisten. Achten Sie darauf, wie der Spezialist sich beschreibt, ob er professionelle Zertifikate hat, welche Arbeitsbeispiele er zeigt. Wir überprüfen Dokumente und Qualifikationen. Im Profil zeigen wir Status: Qualifikation bestätigt, Pass überprüft, arbeitet unter Vertrag, bietet Garantie.',
    },
    {
      question: 'Ist der Server für Spezialisten verantwortlich?',
      answer: 'Spezialisten arbeiten für sich selbst und sind für ihre Arbeit verantwortlich. Sie sind keine Mitarbeiter des Dienstes. Wir überwachen die Qualität der Profile auf der Website und die Authentizität der Bewertungen, überprüfen Dokumente. Wenn ein Spezialist häufig negative Bewertungen erhält, löschen wir sein Profil.',
    },
    {
      question: 'Wer kann eine Bewertung abgeben?',
      answer: 'Sie finden die Schaltfläche "Bewertung abgeben" im Chat mit dem Spezialisten. Wenn Sie nicht mit dem Spezialisten kommuniziert haben, können Sie keine Bewertung abgeben. Sie können keine Bewertung ohne Bestellung abgeben.',
    },
    {
      question: 'Wie gebe ich eine Bewertung ab?',
      answer: 'Sie finden die Schaltfläche "Bewertung abgeben" im Chat mit dem Spezialisten. Wenn Sie nicht mit dem Spezialisten kommuniziert haben, können Sie keine Bewertung abgeben. Sie können keine Bewertung ohne Bestellung abgeben.',
    },
    {
      question: 'Welche Bewertungen werden nicht veröffentlicht?',
      answer: ['Wir veröffentlichen nicht:',
        '- Beleidigungen, einschließlich Memes;',
        '- nationalistische, politische, religiöse Äußerungen;',
        '- grundlose Anschuldigungen von Verbrechen - wenn etwas zufällig passiert, kontaktieren Sie uns sofort;',
        '- Annahmen und Spekulationen;',
        '- persönliche Daten;',
        '- Bewertungen über Dienste, die durch Unternehmensregeln verboten sind;',
        '- Links zu anderen Websites;',
        '- Spam;',
        '- Bewertungen über unzuverlässige Dienstleistungen;',
        '- Bewertungen über Arbeit mit ehemaligen Mitarbeitern und so weiter.',
      ],
    },
    {
      question: 'Ich bin mit der Arbeit des Spezialisten unzufrieden, was soll ich tun?',
      answer: ['Kontaktieren Sie den Support oder senden Sie eine E-Mail. Wir werden uns um das Problem kümmern.',
        'Wir werden Ihr Problem anhören. Wir werden Sie nicht in einer schwierigen Situation lassen.',
        'Wir werden die Beweise prüfen. Verträge, Quittungen und Fotos helfen bei Streitigkeiten.',
        'Wir werden den Spezialisten kontaktieren. Wir werden nach seiner Sichtweise fragen.',
        'Wir werden den Spezialisten bitten, die Mängel zu beheben, wenn die Fakten auf Ihrer Seite sind.',
      ],
    },
    {
      question: 'Wie bearbeite ich eine Bestellung?',
      answer: 'Gehen Sie zum Tab "Bestellung". In der App - klicken Sie auf den Abschnitt mit der Bestellbeschreibung, die Sie bearbeiten möchten; auf der Website - klicken Sie auf das Stiftsymbol.',
    },
    {
      question: 'Wie storniere ich eine Bestellung?',
      answer: 'Gehen Sie zum Tab "Bestellung". Klicken Sie auf die Schaltfläche "Bestellung stornieren" (am unteren Rand der Seite).',
    },
    {
      question: 'Warum eine Telefonnummer hinterlassen?',
      answer: 'Damit der Spezialist Sie anrufen kann, wenn Sie ihn auswählen. Wir werden Ihre Telefonnummer niemandem zeigen und keine Werbe-SMS senden.',
    },
  ]
};

export default questions;