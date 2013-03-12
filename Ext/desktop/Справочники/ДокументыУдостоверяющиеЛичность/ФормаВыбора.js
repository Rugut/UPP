Ext.define('Справочники.ДокументыУдостоверяющиеЛичность.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:428px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы, удостоверяющие личность',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:412px;height:280px;',
			height: 280,width: 412,
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
					text:'Код ИФНС',
					width:'80',
				},
				{
					text:'Код ПФР',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:428px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
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
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
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
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
			]
		},
	]
});