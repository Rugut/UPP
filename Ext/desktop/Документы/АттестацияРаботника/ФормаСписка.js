Ext.define('Документы.АттестацияРаботника.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:532px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Аттестации сотрудников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:516px;height:380px;',
			height: 380,width: 516,
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
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:532px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Печать',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});