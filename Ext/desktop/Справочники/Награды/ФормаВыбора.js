Ext.define('Справочники.Награды.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:457px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Награды',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:441px;height:259px;',
			height: 259,width: 441,
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
			style: 'position:absolute;left:0px;top:0px;width:457px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие6',
				},
			]
		},
	]
});