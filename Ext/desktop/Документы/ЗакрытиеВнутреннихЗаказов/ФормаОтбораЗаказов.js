Ext.define('Документы.ЗакрытиеВнутреннихЗаказов.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 397,width: 595,
	iconCls: 'bogus',
	title: 'Отобрать внутренние заказы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:595px;height:25px;',
			items:
			[
				{
					text:'ДействиеПеренести',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:30px;width:579px;height:120px;',
			height: 120,width: 579,
			items:
			[
				{
					title:'СтраницаНастройки',
				},
				{
					title:'СтраницаДополнительно',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:205px;width:579px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'ДействиеВключитьВсе',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеВыключитьВсе',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДействиеАнализ',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:233px;width:579px;height:131px;',
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
					text:'ВидЗаказа',
				},
				{
					text:'Заказчик',
				},
				{
					text:'КонтактноеЛицо',
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
					text:'ДатаОтгрузки',
				},
				{
					text:'Организация',
				},
				{
					text:'Подразделение',
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
			style: 'position:absolute;left:160px;top:164px;width:200px;height:19px;',
		},
	]
});