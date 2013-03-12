Ext.define('Справочники.ФинансовыеРасчеты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:423px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Финансовые расчеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:407px;height:259px;',
			height: 259,width: 407,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:423px;height:25px;',
			items:
			[
			]
		},
	]
});