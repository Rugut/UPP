Ext.define('Справочники.ВидыЗаметок.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:422px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды заметок',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:406px;height:259px;',
			height: 259,width: 406,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:422px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие6',
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
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});