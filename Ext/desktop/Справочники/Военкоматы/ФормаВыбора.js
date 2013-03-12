Ext.define('Справочники.Военкоматы.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Военкоматы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:409px;height:280px;',
			height: 280,width: 409,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:425px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие формы выбрать',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				'-',
			]
		},
	]
});