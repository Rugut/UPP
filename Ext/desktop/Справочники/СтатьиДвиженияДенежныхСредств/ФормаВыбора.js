Ext.define('Справочники.СтатьиДвиженияДенежныхСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 323,width: 625,
	iconCls: 'bogus',
	title: 'Статьи движения денежных средств',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:164px;top:33px;width:453px;height:282px;',
			height: 282,width: 453,
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
			style: 'position:absolute;left:0px;top:0px;width:625px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
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