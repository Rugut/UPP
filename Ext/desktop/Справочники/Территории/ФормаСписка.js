Ext.define('Справочники.Территории.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:472px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Территории',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:472px;height:25px;',
			items:
			[
				{
					text:'Действие18',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие16',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие7',
				},
				{
					text:'Редактировать код',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие11',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:456px;height:220px;',
			height: 220,width: 456,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
	]
});