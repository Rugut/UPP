Ext.define('Документы.РеестрСведенийВФССОЕжемесячныхПособияхПоУходу.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:991px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестр сведений в ФСС о ежемесячных пособиях по уходу',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:366px;top:33px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:413px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:497px;top:33px;width:18px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:520px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:57px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:528px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:528px;width:887px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:991px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:991px;height:25px;',
			items:
			[
				{
					text:'Показать файл',
				},
				'-',
				{
					text:'Записать файл на диск',
				},
				'-',
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
			style: 'position:absolute;left:8px;top:81px;width:975px;height:441px;',
			height: 441,width: 975,
			items:
			[
				{
					title:'Пособия',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:961px;height:24px;',
			items:
			[
				{
					text:'Заполнить по приказам на отпуск',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:376px;height:380px;',
			height: 380,width: 376,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Приказ',
					width:'80',
				},
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:388px;top:33px;width:579px;height:380px;',
			height: 380,width: 579,
			items:
			[
				{
					title:'Застрахованное лицо',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:61px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:215px;top:6px;width:27px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:245px;top:6px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:402px;top:6px;width:51px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:456px;top:6px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'СНИЛС:',
			style: 'position:absolute;left:6px;top:30px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:61px;top:30px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:6px;top:210px;width:120px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресРегистрацииВФорме',
			style: 'position:absolute;left:146px;top:210px;width:425px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеЗЛ',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:333px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:6px;top:78px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:61px;top:78px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:215px;top:30px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:307px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПол',
			text: 'Пол:',
			style: 'position:absolute;left:402px;top:30px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пол',
			style: 'position:absolute;left:456px;top:30px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатусНалогоплательщика',
			text: 'Статус налогоплательщика:',
			style: 'position:absolute;left:215px;top:78px;width:148px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатусНалогоплательщика',
			style: 'position:absolute;left:365px;top:78px;width:206px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:294px;top:162px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:338px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента1',
			text: 'Номер:',
			style: 'position:absolute;left:441px;top:162px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:483px;top:162px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:138px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:47px;top:186px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Выдан:',
			style: 'position:absolute;left:6px;top:186px;width:38px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:162px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:90px;top:162px;width:197px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:138px;top:186px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:200px;top:186px;width:371px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Основное место работы',
			style: 'position:absolute;left:96px;top:102px;width:144px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Совместительство',
			style: 'position:absolute;left:247px;top:102px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента2',
			text: 'Вид занятости:',
			style: 'position:absolute;left:6px;top:102px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:245px;top:54px;width:150px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтатус',
			text: 'Статус получателя (родственные отношения):',
			style: 'position:absolute;left:6px;top:54px;width:234px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента3',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:6px;top:234px;width:139px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеДокументаНаПроживание',
			style: 'position:absolute;left:146px;top:234px;width:425px;height:19px;',
		},
					]
				},
				{
					title:'Выплата пособия',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Перечислением на счет в банке:',
			style: 'position:absolute;left:14px;top:64px;width:183px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Почтовым переводом по адресу:',
			style: 'position:absolute;left:14px;top:112px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйВФорме',
			style: 'position:absolute;left:197px;top:112px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Банк',
			style: 'position:absolute;left:197px;top:64px;width:185px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:387px;top:64px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЛицевогоСчета',
			style: 'position:absolute;left:435px;top:64px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:14px;top:88px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеБанка',
			style: 'position:absolute;left:129px;top:88px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:450px;top:88px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БИКБанка',
			style: 'position:absolute;left:483px;top:88px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись46',
			text: 'Выплатить',
			style: 'position:absolute;left:6px;top:40px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Льготы при выплате пособия',
			style: 'position:absolute;left:6px;top:148px;width:230px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Постоянное проживание',
			style: 'position:absolute;left:14px;top:196px;width:144px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Работа',
			style: 'position:absolute;left:197px;top:196px;width:119px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В зоне с правом на отселение',
			style: 'position:absolute;left:14px;top:220px;width:174px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В зоне отселения',
			style: 'position:absolute;left:197px;top:220px;width:108px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'В зоне с льготным социально-экон. статусом',
			style: 'position:absolute;left:310px;top:220px;width:261px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Применять при начислении пособия льготы для зон с льготным статусом:',
			style: 'position:absolute;left:14px;top:172px;width:404px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокументаНаЛьготы',
			style: 'position:absolute;left:90px;top:244px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:6px;top:244px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:439px;top:244px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокументаНаЛьготы',
			style: 'position:absolute;left:483px;top:244px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиБольничного',
			text: 'Дата:',
			style: 'position:absolute;left:310px;top:244px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокументаНаЛьготы',
			style: 'position:absolute;left:348px;top:244px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПредставленияПакетаДокументов',
			text: 'Дата представления пакета документов:',
			style: 'position:absolute;left:6px;top:6px;width:213px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПредставленияПакетаДокументов',
			style: 'position:absolute;left:220px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:247px;top:88px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоррСчет',
			style: 'position:absolute;left:311px;top:88px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:354px;top:112px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПочтовыйКодПоКЛАДР',
			style: 'position:absolute;left:435px;top:112px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыплатаЗаСчетФедеральногоБюджета',
			style: 'position:absolute;left:422px;top:172px;width:149px;height:19px;',
		},
					]
				},
				{
					title:'Документы',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтОтца',
			text: 'отцом от:',
			style: 'position:absolute;left:14px;top:285px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:175px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтОтца',
			style: 'position:absolute;left:292px;top:285px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиОНеполученииПособияОтМатери',
			text: 'матерью от:',
			style: 'position:absolute;left:14px;top:310px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:175px;top:310px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиОНеполученииПособияОтМатери',
			style: 'position:absolute;left:292px;top:310px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя',
			text: '№',
			style: 'position:absolute;left:263px;top:285px;width:25px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя1',
			text: '№',
			style: 'position:absolute;left:263px;top:310px;width:25px;height:19px;text-align:right;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'Справки о неполучении пособия',
			style: 'position:absolute;left:6px;top:262px;width:201px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаСправкиПоДругимМестамРаботы',
			text: 'по другим местам работы от:',
			style: 'position:absolute;left:14px;top:335px;width:156px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:175px;top:335px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСправкиПоДругимМестамРаботы',
			style: 'position:absolute;left:292px;top:335px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиОтДругогоРодителя2',
			text: '№',
			style: 'position:absolute;left:263px;top:335px;width:25px;height:19px;text-align:right;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:124px;width:565px;height:133px;',
			height: 133,width: 565,
			columns:
			[
				{
					text:'Очередность',
					width:'77',
				},
				{
					text:'Фамилия',
					width:'60',
				},
				{
					text:'Имя',
					width:'60',
				},
				{
					text:'Отчество',
					width:'60',
				},
				{
					text:'Дата рождения',
					width:'80',
				},
				{
					text:'Выплачивается пособие',
					width:'90',
				},
				{
					text:'Подтверждающий документ',
					width:'380',
				},
				{
					text:'Вид документа',
					width:'100',
				},
				{
					text:'Дата',
					width:'80',
				},
				{
					text:'Серия',
					width:'60',
				},
				{
					text:'Номер',
					width:'60',
				},
				{
					text:'Полное наименование документа',
					width:'80',
				},
				{
					text:'Решение суда о лишении прав',
					width:'100',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Документы на всех детей',
			style: 'position:absolute;left:6px;top:76px;width:160px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:98px;width:565px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись48',
			text: 'Приказы ',
			style: 'position:absolute;left:6px;top:6px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПриказаНаОтпускПоУходуЗаРебенком',
			style: 'position:absolute;left:452px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПриказаНаОтпускПоУходуЗаРебенком',
			text: 'Номер:',
			style: 'position:absolute;left:408px;top:29px;width:39px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриказаНаОтпускПоУходуЗаРебенком',
			text: 'На отпуск по уходу за ребенком от:',
			style: 'position:absolute;left:14px;top:29px;width:185px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриказаНаОтпускПоУходуЗаРебенком',
			style: 'position:absolute;left:308px;top:29px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерПриказаОЗаменеПослеродовогоОтпуска',
			style: 'position:absolute;left:452px;top:53px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПриказаОЗаменеПослеродовогоОтпуска',
			text: 'Номер:',
			style: 'position:absolute;left:408px;top:53px;width:39px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПриказаОЗаменеПослеродовогоОтпуска',
			style: 'position:absolute;left:308px;top:53px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаПриказаОЗаменеПослеродовогоОтпуска',
			text: 'О замене послеродового отпуска на отпуск по уходу от:',
			style: 'position:absolute;left:14px;top:53px;width:290px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Расчет пособия',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			style: 'position:absolute;left:340px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			style: 'position:absolute;left:455px;top:125px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по',
			style: 'position:absolute;left:434px;top:125px;width:16px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:32px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ',
			text: ' и ',
			style: 'position:absolute;left:339px;top:54px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:32px;top:77px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Заявление о замене расчетного года от:',
			style: 'position:absolute;left:32px;top:101px;width:210px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заработок рассчитан по правилам 2011 года за расчетные годы:',
			style: 'position:absolute;left:14px;top:30px;width:351px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Заработок по правилам 2010 года за расчетный период с:',
			style: 'position:absolute;left:14px;top:125px;width:321px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Пособие рассчитывается из оклада (тарифной ставки):',
			style: 'position:absolute;left:14px;top:173px;width:321px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:340px;top:173px;width:88px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Пособие определяется исходя из МРОТ:',
			style: 'position:absolute;left:14px;top:197px;width:321px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Заработок за период:',
			style: 'position:absolute;left:32px;top:149px;width:127px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокЗаПериодРасчета',
			style: 'position:absolute;left:162px;top:149px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись31',
			text: 'Календарных дней периода:',
			style: 'position:absolute;left:256px;top:149px;width:149px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КалендарныхДнейРасчетногоПериода',
			style: 'position:absolute;left:407px;top:149px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись32',
			text: 'Порядок расчета cреднего заработка',
			style: 'position:absolute;left:6px;top:6px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаЗаявленияОЗаменеРасчетногоГода',
			style: 'position:absolute;left:246px;top:101px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаПервыйГодРасчета',
			text: ') заработок:',
			style: 'position:absolute;left:175px;top:54px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:246px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийДневнойЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:6px;top:234px;width:157px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СреднийМесячныйЗаработок',
			style: 'position:absolute;left:171px;top:234px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись40',
			text: '( заменил',
			style: 'position:absolute;left:77px;top:54px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗамененныйПервыйГодРасчета',
			style: 'position:absolute;left:132px;top:54px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВторойГодРасчета',
			text: '( заменил',
			style: 'position:absolute;left:77px;top:77px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗамененныйВторойГодРасчета',
			style: 'position:absolute;left:132px;top:77px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаВторойГодРасчета',
			text: ') заработок:',
			style: 'position:absolute;left:175px;top:77px;width:64px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЗаработокПервыйГодРасчета',
			style: 'position:absolute;left:246px;top:77px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МРОТ1',
			style: 'position:absolute;left:340px;top:197px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоляВремени',
			style: 'position:absolute;left:258px;top:272px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоляВремени',
			text: 'Доля времени при неполном рабочем времени:',
			style: 'position:absolute;left:6px;top:272px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициент',
			style: 'position:absolute;left:103px;top:296px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРК',
			text: 'Районный коэф-т:',
			style: 'position:absolute;left:6px;top:296px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ1',
			text: ' № ',
			style: 'position:absolute;left:339px;top:101px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерЗаявленияОЗаменеРасчетногоГода',
			style: 'position:absolute;left:360px;top:101px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Район',
			style: 'position:absolute;left:188px;top:296px;width:194px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись43',
			text: 'Район:',
			style: 'position:absolute;left:151px;top:296px;width:37px;height:19px;',
		},
					]
				},
				{
					title:'Прочее',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИнаяПолезнаяИнформация',
			text: 'Иная информация, имеющая значение:',
			style: 'position:absolute;left:6px;top:178px;width:290px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ИнаяПолезнаяИнформация',
			style: 'position:absolute;left:6px;top:199px;width:565px;height:130px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМРОТ1',
			text: 'Количество страниц представленных документов:',
			style: 'position:absolute;left:6px;top:6px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСтраниц',
			style: 'position:absolute;left:264px;top:6px;width:45px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументыОснования',
			text: 'Наименование и реквизиты представленных документов:',
			style: 'position:absolute;left:6px;top:40px;width:316px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'ДокументыОснования',
			style: 'position:absolute;left:6px;top:64px;width:565px;height:106px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗаполнитьСписокПредставленныхДокументов',
			text: 'Заполнить по введенным сведениям о документах',
			style: 'position:absolute;left:6px;top:335px;width:316px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Данные страхователя',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:14px;top:162px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:121px;top:162px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:358px;top:162px;width:81px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:439px;top:162px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:14px;top:108px;width:134px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:149px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:264px;top:108px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:382px;top:108px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:497px;top:108px;width:102px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:602px;top:108px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:14px;top:84px;width:241px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:258px;top:84px;width:709px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Регистрация в ФСС',
			style: 'position:absolute;left:6px;top:60px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'Подписи',
			style: 'position:absolute;left:6px;top:138px;width:129px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:394px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'Надпись47',
			text: 'Основные',
			style: 'position:absolute;left:6px;top:6px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИНН1',
			text: 'ИНН:',
			style: 'position:absolute;left:14px;top:30px;width:31px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН1',
			style: 'position:absolute;left:58px;top:30px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПП',
			text: 'КПП:',
			style: 'position:absolute;left:186px;top:30px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:224px;top:30px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОГРН',
			style: 'position:absolute;left:391px;top:30px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН',
			text: 'ОГРН:',
			style: 'position:absolute;left:350px;top:30px;width:35px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:14px;top:186px;width:106px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:121px;top:186px;width:220px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить подписи в реестр пособий',
			style: 'position:absolute;left:14px;top:214px;width:327px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРеестрСоставил',
			text: 'Реестр составил:',
			style: 'position:absolute;left:366px;top:57px;width:94px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:650px;top:57px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Телефон',
			style: 'position:absolute;left:704px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЭлектроннойПочтыСоставителя',
			text: 'Адрес э.п.:',
			style: 'position:absolute;left:800px;top:57px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресЭлектроннойПочтыСоставителя',
			style: 'position:absolute;left:864px;top:57px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РеестрСоставил',
			style: 'position:absolute;left:464px;top:57px;width:176px;height:19px;',
		},
	]
});