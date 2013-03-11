Ext.define('Справочники.СобытияОС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 693,
	iconCls: 'bogus',
	title: 'Справочник События основного средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:677px;height:320px;',
			height: 320,width: 677,
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
				{
					text:'ВидСобытияОС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:693px;height:25px;',
			items:
			[
			]
		},
	]
});