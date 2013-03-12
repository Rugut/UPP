Ext.define('Справочники.КатегорииРасчетов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:422px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Категории расчетов',
	
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
					width:'28',
				},
				{
					text:'Порядок',
					width:'60',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:422px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				'-',
				{
					text:'Редактировать код номер',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
			]
		},
	]
});