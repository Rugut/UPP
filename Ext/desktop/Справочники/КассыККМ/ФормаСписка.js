Ext.define('Справочники.КассыККМ.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:529px;height:360px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Кассы ККМ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:513px;height:319px;',
			height: 319,width: 513,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'261',
				},
				{
					text:'Организация',
					width:'224',
				},
				{
					text:'Формировать нефискальные чеки',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:529px;height:25px;',
			items:
			[
				'-',
			]
		},
	]
});