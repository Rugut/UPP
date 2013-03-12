Ext.define('Справочники.СтатьиОтчетаОПрибыляхИУбытках.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи отчета о прибылях и убытках',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:280px;',
			height: 280,width: 400,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'48',
				},
				{
					text:'Наименование',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Найти в дереве',
				},
				'-',
				{
					text:'',
				},
			]
		},
	]
});