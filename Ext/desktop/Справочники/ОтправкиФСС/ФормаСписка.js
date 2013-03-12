Ext.define('Справочники.ОтправкиФСС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отправки в ФСС',
	
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
					width:'24',
				},
				{
					text:'Дата отправки',
					width:'124',
				},
				{
					text:'Статус отправки',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
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
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
			]
		},
	]
});