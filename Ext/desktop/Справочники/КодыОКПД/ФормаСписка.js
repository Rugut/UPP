Ext.define('Справочники.КодыОКПД.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 555,
	iconCls: 'bogus',
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
				},
				{
					text:'Имя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:555px;height:25px;',
			items:
			[
				{
					text:'Разделитель4',
				},
				{
					text:'Загрузка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:555px;height:25px;',
			items:
			[
			]
		},
	]
});