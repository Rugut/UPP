Ext.define('Справочники.ГруппыЗаявокКандидатов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:623px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группы кандидатов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:33px;width:456px;height:259px;',
			height: 259,width: 456,
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
					width:'227',
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
			style: 'position:absolute;left:0px;top:0px;width:623px;height:25px;',
			items:
			[
				{
					text:'Доступ к текущему элементу',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие9',
				},
				{
					text:'Доступ к справочнику в целом',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие13',
				},
				{
					text:'Редактировать код номер',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
			]
		},
	]
});