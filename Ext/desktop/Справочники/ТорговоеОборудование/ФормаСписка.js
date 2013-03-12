Ext.define('Справочники.ТорговоеОборудование.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:550px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Торговое оборудование',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:534px;height:259px;',
			height: 259,width: 534,
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
					width:'250',
				},
				{
					text:'Модель',
					width:'250',
				},
				{
					text:'Обработка обслуживания',
					width:'250',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:550px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Создать из списка',
				},
				{
					text:'',
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
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
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
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
	]
});