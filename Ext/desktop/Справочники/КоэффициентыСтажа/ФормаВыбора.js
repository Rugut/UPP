Ext.define('Справочники.КоэффициентыСтажа.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:483px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Размеры начислений в зависимости от стажа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:467px;height:259px;',
			height: 259,width: 467,
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
			style: 'position:absolute;left:0px;top:0px;width:483px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
			]
		},
	]
});