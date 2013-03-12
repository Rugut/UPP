Ext.define('Справочники.СценарииПланирования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:775px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:593px;height:320px;',
			height: 320,width: 593,
			columns:
			[
				{
					text:'',
					width:'35',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'180',
				},
				{
					text:'Периодичность',
					width:'120',
				},
				{
					text:'Объект планирования',
					width:'120',
				},
				{
					text:'Суммы',
					width:'80',
				},
				{
					text:'Количество',
					width:'80',
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
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:775px;height:25px;',
			items:
			[
			]
		},
	]
});