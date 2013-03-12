Ext.define('Справочники.КоэффициентыСтажа.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:460px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Размеры начислений в зависимости от стажа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:444px;height:259px;',
			height: 259,width: 444,
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
			style: 'position:absolute;left:0px;top:0px;width:460px;height:25px;',
			items:
			[
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
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие7',
				},
			]
		},
	]
});