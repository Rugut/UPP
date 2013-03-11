Ext.define('Документы.ФормированиеЗаписейКнигиПродаж.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 446,width: 709,
	iconCls: 'bogus',
	title: '',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:709px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:709px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Печать',
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
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:394px;width:611px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:419px;top:57px;width:282px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:102px;width:693px;height:286px;',
			height: 286,width: 693,
			items:
			[
				{
					title:'Реализация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'Покупатель',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'ДокументОплаты',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Событие',
				},
				{
					text:'Состояние',
				},
				{
					text:'ЗаписьДополнительногоЛиста',
				},
				{
					text:'СторнирующаяЗаписьДопЛиста',
				},
				{
					text:'КорректируемыйПериод',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
					]
				},
				{
					title:'Авансы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'Покупатель',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'Событие',
				},
				{
					text:'ЗаписьДополнительногоЛиста',
				},
				{
					text:'СторнирующаяЗаписьДопЛиста',
				},
				{
					text:'КорректируемыйПериод',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
					]
				},
				{
					title:'НачисленКУплате',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'Покупатель',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'ДокументОплаты',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Событие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
					]
				},
				{
					title:'ВосстановленПоАвансам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Поставщик',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'ЗаписьДополнительногоЛиста',
				},
				{
					text:'КорректируемыйПериод',
				},
				{
					text:'СторнирующаяЗаписьДопЛиста',
				},
				{
					text:'ИсправленныйСчетФактура',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Заполнить',
				},
			]
		},
					]
				},
				{
					title:'Восстановлен',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'Покупатель',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'СчетУчетаНДС',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'ИсправленныйСчетФактура',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'НеОтражаетсяВКниге',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:679px;height:230px;',
			height: 230,width: 679,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидНачисления',
				},
				{
					text:'ВидЦенности',
				},
				{
					text:'Покупатель',
				},
				{
					text:'СчетФактура',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаБезНДС',
				},
				{
					text:'НДС',
				},
				{
					text:'ДокументОплаты',
				},
				{
					text:'ДатаОплаты',
				},
				{
					text:'Событие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:679px;height:24px;',
			items:
			[
				{
					text:'Заполнить',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
			]
		},
	]
});