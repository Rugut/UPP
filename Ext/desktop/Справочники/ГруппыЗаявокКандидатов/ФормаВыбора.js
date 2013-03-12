Ext.define('Справочники.ГруппыЗаявокКандидатов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:610px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы кандидатов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:443px;height:259px;',
			height: 259,width: 443,
			columns:
			[
				{
					text:'',
					width:'33',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'228',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:145px;height:259px;',
			height: 259,width: 145,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:610px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Редактировать код номер',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие14',
				},
			]
		},
	]
});