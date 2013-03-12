Ext.define('Справочники.КонтактныеЛицаКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Контактные лица контрагентов',
	
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
					width:'40',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Контрагент',
					width:'100',
				},
				{
					text:'Должность',
					width:'120',
				},
				{
					text:'Роль:',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Контактное лицо',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
	]
});