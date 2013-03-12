Ext.define('Справочники.Работодатели.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:440px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Работодатели',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:424px;height:259px;',
			height: 259,width: 424,
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
			style: 'position:absolute;left:0px;top:0px;width:440px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие2',
				},
			]
		},
	]
});