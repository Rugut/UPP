Ext.define('Справочники.МедицинскиеОрганизации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:421px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Медицинские организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:405px;height:259px;',
			height: 259,width: 405,
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
				{
					text:'ОГРН',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:421px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'',
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
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
			]
		},
	]
});