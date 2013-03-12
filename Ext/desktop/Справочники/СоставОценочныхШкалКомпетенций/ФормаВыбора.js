Ext.define('Справочники.СоставОценочныхШкалКомпетенций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:452px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Состав оценочных шкал компетенций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:436px;height:259px;',
			height: 259,width: 436,
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
			style: 'position:absolute;left:0px;top:0px;width:452px;height:25px;',
			items:
			[
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действия формы выбрать',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие7',
				},
			]
		},
	]
});