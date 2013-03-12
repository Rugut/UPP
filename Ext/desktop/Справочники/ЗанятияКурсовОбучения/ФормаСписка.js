Ext.define('Справочники.ЗанятияКурсовОбучения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Занятия курсов обучения',
	
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
					text:'Наименование',
					width:'253',
				},
				{
					text:'Длительность час.',
					width:'105',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
	]
});