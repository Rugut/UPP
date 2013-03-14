Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:860px;height:533px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление на подключение',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:140px;width:844px;height:360px;',
			height: 360,width: 844,
			items:
			[
				{
					title:'Сведения об организации',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:61px;width:128px;height:15px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:136px;top:61px;width:700px;height:38px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КраткоеНаименование',
			style: 'position:absolute;left:136px;top:33px;width:700px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:136px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:136px;top:136px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерПФР',
			style: 'position:absolute;left:432px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:432px;top:136px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЮрАдрес',
			style: 'position:absolute;left:136px;top:228px;width:700px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФактАдрес',
			style: 'position:absolute;left:136px;top:256px;width:700px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЭлектАдрес',
			style: 'position:absolute;left:136px;top:312px;width:408px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:136px;top:284px;width:110px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТелефонМобильный',
			style: 'position:absolute;left:432px;top:284px;width:110px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Крупнейшим налогоплательщиком',
			style: 'position:absolute;left:136px;top:164px;width:200px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: ' Обособленным подразделением',
			style: 'position:absolute;left:136px;top:184px;width:193px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный номер ФСС:',
			style: 'position:absolute;left:552px;top:136px;width:164px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:726px;top:136px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'Владелец ЭЦП',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументВидСотрудника',
			style: 'position:absolute;left:124px;top:211px;width:708px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументСерияСотрудника',
			style: 'position:absolute;left:124px;top:237px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументНомерСотрудника',
			style: 'position:absolute;left:392px;top:236px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументДатаВыдачиСотрудника',
			style: 'position:absolute;left:688px;top:236px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументКемВыданСотрудника',
			style: 'position:absolute;left:124px;top:268px;width:408px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеСотрудника',
			style: 'position:absolute;left:392px;top:155px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьСотрудника',
			style: 'position:absolute;left:124px;top:155px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:124px;top:100px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:392px;top:101px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:608px;top:101px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:288px;top:50px;width:544px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Руководитель',
			style: 'position:absolute;left:124px;top:8px;width:120px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Главный бухгалтер',
			style: 'position:absolute;left:124px;top:30px;width:120px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Другой сотрудник:',
			style: 'position:absolute;left:124px;top:52px;width:124px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжность6',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:8px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Подробнее...',
			style: 'position:absolute;left:756px;top:101px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Контролирующие органы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКраткоеНаименование',
			text: 'Краткое наименование:',
			style: 'position:absolute;left:8px;top:33px;width:128px;height:15px;text-align:left;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:828px;height:300px;',
			height: 300,width: 828,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Тип органа',
					width:'102',
				},
				{
					text:'Код органа',
					width:'98',
				},
				{
					text:'КПП (только для ФНС)',
					width:'144',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:828px;height:24px;',
			items:
			[
				{
					text:'Добавить',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Редактировать',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Востановить',
				},
			]
		},
					]
				},
				{
					title:'Удостоверяющий центр',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Удостоверяющий центр:',
			style: 'position:absolute;left:8px;top:8px;width:128px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпецоператорИУЦ',
			style: 'position:absolute;left:136px;top:8px;width:700px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ВывестиСоглашениеНапечать',
			text: 'Печать',
			style: 'position:absolute;left:756px;top:312px;width:80px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'ОткрытьСтраницуУЦ',
			text: 'Подробнее об услугах на сайте удостоверяющего центра...',
			style: 'position:absolute;left:136px;top:32px;width:316px;height:16px;',
		},
					]
				},
				{
					title:'Криптопровайдер',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:8px;top:108px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'СкачатьVipNetCSP1',
			text: 'Сайт ОАО «ИнфоТеКС», разработчика криптопровайдера VipNet CSP',
			style: 'position:absolute;left:148px;top:32px;width:656px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'СкачатьCryptoProCSP1',
			text: 'Сайт компании  КРИПТО-ПРО, разработчика криптопровайдера  CryptoPro CSP',
			style: 'position:absolute;left:148px;top:88px;width:656px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись55',
			text: 'Криптопровайдер:',
			style: 'position:absolute;left:12px;top:8px;width:100px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'VipNet CSP',
			style: 'position:absolute;left:136px;top:8px;width:704px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'CryptoPro CSP',
			style: 'position:absolute;left:136px;top:64px;width:704px;height:16px;',
		},
					]
				},
				{
					title:'Служебная информация',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'Путь к контейнеру закрытого ключа:',
			style: 'position:absolute;left:8px;top:8px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьКонтейнерЗакрытогоКлюча',
			style: 'position:absolute;left:208px;top:8px;width:628px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН2',
			text: 'Идентификатор заявления:',
			style: 'position:absolute;left:8px;top:36px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторДокументооборота',
			style: 'position:absolute;left:208px;top:36px;width:628px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН3',
			text: 'Учетная запись - результат:',
			style: 'position:absolute;left:8px;top:64px;width:192px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'УчетнаяЗапись',
			style: 'position:absolute;left:208px;top:64px;width:628px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:508px;width:860px;height:25px;',
			items:
			[
				{
					text:'ОК',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:860px;height:25px;',
			items:
			[
				{
					text:'Заявление  на подключение',
				},
				{
					text:'Соглашение об оказании услуг',
				},
				{
					text:'Лицензия на использование ПО',
				},
				{
					text:'Сертификат пользователя',
				},
				'-',
				{
					text:'Пакет документов',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:844px;height:40px;',
			height: 40,width: 844,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:80px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:196px;top:80px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:108px;top:80px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:219px;top:80px;width:130px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:107px;width:89px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:108px;top:107px;width:744px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерОсновнойПоставки1с',
			style: 'position:absolute;left:656px;top:80px;width:196px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерОсновнойПоставки1с',
			text: 'Номер основной поставки 1с:',
			style: 'position:absolute;left:472px;top:80px;width:172px;height:19px;',
		},
	]
});