Ext.define('Справочники.НастройкаИнтервалов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 387,width: 384,
	iconCls: 'bogus',
	title: 'Настройки временных интервалов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:368px;height:100px;',
			height: 100,width: 368,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:384px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:139px;width:368px;height:240px;',
			height: 240,width: 368,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НачалоИнтервала',
				},
				{
					text:'Подпись',
				},
			]
		},
	]
});