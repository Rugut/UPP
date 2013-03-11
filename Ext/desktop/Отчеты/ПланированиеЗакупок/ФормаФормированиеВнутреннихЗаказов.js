Ext.define('Отчеты.ПланированиеЗакупок.ФормаФормированиеВнутреннихЗаказов',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 640,
	iconCls: 'bogus',
	title: 'Формирование внутренних заказов',
	
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
					text:'Закрыть',
				},
				{
					text:'Разделитель',
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
					text:'СкладНоменклатура',
				},
				{
					text:'Характеристика',
				},
				{
					text:'ТребуемоеКоличество',
				},
				{
					text:'ЗаказатьКоличество',
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
					text:'Разделитель',
				},
				{
					text:'Обновить',
				},
				{
					text:'СнятьПометки',
				},
			]
		},
					]
				},
				{
					title:'СтраницаВнутренниеЗаказы',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:610px;height:383px;',
			height: 383,width: 610,
			columns:
			[
				{
					text:'Проведен',
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
					text:'ПометитьНаУдаление',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Провести',
				},
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
					text:'Разделитель2',
				},
				{
					text:'Обновить',
				},
				{
					text:'УстановитьПометки',
				},
				{
					text:'Разделитель1',
				},
			]
		},
					]
				},
			]
		},
	]
});