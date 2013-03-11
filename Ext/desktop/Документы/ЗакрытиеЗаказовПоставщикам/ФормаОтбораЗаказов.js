Ext.define('Документы.ЗакрытиеЗаказовПоставщикам.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 595,
	iconCls: 'bogus',
	title: 'Отобрать заказы поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:595px;height:25px;',
			items:
			[
				{
					text:'ДействиеПеренести',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель',
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
			style: 'position:absolute;left:8px;top:30px;width:579px;height:167px;',
			height: 167,width: 579,
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
			style: 'position:absolute;left:8px;top:251px;width:579px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'ДействиеВключитьВсе',
				},
				{
					text:'ДействиеВыключитьВсе',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:276px;width:579px;height:131px;',
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
					text:'ВидОперации',
				},
				{
					text:'Контрагент',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'КонтактноеЛицо',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'ЗаказыОстаток',
				},
				{
					text:'ЗаказыКоличество',
				},
				{
					text:'РасчетыОстаток',
				},
				{
					text:'РазмещенияКоличество',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'ТипСкидкиНаценки',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'ДатаПоступления',
				},
				{
					text:'Организация',
				},
				{
					text:'Склад',
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
			style: 'position:absolute;left:160px;top:212px;width:200px;height:19px;',
		},
	]
});