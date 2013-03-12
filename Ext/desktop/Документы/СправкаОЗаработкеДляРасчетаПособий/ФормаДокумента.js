Ext.define('Документы.СправкаОЗаработкеДляРасчетаПособий.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:682px;height:413px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справка о заработке для расчета пособий',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
				{
					text:'Открыть категории',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Открыть свойства',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Редактировать номер',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:388px;width:682px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:368px;top:33px;width:85px;height:19px;',
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
			style: 'position:absolute;left:534px;top:33px;width:20px;height:19px;',
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
			style: 'position:absolute;left:8px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:368px;top:58px;width:85px;height:19px;',
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
			style: 'position:absolute;left:8px;top:58px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:113px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:361px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:361px;width:578px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:111px;width:666px;height:245px;',
			height: 245,width: 666,
			items:
			[
				{
					title:'Данные о заработке',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:58px;width:652px;height:161px;',
			height: 161,width: 652,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Расчетный год',
					width:'100',
				},
				{
					text:'Заработок',
					width:'100',
				},
				{
					text:'Дней болезни, ухода за детьми и др.',
					width:'200',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:33px;width:652px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'данными учета',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРаботыС',
			text: 'Период работы с:',
			style: 'position:absolute;left:6px;top:6px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРаботыС',
			style: 'position:absolute;left:105px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРаботыПо',
			text: 'по:',
			style: 'position:absolute;left:192px;top:6px;width:21px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРаботыПо',
			style: 'position:absolute;left:218px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Данные о страхователе',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРуководитель',
			text: 'Руководитель:',
			style: 'position:absolute;left:12px;top:123px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Руководитель',
			style: 'position:absolute;left:119px;top:123px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьРуководителя',
			text: 'Должность:',
			style: 'position:absolute;left:356px;top:123px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДолжностьРуководителя',
			style: 'position:absolute;left:438px;top:123px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГлавныйБухгалтер',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:12px;top:148px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГлавныйБухгалтер',
			style: 'position:absolute;left:119px;top:148px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРегистрационныйНомерФСС',
			text: 'Регистрационный номер:',
			style: 'position:absolute;left:12px;top:53px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РегистрационныйНомерФСС',
			style: 'position:absolute;left:146px;top:53px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныйКодФСС',
			text: 'Дополнительный код:',
			style: 'position:absolute;left:265px;top:53px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:383px;top:53px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПодчиненностиФСС',
			text: 'Код подчиненности:',
			style: 'position:absolute;left:12px;top:78px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодПодчиненностиФСС',
			style: 'position:absolute;left:146px;top:78px;width:110px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеТерриториальногоОрганаФСС',
			text: 'Наименование территориального органа ФСС:',
			style: 'position:absolute;left:12px;top:27px;width:241px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеТерриториальногоОрганаФСС',
			style: 'position:absolute;left:259px;top:27px;width:399px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефонОрганизации',
			text: 'Телефон:',
			style: 'position:absolute;left:12px;top:173px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТелефонОрганизации',
			style: 'position:absolute;left:119px;top:173px;width:220px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСтрахователя',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:198px;width:82px;height:21px;',
		},
					]
				},
				{
					title:'Данные о застрахованном лице',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:64px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:234px;top:6px;width:34px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:273px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:440px;top:6px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:498px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтраховойНомерПФР',
			text: 'Страховой номер ПФР:',
			style: 'position:absolute;left:6px;top:31px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтраховойНомерПФР',
			style: 'position:absolute;left:128px;top:31px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдрес',
			text: 'Адрес:',
			style: 'position:absolute;left:12px;top:135px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Адрес',
			style: 'position:absolute;left:95px;top:135px;width:527px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:12px;top:85px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:95px;top:85px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:332px;top:85px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияДокумента',
			style: 'position:absolute;left:374px;top:85px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:466px;top:85px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерДокумента',
			style: 'position:absolute;left:542px;top:85px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Дата выдачи:',
			style: 'position:absolute;left:466px;top:110px;width:72px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаВыдачиДокумента',
			style: 'position:absolute;left:542px;top:110px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:12px;top:110px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КемВыданДокумент',
			style: 'position:absolute;left:95px;top:110px;width:359px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:6px;top:198px;width:82px;height:21px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьГодС',
			text: 'Расчетные годы с:',
			style: 'position:absolute;left:8px;top:83px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодС',
			style: 'position:absolute;left:113px;top:83px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГодПо',
			text: 'по:',
			style: 'position:absolute;left:200px;top:83px;width:21px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГодПо',
			style: 'position:absolute;left:224px;top:83px;width:80px;height:19px;',
		},
	]
});