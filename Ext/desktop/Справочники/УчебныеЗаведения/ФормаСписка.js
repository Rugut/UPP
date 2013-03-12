Ext.define('Справочники.УчебныеЗаведения.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:422px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учебные заведения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:406px;height:220px;',
			height: 220,width: 406,
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
					width:'320',
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
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				'-',
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
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие11',
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
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
	]
});