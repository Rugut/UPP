Ext.define('Справочники.СоставОценочныхШкалКомпетенций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:451px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Состав оценочных шкал компетенций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:435px;height:280px;',
			height: 280,width: 435,
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
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:451px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
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
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
			]
		},
	]
});