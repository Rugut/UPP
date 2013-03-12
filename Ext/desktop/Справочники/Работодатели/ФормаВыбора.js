Ext.define('Справочники.Работодатели.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Работодатели',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:474px;height:259px;',
			height: 259,width: 474,
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
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:490px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действия формы выбрать',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Дей��твие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
			]
		},
	]
});