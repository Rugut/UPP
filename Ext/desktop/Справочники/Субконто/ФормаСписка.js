Ext.define('Справочники.Субконто.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 481,
	iconCls: 'bogus',
	title: 'Субконто',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:299px;height:259px;',
			height: 259,width: 299,
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:481px;height:25px;',
			items:
			[
			]
		},
	]
});