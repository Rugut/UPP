Ext.define('Справочники.СпособыОтраженияЗарплатыВУпрУчете.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:528px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы распределения зарплаты в управленческом учете',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:512px;height:280px;',
			height: 280,width: 512,
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
				{
					text:'Статья затрат',
					width:'120',
				},
				{
					text:'Номенклатурная группа',
					width:'140',
				},
				{
					text:'Объект строительства',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:528px;height:25px;',
			items:
			[
				{
					text:'Действие14',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие10',
				},
			]
		},
	]
});