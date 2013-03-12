Ext.define('Справочники.Смены.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Смены',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:280px;',
			height: 280,width: 400,
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
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Редактировать код номер',
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
					text:'Действие формы выбрать',
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
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Дейс��вие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
			]
		},
	]
});