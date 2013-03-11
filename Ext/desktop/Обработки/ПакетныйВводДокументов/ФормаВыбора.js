Ext.define('Обработки.ПакетныйВводДокументов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 243,width: 364,
	iconCls: 'bogus',
	title: 'Отбор по номенклатуре',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:348px;height:202px;',
			height: 202,width: 348,
			columns:
			[
				{
					text:'ПредставлениеПоля',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:218px;width:364px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});