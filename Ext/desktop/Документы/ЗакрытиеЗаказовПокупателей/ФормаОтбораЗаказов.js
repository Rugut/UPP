Ext.define('Документы.ЗакрытиеЗаказовПокупателей.ФормаОтбораЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 440,width: 595,
	iconCls: 'bogus',
	title: 'Отобрать заказы покупателей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:415px;width:595px;height:25px;',
			items:
			[
				{
					text:'Закрыть1',
				},
				{
					text:'ДействиеПеренести',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
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
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДействиеЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'ДействиеВключитьВсе',
				},
				{
					text:'ДействиеАнализ',
				},
				{
					text:'ДействиеВыключитьВсе',
				},
				{
					text:'Действие6',
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
					text:'ОтражатьВБухгалтерскомУчете',
				},
				{
					text:'ОтражатьВНалоговомУчете',
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
					text:'КонтактноеЛицоКонтрагента',
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
					text:'РезервыКоличество',
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
					text:'ДатаОтгрузки',
				},
				{
					text:'Организация',
				},
				{
					text:'СкладГруппа',
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