Ext.define('Справочники.Регионы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:582px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Регионы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:566px;height:280px;',
			height: 280,width: 566,
			columns:
			[
				{
					text:'Код',
					width:'110',
				},
				{
					text:'Код региона',
					width:'72',
				},
				{
					text:'Наименование',
					width:'302',
				},
				{
					text:'Комментарий',
					width:'178',
				},
				{
					text:'Код адресного элемента',
					width:'200',
				},
				{
					text:'Ж/Д станция назначения',
					width:'309',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			items:
			[
				'-',
				{
					text:'Добавить',
				},
			]
		},
	]
});