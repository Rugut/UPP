Ext.define('Документы.ПланЗакупок.ФормаФормированиеЗаказовПоставщикам',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 640,
	iconCls: 'bogus',
	title: 'Формирование заказов поставщикам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:640px;height:25px;',
			items:
			[
				{
					text:'Выполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:624px;height:439px;',
			height: 439,width: 624,
			items:
			[
				{
					title:'СтраницаПотребности',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:'ПоставщикНоменклатура',
				},
				{
					text:'Характеристика',
				},
				{
					text:'Цена',
				},
				{
					text:'ТребуемоеКоличество',
				},
				{
					text:'ЗаказанноеКоличество',
				},
				{
					text:'ЗаказатьКоличество',
				},
				{
					text:'Заказ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			items:
			[
				{
					text:'УстановитьПометки',
				},
				{
					text:'Обновить',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'ЗаказыПоставщикам',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:'ДокументПроведен',
				},
				{
					text:'Документ',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:610px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'Удалить',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Провести',
				},
			]
		},
					]
				},
			]
		},
	]
});