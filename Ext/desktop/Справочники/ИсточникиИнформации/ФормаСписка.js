Ext.define('Справочники.ИсточникиИнформации.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:415px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Источники информации о персонале',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:399px;height:280px;',
			height: 280,width: 399,
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
			style: 'position:absolute;left:0px;top:0px;width:415px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
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
				'-',
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Редактировать код номер',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'',
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
					text:'Действие8',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
			]
		},
	]
});