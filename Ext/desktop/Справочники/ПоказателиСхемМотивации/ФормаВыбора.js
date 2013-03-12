Ext.define('Справочники.ПоказателиСхемМотивации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:426px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Показатели',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:410px;height:259px;',
			height: 259,width: 410,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:426px;height:25px;',
			items:
			[
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
			]
		},
	]
});