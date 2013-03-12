Ext.define('Справочники.Награды.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:417px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Награды',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:401px;height:259px;',
			height: 259,width: 401,
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
			style: 'position:absolute;left:0px;top:0px;width:417px;height:25px;',
			items:
			[
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие8',
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
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
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
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие',
				},
			]
		},
	]
});