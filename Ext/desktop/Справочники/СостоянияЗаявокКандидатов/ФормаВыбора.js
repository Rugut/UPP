Ext.define('Справочники.СостоянияЗаявокКандидатов.ФормаВыбора',
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
					width:'240',
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
					text:'Действие5',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действия формы выбрать',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
			]
		},
	]
});