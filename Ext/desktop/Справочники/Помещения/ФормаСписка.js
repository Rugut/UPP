Ext.define('Справочники.Помещения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:348px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помещения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:444px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Файлы',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Редактировать код',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:526px;height:307px;',
			height: 307,width: 526,
			columns:
			[
				{
					text:'Территория',
					width:'120',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Для встреч',
					width:'70',
				},
				{
					text:'Код',
					width:'63',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:443px;top:0px;width:99px;height:25px;',
			items:
			[
				{
					text:'Территории...',
				},
			]
		},
	]
});