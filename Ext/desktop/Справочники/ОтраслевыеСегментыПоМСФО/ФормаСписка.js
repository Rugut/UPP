Ext.define('Справочники.ОтраслевыеСегментыПоМСФО.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 356,
	iconCls: 'bogus',
	title: 'Отраслевые сегменты по МСФО',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:340px;height:280px;',
			height: 280,width: 340,
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
			style: 'position:absolute;left:0px;top:0px;width:356px;height:25px;',
			items:
			[
			]
		},
	]
});