Ext.define('Отчеты.РапортРуководителю.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:656px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Рапорт руководителю',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			items:
			[
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Опубликовать',
				},
				'-',
				{
					text:'Настройка',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});