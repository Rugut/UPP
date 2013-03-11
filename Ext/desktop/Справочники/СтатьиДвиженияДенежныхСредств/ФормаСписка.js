Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 605,
	iconCls: 'bogus',
	title: 'Статьи движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:164px;top:33px;width:433px;height:280px;',
			height: 280,width: 433,
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
					text:'ВидДвиженияДенежныхСредств',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:605px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:150px;height:280px;',
			height: 280,width: 150,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
	]
});