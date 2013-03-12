Ext.define('Справочники.Должности.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Должности',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:397px;height:280px;',
			height: 280,width: 397,
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
			style: 'position:absolute;left:0px;top:0px;width:413px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие7',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие14',
				},
				'-',
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие16',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие11',
				},
			]
		},
	]
});