Ext.define('Справочники.Помещения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:347px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помещения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'Выбрать',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:527px;height:307px;',
			height: 307,width: 527,
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
					text:'Свободно С',
					width:'100',
				},
			]
		},
	]
});