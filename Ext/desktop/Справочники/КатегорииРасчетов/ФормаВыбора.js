Ext.define('Справочники.КатегорииРасчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:428px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Категории расчетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:412px;height:259px;',
			height: 259,width: 412,
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
			style: 'position:absolute;left:0px;top:0px;width:428px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Редактировать код номер',
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
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
			]
		},
	]
});