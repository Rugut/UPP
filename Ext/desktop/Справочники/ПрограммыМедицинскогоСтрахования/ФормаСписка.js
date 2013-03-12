Ext.define('Справочники.ПрограммыМедицинскогоСтрахования.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Программы медицинского страхования',
	
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
					width:'20',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие15',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие16',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
			]
		},
	]
});