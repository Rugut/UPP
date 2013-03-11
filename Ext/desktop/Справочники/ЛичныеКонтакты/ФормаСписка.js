Ext.define('Справочники.ЛичныеКонтакты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 508,
	iconCls: 'bogus',
	title: 'Личные контакты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:492px;height:320px;',
			height: 320,width: 492,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'ФИО',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
			items:
			[
			]
		},
	]
});