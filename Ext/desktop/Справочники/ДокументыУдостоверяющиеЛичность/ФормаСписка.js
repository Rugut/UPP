Ext.define('Справочники.ДокументыУдостоверяющиеЛичность.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:361px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы, удостоверяющие личность',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:454px;height:320px;',
			height: 320,width: 454,
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
					width:'60',
				},
				{
					text:'Код ПФР',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});