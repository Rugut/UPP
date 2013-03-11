Ext.define('Справочники.Помещения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 347,width: 543,
	iconCls: 'bogus',
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
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель4',
				},
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
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель5',
				},
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
				},
				{
					text:'Наименование',
				},
				{
					text:'СвободноС',
				},
			]
		},
	]
});