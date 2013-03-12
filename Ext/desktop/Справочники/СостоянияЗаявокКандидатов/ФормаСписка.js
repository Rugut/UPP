Ext.define('Справочники.СостоянияЗаявокКандидатов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Состояния заявок кандидатов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:484px;height:259px;',
			height: 259,width: 484,
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
					width:'241',
				},
				{
					text:'Код упорядочивания',
					width:'130',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
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
					text:'',
				},
				{
					text:'Редактировать код номер',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});