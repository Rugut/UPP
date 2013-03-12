Ext.define('Документы.СведенияОНачисленномЗаработкеСЗВ63.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:750px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сведения о начисленном заработке СЗВ-6-3',
	
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
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				'-',
				{
					text:'Движения д��кумента по регистрам',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие14',
				},
				{
					text:'',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
			]
		},
	]
});