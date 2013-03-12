Ext.define('Документы.СведенияОВзносахИСтраховомСтажеСПВ1.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о взносах и страховом стаже СПВ-1',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:734px;height:380px;',
			height: 380,width: 734,
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
					width:'106',
				},
				{
					text:'Принято в ПФР',
					width:'93',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:750px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие14',
				},
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Печать',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие13',
				},
			]
		},
	]
});