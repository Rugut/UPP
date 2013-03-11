Ext.define('Документы.ЗакрытиеЗаказовНаПроизводство.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 449,width: 595,
	iconCls: 'bogus',
	title: 'Отобрать заказы на производство',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:595px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДействиеПеренести',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:30px;width:579px;height:176px;',
			height: 176,width: 579,
			items:
			[
				{
					title:'СтраницаНастройки',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеДатаОтгрузки',
			style: 'position:absolute;left:258px;top:128px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПросроченоДнейОтгрузки',
			style: 'position:absolute;left:318px;top:128px;width:42px;height:19px;',
		},
					]
				},
				{
					title:'СтраницаДополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:565px;height:123px;',
			height: 123,width: 565,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:281px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:260px;width:579px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеВыключитьВсе',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеВключитьВсе',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:285px;width:579px;height:131px;',
			height: 131,width: 579,
			columns:
			[
				{
					text:'Переносить',
				},
				{
					text:'Ссылка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ЗаказыОстаток',
				},
				{
					text:'ЗаказыКоличество',
				},
				{
					text:'РезервыКоличество',
				},
				{
					text:'РазмещенияКоличество',
				},
				{
					text:'КолПотребность',
				},
				{
					text:'ЕстьНЗП',
				},
				{
					text:'ЕстьРазмещения',
				},
				{
					text:'ДатаИсполнения',
				},
				{
					text:'Организация',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Проведен',
				},
				{
					text:'ПричинаЗакрытияЗаказа',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНач',
			style: 'position:absolute;left:76px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКон',
			style: 'position:absolute;left:180px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:268px;top:6px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаПричинаЗакрытия',
			style: 'position:absolute;left:159px;top:221px;width:209px;height:19px;',
		},
	]
});