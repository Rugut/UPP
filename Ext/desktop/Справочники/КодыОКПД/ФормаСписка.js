Ext.define('Справочники.КодыОКПД.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:555px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Коды ОКПД',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:539px;height:226px;',
			height: 226,width: 539,
			columns:
			[
				{
					text:'Код',
					width:'100',
				},
				{
					text:'Имя',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:555px;height:25px;',
			items:
			[
				'-',
				{
					text:'Загрузить из файла',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:555px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
	]
});