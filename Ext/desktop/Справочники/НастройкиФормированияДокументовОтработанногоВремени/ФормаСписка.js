Ext.define('Справочники.НастройкиФормированияДокументовОтработанногоВремени.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:754px;height:385px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки формирования документов отработанного времени',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:258px;top:33px;width:488px;height:344px;',
			height: 344,width: 488,
			columns:
			[
				{
					text:'',
					width:'39',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Выполнено по',
					width:'88',
				},
				{
					text:'Автоматич.',
					width:'60',
				},
				{
					text:'Регламентное задание',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:244px;height:344px;',
			height: 344,width: 244,
			columns:
			[
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:754px;height:25px;',
			items:
			[
			]
		},
	]
});