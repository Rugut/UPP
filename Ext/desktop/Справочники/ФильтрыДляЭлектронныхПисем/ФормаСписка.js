Ext.define('Справочники.ФильтрыДляЭлектронныхПисем.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Фильтры для электронных писем',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'350',
				},
				{
					text:'Операция условия',
					width:'70',
				},
				{
					text:'Порядок',
					width:'49',
				},
				{
					text:'Использование',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
	]
});