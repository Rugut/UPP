Ext.define('Справочники.Мероприятия.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:485px;height:320px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Мероприятия предприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:469px;height:280px;',
			height: 280,width: 469,
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
				{
					text:'Дата начала',
					width:'80',
				},
				{
					text:'Дата окончания',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:485px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие13',
				},
				'-',
				'-',
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие17',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие18',
				},
			]
		},
	]
});