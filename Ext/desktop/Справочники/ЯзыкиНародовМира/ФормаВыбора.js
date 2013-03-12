Ext.define('Справочники.ЯзыкиНародовМира.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:450px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Языки народов мира',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:434px;height:220px;',
			height: 220,width: 434,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'29',
				},
				{
					text:'Наименование',
					width:'312',
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
					text:'Подбор из ОКИН',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
			]
		},
	]
});