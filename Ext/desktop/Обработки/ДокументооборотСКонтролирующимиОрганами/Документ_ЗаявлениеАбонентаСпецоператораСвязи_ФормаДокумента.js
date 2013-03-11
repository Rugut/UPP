Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Документ_ЗаявлениеАбонентаСпецоператораСвязи_ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 533,width: 860,
	iconCls: 'bogus',
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
					title:'Организация',
					items:
					[
		{
			xtype: 'textfield',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДополнительныйКодФСС',
			style: 'position:absolute;left:726px;top:136px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'ВладельцыЭЦП',
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
			xtype: 'button',
			name: 'КнопкаВызоваДанныхФИО',
			text: 'Подробнее...',
			style: 'position:absolute;left:756px;top:101px;width:76px;height:19px;',
		},
					]
				},
				{
					title:'Направления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:828px;height:300px;',
			height: 300,width: 828,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ТипПолучателя',
				},
				{
					text:'КодПолучателя',
				},
				{
					text:'КПП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:828px;height:24px;',
			items:
			[
				{
					text:'Редактирование',
				},
				{
					text:'Востановить',
				},
				{
					text:'УдалитьНаправление',
				},
				{
					text:'ДобавитьНаправление',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Скопировать',
				},
			]
		},
					]
				},
				{
					title:'УЦ',
					items:
					[
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
					]
				},
				{
					title:'Криптопровайдер',
					items:
					[
					]
				},
				{
					title:'Информация',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПутьКонтейнерЗакрытогоКлюча',
			style: 'position:absolute;left:208px;top:8px;width:628px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИдентификаторДокументооборота',
			style: 'position:absolute;left:208px;top:36px;width:628px;height:19px;',
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
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:860px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'ПечатьСертификат',
				},
				{
					text:'ПечатьДокументов',
				},
				{
					text:'Действие',
				},
				{
					text:'ПечатьСоглашение',
				},
				{
					text:'ПечатьПакет',
				},
				{
					text:'ПечатьЗаявка',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'ПолучитьОтвет',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'ПечатьЛицензия',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Отправить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:844px;height:40px;',
			height: 40,width: 844,
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
	]
});