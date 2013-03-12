Ext.define('Документы.КорректировкаНЗП.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:740px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка незавершенного производства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:724px;height:380px;',
			height: 380,width: 724,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'УУ',
					width:'21',
				},
				{
					text:'БУ',
					width:'21',
				},
				{
					text:'НУ',
					width:'21',
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
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
			items:
			[
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Печать по умолчанию',
				},
				'-',
			]
		},
	]
});