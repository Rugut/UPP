Ext.define('Справочники.ПрожиточныеМинимумы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:461px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Прожиточные минимумы субъектов РФ, в целом по РФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:445px;height:259px;',
			height: 259,width: 445,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:461px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
			]
		},
	]
});