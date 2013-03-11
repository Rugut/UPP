Ext.define('Обработки.ЗагрузкаДанныхCommerceML.ФормаЗаписанныхДокументов',
	{
	extend: 'Ext.window.Window',
	height: 379,width: 600,
	iconCls: 'bogus',
	title: 'Загруженные документы',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:354px;width:600px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:76px;width:584px;height:270px;',
			height: 270,width: 584,
			columns:
			[
				{
					text:'Документ',
				},
				{
					text:'Примечание',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:46px;width:584px;height:24px;',
			items:
			[
				{
					text:'УстановитьПометки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПометитьНаУдаление',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Удалить',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СнятьПометки',
				},
				{
					text:'Обновить',
				},
				{
					text:'Провести',
				},
				{
					text:'Разделитель3',
				},
			]
		},
	]
});