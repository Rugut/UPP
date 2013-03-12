Ext.define('Справочники.ВидыЗаметок.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды заметок',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
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
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Редактировать код номер',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие6',
				},
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
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
			]
		},
	]
});