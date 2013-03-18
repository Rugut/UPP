Ext.define('Документы.ЗапросВПФРОЗаработкеСотрудника.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:535px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Запрос в ПФР о заработке сотрудника',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:510px;width:682px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:368px;top:33px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:534px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:554px;top:33px;width:120px;height:19px;',
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
			style: 'position:absolute;left:93px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:368px;top:58px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:454px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:58px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:93px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:483px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:483px;width:578px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:161px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:93px;top:161px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:368px;top:161px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:454px;top:161px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ПФР:',
			style: 'position:absolute;left:8px;top:136px;width:244px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:254px;top:136px;width:420px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес:',
			style: 'position:absolute;left:8px;top:344px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:93px;top:344px;width:581px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:8px;top:237px;width:82px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:8px;top:449px;width:82px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес1',
			text: 'Адрес:',
			style: 'position:absolute;left:8px;top:186px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресОрганизации',
			style: 'position:absolute;left:93px;top:186px;width:581px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЛичныеДанные',
			text: 'Личные данные застрахованного лица',
			style: 'position:absolute;left:8px;top:267px;width:239px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:8px;top:293px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:93px;top:293px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:262px;top:293px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:293px;top:293px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:460px;top:293px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:514px;top:293px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'Страховой номер ПФР:',
			style: 'position:absolute;left:229px;top:318px;width:122px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:357px;top:318px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРождения',
			text: 'Дата рождения:',
			style: 'position:absolute;left:8px;top:318px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРождения',
			style: 'position:absolute;left:93px;top:318px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:8px;top:398px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:93px;top:398px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:358px;top:398px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:400px;top:398px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:503px;top:398px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:578px;top:398px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:503px;top:423px;width:72px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:578px;top:423px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:8px;top:423px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:93px;top:423px;width:403px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПаспортныеДанные',
			text: 'Паспортные данные',
			style: 'position:absolute;left:8px;top:372px;width:239px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДанныеОрганизации',
			text: 'Данные организации',
			style: 'position:absolute;left:8px;top:111px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефонОрганизации',
			text: 'Телефон:',
			style: 'position:absolute;left:8px;top:211px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТелефонОрганизации',
			style: 'position:absolute;left:94px;top:211px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтрахователь',
			text: 'Страхователь:',
			style: 'position:absolute;left:8px;top:83px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Страхователь',
			style: 'position:absolute;left:93px;top:83px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГодС',
			text: 'Календарные годы с:',
			style: 'position:absolute;left:368px;top:83px;width:111px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодС',
			style: 'position:absolute;left:485px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГодПо',
			text: 'по:',
			style: 'position:absolute;left:572px;top:83px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодПо',
			style: 'position:absolute;left:594px;top:83px;width:80px;height:19px;',
		},
	]
});