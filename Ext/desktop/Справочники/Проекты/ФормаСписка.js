Ext.define('Справочники.Проекты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:624px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Проекты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:442px;height:320px;',
			height: 320,width: 442,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
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
					width:'163',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				'-',
				'-',
				{
					text:'Свойства',
				},
				{
					text:'Файлы',
				},
				{
					text:'Категории',
				},
				'-',
				'-',
				{
					text:'Доступ к справочнику в целом',
				},
				{
					text:'Файлы',
				},
			]
		},
	]
});