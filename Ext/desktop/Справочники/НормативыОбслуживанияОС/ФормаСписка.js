Ext.define('Справочники.НормативыОбслуживанияОС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 694,
	iconCls: 'bogus',
	title: 'Нормативы обслуживания ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:512px;height:280px;',
			height: 280,width: 512,
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
					text:'Услуга',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:694px;height:25px;',
			items:
			[
			]
		},
	]
});