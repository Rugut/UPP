Ext.define('Справочники.ИсточникиИнформации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:450px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Источники информации о персонале',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:434px;height:280px;',
			height: 280,width: 434,
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
			style: 'position:absolute;left:0px;top:0px;width:450px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
			]
		},
	]
});