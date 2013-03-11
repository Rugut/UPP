Ext.define('Справочники.ПричиныЗакрытияЗаказов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 348,
	iconCls: 'bogus',
	title: 'Справочник Причины закрытия заказов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:332px;height:320px;',
			height: 320,width: 332,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:348px;height:25px;',
			items:
			[
			]
		},
	]
});