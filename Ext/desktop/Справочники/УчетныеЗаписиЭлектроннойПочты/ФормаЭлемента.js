Ext.define('Справочники.УчетныеЗаписиЭлектроннойПочты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:582px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки учетной записи',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:476px;top:33px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:517px;top:33px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:57px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:100px;top:57px;width:474px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'E-mail:',
			style: 'position:absolute;left:8px;top:33px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочты',
			style: 'position:absolute;left:100px;top:33px;width:368px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:582px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:566px;height:312px;',
			height: 312,width: 566,
			items:
			[
				{
					title:'Подключение',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'SMTP-сервер:',
			style: 'position:absolute;left:6px;top:26px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'SMTPСервер',
			style: 'position:absolute;left:98px;top:26px;width:350px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'POP3-сервер:',
			style: 'position:absolute;left:6px;top:120px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'POP3Сервер',
			style: 'position:absolute;left:98px;top:120px;width:350px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Порт:',
			style: 'position:absolute;left:455px;top:26px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортSMTP',
			style: 'position:absolute;left:492px;top:26px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Порт:',
			style: 'position:absolute;left:455px;top:120px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПортPOP3',
			style: 'position:absolute;left:492px;top:120px;width:66px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Пользователь:',
			style: 'position:absolute;left:6px;top:144px;width:87px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Логин',
			style: 'position:absolute;left:98px;top:144px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Пароль:',
			style: 'position:absolute;left:302px;top:144px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пароль',
			style: 'position:absolute;left:354px;top:144px;width:204px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Требуется SMTP аутентификация',
			style: 'position:absolute;left:6px;top:50px;width:195px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Пользователь:',
			style: 'position:absolute;left:15px;top:70px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЛогинSMTP',
			style: 'position:absolute;left:98px;top:70px;width:198px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Пароль:',
			style: 'position:absolute;left:302px;top:70px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПарольSMTP',
			style: 'position:absolute;left:354px;top:70px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Время ожидания сервера:',
			style: 'position:absolute;left:6px;top:178px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВремяОжиданияСервера',
			style: 'position:absolute;left:157px;top:178px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'сек',
			style: 'position:absolute;left:206px;top:178px;width:20px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПроверитьНастройкиУчетнойЗаписи',
			text: 'Проверить настройки учетной записи',
			style: 'position:absolute;left:6px;top:208px;width:220px;height:20px;',
		},
					]
				},
				{
					title:'Письма',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Оставлять копии писем на сервере',
			style: 'position:absolute;left:6px;top:6px;width:203px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Удалять письма с сервера через',
			style: 'position:absolute;left:18px;top:25px;width:191px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:262px;top:25px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДнейУдаленияПисемССервера',
			style: 'position:absolute;left:212px;top:25px;width:44px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Авто получение/отправка писем',
			style: 'position:absolute;left:6px;top:52px;width:188px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалАвтоПолученияОтправкиСообщенийДо',
			text: 'каждые',
			style: 'position:absolute;left:18px;top:71px;width:42px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтоПолученияОтправкиСообщений',
			style: 'position:absolute;left:63px;top:71px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственныйЗаАвтоПолучениеОтправкуСообщений',
			text: 'Ответственный:',
			style: 'position:absolute;left:341px;top:71px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйЗаАвтоПолучениеОтправкуСообщений',
			style: 'position:absolute;left:429px;top:71px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалАвтоПолученияОтправкиСообщенийПосле',
			text: 'минут',
			style: 'position:absolute;left:110px;top:71px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДействиеАвтополученияОтправкиСообщений',
			text: 'Действие:',
			style: 'position:absolute;left:154px;top:71px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДействиеАвтополученияОтправкиСообщений',
			style: 'position:absolute;left:212px;top:71px;width:114px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'при открытии письма или в течение',
			style: 'position:absolute;left:6px;top:145px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтоматическойУстановкиОтметкиРассмотрено',
			style: 'position:absolute;left:212px;top:145px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИнтервалАвтоматическойУстановкиОтметкиРассмотрено',
			text: 'сек. после активизации строки',
			style: 'position:absolute;left:260px;top:145px;width:169px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автосохранение писем',
			style: 'position:absolute;left:6px;top:95px;width:141px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнтервалАвтосохраненияПисем',
			style: 'position:absolute;left:212px;top:95px;width:44px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнтервалАвтосохраненияПисем_',
			text: 'сек.',
			style: 'position:absolute;left:260px;top:95px;width:26px;height:19px;',
		},
		{
			xtype: 'label',
			name: '_ИнтервалАвтосохраненияПисем',
			text: 'каждые',
			style: 'position:absolute;left:162px;top:95px;width:47px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'исходное письмо при ответе',
			style: 'position:absolute;left:6px;top:168px;width:169px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'исходное письмо при получении ответа (необходима классификация по предметам)',
			style: 'position:absolute;left:6px;top:188px;width:449px;height:15px;',
		},
					]
				},
				{
					title:'Предметы',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать классификацию писем по предметам',
			style: 'position:absolute;left:6px;top:26px;width:288px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять пустой предмет для новых писем из темы письма',
			style: 'position:absolute;left:18px;top:46px;width:336px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для входящих "ответов" и "переадресаций" заполнять предмет из писем-оснований',
			style: 'position:absolute;left:18px;top:66px;width:458px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для входящих "ответов" и "переадресаций" искать и заполнять основание',
			style: 'position:absolute;left:18px;top:86px;width:408px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Для входящих "ответов" и "переадресаций" заполнять группу писем из письма-основания',
			style: 'position:absolute;left:18px;top:106px;width:488px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Заполнять объекты из полей "Отправитель", "Кому" и "Копии"  для первого письма',
			style: 'position:absolute;left:18px;top:151px;width:458px;height:15px;',
		},
					]
				},
				{
					title:'Доступ',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:552px;height:256px;',
			height: 256,width: 552,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Пользователь',
					width:'147',
				},
				{
					text:'Администрирование',
					width:'66',
				},
				{
					text:'Чтение',
					width:'66',
				},
				{
					text:'Редактирование/Отправка',
					width:'66',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Подпись',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Добавлять подпись к исходящим письмам',
			style: 'position:absolute;left:6px;top:6px;width:243px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Добавлять подпись к ответам и переадресациям',
			style: 'position:absolute;left:15px;top:26px;width:276px;height:15px;',
		},
					]
				},
				{
					title:'Группы писем',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:50px;width:552px;height:236px;',
			height: 236,width: 552,
			columns:
			[
				{
					text:'Наименование',
					width:'365',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:26px;width:552px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Помещать новые письма с ответами и переадресациями в одну группу с исходными',
			style: 'position:absolute;left:6px;top:6px;width:455px;height:15px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Группа писем "Входящие":',
			style: 'position:absolute;left:6px;top:27px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаВходящие',
			style: 'position:absolute;left:157px;top:27px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Группа писем "Исходящие":',
			style: 'position:absolute;left:6px;top:51px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаИсходящие',
			style: 'position:absolute;left:157px;top:51px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Группа писем "Удаленные":',
			style: 'position:absolute;left:6px;top:75px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаУдаленные',
			style: 'position:absolute;left:157px;top:75px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Формат текста письма:',
			style: 'position:absolute;left:6px;top:175px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Формат текста письма для ответов и переадресаций брать из исходного',
			style: 'position:absolute;left:24px;top:199px;width:396px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Группа писем "Черновики":',
			style: 'position:absolute;left:6px;top:99px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаЧерновики',
			style: 'position:absolute;left:157px;top:99px;width:401px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьПомеченныеНаУдаление',
			text: 'Удалить помеченные на удаление письма',
			style: 'position:absolute;left:6px;top:224px;width:246px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Кодировка (для исходящих):',
			style: 'position:absolute;left:6px;top:128px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Кодировку письма для ответов брать из исходного',
			style: 'position:absolute;left:24px;top:152px;width:285px;height:15px;',
		},
					]
				},
				{
					title:'Фильтры',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:552px;height:256px;',
			height: 256,width: 552,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'',
					width:'18',
				},
				{
					text:'Код',
					width:'73',
				},
				{
					text:'Наименование',
					width:'313',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:552px;height:24px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
					]
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
					]
				},
				{
					title:'Электронные документы',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать для отправки',
			style: 'position:absolute;left:6px;top:6px;width:196px;height:20px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать для получения',
			style: 'position:absolute;left:6px;top:30px;width:196px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНазначениеУчетнойЗаписи',
			text: 'Назначение:',
			style: 'position:absolute;left:8px;top:81px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазначениеУчетнойЗаписи',
			style: 'position:absolute;left:100px;top:81px;width:474px;height:19px;',
		},
	]
});