Ext.define('Справочники.ТипыСкидокНаценок.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 422,
	iconCls: 'bogus',
	title: 'Типы скидок и наценок',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:406px;height:259px;',
			height: 259,width: 406,
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
			style: 'position:absolute;left:0px;top:0px;width:422px;height:25px;',
			items:
			[
			]
		},
	]
});