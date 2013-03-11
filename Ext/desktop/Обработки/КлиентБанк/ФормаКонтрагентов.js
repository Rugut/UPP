Ext.define('Обработки.КлиентБанк.ФормаКонтрагентов',
	{
	extend: 'Ext.window.Window',
	height: 301,width: 384,
	iconCls: 'bogus',
	title: 'Клиент банка: Создание ненайденных объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:276px;width:384px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:26px;width:368px;height:221px;',
			height: 221,width: 368,
			columns:
			[
				{
					text:'Представление',
				},
				{
					text:'Значение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:1px;width:97px;height:24px;',
			items:
			[
				{
					text:'УстановитьВсе',
				},
				{
					text:'СнятьВсеПометки',
				},
			]
		},
	]
});