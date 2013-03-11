Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 474,
	iconCls: 'bogus',
	title: 'Статьи аналитического баланса',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:292px;height:320px;',
			height: 320,width: 292,
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:320px;',
			height: 320,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:474px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});