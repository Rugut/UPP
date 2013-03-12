Ext.define('Справочники.СоставыВоеннослужащих.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Составы военнослужащих',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:409px;height:259px;',
			height: 259,width: 409,
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
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
			]
		},
	]
});