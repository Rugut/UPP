Ext.define('Справочники.Резервы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 428,
	iconCls: 'bogus',
	title: 'Оценочные обязательства и резервы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:412px;height:280px;',
			height: 280,width: 412,
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
			style: 'position:absolute;left:0px;top:0px;width:428px;height:25px;',
			items:
			[
			]
		},
	]
});