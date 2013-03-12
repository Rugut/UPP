Ext.define('Документы.ПередачаСЗВ4вПФР.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:718px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Описи сведений АДВ-6-2 (до 2010 года - Ведомости уплаты АДВ-11)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:702px;height:380px;',
			height: 380,width: 702,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Отчетный период',
					width:'99',
				},
				{
					text:'Номер пачки',
					width:'74',
				},
				{
					text:'Принято ПФР',
					width:'82',
				},
				{
					text:'Загружен',
					width:'63',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Печать',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
	]
});