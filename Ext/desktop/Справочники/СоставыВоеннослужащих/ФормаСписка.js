Ext.define('Справочники.СоставыВоеннослужащих.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Составы военнослужащих',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:259px;',
			height: 259,width: 400,
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
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
			]
		},
	]
});