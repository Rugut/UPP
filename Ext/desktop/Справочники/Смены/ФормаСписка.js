Ext.define('Справочники.Смены.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Смены',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:380px;height:280px;',
			height: 280,width: 380,
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:396px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				'-',
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
					text:'Действие10',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
			]
		},
	]
});